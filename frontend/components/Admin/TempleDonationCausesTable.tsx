"use client";
import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function TempleDonationCausesTable({
  data = [],
  onView,
  onEdit,
  onDelete,
}: {
  data: any[];
  onView: (donor: any) => void;
  onEdit: (donor: any) => void;
  onDelete: (id: string | number) => void;
}) {
  const totals = data.reduce(
    (acc, curr) => {
      const amount = parseFloat(curr.amount) || 0;
      if (curr.status === "Success") acc.success += amount;
      if (curr.status === "Pending") acc.pending += amount;
      return acc;
    },
    { success: 0, pending: 0 },
  );

  const getStatusBadge = (status: string) => {
    const styles =
      status === "Success"
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700";
    return (
      <span
        className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${styles}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="font-semibold text-lg text-[#1E0F0A]">
          Recent Donor Records
        </h2>
        <p className="text-xs text-gray-400">
          View and manage donor commitments and contributions.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
          <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">
            Total Success
          </p>
          <h3 className="text-xl font-bold text-green-800">
            ₹{totals.success.toLocaleString()}
          </h3>
        </div>
        <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100">
          <p className="text-[10px] text-yellow-600 font-bold uppercase tracking-widest">
            Total Pending
          </p>
          <h3 className="text-xl font-bold text-yellow-800">
            ₹{totals.pending.toLocaleString()}
          </h3>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#EAE4DF] shadow-sm bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#FAF8F5]">
            <tr className="text-[#5C3A1E]">
              <th className="py-4 px-4 font-semibold">Donor Name</th>
              <th className="py-4 px-4 font-semibold">Contact</th>
              <th className="py-4 px-4 font-semibold">Gotra / Sankalpa</th>
              <th className="py-4 px-4 font-semibold">Amount</th>
              <th className="py-4 px-4 font-semibold">Payment Mode</th>
              <th className="py-4 px-4 font-semibold">Cause</th>
              <th className="py-4 px-4 font-semibold">Status</th>
              <th className="py-4 px-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAE4DF]">
            {data.length > 0 ? (
              data.map((donor) => (
                <tr
                  key={donor.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="font-medium text-[#1E0F0A]">
                      {donor.donor_name}
                    </div>
                    <div className="text-[10px] text-gray-400">
                      {donor.email}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600 font-mono text-xs">
                    {donor.mobile}
                  </td>
                  <td className="py-4 px-4 text-[#A63D00] font-medium italic text-xs">
                    {donor.gotra_sankalpa}
                  </td>
                  <td className="py-4 px-4 font-bold text-[#1E0F0A]">
                    ₹{parseFloat(donor.amount).toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-xs text-gray-600">
                    {donor.payment_mode}
                  </td>
                  <td className="py-4 px-4">
                    <span className="bg-gray-100 px-2 py-1 rounded text-[10px] uppercase font-bold text-gray-600">
                      {donor.cause}
                    </span>
                  </td>
                  <td className="py-4 px-4">{getStatusBadge(donor.status)}</td>

                  <td className="py-4 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => onView(donor)} // Naya function prop
                        className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all cursor-pointer"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => onEdit(donor)} // Naya function prop
                        className="p-1.5 text-gray-400 hover:text-[#A63D00] hover:bg-orange-50 rounded-lg transition-all cursor-pointer"
                        title="Edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => onDelete(donor.id)} // Naya function prop
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-10 text-center text-gray-400">
                  No donor records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
