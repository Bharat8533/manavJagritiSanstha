"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import MotosTable from "@/components/Admin/MotosTable";
import MethodologyTable from "@/components/Admin/MethodologyTable";
import TempleDonationCausesTable from "@/components/Admin/TempleDonationCausesTable";
import toast, { Toaster } from "react-hot-toast";
import AddTempleDonationModal from "@/components/Admin/components/AddTempleDonationModal";
import AddMotoModal from "@/components/Admin/components/AddMotoModal";
import AddMethodologyModal from "@/components/Admin/components/AddMethodologyModal";
import {
  fetchCoreMotos,
  fetchTempleMethodology,
  fetchTempleDonationDetails,
  addCoreMoto,
  updateCoreMoto,
  deleteCoreMoto,
  updateMethodology,
  addMethodology,
  deleteMethodology,
  addTempleDonation,
  updateTempleDonation,
  deleteDonar,
} from "@/services/admin.services";
import {
  X,
} from "lucide-react";

// 1. TabType ko export ya define karein taaki children components use kar sakein
type TabType = "motos" | "methodology" | "donation";

export default function MandirManagementPage() {
  const [activeTab, setActiveTab] = useState<TabType>("motos");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const tabs: { id: TabType; label: string }[] = [
    { id: "motos", label: "Core Motos" },
    { id: "methodology", label: "Methodology" },
    { id: "donation", label: "Donation Causes" },
  ];

  const [isMotoModalOpen, setIsMotoModalOpen] = useState(false);
  const [isMethodModalOpen, setIsMethodModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleAddClick = () => {
    if (activeTab === "motos") setIsMotoModalOpen(true);
    if (activeTab === "methodology") setIsMethodModalOpen(true);
    if (activeTab === "donation") {
      setEditingDonation(null);
      setIsOfflineDonationModalOpen(true);
    }
  };

  const getButtonLabel = () => {
    switch (activeTab) {
      case "motos":
        return "Add New Moto";
      case "methodology":
        return "Add New Step";
      case "donation":
        return "Add New Donation";
      default:
        return "Add New Entry";
    }
  };

  const [moto, setMoto] = useState([]);
  const [method, setMethod] = useState([]);
  const [donation, setDonation] = useState([]);

  const [editingMoto, setEditingMoto] = useState(null);
  const [editingMethod, setEditingMethod] = useState(null);
  const [editingDonation, setEditingDonation] = useState<any>(null);

  const [selectedDonor, setSelectedDonor] = useState<any>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isOfflineDonationModalOpen, setIsOfflineDonationModalOpen] =
    useState(false);

  const handleEditClick = (moto: any) => {
    setEditingMoto(moto);
    setIsMotoModalOpen(true);
  };

  const handleEditMethodClick = (item: any) => {
    setEditingMethod(item);
    setIsMethodModalOpen(true);
  };

  const loadCoreMoto = async () => {
    try {
      const response = await fetchCoreMotos();
      if (response && response.status) {
        setMoto(response.core_motos);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error fetching core motos:", error);
    }
  };

  const loadMethods = async () => {
    try {
      const response = await fetchTempleMethodology();
      if (response && response.status) {
        setMethod(response.temple_methodology);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loadDonations = async () => {
    try {
      const response = await fetchTempleDonationDetails();
      if (response && response.status) {
        console.log(response.temple_donations);
        setDonation(response.temple_donations);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveMoto = async (data: any) => {
    try {
      const response = await addCoreMoto(data);
      if (response.status) {
        toast.success("Moto added successfully!");
        loadCoreMoto();
        setIsMotoModalOpen(false);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error saving data");
    }
  };

  const handleUpdateMoto = async (data: any) => {
    try {
      const response = await updateCoreMoto(data);
      if (response.status) {
        toast.success("Moto updated successfully!");
        loadCoreMoto();
        setIsMotoModalOpen(false);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error updating data");
    }
  };

  const handleDeleteMoto = async (id: any) => {
    if (confirm("Are you sure you want to delete this moto?")) {
      try {
        const response = await deleteCoreMoto(id);
        if (response.status) {
          toast.success("Moto deleted successfully!");
          loadCoreMoto();
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error("Error deleting data");
      }
    }
  };

  const handleSaveMethod = async (data: any) => {
    try {
      const response = await addMethodology(data);
      if (response.status) {
        toast.success("Methodology step added!");
        loadMethods();
        setIsMethodModalOpen(false);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error saving methodology");
    }
  };

  const handleUpdateMethod = async (data: any) => {
    try {
      const response = await updateMethodology(data);
      if (response.status) {
        toast.success("Methodology updated!");
        loadMethods();
        setIsMethodModalOpen(false);
        setEditingMethod(null);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error updating methodology");
    }
  };

  const handleDeleteMethod = async (id: any) => {
    if (confirm("Are you sure you want to delete this step?")) {
      try {
        const response = await deleteMethodology(id);
        if (response.status) {
          toast.success("Step deleted successfully!");
          loadMethods();
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error("Error deleting methodology");
      }
    }
  };

  const handleViewDonor = (donor: any) => {
    setSelectedDonor(donor);
    setIsViewModalOpen(true);
  };

  const handleDeleteDonor = async (id: string | number) => {
    if (confirm("Are you sure you want to delete this detail?")) {
      try {
        const response = await deleteDonar(id);
        if (response.status) {
          toast.success("Donar Details deleted successfully!");
          loadMethods();
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error("Error deleting Donar Details");
      }
    }
  };

  const addDonation = async (data: any) => {
    try {
      if (!data.donor_name || !data.amount) {
        toast.error("Please fill required fields");
        return;
      }

      const response = await addTempleDonation(data);

      if (response && response.status) {
        toast.success("Offline donation recorded successfully!");
        setIsOfflineDonationModalOpen(false);
        loadDonations();
      } else {
        toast.error(response?.message || "Failed to save donation");
      }
    } catch (error) {
      console.error("Error saving donation:", error);
      toast.error("An error occurred while saving.");
    }
  };

  const handleEditDonationClick = (donor: any) => {
    setEditingDonation(donor);
    setIsOfflineDonationModalOpen(true);
  };

  const saveDonationUpdate = async (data: any) => {
    try {
      const response = await updateTempleDonation(data);
      if (response.status) {
        toast.success("Donation updated successfully!");
        loadDonations();
        setIsOfflineDonationModalOpen(false);
        setEditingDonation(null); // Reset
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error updating donation");
    }
  };

  useEffect(() => {
    loadCoreMoto();
    loadMethods();
    loadDonations();
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2C1810]">
      <Sidebar />
      <div className="pl-64">
        <Navbar />

        <main className="pt-24 px-8 pb-12 max-w-7xl mx-auto">
          <Toaster />

          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#A63D00] uppercase bg-[#A63D00]/5 px-2.5 py-1 rounded-md">
                संस्था एवं आश्रम गतिविधियाँ
              </span>
              <h1 className="font-serif text-2xl font-bold text-[#1E0F0A] mt-2">
                मंदिर उत्सव एवं धार्मिक कार्यक्रम प्रबंधन
              </h1>
            </div>

            <button
              onClick={handleAddClick}
              className="bg-[#A63D00] hover:bg-[#8B2612] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              {/* Dynamic Label */}
              {getButtonLabel()}
            </button>
          </div>

          {/* Main Container */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE4DF] overflow-hidden">
            <div className="flex border-b border-[#EAE4DF]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-5 text-sm font-semibold transition-all relative cursor-pointer ${
                    activeTab === tab.id
                      ? "text-[#A63D00]"
                      : "text-[#8B6B5C] hover:text-[#2C1810]"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A63D00]" />
                  )}
                </button>
              ))}
            </div>

            <div className="p-8 min-h-[500px]">
              {activeTab === "motos" && (
                <MotosTable
                  data={moto}
                  onEdit={handleEditClick}
                  onDelete={handleDeleteMoto}
                />
              )}
              {activeTab === "methodology" && (
                <MethodologyTable
                  data={method}
                  onEdit={handleEditMethodClick}
                  onDelete={handleDeleteMethod}
                />
              )}
              {activeTab === "donation" && (
                <TempleDonationCausesTable
                  data={donation}
                  onView={handleViewDonor}
                  onEdit={handleEditDonationClick}
                  onDelete={handleDeleteDonor}
                />
              )}
            </div>
          </div>
        </main>

        <AddMotoModal
          isOpen={isMotoModalOpen}
          initialData={editingMoto}
          onClose={() => {
            setIsMotoModalOpen(false);
            setEditingMoto(null);
          }}
          onSave={(data) => {
            if (editingMoto) {
              handleUpdateMoto(data);
            } else {
              handleSaveMoto(data);
            }
          }}
        />
        <AddMethodologyModal
          isOpen={isMethodModalOpen}
          initialData={editingMethod}
          onClose={() => {
            setIsMethodModalOpen(false);
            setEditingMethod(null);
          }}
          onSave={(data: any) => {
            if (editingMethod) {
              handleUpdateMethod(data);
            } else {
              handleSaveMethod(data);
            }
          }}
        />
        <AddTempleDonationModal
          isOpen={isOfflineDonationModalOpen}
          initialData={editingDonation}
          onClose={() => {
            setIsOfflineDonationModalOpen(false);
            setEditingDonation(null);
          }}
          onSave={(data: any) => {
            // Agar editingDonation mein id hai, toh update logic chalega
            if (editingDonation && editingDonation.id) {
              saveDonationUpdate({ ...data, id: editingDonation.id });
            } else {
              addDonation(data);
            }
          }}
        />
      </div>

      {isViewModalOpen && selectedDonor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h2 className="text-lg font-bold text-[#1E0F0A]">
                Donation Full Details
              </h2>
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-8">
              {/* 1. Donor Info Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 text-[#A63D00] font-bold text-xs uppercase tracking-widest border-b pb-2 mb-2">
                  Donor Information
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Name
                  </p>
                  <p className="text-sm font-semibold">
                    {selectedDonor.donor_name}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Email
                  </p>
                  <p className="text-sm font-semibold">{selectedDonor.email}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Mobile
                  </p>
                  <p className="text-sm font-semibold">
                    {selectedDonor.mobile}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Gotra/Sankalpa
                  </p>
                  <p className="text-sm font-semibold text-[#A63D00]">
                    {selectedDonor.gotra_sankalpa}
                  </p>
                </div>
              </div>

              {/* 2. Donation Info Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 text-[#A63D00] font-bold text-xs uppercase tracking-widest border-b pb-2 mb-2">
                  Transaction Details
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Amount
                  </p>
                  <p className="text-sm font-bold text-green-700">
                    ₹{parseFloat(selectedDonor.amount).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Cause
                  </p>
                  <p className="text-sm font-semibold">{selectedDonor.cause}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Payment Mode
                  </p>
                  <p className="text-sm font-semibold">
                    {selectedDonor.payment_mode}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Status
                  </p>
                  <p className="text-sm font-semibold">
                    {selectedDonor.status}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Transaction ID
                  </p>
                  <p className="text-xs font-mono bg-gray-100 p-2 rounded">
                    {selectedDonor.transaction_id || "N/A"}
                  </p>
                </div>
              </div>

              {/* 3. System Meta Section */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dashed">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    Created At
                  </p>
                  <p className="text-xs text-gray-600">
                    {selectedDonor.created_at}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t flex justify-end">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-6 py-2 bg-[#A63D00] text-white text-sm font-bold rounded-lg hover:bg-[#8B2612] cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
