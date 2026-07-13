<?php
class Payment_model extends CI_Model
{
    public function updatePaymentLink($reference_type, $reference_id, $payment_link_id)
    {
        $tables = [
            'membership' => 'memberships',
            'katha' => 'katha_bookings',
            'donation' => 'donations',
            'gau_seva' => 'gau_seva_donations',
        ];

        if (!isset($tables[$reference_type])) {
            return false;
        }

        return $this->db
            ->where('id', $reference_id)
            ->update($tables[$reference_type], [
                'payment_link_id' => $payment_link_id
            ]);
    }
}
