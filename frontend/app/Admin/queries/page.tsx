"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import { useAppSelector } from "@/store/hooks";
import ContactQueriesView from "@/components/Admin/ContactQueriesView";
import { ContactQuery } from "@/components/UI/Types.types";
import { userContactDetails, deleteQuery, updateQueryStatus } from "@/services/admin.services";
import toast from "react-hot-toast";

export default function AdminContactPage() {
  const activeTab = useAppSelector((state) => state.admin.activeTab);
  // Initialized as an empty array since data comes from the API
  const [queries, setQueries] = useState<ContactQuery[]>([]);

const handleUpdateStatus = async (
  id: string | number,
  newStatus: "Pending" | "Resolved",
) => {
  try {
    // Pending -> 0, Resolved -> 1 (यदि आपका DB नंबर लेता है)
    // या यदि DB स्ट्रिंग लेता है, तो सीधा newStatus भेजें
    const response = await updateQueryStatus(id.toString(), newStatus);

    if (response.status) {
      toast.success(response.message);
      fetchContactDetails(); // डेटा रिफ्रेश करें
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    console.error("Error updating status:", error);
    toast.error("स्थिति अपडेट करने में त्रुटि आई।");
  }
};

  const handleDeleteQuery = async (id: string | number) => {
    try {
      if (confirm("क्या आप इस संदेश को हटाना चाहते हैं?")) {
        const response = await deleteQuery(id.toString());
        if (response.status) {
          toast.success(response.message);
          setQueries(response.contact_queries);
          fetchContactDetails();
        } else {
          toast.error(response.message);
        }
      }
    } catch (error) {
      console.error("Error deleting query:", error);
      toast.error("संदेश हटाने में त्रुटि आई।");
    }
  };

  const fetchContactDetails = async () => {
    try {
      const response = await userContactDetails();
      console.log("Fetched Data:", response);

      // Update this line: Use response.contact_queries instead of response.data
      if (response.status && response.contact_queries) {
        setQueries(response.contact_queries);
      } else {
        setQueries([]); // Fallback to empty array if something goes wrong
      }
    } catch (error) {
      console.error("Error fetching contact details:", error);
      setQueries([]); // Ensure it doesn't break the UI on error
    }
  };

  useEffect(() => {
    fetchContactDetails();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A] antialiased">
      <Sidebar />
      <Navbar />

      <main className="md:ml-64 pt-24 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
        <ContactQueriesView
          queries={queries}
          onUpdateStatus={handleUpdateStatus}
          onDeleteQuery={handleDeleteQuery}
        />
      </main>
    </div>
  );
}
