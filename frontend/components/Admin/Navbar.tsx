// "use client";

// import React, { useEffect } from "react";
// import { Bell, Search, ShieldCheck } from "lucide-react";
// import { useSelector } from "react-redux";
// import { getAdminDetails} from "@/utils/authToken";

// export default function Navbar() {
//   const { adminUser } = useSelector((state: any) => state.admin);

//   useEffect(() => {
//     getAdminDetails();
//   }, []);

//   return (
//     <header className="h-16 bg-white border-b border-[#1E0F0A]/5 fixed top-0 right-0 left-64 z-10 px-8 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
//       {/* Search Bar */}
//       <div className="relative w-72">
//         <Search className="w-4 h-4 text-[#5C3A1E]/40 absolute left-3 top-1/2 -translate-y-1/2" />
//         <input
//           type="text"
//           placeholder="Search records, receipts..."
//           className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl py-2 pl-9 pr-4 text-xs font-medium text-[#1E0F0A] placeholder-[#5C3A1E]/40 focus:outline-none focus:border-[#D4A017] transition-colors"
//         />
//       </div>

//       {/* Quick Profile & Notification Action */}
//       <div className="flex items-center gap-6">
//         <button className="relative p-2 rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer text-[#1E0F0A]/70">
//           <Bell className="w-4 h-4" />
//           <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#A63D00] rounded-full ring-2 ring-white" />
//         </button>

//         <div className="flex items-center gap-3 pl-4 border-l border-[#1E0F0A]/10">
//           <div className="text-right">
//             <p className="text-xs font-bold text-[#1E0F0A] flex items-center gap-1.5 justify-end">
//               {adminUser?.fullname}
//               <ShieldCheck className="w-3 h-3 text-[#D4A017]" />
//             </p>
//             <p className="text-[10px] text-[#5C3A1E]/60 capitalize">
//             {adminUser?.role.split("_").join(" ")}
//             </p>
//           </div>
//           <div className="w-9 h-9 rounded-xl bg-[#FFF9EE] border border-[#D4A017]/20 flex items-center justify-center font-serif text-sm font-bold text-[#A63D00]">
//             {adminUser?.fullname ? adminUser.fullname.charAt(0) : "S"}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import React, { useEffect } from "react";
import { Bell, Search, ShieldCheck, Menu } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileSidebar } from "@/store/slices/adminSlice";
import { getAdminDetails } from "@/utils/authToken";

export default function Navbar() {
  const dispatch = useDispatch();
  const { adminUser, isMobileSidebarOpen } = useSelector(
    (state: any) => state.admin,
  );

  useEffect(() => {
    getAdminDetails();
  }, []);

  return (
    <header className="h-16 bg-white border-b border-[#1E0F0A]/5 fixed top-0 right-0 left-0 md:left-64 z-30 px-4 md:px-8 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <button
        onClick={() => dispatch(toggleMobileSidebar())}
        className="md:hidden p-2 -ml-2 text-[#1E0F0A] hover:bg-[#FAF8F5] rounded-xl transition-colors"
      >
        <Menu size={24} />
      </button>

      {/* Search Bar */}
      <div className="relative flex-1 max-w-md md:w-72 mx-4 md:mx-0">
        <Search className="w-4 h-4 text-[#5C3A1E]/40 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search records, receipts..."
          className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl py-2 pl-9 pr-4 text-xs font-medium text-[#1E0F0A] placeholder-[#5C3A1E]/40 focus:outline-none focus:border-[#D4A017]"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <button className="relative p-2 rounded-xl hover:bg-[#FAF8F5] transition-colors text-[#1E0F0A]/70">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#A63D00] rounded-full ring-2 ring-white" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-[#1E0F0A]/10">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-[#1E0F0A] flex items-center gap-1.5 justify-end">
              {adminUser?.fullname}
              <ShieldCheck className="w-3 h-3 text-[#D4A017]" />
            </p>
            <p className="text-[10px] text-[#5C3A1E]/60 capitalize">
              {adminUser?.role?.split("_").join(" ")}
            </p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-[#FFF9EE] border border-[#D4A017]/20 flex items-center justify-center font-serif text-sm font-bold text-[#A63D00]">
            {adminUser?.fullname?.charAt(0) || "S"}
          </div>
        </div>
      </div>
    </header>
  );
}