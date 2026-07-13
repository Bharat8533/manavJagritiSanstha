<?php defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

        $this->load->model('User_model');
        require_once(APPPATH . 'controllers/Payment.php');
    }

    public function kathaBooking()
    {
        $inputs = $this->input->post();

        if (empty($inputs)) {
            return $this->output->set_content_type('application/json')
                ->set_output(json_encode(['status' => false, 'message' => 'No data received']));
        }

        $res = $this->User_model->kathaBooking($inputs);

        if ($res && isset($res['status']) && $res['status'] === true) {
            $raw_id = $res['id'];

            $amountStr = $inputs['amount'];
            $cleanAmount = (float) str_replace(['₹', ','], '', $amountStr);

            $this->load->library('payment');
            // $payment_link = $this->payment->generate_link('katha_bookings', $raw_id, $cleanAmount, $inputs['yajmanName'], $inputs);

            $result = $this->payment->generate_link(
                'katha',
                $raw_id,
                $cleanAmount,
                $inputs['yajmanName'],
                $inputs
            );

            if ($result['status']) {

                echo json_encode([
                    'status' => true,
                    'payment_url' => $result['payment_url'],
                    'payment_id' => $result['payment_id']
                ]);

            } else {

                echo json_encode([
                    'status' => false,
                    'message' => $result['message']
                ]);
            }

            // if ($payment_link) {
            //     echo json_encode(['status' => true, 'payment_url' => $payment_link]);
            // } else {
            //     echo json_encode(['status' => false, 'message' => 'Payment link generation failed']);
            // }
        } else {
            echo json_encode(['status' => false, 'message' => $res['message'] ?? 'Booking Failed']);
        }
    }

    public function gauSevaDonation()
    {
        $inputs = $this->input->post();

        if (empty($inputs)) {
            echo json_encode([
                'status' => false,
                'message' => 'No data received.'
            ]);
            return;
        }

        $res = $this->User_model->gauSevaDonation($inputs);

        if (!$res['status']) {
            echo json_encode($res);
            return;
        }


        $amount = str_replace(['₹', ','], '', $inputs['amount']);
        $amount = (float) $amount;

        $this->load->library('payment');

        $payment = $this->payment->generate_link(
            'gau_seva',
            $res['id'],
            $amount,
            $inputs['fullName'],
            $inputs
        );


        if ($payment['status']) {

            echo json_encode([
                'status' => true,
                'payment_url' => $payment['payment_url'],
                'payment_id' => $payment['payment_id']
            ]);

        } else {

            echo json_encode([
                'status' => false,
                'message' => $payment['message']
            ]);
        }

    }

    public function contactQuery()
    {
        header('Content-Type: application/json');

        $res = $this->User_model->contactQuery();
        echo json_encode($res);
    }

    public function get_reviews()
    {
        $res = $this->User_model->get_reviews();
        echo json_encode($res);
    }

    public function add_new_review()
    {
        $res = $this->User_model->add_new_review();
        echo json_encode($res);
    }

    public function get_blogs()
    {
        $res = $this->User_model->get_blogs();
        echo json_encode($res);
    }

    public function like_blog()
    {
        $res = $this->User_model->like_blog();
        echo json_encode($res);
    }

    public function fetchkathaTypes()
    {
        $res = $this->User_model->fetchkathaTypes();
        echo json_encode($res);
    }

    public function fetchShankalpPlans()
    {
        $res = $this->User_model->fetchShankalpPlans();
        echo json_encode($res);
    }

    public function getBrajDarshanPlaces()
    {
        $res = $this->User_model->getBrajDarshanPlaces();
        echo json_encode($res);
    }

    public function fetchCoreMotos()
    {
        $res = $this->User_model->fetchCoreMotos();
        echo json_encode($res);
    }

    public function fetchMemberShipPlans()
    {
        $res = $this->User_model->fetchMemberShipPlans();
        echo json_encode($res);
    }

    public function joinMembership()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);

        if (empty($inputs)) {
            echo json_encode([
                'status' => false,
                'message' => 'Invalid request.'
            ]);
            return;
        }

        $res = $this->User_model->joinMembership($inputs);

        if (!$res['status']) {
            echo json_encode([
                'status' => false,
                'message' => 'Membership registration failed.'
            ]);
            return;
        }

        // Convert amount
        $amount = str_replace(['₹', ',', ' Lakh'], '', $inputs['amount']);

        if (stripos($inputs['amount'], 'Lakh') !== false) {
            $amount = (float) $amount * 100000;
        } else {
            $amount = (float) $amount;
        }

        $this->load->library('payment');

        $payment = $this->payment->generate_link(
            'memberships',
            $res['id'],
            $amount,
            $inputs['name'],
            $inputs
        );

        if ($payment['status']) {

            echo json_encode([
                'status' => true,
                'payment_url' => $payment['payment_url'],
                'payment_id' => $payment['payment_id'],
                'message' => 'Payment link generated successfully.'
            ]);

        } else {

            echo json_encode([
                'status' => false,
                'message' => $payment['message']
            ]);
        }
    }

    public function joinAsVolenteer()
    {
        $res = $this->User_model->joinAsVolenteer();
        echo json_encode($res);
    }

    public function fetchBanners()
    {
        $res = $this->User_model->fetchBanners();

        if (!empty($res)) {
            foreach ($res as &$banner) {
                $banner['imageUrl'] = base_url("backend/" . $banner['imageUrl']);
            }
        }
        echo json_encode($res);
    }

    public function upcomingKathaPosters()
    {
        $res = $this->User_model->upcomingKathaPosters();
        echo json_encode($res);
    }

    public function createDonatePaymentLink()
    {
        $amount = $this->input->post('amount');

        if ($amount < 1) {
    echo json_encode([
        'status' => false,
        'message' => 'Minimum donation amount is ₹1.'
    ]);
    return;
}

        if ($amount > 500001) {
            echo json_encode([
                'status' => false,
                'message' => 'Maximum donation amount is ₹5,00,001.'
            ]);
            return;
        }

        $this->load->library('payment');

        $data = [
            'amount' => $amount,
            'status' => 'pending',
            'created_at' => date('Y-m-d H:i:s')
        ];

        $this->db->insert('donations', $data);

        $donationId = $this->db->insert_id();

        $payment = $this->payment->generate_link(
            'donations',
            $donationId,
            $amount,
            'Anonymous Donor',
            []
        );

        if ($payment['status']) {

            echo json_encode([
                'status' => true,
                'payment_url' => $payment['payment_url'],
                'payment_id' => $payment['payment_id']
            ]);

        } else {

            echo json_encode([
                'status' => false,
                'message' => $payment['message']
            ]);
        }
    }
}

?>