"use client";
import React, { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function MethodologyTable({
  data = [],
  onEdit,
  onDelete,
}: {
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: any) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-[#1E0F0A]">
            Methodology Workflow
          </h2>
          <p className="text-sm text-gray-500">
            Manage project execution stages.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#EAE4DF] overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#FAF8F5]">
            <tr className="text-[#5C3A1E] uppercase text-[10px] tracking-wider font-bold">
              <th className="py-4 px-6">Step</th>
              <th className="py-4 px-6">Phase</th>
              <th className="py-4 px-6">Title</th>
              <th className="py-4 px-6">Description</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAE4DF]">
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50">
                  <td className="py-4 px-6 font-mono text-[#A63D00] font-bold">
                    0{item.step_number}
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-[#FDF0E6] text-[#A63D00] text-[10px] font-bold rounded-md uppercase">
                      {item.phase}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-bold text-[#1E0F0A]">
                    {item.title}
                  </td>
                  <td className="py-4 px-6 text-gray-500 max-w-[300px] truncate">
                    {item.description}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => onEdit(item)}
                      className="p-2 text-gray-400 hover:text-[#A63D00] cursor-pointer"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-10 text-center text-gray-500">
                  No methodology steps found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
