// "use client";

// import React, { useEffect } from "react";
// import {
//   LayoutDashboard,
//   BookOpen,
//   CalendarCheck,
//   MapPin,
//   HeartHandshake,
//   Landmark,
//   MessageSquare,
//   User,
//   LogOut,
//   MessageSquareText,
//   GalleryHorizontalEnd,
//   Users,
//   Image
// } from "lucide-react";
// import { useRouter, usePathname } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { setActiveTab, logoutAdmin } from "@/store/slices/adminSlice";
// import Link from "next/link";
// import {removeAuthCookie, removeAuthToken} from "@/utils/authToken";

// const MENU_ITEMS = [
//   {
//     id: "dashboard",
//     label: "Dashboard",
//     icon: LayoutDashboard,
//     path: "/Admin/dashboard",
//   },
//   {
//     id: "gauSeva",
//     label: "Gau Seva & Accounts",
//     icon: HeartHandshake,
//     path: "/Admin/gauSeva",
//   },
//   {
//     id: "katha",
//     label: "Katha Bookings",
//     icon: CalendarCheck,
//     path: "/Admin/katha",
//   },
//   {
//     id: "brajDarshan",
//     label: "Braj Darshan",
//     icon: MapPin,
//     path: "/Admin/brajDarshan",
//   },
//   { id: "temples", label: "Temples", icon: Landmark, path: "/Admin/temples" },
//   {
//     id: "blogs",
//     label: "Blogs & Content",
//     icon: BookOpen,
//     path: "/Admin/blogs",
//   },
//   {
//     id: "queries",
//     label: "Contact Queries",
//     icon: MessageSquare,
//     path: "/Admin/queries",
//   },
//   {
//     id: "testimonials",
//     label: "Testimonials",
//     icon: MessageSquareText,
//     path: "/Admin/testimonials",
//   },
//   {
//     id: "gallery",
//     label: "Gallery",
//     icon: GalleryHorizontalEnd,
//     path: "/Admin/gallery",
//   },
//   {
//     id: "membership",
//     label: "Membership",
//     icon: Users,
//     path: "/Admin/membership",
//   },
//   {
//     id: "banners",
//     label: "Banners",
//     icon: Image,
//     path: "/Admin/banners",
//   },
//   { id: "profile", label: "Admin Profile", icon: User, path: "/Admin/profile" },
// ];

// export default function Sidebar() {

//   const router = useRouter();
//   const path = usePathname();
//   const dispatch = useDispatch();
//   const activeTab = useSelector((state: any) => state.admin.activeTab);

//   const handleLogout = () => {
//     dispatch(logoutAdmin());
//     removeAuthToken();
//     removeAuthCookie();
//     router.push("/Admin/login");
//   };

//   useEffect(() => {
//     const currentItme = MENU_ITEMS.find(item => path.includes(item.id));
//     if(currentItme){
//       dispatch(setActiveTab(currentItme.id));
//     }
//   }, [path, dispatch]);

//   return (
//     <aside className="w-64 bg-[#1E0F0A] text-white/90 h-screen fixed left-0 top-0 z-20 flex flex-col justify-between border-r border-white/5">
//       <div className="p-6">
//         <div className="flex items-center gap-3 border-b border-white/10 pb-5">
//           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A017] to-[#A63D00] flex items-center justify-center font-bold text-white text-sm">
//             S
//           </div>
//           <div>
//             <h2 className="font-serif text-sm font-bold tracking-wide text-white">
//               मानव जागृति संस्था
//             </h2>
//             <p className="text-[10px] text-[#F4D28C]/70 tracking-widest uppercase">
//               Admin Portal
//             </p>
//           </div>
//         </div>

//         <nav className="mt-6 space-y-1">
//           {MENU_ITEMS.map((item) => {
//             const Icon = item.icon;
//             const isActive = activeTab === item.id;

//             return (
//               <Link
//                 key={item.id}
//                 href={item.path}
//                 className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-medium transition-all duration-300 text-left block
//                   ${
//                     isActive
//                       ? "bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white shadow-lg shadow-[#A63D00]/10 font-semibold"
//                       : "hover:bg-white/5 text-white/70 hover:text-white"
//                   }`}
//               >
//                 <div className="flex items-center gap-3.5">
//                   <Icon
//                     className={`w-4 h-4 ${isActive ? "text-white" : "text-white/50"}`}
//                   />
//                   <span>{item.label}</span>
//                 </div>
//               </Link>
//             );
//           })}
//         </nav>
//       </div>

//       <div className="p-4 border-t border-white/5">
//         <button
//           onClick={handleLogout}
//           className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium text-red-400 hover:bg-red-500/10 transition-all duration-300 cursor-pointer text-left"
//         >
//           <LogOut className="w-4 h-4" />
//           Logout System
//         </button>
//       </div>
//     </aside>
//   );
// }

"use client";

import React, { useEffect } from "react";
import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  MapPin,
  HeartHandshake,
  Landmark,
  MessageSquare,
  User,
  LogOut,
  MessageSquareText,
  GalleryHorizontalEnd,
  Users,
  Image,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveTab,
  logoutAdmin,
  closeMobileSidebar,
} from "@/store/slices/adminSlice";
import Link from "next/link";
import { removeAuthCookie, removeAuthToken } from "@/utils/authToken";

const MENU_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/Admin/dashboard",
  },
  {
    id: "gauSeva",
    label: "Gau Seva & Accounts",
    icon: HeartHandshake,
    path: "/Admin/gauSeva",
  },
  {
    id: "katha",
    label: "Katha Bookings",
    icon: CalendarCheck,
    path: "/Admin/katha",
  },
  {
    id: "brajDarshan",
    label: "Braj Darshan",
    icon: MapPin,
    path: "/Admin/brajDarshan",
  },
  { id: "temples", label: "Temples", icon: Landmark, path: "/Admin/temples" },
  {
    id: "blogs",
    label: "Blogs & Content",
    icon: BookOpen,
    path: "/Admin/blogs",
  },
  {
    id: "queries",
    label: "Contact Queries",
    icon: MessageSquare,
    path: "/Admin/queries",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    icon: MessageSquareText,
    path: "/Admin/testimonials",
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: GalleryHorizontalEnd,
    path: "/Admin/gallery",
  },
  {
    id: "membership",
    label: "Membership",
    icon: Users,
    path: "/Admin/membership",
  },
  { id: "banners", label: "Banners", icon: Image, path: "/Admin/banners" },
  { id: "profile", label: "Admin Profile", icon: User, path: "/Admin/profile" },
];

export default function Sidebar() {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useDispatch();

  const { activeTab, isMobileSidebarOpen } = useSelector(
    (state: any) => state.admin,
  );

  const handleLogout = () => {
    dispatch(logoutAdmin());
    removeAuthToken();
    removeAuthCookie();
    router.push("/Admin/login");
  };

  // Update active tab on route change
  useEffect(() => {
    const currentItem = MENU_ITEMS.find((item) => path.includes(item.id));
    if (currentItem) {
      dispatch(setActiveTab(currentItem.id));
    }
  }, [path, dispatch]);

  // Close mobile sidebar when route changes
  useEffect(() => {
    dispatch(closeMobileSidebar());
  }, [path, dispatch]);

  return (
    <>
      {/* Desktop Sidebar - Fixed */}
      <aside className="hidden md:flex w-64 bg-[#1E0F0A] text-white/90 h-screen fixed left-0 top-0 z-20 flex-col justify-between border-r border-white/5 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A017] to-[#A63D00] flex items-center justify-center font-bold text-white text-sm">
              S
            </div>
            <div>
              <h2 className="font-serif text-sm font-bold tracking-wide text-white">
                सुरभी तीर्थ
              </h2>
              <p className="text-[10px] text-[#F4D28C]/70 tracking-widest uppercase">
                Admin Portal
              </p>
            </div>
          </div>

          <nav className="mt-6 space-y-1">
            {MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white shadow-lg shadow-[#A63D00]/10 font-semibold"
                        : "hover:bg-white/5 text-white/70 hover:text-white"
                    }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-white" : "text-white/50"}`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-white/5 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium text-red-400 hover:bg-red-500/10 transition-all duration-300"
          >
            <LogOut className="w-4 h-4" />
            Logout System
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar - Slide-in Drawer */}
      {isMobileSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => dispatch(closeMobileSidebar())}
          />

          {/* Drawer */}
          <aside className="fixed left-0 top-0 h-full w-72 bg-[#1E0F0A] text-white/90 z-50 md:hidden shadow-2xl overflow-y-auto transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A017] to-[#A63D00] flex items-center justify-center font-bold text-white text-sm">
                    S
                  </div>
                  <div>
                    <h2 className="font-serif text-sm font-bold tracking-wide text-white">
                      सुरभी तीर्थ
                    </h2>
                    <p className="text-[10px] text-[#F4D28C]/70 tracking-widest uppercase">
                      Admin Portal
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => dispatch(closeMobileSidebar())}
                  className="text-white/70 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-6 space-y-1">
                {MENU_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={item.path}
                      onClick={() => dispatch(closeMobileSidebar())}
                      className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                        ${
                          isActive
                            ? "bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white shadow-lg shadow-[#A63D00]/10 font-semibold"
                            : "hover:bg-white/5 text-white/70 hover:text-white"
                        }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${isActive ? "text-white" : "text-white/50"}`}
                      />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="p-4 border-t border-white/5 mt-auto absolute bottom-0 left-0 right-0">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all duration-300"
              >
                <LogOut className="w-5 h-5" />
                Logout System
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
}