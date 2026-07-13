"use client";
import React, { useState } from "react";
import {
  Edit,
  Search,
  CheckCircle2,
  Clock,
  X,
  User,
  FileText,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

interface brajDarshan {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  id_name: string;
  id_number: string;
  yatra_mode: string;
  status: string;
  guest_count: number;
}

interface Props {
  enquiries: brajDarshan[];
  onUpdateStatus: (id: string, status: string) => void;
}

const BrajDarshanEnquiry = ({ enquiries, onUpdateStatus }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<brajDarshan | null>(null);
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEnquiries = (enquiries || []).filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.yatra_mode.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setSelectedStatus(item.status);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    if (editingItem) {
      onUpdateStatus(editingItem.id, selectedStatus);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* हेडर */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#1E0F0A]">
            दर्शनार्थ पंजीकरण विवरण
          </h1>
          <p className="text-xs text-[#5C3A1E]/70 font-light mt-0.5">
            श्रद्धालुओं के पंजीकरण और दर्शन संबंधी समस्त विवरणों का डिजिटल
            प्रबंधन एवं ट्रैकिंग।
          </p>
        </div>
      </div>

      {/* मुख्य टेबल */}
      <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-6 shadow-[0_4px_25px_-10px_rgba(0,0,0,0.01)] space-y-6">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#5C3A1E]/40 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="नाम या यात्रा प्रकार से खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-[#1E0F0A] placeholder-[#5C3A1E]/40 focus:outline-none focus:border-[#A63D00] transition-colors"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E0F0A]/5 text-[10px] font-bold text-[#5C3A1E]/40 uppercase tracking-wider bg-[#FAF8F5]">
                <th className="py-3 px-4">S.No</th>
                <th className="py-3 px-4">भक्त का नाम</th>
                <th className="py-3 px-4">संपर्क विवरण</th>
                <th className="py-3 px-4">पहचान पत्र</th>
                <th className="py-3 px-4">यात्रा मोड</th>
                <th className="py-3 px-4 text-center">अतिथि</th>
                <th className="py-3 px-4">स्थिति</th>
                <th className="py-3 px-4 text-center">प्रबंधन</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E0F0A]/5 text-xs">
              {filteredEnquiries.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#FAF8F5]/50 transition-colors"
                >
                  <td className="py-4 px-4 font-mono font-bold text-[#A63D00]">
                    0{index + 1}
                  </td>
                  <td className="py-4 px-4 font-bold text-[#2C1810]">
                    {item.name}
                  </td>
                  <td className="py-4 px-4 text-[#5C3A1E]">
                    <p className="flex items-center gap-1">
                      <Phone size={10} /> {item.phone_number}
                    </p>

                    <p className="flex items-center gap-1">
                      <Mail size={10} /> {item.email}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-semibold">{item.id_name}</p>

                    <p className="font-mono text-[#5C3A1E]/70">
                      {item.id_number}
                    </p>
                  </td>
                  <td className="py-4 px-4 font-medium">{item.yatra_mode}</td>

                  <td className="py-4 px-4 text-center font-bold">
                    {item.guest_count}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold ${item.status === "Completed" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}
                    >
                      {item.status === "Completed" ? (
                        <CheckCircle2 size={10} />
                      ) : (
                        <Clock size={10} />
                      )}{" "}
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 rounded-lg bg-[#FAF8F5] text-[#5C3A1E]/70 hover:bg-[#A63D00] hover:text-white transition-colors cursor-pointer"
                    >
                      <Edit size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* एडिट मोडल (Modal) */}
      {isModalOpen && editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E0F0A]/20 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm rounded-[2rem] border border-[#1E0F0A]/5 p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] space-y-6">
            {/* हेडर सेक्शन */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#1E0F0A]">
                  स्थिति अपडेट करें
                </h3>
                <p className="text-[11px] text-[#5C3A1E]/60 mt-1 uppercase tracking-wider font-semibold">
                  भक्त: {editingItem.name}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full bg-[#FAF8F5] text-[#5C3A1E]/50 hover:bg-[#A63D00] hover:text-white transition-all cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* फॉर्म कंट्रोल्स */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-[#5C3A1E]/40 tracking-widest pl-1">
                  वर्तमान स्थिति
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/10 rounded-2xl p-4 text-xs font-bold text-[#1E0F0A] focus:outline-none focus:border-[#A63D00] focus:ring-1 focus:ring-[#A63D00] transition-all cursor-pointer"
                >
                  <option value="Pending">Pending (लंबित)</option>
                  <option value="Completed">Completed (पूर्ण)</option>
                </select>
              </div>

              {/* मुख्य बटन */}
              <button
                onClick={handleUpdate} // यहाँ हमने पहले बनाया हुआ handleUpdate फंक्शन यूज़ किया है
                className="w-full bg-[#1E0F0A] text-white py-4 rounded-2xl font-bold text-xs hover:bg-[#A63D00] transition-all duration-300 transform active:scale-95 shadow-lg shadow-[#A63D00]/20 cursor-pointer"
              >
                बदलाव सुरक्षित करें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrajDarshanEnquiry;
