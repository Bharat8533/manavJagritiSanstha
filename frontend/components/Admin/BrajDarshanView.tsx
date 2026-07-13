"use client";

import React, { useState, useEffect } from "react";
import { Plus, Search, MapPin, Clock, X, Edit } from "lucide-react";

interface BrajPlace {
  id: string;
  place_name: string;
  zone: string;
  timings: string;
  crowd_level: "Low" | "Medium" | "High";
  special_notice: string;
  status: string;
}

interface BrajDarshanViewProps {
  places: BrajPlace[];
  onAddPlace: (newPlace: BrajPlace) => void;
  onEditPlace: (id: string, updatedPlace: BrajPlace) => void;
  onOpenModal: () => void;
  editingItem: BrajPlace | null;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onSetEditing: (item: BrajPlace | null) => void;
}

export default function BrajDarshanView({
  places,
  onAddPlace,
  onEditPlace,
  editingItem,
  isModalOpen,
  setIsModalOpen,
  onSetEditing,
}: BrajDarshanViewProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const [placeName, setPlaceName] = useState("");
  const [zone, setZone] = useState("वृंदावन धाम");
  const [timings, setTimings] = useState(
    "प्रातः 07:00 - 12:00 | सायं 04:00 - 08:30",
  );
  const [crowdLevel, setCrowdLevel] = useState<"Low" | "Medium" | "High">(
    "Medium",
  );
  const [specialNotice, setSpecialNotice] = useState("");

  useEffect(() => {
    if (editingItem) {
      setPlaceName(editingItem.place_name || "");
      setZone(editingItem.zone || "वृंदावन धाम");
      setTimings(editingItem.timings || "");
      setCrowdLevel(editingItem.crowd_level || "Medium");
      setSpecialNotice(editingItem.special_notice || "");
    } else {
      setPlaceName("");
      setZone("वृंदावन धाम");
      setTimings("प्रातः 07:00 - 12:00 | सायं 04:00 - 08:30");
      setCrowdLevel("Medium");
      setSpecialNotice("");
    }
  }, [editingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: BrajPlace = {
      id: editingItem?.id || Math.random().toString(),
      place_name: placeName,
      zone: zone,
      timings: timings,
      crowd_level: crowdLevel,
      special_notice: specialNotice,
      status: "Active",
    };

    if (editingItem) {
      console.log('editingItem', editingItem);
      onEditPlace(editingItem.id, payload);
    } else {
      onAddPlace(payload);
    }

    setIsModalOpen(false);
    onSetEditing(null);
  };

  const filteredPlaces = (places || []).filter(
    (item) =>
      item.place_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.zone.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const renderCrowdBadge = (level: string) => {
    switch (level) {
      case "High":
        return (
          <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 border border-red-200/50 px-2.5 py-1 rounded-full text-[10px] font-bold">
            ● अत्यधिक भीड़
          </span>
        );
      case "Medium":
        return (
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200/50 px-2.5 py-1 rounded-full text-[10px] font-bold">
            ● सामान्य भीड़
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200/50 px-2.5 py-1 rounded-full text-[10px] font-bold">
            ● सुलभ दर्शन (कम भीड़)
          </span>
        );
    }
  };

  useEffect(() => {
    if (editingItem) {
      setIsModalOpen(true);
      setPlaceName(editingItem.place_name || "");
      setZone(editingItem.zone || "वृंदावन धाम");
      setTimings(editingItem.timings || "");
      setCrowdLevel(editingItem.crowd_level || "Medium");
      setSpecialNotice(editingItem.special_notice || "");
    } else {
      setPlaceName("");
      setSpecialNotice("");
    }
  }, [editingItem]);

  const openAddPlaceModal = () => {
    setPlaceName("");
    setZone("वृंदावन धाम");
    setTimings("");
    setCrowdLevel("Medium");
    setSpecialNotice("");
    setIsModalOpen(true);
    onSetEditing(null);
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* हेडर */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#A63D00] uppercase bg-[#A63D00]/5 px-2.5 py-1 rounded-md mb-2 inline-block">
            पुण्य भूमि ब्रज यात्रा प्रबंधन
          </span>
          <h1 className="font-serif text-2xl font-bold text-[#1E0F0A]">
            ब्रज दर्शन एवं तीर्थ स्थल नियंत्रण
          </h1>
          <p className="text-xs text-[#5C3A1E]/70 font-light mt-0.5">
            श्रद्धालुओं की सुविधा हेतु ब्रजमंडल के मंदिरों की दर्शन समय सारणी
            एवं लाइव स्थिति का संचालन।
          </p>
        </div>

        <button
          onClick={() => openAddPlaceModal()}
          className="inline-flex items-center gap-2 bg-[#A63D00] hover:bg-[#8B2612] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-300 transform active:scale-95 shadow-md shadow-[#A63D00]/10 cursor-pointer"
        >
          <Plus className="w-4 h-4" /> नया तीर्थ स्थल जोड़ें
        </button>
      </div>

      {/* मुख्य टेबल और सर्च */}
      <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-6 shadow-[0_4px_25px_-10px_rgba(0,0,0,0.01)] space-y-6">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#5C3A1E]/40 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="तीर्थ स्थल या क्षेत्र (उदा. वृंदावन) से खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-[#1E0F0A] placeholder-[#5C3A1E]/40 focus:outline-none focus:border-[#A63D00] transition-colors"
          />
        </div>

        {filteredPlaces.length === 0 ? (
          <div className="py-16 flex flex-col items-center justify-center text-center max-w-md mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#A63D00]/10 flex items-center justify-center mb-4 text-xl text-[#A63D00]">
              🌸
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1E0F0A]">
              कोई तीर्थ स्थल नहीं मिला
            </h3>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1E0F0A]/5 text-[10px] font-bold text-[#5C3A1E]/40 uppercase tracking-wider bg-[#FAF8F5]">
                  <th className="py-3 px-4">संख्या</th>
                  <th className="py-3 px-4">धाम क्षेत्र</th>
                  <th className="py-3 px-4">पावन स्थल / मंदिर</th>
                  <th className="py-3 px-4">दर्शन समय सारणी</th>
                  <th className="py-3 px-4">लाइव भीड़ की स्थिति</th>
                  <th className="py-3 px-4">विशेष सूचना / अलर्ट</th>
                  <th className="py-3 px-4 text-center">प्रबंधन</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E0F0A]/5 text-xs">
                {filteredPlaces.map((row, index) => (
                  <tr
                    key={index + 1}
                    className="hover:bg-[#FAF8F5]/50 transition-colors"
                  >
                    <td className="py-2 font-mono font-bold text-[#A63D00] text-center">
                      {index + 1}
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-[11px] font-medium text-[#2C1810] mt-0.5 flex items-center gap-0.5">
                        <MapPin className="w-3 h-3 text-red-500/70" />{" "}
                        {row.zone}
                      </p>
                    </td>
                    <td className="py-4 px-4 font-bold text-[#2C1810] text-sm">
                      🕌 {row.place_name}
                    </td>
                    <td className="py-4 px-4 text-[#5C3A1E] font-medium">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#A63D00]/60" />
                        <span>{row.timings}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {renderCrowdBadge(row.crowd_level)}
                    </td>
                    <td className="py-4 px-4 max-w-xs">
                      <p className="text-[#5C3A1E]/80 line-clamp-2 bg-[#FAF8F5] p-2 rounded-lg border border-[#1E0F0A]/5 font-light">
                        📢 {row.special_notice}
                      </p>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          onSetEditing(row);
                          setIsModalOpen(true);
                        }}
                        className="p-2 rounded-lg bg-[#FAF8F5] text-[#5C3A1E]/70 hover:bg-[#A63D00] hover:text-white transition-colors cursor-pointer"
                        title="संपादित करें"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* नई तीर्थ प्रविष्टि मोडल */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs">
          <div className="bg-[#FAF8F5] w-full max-w-lg rounded-3xl border border-[#1E0F0A]/10 p-6 shadow-2xl relative space-y-5 mx-4">
            <div className="flex items-center justify-between border-b border-[#1E0F0A]/5 pb-3">
              <div>
                <span className="text-[9px] font-bold tracking-widest text-[#A63D00] uppercase bg-[#A63D00]/5 px-2 py-0.5 rounded">
                  ब्रज मंडल लाइव डेटाबेस 2026
                </span>
                <h2 className="font-serif text-lg font-bold text-[#1E0F0A] mt-1">
                  {editingItem
                    ? "तीर्थ स्थल अपडेट करें"
                    : "नवीन तीर्थ स्थल / मंदिर प्रविष्टि"}
                </h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-gray-200/50 text-[#5C3A1E]/70 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-medium text-[#2C1810]">
                  तीर्थ स्थल / मंदिर का नाम *
                </label>
                <input
                  type="text"
                  required
                  placeholder="उदा. श्री बांके बिहारी मंदिर"
                  value={placeName}
                  onChange={(e) => setPlaceName(e.target.value)}
                  className="w-full bg-white border border-[#1E0F0A]/10 rounded-xl p-3 text-[#1E0F0A] focus:outline-none focus:border-[#A63D00]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-medium text-[#2C1810]">
                    ब्रज क्षेत्र / ज़ोन
                  </label>
                  <select
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full bg-white border border-[#1E0F0A]/10 rounded-xl p-3 focus:outline-none focus:border-[#A63D00]"
                  >
                    <option>वृंदावन धाम</option>
                    <option>गोवर्धन धाम</option>
                    <option>बरसाना धाम</option>
                    <option>नंदगांव धाम</option>
                    <option>मथुरा पुरी</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-medium text-[#2C1810]">
                    भीड़ का लाइव अनुमान
                  </label>
                  <select
                    value={crowdLevel}
                    onChange={(e: any) => setCrowdLevel(e.target.value)}
                    className="w-full bg-white border border-[#1E0F0A]/10 rounded-xl p-3 focus:outline-none focus:border-[#A63D00]"
                  >
                    <option value="Low">सुलभ दर्शन (कम भीड़)</option>
                    <option value="Medium">सामान्य उपस्थिति</option>
                    <option value="High">अत्यधिक भीड़ (High Alert)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-[#2C1810]">
                  दर्शन समय सारणी *
                </label>
                <input
                  type="text"
                  required
                  placeholder="उदा. प्रातः 07:45 - 12:00 | सायं 05:30 - 09:30"
                  value={timings}
                  onChange={(e) => setTimings(e.target.value)}
                  className="w-full bg-white border border-[#1E0F0A]/10 rounded-xl p-3 focus:outline-none focus:border-[#A63D00]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-medium text-[#2C1810]">
                  विशेष सूचना / महोत्सव अपडेट (यदि कोई हो)
                </label>
                <textarea
                  placeholder="उदा. आज फूल बंगला उत्सव के कारण पट 30 मिनट अतिरिक्त खुलेंगे..."
                  value={specialNotice}
                  onChange={(e) => setSpecialNotice(e.target.value)}
                  rows={3}
                  className="w-full bg-white border border-[#1E0F0A]/10 rounded-xl p-3 focus:outline-none focus:border-[#A63D00] resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#1E0F0A]/5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-gray-200/50 hover:bg-gray-200 text-[#5C3A1E] font-medium transition-colors cursor-pointer"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#A63D00] hover:bg-[#8B2612] text-white font-bold transition-colors shadow-sm cursor-pointer"
                >
                  तीर्थ डेटा लाइव करें
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
