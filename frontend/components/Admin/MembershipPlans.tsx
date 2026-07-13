import React, { useState } from "react";
import {
  Check,
  Star,
  Award,
  Zap,
  Heart,
  Crown,
  Edit3,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Plan {
  id?: string;
  name: string;
  price: string;
  icon: any;
  color: string;
  features: string[];
}

export default function MembershipPlans({
  plans,
  onEdit,
  onDelete,
}: {
  plans: Plan[];
  onEdit: (plan: Plan) => void;
  onDelete: (id: any) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`bg-white border-t-4 ${plan.color} rounded-xl shadow-sm border border-gray-100 flex flex-col`}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-50 flex justify-between items-center">
            <h3 className={`font-bold text-gray-800`}>{plan.name}</h3>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(plan)}
                className="text-gray-400 hover:text-blue-600 curspor-pointer"
              >
                <Edit3 className="w-3 h-3" />
              </button>
              <button
                onClick={() => onDelete(plan.id)}
                className="text-gray-400 hover:text-red-600 cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="px-4 py-3">
            <p className="text-2xl font-black text-[#A63D00]">₹{plan.price}</p>
          </div>

          {/* Default Visible Features */}
          <div className="px-4 pb-6 flex-grow">
            <ul className="space-y-2.5">
              {plan.features?.map((feat, i) => (
                <li
                  key={i}
                  className="text-[11px] text-gray-600 items-center flex gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-[#A63D00]" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Status */}
          <div className="px-4 py-3 bg-gray-50 rounded-b-xl text-[10px] text-gray-400 flex justify-between">
            <span>Configured</span>
            <span className="text-green-600 font-bold">LIVE</span>
          </div>
        </div>
      ))}
    </div>
  );
}
