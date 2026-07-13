<?php
class User_model extends CI_Model
{
    public function kathaBooking($inputs)
    {
        $name = isset($inputs['yajmanName']) ? $inputs['yajmanName'] : null;
        $number = isset($inputs['phone']) ? $inputs['phone'] : null;
        $date = isset($inputs['preferredDate']) ? $inputs['preferredDate'] : null;
        $katha_type = isset($inputs['kathaType']) ? $inputs['kathaType'] : null;
        $venue_type = isset($inputs['venueType']) ? $inputs['venueType'] : null;
        $address = isset($inputs['fullAddress']) ? $inputs['fullAddress'] : null;
        $additionalNotes = isset($inputs['additionalNotes']) ? $inputs['additionalNotes'] : '';
        $amount = isset($inputs['amount']) ? $inputs['amount'] : null;

        if (empty($name) || empty($number)) {
            return [
                'status' => false,
                'message' => 'Yajman name and phone number are required.'
            ];
        }

        $data = [
            'name' => $name,
            'number' => $number,
            'date' => $date,
            'katha_point' => $katha_type,
            'venue_type' => $venue_type,
            'address' => $address,
            'additional_notes' => $additionalNotes,
            'amount' => $amount
        ];

        $inserted = $this->db->insert('katha_bookings', $data);

        if ($inserted) {
            return [
                'status' => true,
                'id' => $this->db->insert_id(),
                'message' => 'Katha booking request submitted successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to submit katha booking request.'
            ];
        }
    }

    public function gauSevaDonation($inputs)
    {
        $fullname = trim($inputs['fullName'] ?? '');
        $email = trim($inputs['email'] ?? '');
        $amount = trim($inputs['amount'] ?? '');
        $phone = trim($inputs['phone'] ?? '');
        $sankalpaGotra = trim($inputs['sankalpaGotra'] ?? '');
        $planId = trim($inputs['planId'] ?? '');

        if (
            empty($fullname) ||
            empty($amount) ||
            empty($phone) ||
            empty($planId)
        ) {
            return [
                'status' => false,
                'message' => 'Required fields are missing.'
            ];
        }

        $data = [
            'fullname' => $fullname,
            'email' => $email,
            'amount' => str_replace(['₹', ','], '', $amount),
            'phone' => $phone,
            'sankalpa_gotra' => $sankalpaGotra,
            'shankal_plan_id' => $planId,
            'payment_status' => 'pending'
        ];

        $insert = $this->db->insert('gau_seva_donations', $data);

        if (!$insert) {
            return [
                'status' => false,
                'message' => 'Database insert failed.'
            ];
        }

        return [
            'status' => true,
            'id' => $this->db->insert_id()
        ];
    }


    public function contactQuery()
    {
        $data = $this->input->post();

        $name = isset($data['name']) ? trim($data['name']) : null;
        $email = isset($data['email']) ? trim($data['email']) : null;
        $phone = isset($data['phone']) ? trim($data['phone']) : null;
        $sevaInterest = isset($data['sevaInterest']) ? trim($data['sevaInterest']) : null;
        $message = isset($data['message']) ? trim($data['message']) : null;

        if (empty($name) || empty($phone) || empty($message)) {
            return [
                'status' => false,
                'message' => 'कृपया सभी आवश्यक फ़ील्ड (नाम, मोबाइल नंबर, और संदेश) भरें।'
            ];
        }

        if (strlen($phone) < 10 || strlen($phone) > 13) {
            return [
                'status' => false,
                'message' => 'कृपया एक वैध मोबाइल नंबर दर्ज करें।'
            ];
        }

        if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return [
                'status' => false,
                'message' => 'कृपया एक वैध ईमेल आईडी दर्ज करें।'
            ];
        }

        $insertData = [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'seva_interest' => !empty($sevaInterest) ? $sevaInterest : 'सामान्य पूछताछ',
            'message' => $message,
            'status' => 'Pending'
        ];

        $inserted = $this->db->insert('contact_queries', $insertData);

        if ($inserted) {
            return [
                'status' => true,
                'message' => 'आपका संदेश सफलतापूर्वक सुरक्षित कर लिया गया है। मानव जागृति टीम जल्द ही संपर्क करेगी।'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'डेटाबेस एरर: संदेश सुरक्षित करने में विफल।'
            ];
        }
    }

    public function get_reviews()
    {
        $this->db->select('name, location, text');
        $this->db->where('is_deleted', '0');
        $this->db->where('is_visible', '1');
        $this->db->where('status', 'approved');
        $this->db->limit(10);
        $this->db->order_by('id', 'desc');
        $this->db->from('testimonials');
        $query = $this->db->get();
        return $query->result();
    }

    public function add_new_review()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);

        $name = isset($inputs['name']) ? trim($inputs['name']) : null;
        $location = isset($inputs['location']) ? trim($inputs['location']) : null;
        $text = isset($inputs['text']) ? trim($inputs['text']) : null;

        if (empty($name) || empty($text)) {
            return [
                'status' => false,
                'message' => 'All fields are required.'
            ];
        }

        $insertData = [
            'name' => $name,
            'location' => $location,
            'text' => $text,
            'status' => 'Pending'
        ];

        $inserted = $this->db->insert('testimonials', $insertData);

        if ($inserted) {
            return [
                'status' => true,
                'message' => 'Review added successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Database error: Review not added.'
            ];
        }
    }

    public function get_blogs()
    {
        $this->db->select('id, title, category, author, publishDate, likes, status, content, imageUrl, videoUrl, uploadedVideoUrl');
        $this->db->where('is_deleted', '0');
        $this->db->limit(10);
        $this->db->order_by('id', 'desc');
        $this->db->from('blogs');
        $query = $this->db->get();
        return $query->result();
    }

    public function like_blog()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);
        $id = $inputs['blogId'] ?? null;

        if (!$id) {
            return ['status' => false, 'message' => 'Invalid Blog ID received: ' . json_encode($inputs)];
        }

        $blog = $this->db->get_where('blogs', ['id' => $id])->row_array();
        if (!$blog) {
            return ['status' => false, 'message' => 'Blog not found for ID: ' . $id];
        }
        $this->db->where('id', $id);
        $this->db->set('likes', (int) $blog['likes'] + 1, FALSE);
        $this->db->update('blogs');

        if ($this->db->affected_rows() > 0) {
            return [
                'status' => true,
                'message' => 'Blog liked successfully.'
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Database error: Blog not liked.'
            ];
        }
    }

    public function fetchkathaTypes()
    {
        $this->db->select('label, amount, inclusion, duration');
        $query = $this->db->get('katha_types')->result_array();
        return $query;
    }

    public function fetchShankalpPlans()
    {
        $query = $this->db->get('shankalp_plans')->result_array();
        return $query;
    }

    public function getBrajDarshanPlaces()
    {
        $query = $this->db->where('status', '0')->get('brajdarshan_places')->result_array();
        return $query;
    }

    public function fetchCoreMotos()
    {
        $query = $this->db->where('is_deleted', '0')->get('core_motos')->result_array();
        return $query;
    }

    public function fetchMemberShipPlans()
    {
        $query = $this->db->where('is_deleted', '0')->get('membership_plans')->result_array();
        return $query;
    }

    public function joinMembership($inputs)
    {
        $data = [
            'full_name' => trim($inputs['name']),
            'email' => trim($inputs['email']),
            'phone' => trim($inputs['phone']),
            'address' => trim($inputs['address']),
            'gotra' => trim($inputs['gotra']),
            'dob' => !empty($inputs['dob'])
                ? date('Y-m-d', strtotime($inputs['dob']))
                : null,
            'plan_id' => $inputs['plan_id'],
            'plan_name' => $inputs['plan_name'],
            'status' => 'pending',
            'created_at' => date('Y-m-d H:i:s')
        ];

        $insert = $this->db->insert('memberships', $data);

        if (!$insert) {
            return [
                'status' => false,
                'message' => 'Database insert failed.'
            ];
        }

        return [
            'status' => true,
            'id' => $this->db->insert_id()
        ];
    }

    public function joinAsVolenteer(){
        $inputs = $this->input->post();

        if (empty($inputs['full_name']) || empty($inputs['phone'])) {
            echo json_encode(['status' => false, 'message' => 'Required fields missing']);
            return;
        }

        $insertData = array(
            'full_name' => $inputs['full_name'],
            'phone' => $inputs['phone'],
            'age' => $inputs['age'],
            'gender' => $inputs['gender'],
            'qualification' => $inputs['qualification'],
            'occupation' => $inputs['occupation'],
            'area_of_seva' => $inputs['area_of_seva'],
            'motivation' => $inputs['motivation']
        );

        $status = $this->db->insert('volunteers', $insertData);

        if ($status) {
            return ['status' => true, 'message' => 'Thank you for volunteering!'];
        } else {
            return ['status' => false, 'message' => 'Failed to register. Please try again.'];
        }
    }

    public function fetchBanners(){
        $query = $this->db->where('is_deleted', '0')->get('banners')->result_array();
        return $query;
    }

    public function upcomingKathaPosters(){
        $query = $this->db->where('status', 'active')->get('katha_posters')->result_array();
        return $query;
    }
}

?>