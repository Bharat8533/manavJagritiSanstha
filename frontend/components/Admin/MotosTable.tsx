"use client";
import React from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function MotosTable({
  data = [],
  onEdit,
  onDelete,
}: {
  data: any[];
  onEdit: (moto: any) => void;
  onDelete: (id: string | number) => void;
}) {
  const parseExtraPoints = (points: any) => {
    try {
      const parsed = typeof points === "string" ? JSON.parse(points) : points;
      return Array.isArray(parsed) ? parsed.join(", ") : points;
    } catch (e) {
      return points;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-[#1E0F0A]">Core Objectives</h2>
          <p className="text-sm text-gray-500">
            Manage your website's main objectives.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#EAE4DF] overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#FAF8F5]">
            <tr className="text-[#5C3A1E] uppercase text-[10px] tracking-wider font-bold">
              <th className="py-4 px-6">S.No</th>
              <th className="py-4 px-6">Title</th>
              <th className="py-4 px-6">Description</th>
              <th className="py-4 px-6">Extra Points</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAE4DF]">
            {data.length > 0 ? (
              data.map((moto, index) => (
                <tr key={moto.id} className="hover:bg-gray-50/50">
                  <td className="py-4 px-6 font-mono text-gray-400">
                    0{moto.sno || index + 1}
                  </td>
                  <td className="py-4 px-6 font-bold text-[#1E0F0A]">
                    {moto.title}
                  </td>
                  <td className="py-4 px-6 text-gray-500 max-w-[200px] truncate">
                    {moto.description}
                  </td>
                  <td className="py-4 px-6 text-gray-500 text-xs">
                    {parseExtraPoints(moto.extra_points)?.substring(0, 40)}...
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => onEdit(moto)}
                      className="p-2 text-gray-400 hover:text-[#A63D00] cursor-pointer"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(moto.id)}
                      className="p-2 text-gray-400 hover:text-red-500 cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-10 text-center text-gray-400">
                  No data found. Please add a new moto.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
