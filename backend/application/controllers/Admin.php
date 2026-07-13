<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

        $this->load->model('Admin_model');
    }

    public function is_valid_admin()
    {
        $headers = $this->input->get_request_header('Authorization');

        if (!$headers) {
            return false;
        }

        $token = str_replace('ManavJagritiSanstha ', '', $headers);

        $token_data = $this->Admin_model->validate_token($token);

        return $token_data ? $token_data : false;
    }

    private function _common($auth)
    {
        if (!$auth) {
            echo json_encode([
                'status' => false,
                'message' => 'Please Login First'
            ]);
            exit;
        }
    }

    public function login()
    {

        $data = json_decode(file_get_contents('php://input'), true);
        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';

        if (empty($username) || empty($password)) {
            return [
                'status' => 'error',
                'message' => 'Username and password are required'
            ];
        }

        $admin = $this->Admin_model->get_admin_by_username($username);

        if (!$admin) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid credentials'
            ]);
            return;
        }

        file_put_contents('login_debug.txt', "Input Pass: " . $password . "\nDB Pass: " . $admin['password']);

        if (!password_verify($password, $admin['password'])) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid credentials'
            ]);
            return;
        }


        $token = bin2hex(random_bytes(32));

        $this->Admin_model->save_token($admin['id'], $token);

        echo json_encode([
            'status' => 'success',
            'message' => 'Login successful',
            'token' => $token,
            'admin' => [
                'id' => $admin['id'],
                'username' => $admin['username'],
                'fullname' => $admin['full_name'],
                'email' => $admin['email_id'],
                'number' => $admin['number'],
                'role' => $admin['role'],
                'created_at' => $admin['created_at']
            ]
        ]);
    }


    public function get_stats()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);
        $stats = $this->Admin_model->get_stats();
        if ($stats) {
            $data = [
                'totalCows' => (int) $stats['total_cows'],
                'healthyCows' => (int) $stats['healthy_cows'],
                'sickCows' => (int) $stats['sick_cows'],
                'charaStock' => (float) $stats['chara_stock'],
                'charaDaysLeft' => (int) $stats['chara_days_left']
            ];
            echo json_encode(['status' => true, 'data' => $data]);
        } else {
            echo json_encode(['status' => false, 'message' => 'डेटा नहीं मिला']);
        }
    }

    public function update_stats()
    {
        $input = json_decode(file_get_contents('php://input'), true);

        if (!empty($input)) {
            $update_data = [
                'total_cows' => $input['totalCows'] ?? 0,
                'healthy_cows' => $input['healthyCows'] ?? 0,
                'sick_cows' => $input['sickCows'] ?? 0,
                'chara_stock' => $input['charaStock'] ?? 0,
                'chara_days_left' => $input['charaDaysLeft'] ?? 0
            ];

            $updated = $this->Admin_model->update_stats($update_data);

            if ($updated) {
                echo json_encode(
                    [
                        'status' => true,
                        'message' => 'गौशाला के आँकड़े सफलता पूर्वक अपडेट हो गए!',
                        'data' => $input
                    ]
                );
            } else {
                echo json_encode(
                    [
                        'status' => false,
                        'message' => 'अपडेट करने में समस्या आई।'
                    ]
                );
            }
        } else {
            echo json_encode(
                [
                    'status' => false,
                    'message' => 'Invalid Request Payload'
                ]
            );
        }
    }

    public function get_recent_donations()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $this->db->select('fullname, phone, email, amount, shankal_plan_id, created_at');
        $this->db->limit(5);
        $this->db->order_by('id', 'desc');
        $donations = $this->db->get('gau_seva_donations')->result_array();
        echo json_encode([
            'status' => true,
            'message' => 'Donations fetched successfully',
            'donations' => $donations
        ]);
    }

    public function get_recent_katha_bookings()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $this->db->select('name, number, date, amount, venue_type, date, address');
        $this->db->limit(5);
        $this->db->order_by('id', 'desc');
        $kathas = $this->db->get('katha_bookings')->result_array();
        echo json_encode([
            'status' => true,
            'message' => 'Katha Bookings fetched successfully',
            'kathas' => $kathas
        ]);
    }

    public function profile()
    {
        header('Content-Type: application/json');
        $auth = $this->is_valid_admin();

        $this->_common($auth);

        $data = $this->Admin_model->update_admin_profile();
    }

    public function adminChangePassword()
    {
        header('Content-Type: application/json');
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $data = json_decode(file_get_contents('php://input'), true);

        $admin_id = $data['id'];
        $currentPassword = $data['currentPassword'] ?? '';
        $newPassword = $data['newPassword'] ?? '';
        $confirmPassword = $data['confirmPassword'] ?? '';

        if (empty($currentPassword) || empty($newPassword) || empty($confirmPassword)) {
            echo json_encode([
                'status' => false,
                'message' => 'All fields are required'
            ]);
            return;
        }

        $admin = $this->db->get_where('admins', ['id' => $admin_id])->row_array();

        if (!$admin) {
            echo json_encode([
                'status' => false,
                'message' => 'Admin not found'
            ]);
            return;
        }

        if ($admin['id'] !== $admin_id) {
            echo json_encode([
                'status' => false,
                'message' => 'Admin not found'
            ]);
            return;
        }

        $previousPassword = $admin['password'];

        $salt = 'Manavjagritisanstha#2026';
        $currentPasswordPreHash = hash('sha256', $currentPassword . $salt);

        if (!password_verify($currentPasswordPreHash, $previousPassword)) {
            echo json_encode([
                'status' => false,
                'message' => 'Current password is incorrect'
            ]);
            return;
        }

        if ($newPassword !== $confirmPassword) {
            echo json_encode([
                'status' => false,
                'message' => 'Passwords do not match'
            ]);
            return;
        }

        if ($newPassword == $currentPassword) {
            echo json_encode([
                'status' => false,
                'message' => 'New password cannot be same as current password'
            ]);
            return;
        }

        $admin = $this->Admin_model->change_password($admin_id, $currentPassword, $newPassword);

        echo json_encode($admin);
    }

    public function blogs()
    {
        header('Content-Type: application/json');
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $blogs = $this->db->where('is_deleted', 1)->order_by('id', 'desc')->limit(10)->get('blogs')->result_array();
        echo json_encode([
            'status' => true,
            'message' => 'Blogs fetched successfully',
            'blogs' => $blogs
        ]);
    }

    public function uploadNewBlog()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->uploadNewBlog();
        echo json_encode($res);
    }

    public function updateBlog()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->updateBlog();
        echo json_encode($res);
    }

    public function deleteBlog()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->deleteBlog();
        echo json_encode($res);
    }

    public function deletePoster()
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $input = json_decode(file_get_contents('php://input'), true);
        $posterId = $input['posterId'] ?? null; // यहाँ $posterId अब एक String है (e.g., "123")

        if (!$posterId) {
            echo json_encode(['status' => false, 'message' => 'Invalid ID']);
            return;
        }

        // 1. सीधे $posterId का उपयोग करें, $posterId['posterId'] का नहीं
        $poster = $this->db->where('id', $posterId)
            ->get('katha_posters')
            ->row_array();

        if ($poster) {
            $file_path = str_replace(base_url(), FCPATH, $poster['image_path']);
            if (file_exists($file_path)) {
                unlink($file_path);
            }

            // 2. यहाँ भी सीधे $posterId का उपयोग करें
            $this->db->where('id', $posterId);
            $this->db->delete('katha_posters');

            echo json_encode(['status' => true, 'message' => 'Deleted successfully']);
        } else {
            echo json_encode(['status' => false, 'message' => 'Poster not found']);
        }
    }

    public function uploadPoster()
    {
        $upload_path = FCPATH . 'assets/images/posters/';

        if (!is_dir($upload_path)) {
            mkdir($upload_path, 0777, true);
        }
        $config['upload_path'] = $upload_path;
        $config['allowed_types'] = 'gif|jpg|png|jpeg|webp';
        $config['overwrite'] = FALSE;
        // $config['max_size'] = 2048; // 2MB लिमिट

        $this->load->library('upload', $config);

        $this->upload->initialize($config);

        if (!$this->upload->do_upload('poster')) {
            echo json_encode([
                'status' => false,
                'error' => $this->upload->display_errors()
            ]);
        } else {
            $data = $this->upload->data();

            $this->db->insert('katha_posters', [
                'title' => $this->input->post('title') ? $this->input->post('title') : 'Upcoming Katha',
                'image_path' => base_url('backend/assets/images/posters/' . $data['file_name'])
            ]);

            echo json_encode([
                'status' => true,
                'message' => 'Upload successful'
            ]);
        }
    }

    public function getPosters()
    {

        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $limit = $this->input->get('limit') ?: 10;
        $offset = $this->input->get('offset') ?: 0;

        $this->db->order_by('id', 'desc');
        $query = $this->db->get('katha_posters', $limit, $offset);
        $posters = $query->result_array();

        if (!empty($posters)) {
            echo json_encode([
                'status' => true,
                'posters' => $posters,
                'hasMore' => count($posters) == $limit
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'No data found'
            ]);
        }
    }

    public function kathaBookingsDetials()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        // 1. पेजिनेशन पैरामीटर्स प्राप्त करें
        $page = $this->input->get('page') ? (int) $this->input->get('page') : 1;
        $limit = 10;
        $offset = ($page - 1) * $limit;

        // 2. कुल रिकॉर्ड्स गिनें (ताकि total_pages निकाल सकें)
        $total_records = $this->db->count_all('katha_bookings');
        $total_pages = ($total_records > 0) ? ceil($total_records / $limit) : 1;

        // 3. डेटा निकालें (Limit और Offset के साथ)
        $query = $this->db->select('*')
            ->from('katha_bookings')
            ->order_by('id', 'desc')
            ->limit($limit, $offset)
            ->get();

        $results = $query->result_array();



        // 4. JSON रिस्पॉन्स दें (pagination ऑब्जेक्ट के साथ)
        if (!empty($results)) {
            echo json_encode([
                'status' => true,
                'message' => 'Katha Bookings fetched successfully',
                'katha_bookings' => $results,
                'pagination' => [
                    'total_pages' => (int) $total_pages,
                    'current_page' => $page,
                    'total_records' => (int) $total_records
                ]
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'No data found'
            ]);
        }
    }

    public function fetchKathaTypes()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $data['katha_types'] = $this->db->select('*')->from('katha_types')->order_by('id', 'desc')->limit(10)->get()->result_array();

        if (!empty($data['katha_types'])) {
            echo json_encode([
                'status' => true,
                'message' => 'Katha Types fetched successfully',
                'katha_types' => $data['katha_types']
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'No data found'
            ]);
        }
    }

    public function addNewKathaType()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->addNewKathaType();
        echo json_encode($res);
    }

    public function addShankalpForGuaSeva()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->addShankalpForGuaSeva();
        echo json_encode($res);
    }

    public function shankalpPlansList()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->shankalpPlansList();
        echo json_encode($res);
    }

    public function gauSevaDonarsList()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $result = $this->db->get('gau_seva_donations')->result_array();

        if (!empty($result)) {
            echo json_encode([
                'status' => true,
                'message' => 'Gau Seva Donars fetched successfully',
                'gau_seva_donars' => $result
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'No data found'
            ]);
        }
    }

    public function contactQueriesList()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $result = $this->db->where('is_deleted', "0")->order_by('id', 'desc')->limit(10)->get('contact_queries')->result_array();

        if (!empty($result)) {
            echo json_encode([
                'status' => true,
                'message' => 'Contact Queries fetched successfully',
                'contact_queries' => $result
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'No data found'
            ]);
        }
    }

    public function updateContactQueryStatus(){
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->updateContactQueryStatus();
        echo json_encode($res);
    }

    public function deleteContactQuery()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->deleteContactQuery();
        echo json_encode($res);
    }

    public function get_methodology()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->get_methodology();
        echo json_encode($res);
    }

    public function update_methodology()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->update_methodology();
        echo json_encode($res);
    }

    public function brajDarshanPlaces()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $this->db->select('*');
        $this->db->from('brajdarshan_places');
        $this->db->order_by('id', 'desc');
        $this->db->limit(10);
        $brajDarshanPlaces = $this->db->get()->result_array();

        if (!empty($brajDarshanPlaces)) {
            echo json_encode([
                'status' => true,
                'message' => 'Braj Darshan Places fetched successfully',
                'brajDarshanPlaces' => $brajDarshanPlaces
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'No data found'
            ]);
        }
    }

    public function addBrajDarshanPlace()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->addBrajDarshanPlace();
        echo json_encode($res);
    }

    public function editBrajDarshanPlace()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->editBrajDarshanPlace();
        echo json_encode($res);
    }

    public function brajdarshan_enquiries()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->brajdarshan_enquiries();
        echo json_encode($res);
    }

    public function update_brajdarshan_enquiry_status()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->update_brajdarshan_enquiry_status();
        echo json_encode($res);
    }

    public function getAllCoreMotos()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $result = $this->db->where('is_deleted', "0")->get('core_motos')->result_array();

        if (!empty($result)) {
            echo json_encode([
                'status' => true,
                'message' => 'Core Motos fetched successfully',
                'core_motos' => $result
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'No data found'
            ]);
        }
    }

    public function getTempleMethodology()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);


        $result = $this->db->where('is_deleted', "0")->get('temple_methodology')->result_array();

        if (!empty($result)) {
            echo json_encode([
                'status' => true,
                'message' => 'Temple Methodology fetched successfully',
                'temple_methodology' => $result
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'No data found'
            ]);
        }
    }

    public function getTempleDonations()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $result = $this->db->where('is_deleted', "0")->get('temple_donations')->result_array();

        if (!empty($result)) {
            echo json_encode([
                'status' => true,
                'message' => 'Temple Donations fetched successfully',
                'temple_donations' => $result
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'No data found'
            ]);
        }
    }

    public function addCoreMoto()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->addCoreMoto();
        echo json_encode($res);
    }

    public function editCoreMoto()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->editCoreMoto();
        echo json_encode($res);
    }

    public function deleteCoreMoto()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->deleteCoreMoto();
        echo json_encode($res);
    }

    public function addTempleMethodology()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->addTempleMethodology();
        echo json_encode($res);
    }

    public function editTempleMethodology()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->editTempleMethodology();
        echo json_encode($res);
    }

    public function deleteTempleMethodology()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->deleteTempleMethodology();
        echo json_encode($res);
    }

    public function addTempleDonation()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->addTempleDonation();
        echo json_encode($res);
    }

    public function editTempleDonation()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->editTempleDonation();
        echo json_encode($res);
    }

    public function deleteTempleDonationDetail()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->deleteTempleDonationDetail();
        echo json_encode($res);
    }

    public function getUserReviews()
    {
        header('Content-Type: application/json');

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->db->where('is_deleted', "0")->get('testimonials')->result_array();
        echo json_encode($res);
    }

    public function updateReviewStatus()
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->updateReviewStatus();
        echo json_encode($res);
    }

    public function updateReviewVisibility()
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->updateReviewVisibility();
        echo json_encode($res);
    }

    public function deleteReview()
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->deleteReview();
        echo json_encode($res);
    }

    public function upload_gallery_images()
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        if (!empty($_FILES['images'])) {
            $status = $this->Admin_model->upload_gallery_images($_FILES['images']);
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'कोई फाइल नहीं मिली']);
        }
    }

    public function fetch_gallery()
    {
        $page = $this->input->get('page') ? (int) $this->input->get('page') : 1;
        $limit = 10;
        $offset = ($page - 1) * $limit;

        $data = $this->Admin_model->get_images_paginated($limit, $offset);
        $total = $this->Admin_model->count_images();

        echo json_encode([
            'status' => 'success',
            'data' => $data,
            'total_pages' => ceil($total / $limit)
        ]);
    }

    public function delete_gallery_image()
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->delete_gallery_image();
        echo json_encode($res);
    }

    public function addNewSubscription()
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $inputs = json_decode(file_get_contents('php://input'), true);

        if (empty($inputs['name']) || empty($inputs['price']) || empty($inputs['features'])) {
            echo json_encode(['status' => false, 'message' => 'All fields required.']);
            return;
        }

        $res = $this->Admin_model->addNewSubscription($inputs['name'], $inputs['price'], $inputs['features']);
        echo json_encode($res);
    }

    public function getSubscriptions()
    {

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->getSubscriptions();
        echo json_encode($res);
    }

    public function deleteSubscription($id = null)
    {

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $inputs = json_decode(file_get_contents('php://input'), true);
        $id = isset($inputs['id']) ? $inputs['id'] : null;
        $res = $this->Admin_model->deleteSubscription($id);
        echo json_encode($res);
    }

    public function updateSubscription($id = null)
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $res = $this->Admin_model->updateSubscription($id);
        echo json_encode($res);
    }

    public function getBanners()
    {

        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $results = $this->Admin_model->getBanners();
        $data = [];

        if (!empty($results)) {
            foreach ($results as $res) {
                $data[] = [
                    'id' => $res['id'],
                    'imageUrl' => base_url('backend/' . $res['imageUrl']),
                    'page' => $res['page'],
                ];
            }
        }

        echo json_encode($data);
    }

    public function addNewBanner()
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $upload_path = './assets/banners/';

        if (!is_dir($upload_path)) {
            if (!mkdir($upload_path, 0777, true)) {
                echo json_encode(['status' => false, 'message' => 'Failed to create upload directory.']);
                return;
            }
        }

        $config['upload_path'] = $upload_path;
        $config['allowed_types'] = 'jpg|jpeg|png|webp';
        // $config['max_size'] =5120 ; // 2MB
        $config['encrypt_name'] = TRUE;

        $this->load->library('upload');
        $this->upload->initialize($config);

        if (!$this->upload->do_upload('image')) {
            echo json_encode([
                'status' => false,
                'message' => strip_tags($this->upload->display_errors())
            ]);
        } else {
            $upload_data = $this->upload->data();
            $file_path = 'assets/banners/' . $upload_data['file_name'];

            $data = [
                'imageUrl' => $file_path,
                'page' => $this->input->post('page'),
                'created_at' => date('Y-m-d H:i:s')
            ];

            $res = $this->Admin_model->addNewBanner($data);

            if ($res) {
                echo json_encode(['status' => true, 'message' => 'Banner added successfully']);
            } else {
                echo json_encode(['status' => false, 'message' => 'Failed to save to database.']);
            }
        }
    }

    public function updateBanner($id)
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        $updateData = [
            'page' => $this->input->post('page')
        ];

        // Use FCPATH to ensure an absolute server path
        $upload_path = FCPATH . 'assets/banners/';

        if (!empty($_FILES['image']['name'])) {
            // Ensure directory exists
            if (!is_dir($upload_path)) {
                mkdir($upload_path, 0777, true);
            }

            $config['upload_path'] = $upload_path;
            $config['allowed_types'] = 'gif|jpg|jpeg|png|webp';
            $config['encrypt_name'] = TRUE;

            $this->load->library('upload');
            $this->upload->initialize($config);

            if ($this->upload->do_upload('image')) {
                $fileData = $this->upload->data();
                // Store the relative path for the database
                $updateData['imageUrl'] = 'assets/banners/' . $fileData['file_name'];
            } else {
                // Clean up the error message for JSON response
                echo json_encode([
                    'status' => false,
                    'message' => strip_tags($this->upload->display_errors())
                ]);
                return;
            }
        }

        $res = $this->Admin_model->updateBanner($id, $updateData);
        echo json_encode($res);
    }

    public function deleteBanner($id)
    {
        $auth = $this->is_valid_admin();
        $this->_common($auth);

        // We simply call the model to update the status to 1
        $res = $this->Admin_model->deleteBanner($id);

        echo json_encode($res);
    }
}


?>