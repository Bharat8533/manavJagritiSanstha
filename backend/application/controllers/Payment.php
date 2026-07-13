<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use Razorpay\Api\Api;

class Payment extends CI_Controller
{
    protected $CI;
    private $keyId = 'rzp_test_T6d5DlliIEZmhC';
    private $keySecret = 'IVGhGDWpicn7lo4n5UDL0C3r';

    public function __construct()
    {
        $this->CI =& get_instance();
        $this->CI->load->model('Payment_model');
    }

    public function generate_link($reference_type, $reference_id, $amount, $name, $inputs = [])
    {
        try {

            // ==========================
            // Validate Required Fields
            // ==========================
            if (empty($reference_type)) {
                throw new Exception("Reference type is missing.");
            }

            if (empty($reference_id)) {
                throw new Exception("Reference ID is missing.");
            }

            if (empty($amount) || !is_numeric($amount) || $amount <= 0) {
                throw new Exception("Invalid payment amount.");
            }

            if (empty($name)) {
                throw new Exception("Customer name is required.");
            }

            // ==========================
            // Initialize Razorpay
            // ==========================
            $api = new \Razorpay\Api\Api($this->keyId, $this->keySecret);

            // ==========================
            // Customer Details
            // ==========================
            $customer = [
                'name' => trim($name)
            ];

            if (!empty($inputs['phone'])) {
                $customer['contact'] = preg_replace('/[^0-9]/', '', $inputs['phone']);
            }

            if (!empty($inputs['email'])) {
                $customer['email'] = trim($inputs['email']);
            }

            // ==========================
            // Unique Reference ID
            // ==========================
            $uniqueReference = strtoupper($reference_type) . "_" . $reference_id . "_" . time();

            // ==========================
            // Payment Payload
            // ==========================
            $payload = [
                'amount' => (int) round($amount * 100),
                'currency' => 'INR',
                'accept_partial' => false,
                'description' => "Payment for {$reference_type}",

                'customer' => $customer,

                'notify' => [
                    'sms' => true,
                    'email' => !empty($inputs['email'])
                ],

                'reminder_enable' => true,

                'notes' => [
                    'reference_type' => $reference_type,
                    'reference_id' => $reference_id
                ],

                'reference_id' => $uniqueReference,

                'expire_by' => time() + (24 * 60 * 60)
            ];

            // ==========================
            // Log Request
            // ==========================
            log_message('debug', 'Razorpay Payload: ' . json_encode($payload));

            // ==========================
            // Create Payment Link
            // ==========================
            $paymentLink = $api->paymentLink->create($payload);

            // ==========================
            // Log Response
            // ==========================
            log_message('debug', 'Razorpay Response: ' . json_encode($paymentLink));

            // ==========================
            // Save Payment Link ID
            // ==========================
            if (!empty($paymentLink->id)) {
                $this->CI->Payment_model->updatePaymentLink(
                    $reference_type,
                    $reference_id,
                    $paymentLink->id
                );
            }

            return [
                'status' => true,
                'payment_id' => $paymentLink->id,
                'payment_url' => $paymentLink->short_url,
                'response' => $paymentLink
            ];

        } catch (\Razorpay\Api\Errors\Error $e) {

            log_message('error', 'Razorpay Error: ' . $e->getMessage());

            return [
                'status' => false,
                'message' => $e->getMessage()
            ];

        } catch (\Exception $e) {

            log_message('error', 'Exception: ' . $e->getMessage());

            return [
                'status' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    // public function generate_link($reference_type, $reference_id, $amount, $name, $inputs = [])
    // {
    //     $api = new \Razorpay\Api\Api($this->keyId, $this->keySecret);

    //     try {
    //         $paymentLink = $api->paymentLink->create([
    //             'amount' => (int) ($amount * 100),
    //             'currency' => 'INR',
    //             'description' => 'Payment for ' . $reference_type . ' (ID: ' . $reference_id . ')',
    //             'customer' => [
    //                 'name' => $name,
    //                 'email' => $inputs['email'] ?? '',
    //                 'contact' => $inputs['phone'] ?? ''
    //             ],
    //             'notes' => [
    //                 'reference_id' => (string) $reference_id,
    //                 'reference_type' => $reference_type
    //             ],
    //             'expire_by' => strtotime("+24 hours"),
    //             'reference_id' => (string) $reference_id
    //         ]);

    //         $this->CI->Payment_model->updatePaymentLink($reference_type, $reference_id, $paymentLink->id);

    //         return $paymentLink->short_url;

    //     } catch (Exception $e) {
    //         log_message('error', 'Razorpay API Error: ' . $e->getMessage());
    //         return false;
    //     }
    // }

    public function razorpay_webhook()
    {
        // 1. Logs for debugging (Check this file in your root folder)
        $payload = file_get_contents('php://input');
        file_put_contents('webhook_log.txt', "Payload: " . $payload . PHP_EOL, FILE_APPEND);

        $webhookSecret = 'Manav_jagriti_sanstha@1234';
        $signature = $_SERVER['HTTP_X_RAZORPAY_SIGNATURE'] ?? '';

        if (hash_hmac('sha256', $payload, $webhookSecret) === $signature) {
            $event_data = json_decode($payload);
            $event = $event_data->event;

            if ($event == 'payment.captured' || $event == 'payment_link.paid') {
                $data = $event_data->payload->payment->entity;
                // Important: Fetching ref_id from notes
                $ref_id = $data->notes->reference_id ?? null;

                if ($ref_id) {
                    // Update Booking
                    $this->db->where('id', $ref_id);
                    $this->db->update('katha_bookings', ['status' => 'paid']);

                    // Insert into Payments
                    $this->db->insert('payments', [
                        'payment_id' => $data->id,
                        'amount' => $data->amount / 100,
                        'currency' => $data->currency,
                        'reference_type' => 'katha_bookings',
                        'reference_id' => $ref_id,
                        'payment_status' => 'success',
                        'payment_method' => $data->method,
                        'created_at' => date('Y-m-d H:i:s')
                    ]);
                }
            }
            http_response_code(200);
        } else {
            http_response_code(400);
        }
    }
}