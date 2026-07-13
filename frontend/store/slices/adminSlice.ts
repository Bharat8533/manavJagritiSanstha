import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminUserType {
  id: number;
  fullname: string;
  role: string;
  email: string;
  number: string;
  avatarUrl?: string;
  joinedDate?: string;
}

interface AdminState {
  activeTab: string;
  isMobileSidebarOpen: boolean;
  adminUser: AdminUserType | null;
}

const initialState: AdminState = {
  activeTab: "dashboard",
  isMobileSidebarOpen: false,
  adminUser: {
    id: 1,
    fullname: "Maharaj Ji Admin",
    role: "Super Administrator",
    email: "brajraj151@gmail.com",
    number: "9319087326",
    avatarUrl: "",
    joinedDate: "15 June 2026",
  },
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    toggleMobileSidebar: (state) => {
      state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
    },
    closeMobileSidebar: (state) => {
      state.isMobileSidebarOpen = false;
    },
    logoutAdmin: (state) => {
      state.adminUser = null;
    },
    changeAdminUser: (state, action: PayloadAction<AdminUserType>) => {
      state.adminUser = action.payload;
    },
  },
});

export const {
  setActiveTab,
  toggleMobileSidebar,
  closeMobileSidebar,
  logoutAdmin,
  changeAdminUser,
} = adminSlice.actions;
export default adminSlice.reducer;
