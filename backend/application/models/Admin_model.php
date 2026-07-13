<?php
class Admin_model extends CI_Model
{
    public function get_admin_by_username($username)
    {
        return $this->db->get_where('admins', [
            'username' => $username
        ])->row_array();
    }

    public function save_token($admin_id, $token)
    {
        return $this->db->insert('admin_tokens', [
            'admin_id' => $admin_id,
            'token' => $token,
            'created_at' => date('Y-m-d H:i:s')
        ]);
    }

    public function validate_token($token)
    {
        return $this->db->get_where('admin_tokens', [
            'token' => $token
        ])->row_array();
    }

    public function get_stats()
    {
        $query = $this->db->get_where('gaushala_status', array('id' => 1));
        return $query->row_array();
    }

    public function update_stats($data)
    {
        $this->db->where('id', 1);
        return $this->db->update('gaushala_status', $data);
    }

    public function update_admin_profile()
    {
        $input = json_decode(file_get_contents('php://input'), true);

        [
            'id' => $admin_id,
            'fullname' => $full_name,
            'email' => $email,
            'number' => $number,
            'role' => $role
        ] = $input;

        $getAdmin = $this->db->get_where('admins', ['id' => $admin_id])->row_array();

        if (!$getAdmin) {
            echo json_encode(["success" => false, "message" => "एडमिन उपयोगकर्ता नहीं मिला।"]);
            return;
        }
        $update_data = [
            'full_name' => $full_name,
            'email_id' => $email,
            'number' => $number,
            'role' => $role,
        ];
        $this->db->where('id', $admin_id);
        $this->db->update('admins', $update_data);

        if ($this->db->affected_rows() > 0) {
            return [
                "success" => true,
                "message" => "एडमिन प्रोफ़ाइल सफलतापूर्वक अपडेट किया गया है।"
            ];
        } else {
            return [
                "success" => false,
                "message" => "एडमिन प्रोफ़ाइल अपडेट विफल रहा।"
            ];
        }
    }

    public function change_password($admin_id, $currentPassword, $newPassword)
    {
        $hashPassword = password_hash($newPassword, PASSWORD_DEFAULT);

        $update_data = [
            'password' => $hashPassword,
        ];

        $this->db->where('id', $admin_id);
        $this->db->update('admins', $update_data);

        if ($this->db->affected_rows() > 0) {
            return [
                "status" => true,
                "message" => "Successfully updated admin password."
            ];
        } else {
            return [
                "status" => false,
                "message" => "Failed to update admin password."
            ];
        }
    }

    public function uploadNewBlog()
    {
        $title = $this->input->post('title') ?? NULL;
        $category = $this->input->post('category') ?? NULL;
        $author = $this->input->post('author') ?? NULL;
        $content = $this->input->post('content') ?? NULL;
        $status = $this->input->post('status') ?? 'Published';
        $videoUrl = $this->input->post('videoUrl') ?? NULL;
        $summary = $this->input->post('summary') ?? NULL;

        if (empty($title) || empty($content)) {
            return [
                'status' => false,
                'message' => 'Title and content are required. Please try again.'
            ];
        }

        if (empty($summary)) {
            $summary = (mb_strlen($content) > 120) ? mb_substr($content, 0, 120) . '...' : $content;
        }

        $monthsHindi = [
            'January' => 'जनवरी',
            'February' => 'फरवरी',
            'March' => 'मार्च',
            'April' => 'अप्रैल',
            'May' => 'मई',
            'June' => 'जून',
            'July' => 'जुलाई',
            'August' => 'अगस्त',
            'September' => 'सितंबर',
            'October' => 'अक्टूबर',
            'November' => 'नवंबर',
            'December' => 'दिसंबर'
        ];
        $engMonth = date('F');
        $hindiMonth = $monthsHindi[$engMonth] ?? $engMonth;
        $publishDate = date('j') . ' ' . $hindiMonth . ' ' . date('Y');

        $imageUrl = "";
        if (!empty($_FILES['image']['name'])) {
            $config['upload_path'] = './assets/blogs/';
            $config['allowed_types'] = 'jpg|jpeg|png|webp';
            $config['max_size'] = '5120'; // 5MB Maximum
            $config['encrypt_name'] = TRUE;

            if (!is_dir('./assets/blogs/')) {
                mkdir('./assets/blogs/', 0777, true);
            }

            $this->load->library('upload', $config);
            $this->upload->initialize($config);

            if ($this->upload->do_upload('image')) {
                $uploadData = $this->upload->data();
                $imageUrl = base_url('assets/blogs/' . $uploadData['file_name']);
            } else {
                return [
                    'status' => false,
                    'message' => 'Image upload failed: ' . $this->upload->display_errors('', '')
                ];
            }
        } else {
            return [
                'status' => false,
                'message' => 'Please upload an image. Poster is required.'
            ];
        }

        // 5. कथा प्रसंग वीडियो (Video Upload) प्रोसेसिंग - वैकल्पिक (Optional)
        $uploadedVideoUrl = NULL;
        if (!empty($_FILES['videoFile']['name'])) {
            $videoPath = './assets/blogs/videos/';
            $videoConfig['upload_path'] = $videoPath;
            $videoConfig['allowed_types'] = 'mp4|mov|avi|wmv';
            $videoConfig['max_size'] = '102400'; // 100MB Maximum
            $videoConfig['encrypt_name'] = TRUE;

            if (!is_dir($videoPath)) {
                mkdir($videoPath, 0777, true);
            }

            // वीडियो कॉन्फ़िगरेशन के साथ अपलोडर को दोबारा री-इनिशियलाइज़ करें
            $this->upload->initialize($videoConfig);

            if ($this->upload->do_upload('videoFile')) {
                $videoUploadData = $this->upload->data();
                $uploadedVideoUrl = base_url('assets/blogs/videos/' . $videoUploadData['file_name']);
            } else {
                return [
                    'status' => false,
                    'message' => 'Video upload failed: ' . $this->upload->display_errors('', '')
                ];
            }
        }

        // 6. डेटाबेस एंट्री संरचना
        $insertData = [
            'title' => $title,
            'category' => $category,
            'author' => $author,
            'publishDate' => $publishDate,
            'likes' => 0,
            'status' => $status,
            'summary' => $summary,
            'content' => $content,
            'imageUrl' => $imageUrl,
            'videoUrl' => !empty($videoUrl) ? $videoUrl : NULL,
            'uploadedVideoUrl' => $uploadedVideoUrl
        ];

        $result = $this->db->insert('blogs', $insertData);

        // 7. अंतिम रिपॉन्स
        if ($result) {
            return [
                'status' => true,
                'message' => 'Blog uploaded successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to save blog in database.'
            ];
        }
    }

    public function updateBlog()
    {
        $data = $this->input->post();
        $id = isset($data['id']) ? $data['id'] : null;

        if (empty($id)) {
            return [
                'status' => false,
                'message' => 'Blog ID is required.'
            ];
        }

        $currentBlog = $this->db->get_where('blogs', ['id' => $id])->row_array();

        if (empty($currentBlog)) {
            return [
                'status' => false,
                'message' => 'Blog not found.'
            ];
        }

        $imagePath = $currentBlog['imageUrl'];

        // Handle Image Upload if a new file is provided
        if (!empty($_FILES['image']['name'])) {

            // standardizing paths to use 'assets/blogs/'
            $config['upload_path'] = './assets/blogs/';
            $config['allowed_types'] = 'jpg|jpeg|png|webp';
            $config['max_size'] = 2048; // 2MB Max
            $config['file_name'] = 'blog_' . time() . '_' . uniqid();

            $this->load->library('upload', $config);
            $this->upload->initialize($config);

            if ($this->upload->do_upload('image')) {
                $uploadData = $this->upload->data();

                // Database mein relative path standard format mein save hoga
                $newImagePath = 'assets/blogs/' . $uploadData['file_name'];

                // Purani file delete karne ke liye accurate check
                if (!empty($imagePath) && file_exists('./' . $imagePath)) {
                    @unlink('./' . $imagePath);
                }

                $imagePath = $newImagePath;
            } else {
                return [
                    'status' => false,
                    'message' => $this->upload->display_errors('', '')
                ];
            }
        }

        // Prepare data for update (with fallback for missing post keys)
        $updateData = [
            'title' => isset($data['title']) ? $data['title'] : $currentBlog['title'],
            'category' => isset($data['category']) ? $data['category'] : $currentBlog['category'],
            'author' => isset($data['author']) ? $data['author'] : $currentBlog['author'],
            'publishDate' => isset($data['publishDate']) ? $data['publishDate'] : $currentBlog['publishDate'],
            'status' => isset($data['status']) ? $data['status'] : $currentBlog['status'],
            'summary' => isset($data['summary']) ? $data['summary'] : $currentBlog['summary'],
            'content' => isset($data['content']) ? $data['content'] : $currentBlog['content'],
            'imageUrl' => $imagePath
        ];

        $this->db->where('id', $id);
        $result = $this->db->update('blogs', $updateData);

        if ($result) {
            return [
                'status' => true,
                'message' => 'Blog updated successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to update blog in database.'
            ];
        }
    }

    public function deleteBlog()
    {

        $id = json_decode(file_get_contents('php://input'), true);

        $this->db->where('id', $id['id']);
        $result = $this->db->update('blogs', ['is_deleted' => '1']);
        if (!$result) {
            return [
                'status' => false,
                'message' => 'Failed to delete blog in database.'
            ];
        }
        return [
            'status' => true,
            'message' => 'Blog deleted successfully.'
        ];
    }

    public function addNewKathaType()
    {

        $data = json_decode(file_get_contents('php://input'), true);

        $kathaType = $data['newKathaType'];

        $result = $this->db->insert('katha_types', [
            'label' => $kathaType['label'],
            'amount' => $kathaType['base'],
            'duration' => isset($kathaType['duration']) ? $kathaType['duration'] : NULL,
            'inclusion' => $kathaType['inclusion'],
        ]);

        if ($this->db->affected_rows() > 0) {
            return [
                'status' => true,
                'message' => 'Katha type added successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to add katha type in database.'
            ];
        }

    }

    public function shankalpPlansList()
    {
        $result = $this->db->get('shankalp_plans')->result_array();
        return $result;
    }

    public function addShankalpForGuaSeva()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        // Agr Id hai to update krna hai wrna add krna hai
        $id = isset($data['id']) ? intval($data['id']) : null;

        $title = isset($data['title']) ? $data['title'] : '';
        $amount = isset($data['amount']) ? $data['amount'] : 0;
        $desc = isset($data['desc']) ? $data['desc'] : '';
        $badge = isset($data['badge']) ? $data['badge'] : '';
        $isFeatured = isset($data['isFeatured']) ? $data['isFeatured'] : 0;
        $isCustomAmount = isset($data['isCustomAmount']) ? $data['isCustomAmount'] : 0;

        if (empty($title) || empty($desc) || empty($badge)) {
            $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode([
                    'status' => 'error',
                    'message' => 'All fields are required'
                ]));
            return;
        }

        $db_array = [
            'title' => $title,
            'amount' => $amount,
            'desc' => $desc,
            'badge' => $badge,
            'isFeatured' => ($isFeatured == 1 || $isFeatured == true) ? 1 : 0,
            'isCustomAmount' => ($isCustomAmount == 1 || $isCustomAmount == true) ? 1 : 0,
        ];

        if (!empty($id)) {
            // --- एडिट मोड (UPDATE) ---
            $this->db->where('id', $id);
            $this->db->update('shankalp_plans', $db_array);

            // CI3 में अपडेट चेक करने के लिए affected_rows या डायरेक्ट true रिटर्न मान सकते हैं
            $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode([
                    'status' => 'success',
                    'message' => 'Shankalp plan updated successfully.'
                ]));
        } else {
            // --- नया क्रिएशन मोड (INSERT) ---
            $this->db->insert('shankalp_plans', $db_array);

            if ($this->db->affected_rows() > 0) {
                return [
                    'status' => true,
                    'message' => 'Shankalp plan added successfully.'
                ];
            } else {
                return [
                    'status' => false,
                    'message' => 'Failed to add shankalp plan in database.'
                ];
            }
        }
    }

    public function deleteContactQuery()
    {
        $para = json_decode(file_get_contents('php://input'), true);
        $id = $para['params'];

        $this->db->where('id', $id['id']);
        $result = $this->db->update('contact_queries', ['is_deleted' => '1']);
        if (!$result) {
            return [
                'status' => false,
                'message' => 'Failed to delete contact query in database.'
            ];
        }
        return [
            'status' => true,
            'message' => 'Contact query deleted successfully.'
        ];
    }

    public function get_methodology()
    {
        $data = $this->temple_model->get_all('temple_methodology');
        return $data;
    }

    public function update_methodology()
    {
        $data = json_encode(file_get_contents('php://input'), true);
    }

    public function brajdarshan_enquiries()
    {
        $query = $this->db->get('braj_darshan_enquires');
        return $query->result_array();
    }

    public function update_enquiry($id, $data)
    {
        $this->db->where('id', $id);
        $this->db->update('braj_darshan_enquires', $data);

        if ($this->db->affected_rows() > 0) {
            return [
                'status' => true,
                'message' => 'Enquiry updated successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to update enquiry in database.'
            ];
        }
    }

    public function update_brajdarshan_enquiry_status()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);
        $id = $inputs['id'];
        $status = $inputs['status'];

        if (empty($id) || empty($status)) {
            return [
                'status' => false,
                'message' => 'All fields are required.'
            ];
        }

        $this->db->where('id', $id);
        $this->db->update('braj_darshan_enquires', ['status' => $status]);

        if ($this->db->affected_rows() > 0) {
            return [
                'status' => true,
                'message' => 'Enquiry status updated successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to update enquiry status in database.'
            ];
        }
    }

    public function addBrajDarshanPlace()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);

        $place_name = isset($inputs['place_name']) ? $inputs['place_name'] : null;
        $zone = isset($inputs['zone']) ? $inputs['zone'] : null;
        $timings = isset($inputs['timings']) ? $inputs['timings'] : null;
        $crowd_level = isset($inputs['crowd_level']) ? $inputs['crowd_level'] : null;
        $special_notice = isset($inputs['special_notice']) ? $inputs['special_notice'] : null;
        $status = isset($inputs['status']) ? $inputs['status'] : null;

        if (empty($place_name) || empty($zone) || empty($timings) || empty($crowd_level) || empty($special_notice) || empty($status)) {
            return [
                'status' => false,
                'message' => 'All fields are required.'
            ];
        }

        $data = [
            'place_name' => $place_name,
            'zone' => $zone,
            'timings' => $timings,
            'crowd_level' => $crowd_level,
            'special_notice' => $special_notice,
            'status' => $status
        ];

        $result = $this->db->insert('brajdarshan_places', $data);
        if ($result) {
            return [
                'status' => true,
                'message' => 'Braj Darshan Place added successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to add braj darshan place in database.'
            ];
        }
    }

    public function editBrajDarshanPlace()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);

        $id = isset($inputs['id']) ? $inputs['id'] : null;
        $place_name = isset($inputs['place_name']) ? $inputs['place_name'] : null;
        $zone = isset($inputs['zone']) ? $inputs['zone'] : null;
        $timings = isset($inputs['timings']) ? $inputs['timings'] : null;
        $crowd_level = isset($inputs['crowd_level']) ? $inputs['crowd_level'] : null;
        $special_notice = isset($inputs['special_notice']) ? $inputs['special_notice'] : null;
        $status = isset($inputs['status']) ? $inputs['status'] : 0;

        if (empty($id) || empty($place_name) || empty($zone) || empty($timings)) {
            return [
                'status' => false,
                'message' => 'All fields are required.'
            ];
        }

        $data = [
            'place_name' => $place_name,
            'zone' => $zone,
            'timings' => $timings,
            'crowd_level' => $crowd_level,
            'special_notice' => $special_notice,
            'status' => $status
        ];

        $this->db->where('id', $id);
        $result = $this->db->update('brajdarshan_places', $data);
        if ($result) {
            return [
                'status' => true,
                'message' => 'Braj Darshan Place updated successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to update braj darshan place in database.'
            ];
        }
    }

    public function addCoreMoto()
    {
        $json = file_get_contents('php://input');
        $inputs = json_decode($json, true);

        if (!isset($inputs['motoData'])) {
            return ['status' => false, 'message' => 'Invalid data format.'];
        }

        $data = $inputs['motoData'];
        $title = trim($data['title'] ?? '');
        $desc = trim($data['description'] ?? '');
        $extra = trim($data['extra_points'] ?? '');

        if (empty($title) || empty($desc) || empty($extra)) {
            return ['status' => false, 'message' => 'All fields are required.'];
        }

        $insertData = [
            'title' => $title,
            'description' => $desc,
            'extra_points' => $extra
        ];

        try {
            $this->db->insert('core_motos', $insertData);

            if ($this->db->affected_rows() > 0) {
                return ['status' => true, 'message' => 'Core Moto added successfully.'];
            } else {
                return ['status' => false, 'message' => 'Failed to add core moto in database.'];
            }
        } catch (Exception $e) {
            return ['status' => false, 'message' => 'Database Error: ' . $e->getMessage()];
        }
    }

    public function editCoreMoto()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);

        $data = $inputs['motoData'];

        $id = isset($data['id']) ? $data['id'] : null;
        $title = isset($data['title']) ? $data['title'] : null;
        $desc = isset($data['description']) ? $data['description'] : null;
        $extra = isset($data['extra_points']) ? $data['extra_points'] : null;

        if (empty($id) || empty($title) || empty($desc) || empty($extra)) {
            return [
                'status' => false,
                'message' => 'All fields are required.'
            ];
        }

        $data = [
            'title' => $title,
            'description' => $desc,
            'extra_points' => $extra
        ];

        $this->db->where('id', $id);
        $result = $this->db->update('core_motos', $data);
        if ($result) {
            return [
                'status' => true,
                'message' => 'Core Moto updated successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to update core moto in database.'
            ];
        }
    }

    public function deleteCoreMoto()
    {
        $para = json_decode(file_get_contents('php://input'), true);
        $id = $para['id'];

        $this->db->where('id', $id);
        $result = $this->db->update('core_motos', ['is_deleted' => '1']);
        if ($result) {
            return [
                'status' => true,
                'message' => 'Core Moto deleted successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to delete core moto in database.'
            ];
        }
    }

    public function addTempleMethodology()
    {
        $json = file_get_contents('php://input');
        $inputs = json_decode($json, true);

        $data = $inputs['methodologyData'];
        $title = trim($data['title'] ?? '');
        $desc = trim($data['description'] ?? '');
        $phase = trim($data['phase'] ?? '');
        $step_number = trim($data['step_number'] ?? '');

        if (empty($title) || empty($desc) || empty($phase) || empty($step_number)) {
            return ['status' => false, 'message' => 'All fields are required.'];
        }

        $insertData = [
            'title' => $title,
            'description' => $desc,
            'phase' => $phase,
            'step_number' => $step_number
        ];

        try {
            $this->db->insert('temple_methodology', $insertData);

            if ($this->db->affected_rows() > 0) {
                return ['status' => true, 'message' => 'Temple Methodology added successfully.'];
            } else {
                return ['status' => false, 'message' => 'Failed to add temple methodology in database.'];
            }
        } catch (Exception $e) {
            return ['status' => false, 'message' => 'Database Error: ' . $e->getMessage()];
        }
    }

    public function editTempleMethodology()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);

        $data = $inputs['methodologyData'];

        $id = isset($data['id']) ? $data['id'] : null;
        $title = isset($data['title']) ? $data['title'] : null;
        $desc = isset($data['description']) ? $data['description'] : null;
        $phase = isset($data['phase']) ? $data['phase'] : null;

        if (empty($id) || empty($title) || empty($desc) || empty($phase)) {
            return [
                'status' => false,
                'message' => 'All fields are required.'
            ];
        }

        $data = [
            'title' => $title,
            'description' => $desc,
            'phase' => $phase
        ];

        $this->db->where('id', $id);
        $result = $this->db->update('temple_methodology', $data);
        if ($result) {
            return [
                'status' => true,
                'message' => 'Temple Methodology updated successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to update temple methodology in database.'
            ];
        }
    }

    public function deleteTempleMethodology()
    {
        $para = json_decode(file_get_contents('php://input'), true);
        $id = $para['id'];

        $this->db->where('id', $id);
        $result = $this->db->update('temple_methodology', ['is_deleted' => '1']);
        if ($result) {
            return [
                'status' => true,
                'message' => 'Temple Methodology deleted successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to delete temple methodology in database.'
            ];
        }
    }

    public function addTempleDonation()
    {
        $json = file_get_contents('php://input');
        $inputs = json_decode($json, true);

        $data = $inputs['donationData'];

        $donar_name = trim($data['donor_name'] ?? '');
        $donation_amount = trim($data['amount'] ?? '');
        $donar_number = trim($data['mobile'] ?? '');
        $gotra_sankalpa = trim($data['gotra_sankalpa'] ?? '');
        $cause = trim($data['cause'] ?? '');
        $payment_mode = trim($data['payment_mode'] ?? '');

        if (empty($donar_name) || empty($donation_amount) || empty($donar_number) || empty($gotra_sankalpa) || empty($cause) || empty($payment_mode)) {
            return ['status' => false, 'message' => 'All fields are required.'];
        }

        $insertData = [
            'donor_name' => $donar_name,
            'amount' => $donation_amount,
            'mobile' => $donar_number,
            'gotra_sankalpa' => $gotra_sankalpa,
            'cause' => $cause,
            'payment_mode' => $payment_mode
        ];

        try {
            $this->db->insert('temple_donations', $insertData);

            if ($this->db->affected_rows() > 0) {
                return ['status' => true, 'message' => 'Temple Donation added successfully.'];
            } else {
                return ['status' => false, 'message' => 'Failed to add temple donation in database.'];
            }
        } catch (Exception $e) {
            return ['status' => false, 'message' => 'Database Error: ' . $e->getMessage()];
        }
    }

    public function editTempleDonation()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);

        $data = $inputs['donationData'];

        $id = isset($data['id']) ? $data['id'] : null;
        $donar_name = isset($data['donor_name']) ? $data['donor_name'] : null;
        $donation_amount = isset($data['amount']) ? $data['amount'] : null;
        $donar_number = isset($data['mobile']) ? $data['mobile'] : null;
        $gotra_sankalpa = isset($data['gotra_sankalpa']) ? $data['gotra_sankalpa'] : null;
        $cause = isset($data['cause']) ? $data['cause'] : null;
        $payment_mode = isset($data['payment_mode']) ? $data['payment_mode'] : null;

        if (empty($id) || empty($donar_name) || empty($donation_amount) || empty($donar_number) || empty($gotra_sankalpa) || empty($cause) || empty($payment_mode)) {
            return ['status' => false, 'message' => 'All fields are required.'];
        }

        $updateData = [
            'donor_name' => $donar_name,
            'amount' => $donation_amount,
            'mobile' => $donar_number,
            'gotra_sankalpa' => $gotra_sankalpa,
            'cause' => $cause,
            'payment_mode' => $payment_mode
        ];

        try {
            $this->db->where('id', $id);
            $this->db->update('temple_donations', $updateData);

            if ($this->db->affected_rows() > 0) {
                return ['status' => true, 'message' => 'Temple Donation updated successfully.'];
            } else {
                return ['status' => false, 'message' => 'Failed to update temple donation in database.'];
            }
        } catch (Exception $e) {
            return ['status' => false, 'message' => 'Database Error: ' . $e->getMessage()];
        }
    }

    public function deleteTempleDonationDetail()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        $id = isset($data['id']) ? $data['id'] : null;

        if ($id) {
            $this->db->where('id', $id);
            $result = $this->db->update('temple_donations', ['is_deleted' => '1']);
            if ($result) {
                return [
                    'status' => true,
                    'message' => 'Donation detail deleted successfully.'
                ];
            } else {
                return [
                    'status' => false,
                    'message' => 'Failed to delete donation detail from database.'
                ];
            }
        } else {
            return [
                'status' => false,
                'message' => 'Invalid ID received.'
            ];
        }
    }

    public function updateReviewStatus()
    {
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'];
        $status = $input['status'];

        $this->db->where('id', $id)->update('testimonials', ['status' => $status]);
        if ($this->db->affected_rows() > 0) {
            return ['status' => true, 'message' => 'Status updated successfully.'];
        } else {
            return ['status' => false, 'message' => 'Failed to update status in database.'];
        }
    }

    public function updateReviewVisibility()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);

        $id = isset($inputs['id']) ? $inputs['id'] : null;
        $visibility = isset($inputs['is_visible']) ? $inputs['is_visible'] : null;

        $this->db->where('id', $id)->update('testimonials', ['is_visible' => $visibility]);
        if ($this->db->affected_rows() > 0) {
            return ['status' => true, 'message' => 'Visibility updated successfully.'];
        } else {
            return ['status' => false, 'message' => 'Failed to update visibility in database.'];
        }
    }

    public function deleteReview()
    {
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'];

        $this->db->where('id', $id)->update('testimonials', ['is_deleted' => '1']);
        if ($this->db->affected_rows() > 0) {
            return ['status' => true, 'message' => 'Review deleted successfully.'];
        } else {
            return ['status' => false, 'message' => 'Failed to delete review in database.'];
        }
    }

    public function upload_gallery_images($files)
    {
        $count = count($files['name']);
        $success = false;

        // अपलोड पाथ को सुनिश्चित करें कि वो मौजूद है
        $upload_path = './uploads/gallery/';
        if (!is_dir($upload_path)) {
            mkdir($upload_path, 0777, true);
        }

        $config['upload_path'] = $upload_path;
        $config['allowed_types'] = 'jpg|jpeg|png';
        $config['encrypt_name'] = TRUE;

        for ($i = 0; $i < $count; $i++) {
            // लूप के अंदर हर बार $_FILES को सेट करें
            $_FILES['file']['name'] = $files['name'][$i];
            $_FILES['file']['type'] = $files['type'][$i];
            $_FILES['file']['tmp_name'] = $files['tmp_name'][$i];
            $_FILES['file']['error'] = $files['error'][$i];
            $_FILES['file']['size'] = $files['size'][$i];

            // महत्वपूर्ण: हर बार लाइब्रेरी को री-इनिशियलाइज़ करें
            $this->load->library('upload');
            $this->upload->initialize($config);

            if ($this->upload->do_upload('file')) {
                $data = $this->upload->data();
                $insert_data = [
                    'image_url' => 'uploads/gallery/' . $data['file_name'],
                    'is_deleted' => 0
                ];
                $this->db->insert('gallery', $insert_data);
                $success = true;
            } else {
                $success = false;
                break;
            }
        }
        return $success;
    }

    public function get_images_paginated($limit, $offset)
    {
        $this->db->where('is_deleted', '0');
        $this->db->order_by('id', 'DESC');
        $this->db->limit($limit, $offset);
        return $this->db->get('gallery')->result_array();
    }

    public function count_images()
    {
        $this->db->where('is_deleted', '0');
        return $this->db->count_all_results('gallery');
    }

    public function delete_gallery_image(){
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'];

        $this->db->where('id', $id)->update('gallery', ['is_deleted' => '1']);
        if ($this->db->affected_rows() > 0) {
            return ['status' => true, 'message' => 'Image deleted successfully.'];
        } else {
            return ['status' => false, 'message' => 'Failed to delete image in database.'];
        }
    }

    public function addNewSubscription($name, $price, $features){
        $features_json = json_encode($features);

        $data = [
            'plan_name' => $name,
            'price' => $price,
            'features' => $features_json
        ];

        $this->db->insert('membership_plans', $data);
        if($this->db->affected_rows() > 0){
            return ['status' => true, 'message' => 'Subscription added successfully.'];
        } else {
            return ['status' => false, 'message' => 'Failed to add subscription in database.'];
        }
    }

    public function getSubscriptions(){
        $this->db->where('is_deleted', '0');
        // $this->db->order_by('id', 'DESC');
        return $this->db->get('membership_plans')->result_array();
    }

    public function deleteSubscription($id){
        $this->db->where('id', $id)->update('membership_plans', ['is_deleted' => '1']);
        if ($this->db->affected_rows() > 0) {
            return ['status' => true, 'message' => 'Subscription deleted successfully.'];
        } else {
            return ['status' => false, 'message' => 'Failed to delete subscription in database.'];
        }
    }

    public function updateSubscription($id){
        $inputs = json_decode(file_get_contents('php://input'), true);
        $name = $inputs['name'];
        $price = $inputs['price'];
        $features = $inputs['features'];

        if(empty($name) || empty($price) || empty($features)){
            return ['status' => false, 'message' => 'All fields are required.'];
        }

        $data = [
            'plan_name' => $name,
            'price' => $price,
            'features' => $features
        ];

        $this->db->where('id', $id)->update('membership_plans', $data);
        if($this->db->affected_rows() > 0){
            return ['status' => true, 'message' => 'Subscription updated successfully.'];
        } else {
            return ['status' => false, 'message' => 'Failed to update subscription in database.'];
        }
    }

    public function getBanners(){
        $this->db->where('is_deleted', '0');
        $this->db->order_by('id', 'DESC');
        return $this->db->get('banners')->result_array();
    }

    public function addNewBanner($data){
        return $this->db->insert('banners', $data);
    }

    public function updateBanner($id, $data)
    {
        $this->db->where('id', $id);
        if ($this->db->update('banners', $data)) {
            return ['status' => true, 'message' => 'Banner updated successfully'];
        }
        return ['status' => false, 'message' => 'Database update failed'];
    }

    public function deleteBanner($id)
    {
        // Update the column instead of deleting the row
        $this->db->where('id', $id);
        $data = ['is_deleted' => 1];

        if ($this->db->update('banners', $data)) {
            return ['status' => true, 'message' => 'Banner removed successfully'];
        }
        return ['status' => false, 'message' => 'Failed to update record'];
    }

    public function updateContactQueryStatus(){
        $inputs = json_decode(file_get_contents('php://input'), true);
        $id = $inputs['id'];
        $status = $inputs['status'];

        $this->db->where('id', $id)->update('contact_queries', ['status' => $status]);
        if($this->db->affected_rows() > 0){
            return ['status' => true, 'message' => 'Status updated successfully.'];
        } else {
            return ['status' => false, 'message' => 'Failed to update status in database.'];
        }
    }
}
?>