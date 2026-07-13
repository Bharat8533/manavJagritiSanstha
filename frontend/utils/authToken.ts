import { store } from "@/store/store";
import { changeAdminUser } from "@/store/slices/adminSlice";

export const setAuthToken = (token: string | null) => {
  if (token) {
    localStorage.setItem("token", token);
    document.cookie = `authToken=${token}; path=/; max-age=86400; SameSite=Lax`;
  }
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem("token");
};

export const removeAuthToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("adminUser");
  localStorage.removeItem("contactInfo");
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};

export const storeAdminDetails = (admin: {
  fullname: string;
  role: string;
  email: string;
}) => {
  localStorage.setItem("adminUser", JSON.stringify(admin));
};

export const getAdminDetails = (): {
  fullname: string;
  role: string;
  email: string;
} | null => {
  const adminData = localStorage.getItem("adminUser");
  store.dispatch(changeAdminUser(adminData ? JSON.parse(adminData) : null));
  return adminData ? JSON.parse(adminData) : null;
};

export const setAuthCookie = (token: string) => {
  // document.cookie = `token=${token}; domain=manavjagritisanstha.com; path=/; max-age=86400; SameSite=Lax;`;
  document.cookie = `token=${token}; path=/; max-age=86400; SameSite=Lax;`;
};

export const removeAuthCookie = () => {
  // document.cookie = `token=; domain=manavjagritisanstha.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  // document.cookie = `adminUser=; domain=manavjagritisanstha.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  // document.cookie = `ContactInfo=; domain=manavjagritisanstha.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;

  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "adminUser=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "contactInfo=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
};