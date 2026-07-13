import axios from "axios";
import { setAuthToken, storeAdminDetails } from "@/utils/authToken";
import { changeAdminUser } from "@/store/slices/adminSlice";
import { store } from "@/store/store";
import { getAuthToken, setAuthCookie } from "@/utils/authToken";

const API_URL =
  process.env.NEXT_PUBLIC_LOCAL_URL ||
  "http://localhost/manavjagritisanstha/backend/api/";

axios.defaults.baseURL = API_URL;

export const adminAuth = async (username: string, password: string) => {
  if (username == "" || password == "") {
    return { success: false, message: "Username and password are required." };
  }

  try {
    const response = await axios.post("/admin/login", { username, password });

    const data = response.data;

    if (data.status === "success") {
      setAuthToken(data.token);
      setAuthCookie(data.token);
      if (data.admin) {
        store.dispatch(changeAdminUser(data.admin));
        storeAdminDetails(data.admin);
      } else {
        store.dispatch(
          changeAdminUser({
            id: 1,
            fullname: "Maharaj Ji Admin",
            role: "Super Administrator",
            email: "manavjagriti19@gmail.com",
            number: "9319087326",
            avatarUrl: "",
            joinedDate: "15 June 2026",
          }),
        );
      }

      return { success: true, message: data.message, data: data };
    }

    return { success: false, message: data.message || "Invalid credentials." };
  } catch (error) {
    console.error("Error during admin authentication:", error);
    return {
      success: false,
      message: "An error occurred during authentication.",
    };
  }
};

export const updateAdminProfile = async (profileData: {
  id: number;
  fullname: string;
  role: string;
  email: string;
  number: string;
}) => {
  try {
    const token = getAuthToken();
    const response = await axios.put("/admin/profile", profileData, {
      headers: {
        Authorization: `ManavJagritiSanstha ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating admin profile:", error);
    return {
      success: false,
      message: "An error occurred while updating the admin profile.",
    };
  }
};

export const adminChangePassword = async (
  id: number,
  currentPassword: string,
  newPassword: string,
  confirmPassword: string,
) => {
  try {
    const response = await axios.post(
      "/admin/change-password",
      {
        id,
        currentPassword,
        newPassword,
        confirmPassword,
      },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error changing admin password:", error);
    return {
      success: false,
      message: "An error occurred while changing the admin password.",
    };
  }
};

export const fetchAllBlogs = async () => {
  try {
    const response = await axios.get("/admin/blogs", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      success: false,
      message: "An error occurred while fetching blogs.",
    };
  }
};

export const uplaodBlog = async (formData: FormData) => {
  try {
    const response = await axios.post("/admin/blogs/new", formData, {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while uploading the blog.",
    };
  }
};

export const updateBlog = async (id: string, formData: FormData) => {
  try {
    const response = await axios.post("/admin/blogs/update", formData, {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while updating the blog.",
    };
  }
};

export const deleteBlog = async (id: string) => {
  try {
    const response = await axios.post(
      "/admin/blogs/delete",
      { id },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while deleting the blog.",
    };
  }
};

export const fetchPosters = async (limit = 10, offset = 0) => {
  const response = await axios.get(
    `/admin/posters?limit=${limit}&offset=${offset}`,
    {
      headers: { Authorization: `ManavJagritiSanstha ${getAuthToken()}` },
    },
  );
  return response.data;
};

export const uploadPosterService = async (formData: FormData) => {
  const response = await axios.post("/admin/upload-poster", formData, {
    headers: {
      Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deletePosterService = async (posterId: string) => {
  try{
    const response = await axios.post(
      "/admin/delete-poster",
      { posterId: posterId },
      {
        headers: {
          "Content-Type": "application/json", // यह सुनिश्चित करें
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  }catch(err){
    console.error("Error deleting poster:", err);
    throw err;
  }
};

export const fetchAllKathas = async (page: number = 1) => {
  try {
    const response = await axios.get(`/admin/katha-booking?page=${page}`, {
      headers: { Authorization: `ManavJagritiSanstha ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const fetchKathaTypes = async () => {
  try {
    const response = await axios.get("/admin/katha-types", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching kathas:", error);
    return {
      success: false,
      message: "An error occurred while fetching kathas.",
    };
  }
};

export const addNewKathaTypeService = async (newKathaType: {
  key: string;
  label: string;
  base: string;
  inclusion: string;
}) => {
  try {
    const response = await axios.post(
      "/admin/add-new-katha-type",
      { newKathaType },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching kathas:", error);
    return {
      success: false,
      message: "An error occurred while fetching kathas.",
    };
  }
};

export const shankalpPlansList = async () => {
  try {
    const response = await axios.get("/admin/shankalp-plans", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching kathas:", error);
    return {
      success: false,
      message: "An error occurred while fetching kathas.",
    };
  }
};

export const addShankalpForGuaSeva = async (planData: {
  id: string;
  title: string;
  amount: number;
  desc: string;
  badge: string;
  isFeatured?: boolean;
}) => {
  try {
    const response = await axios.post("/admin/add-shankalp", planData, {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding shankalp:", error);

    return {
      success: false,
      message: "An error occurred while adding shankalp.",
    };
  }
};

export const getGauSevaDonarDetials = async () => {
  try {
    const response = await axios.get("/admin/gau-seva-donars", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching kathas:", error);
    return {
      success: false,
      message: "An error occurred while fetching kathas.",
    };
  }
};

export const userContactDetails = async () => {
  try {
    const response = await axios.get("/admin/user-contact-details", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching kathas:", error);
    return {
      success: false,
      message: "An error occurred while fetching kathas.",
    };
  }
};

export const deleteQuery = async (id: string) => {
  try {
    const response = await axios.post(
      "/admin/delete-query",
      {
        params: {
          id: id,
        },
      },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching kathas:", error);
    return {
      success: false,
      message: "An error occurred while fetching kathas.",
    };
  }
};

export const updateQueryStatus = async (id: string, newStatus: string) => {
  try {
    const response = await axios.post(
      "/admin/update-query-status",
      {
        id: id,
        status: newStatus, // बैकएंड यही की (key) मांग रहा है
      },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error updating status:", error);
    return {
      status: false,
      message: "स्थिति अपडेट करने में त्रुटि आई।",
    };
  }
};

export const getGaushalaStats = async () => {
  try {
    const response = await axios.get(`admin/get-stats`, {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateGaushalaStats = async (payload: any) => {
  try {
    const response = await axios.post(`admin/update-stats`, payload, {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: "An error occurred while fetching kathas.",
    };
  }
};

export const getRecentDonations = async () => {
  try {
    const response = await axios.get(`admin/get-recent-donations`, {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getRecentKathaBookings = async () => {
  try {
    const response = await axios.get(`admin/get-recent-katha-bookings`, {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchBrajPlaces = async () => {
  try {
    const response = await axios.get("/admin/braj-darshan-places", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Braj Darshan Places:", error);
    return {
      success: false,
      message: "An error occurred while fetching places.",
    };
  }
};

interface BrajPlace {
  id: string;
  placeName: string;
  zone: string;
  timings: string;
  crowdLevel: "Low" | "Medium" | "High";
  specialNotice: string;
  status: "Active" | "Maintenance";
}

export const addBrajPlace = async (newPlace: BrajPlace) => {
  try {
    const response = await axios.post(
      "/admin/braj-darshan-places/add",
      newPlace,
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error Adding Braj Darshan Place:", error);
    return {
      success: false,
      message: "An error occurred while adding place.",
    };
  }
};

interface EditPlacePayload {
  id: string;
  place_name: string;
  zone: string;
  timings: string;
  crowd_level: "Low" | "Medium" | "High";
  special_notice: string;
}

export const editBrajPlace = async ({
  id,
  place_name,
  zone,
  timings,
  crowd_level,
  special_notice,
}: EditPlacePayload) => {
  try {
    const response = await axios.post(
      "/admin/braj-darshan-places/edit",
      {
        id,
        place_name,
        zone,
        timings,
        crowd_level,
        special_notice,
      },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error Editing Braj Darshan Place:", error);
    return {
      success: false,
      message: "An error occurred while editing place.",
    };
  }
};

export const fetchBrajDarshanEnquiries = async () => {
  try {
    const response = await axios.get("/admin/braj-darshan-enquiries", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Braj Darshan Enquiries:", error);
    return {
      success: false,
      message: "An error occurred while fetching enquiries.",
    };
  }
};

export const updateEnquiryStatus = async (id: string, status: string) => {
  try {
    const response = await axios.post(
      "/admin/braj-darshan-enquiries/update",
      {
        id,
        status,
      },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error Updating Braj Darshan Enquiries:", error);
    return {
      success: false,
      message: "An error occurred while updating enquiry.",
    };
  }
};

export const fetchCoreMotos = async () => {
  try {
    const response = await axios.get("/admin/core-motos", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Core Motos:", error);
    return {
      success: false,
      message: "An error occurred while fetching core motos.",
    };
  }
};

export const fetchTempleMethodology = async () => {
  try {
    const response = await axios.get("/admin/temple-methodology", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Temple Methodology:", error);
    return {
      success: false,
      message: "An error occurred while fetching temple methodology.",
    };
  }
};

export const fetchTempleDonationDetails = async () => {
  try {
    const response = await axios.get("/admin/temple-donations", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Temple Donation Details:", error);
    return {
      success: false,
      message: "An error occurred while fetching temple donation details.",
    };
  }
};

export const addCoreMoto = async (motoData: any) => {
  try {
    const response = await axios.post(
      "/admin/core-motos/add",
      { motoData },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateCoreMoto = async (motoData: any) => {
  try {
    const response = await axios.post(
      "/admin/core-motos/edit",
      { motoData },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteCoreMoto = async (id: string) => {
  try {
    const response = await axios.post(
      "/admin/core-motos/delete",
      { id },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addMethodology = async (methodologyData: any) => {
  try {
    const response = await axios.post(
      "/admin/temple-methodology/add",
      { methodologyData },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateMethodology = async (methodologyData: any) => {
  try {
    const response = await axios.post(
      "/admin/temple-methodology/edit",
      { methodologyData },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteMethodology = async (id: string) => {
  try {
    const response = await axios.post(
      "/admin/temple-methodology/delete",
      { id },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addTempleDonation = async (donationData: any) => {
  try {
    const response = await axios.post(
      "admin/temple-donations/add",
      { donationData },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log();
  }
};

export const updateTempleDonation = async (donationData: any) => {
  try {
    const response = await axios.post(
      "admin/temple-donations/edit",
      { donationData },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteDonar = async (id: string | number) => {
  try {
    const response = await axios.post(
      "admin/temple-donations/delete",
      { id },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getReviews = async () => {
  try {
    const response = await axios.get("/admin/get-user-reviews", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Temple Donation Details:", error);
    return {
      success: false,
      message: "An error occurred while fetching temple donation details.",
    };
  }
};

export const updateReviewStatus = async (id: number, status: string) => {
  try {
    const response = await axios.post(
      `/admin/update-review-status`,
      { id, status },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error updating review status:", error);
    throw error;
  }
};

export const updateReviewVisibility = async (
  id: number,
  is_visible: number,
) => {
  try {
    const response = await axios.post(
      `/admin/update-review-visibility`,
      { id, is_visible },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error updating visibility:", error);
    throw error;
  }
};

export const deleteReview = async (id: number) => {
  try {
    const response = await axios.post(
      `/admin/delete-review`,
      { id },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error;
  }
};

export const uploadImages = async (files: FileList) => {
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("images[]", files[i]);
  }

  const response = await axios.post("/admin/upload-gallery-images", formData, {
    headers: {
      Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const fetchGalleryImages = async (page: number) => {
  const response = await axios.get(`/admin/fetch_gallery?page=${page}`, {
    headers: { Authorization: `ManavJagritiSanstha ${getAuthToken()}` },
  });
  return response.data;
};

export const deleteImage = async (id: string) => {
  const response = await axios.post(
    `/admin/delete-gallery-image`,
    { id },
    {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    },
  );
  return response.data;
};

export const getSubscription = async () => {
  try {
    const response = await axios.get("/admin/get-subscription", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addSubscription = async (subscriptionData: any) => {
  try {
    const response = await axios.post(
      "/admin/add-new-subscription",
      subscriptionData,
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateSubscription = async (id: string, subscriptionData: any) => {
  try {
    const response = await axios.post(
      `/admin/update-subscription/${id}`,
      subscriptionData,
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteSubscription = async (id: string) => {
  try {
    const response = await axios.post(
      `/admin/delete-subscription/${id}`,
      { id },
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchBanners = async () => {
  try {
    const response = await axios.get("/admin/fetch-banners", {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addNewBanner = async (bannerData: any) => {
  try {
    const response = await axios.post("/admin/add-new-banner", bannerData, {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateBanner = async (id: string, bannerData: FormData) => {
  try {
    const response = await axios.post(
      `/admin/update-banner/${id}`,
      bannerData,
      {
        headers: {
          Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteBanner = async (id: string) => {
  const response = await axios.post(
    `/admin/delete-banner/${id}`,
    {},
    {
      headers: {
        Authorization: `ManavJagritiSanstha ${getAuthToken()}`,
      },
    },
  );
  return response.data;
};