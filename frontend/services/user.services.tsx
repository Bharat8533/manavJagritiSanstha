import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_LOCAL_URL ||
  "http://localhost/manavjagritisanstha/backend/api/";

axios.defaults.baseURL = API_URL;

interface KathaPayload {
  kathaType: string;
  yajmanName: string;
  phone: string;
  preferredDate: string;
  venueType: string;
  fullAddress: string;
  additionalNotes: string;
}

interface GauSevaPayload {
  fullName: string;
  phone: string;
  email: string;
  sankalpaGotra: string;
  amount: number | undefined;
  planId: string | undefined;
}

export const kathaBookingSubmit = async (payload: KathaPayload) => {
  try {
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      params.append(key, value);
    });
    const response = await axios.post("/user/katha-booking", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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

export const gauSevaDonation = async (payload: GauSevaPayload) => {
  try {
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      params.append(key, value);
    });
    const response = await axios.post("/user/gau-seva-donation", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  sevaInterest: string;
  message: string;
}

export const sendUserContactQuery = async (payload: ContactPayload) => {
  try {
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      params.append(key, value);
    });

    const response = await axios.post("/user/contact-query", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while sending your message.",
    };
  }
};

export const fetchReviews = async () => {
  try {
    const response = await axios.get("/user/get-reviews");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while fetching reviews.",
    };
  }
};

export const sendUserReview = async (payload: {}) => {
  try {
    const response = await axios.post("/user/send-new-review", payload);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while sending your message.",
    };
  }
};

export const fetchNewBlogs = async () => {
  try {
    const response = await axios.get("/user/get-blogs");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while fetching blogs.",
    };
  }
};

export const handleLikeBlog = async (blogId: string | number) => {
  try {
    const response = await axios.post("/user/like-blog", { blogId });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while liking the blog.",
    };
  }
};

export const getKathaTypes = async () => {
  try {
    const response = await axios.get("/user/fetch-katha-types");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while fetching kathas.",
    };
  }
};

export const getShankalpPlans = async () => {
  try {
    const response = await axios.get("/user/fetch-shankalp-plans");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while fetching shankalp plans.",
    };
  }
};

export const getBrajdarshanPlaces = async () => {
  try {
    const response = await axios.get("/user/fetch-brajdarshan-places");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while fetching brajdarshan places.",
    };
  }
};

export const getCoreMotos = async () => {
  try {
    const response = await axios.get("/user/fetch-core-motos");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while fetching core motos.",
    };
  }
};

export const fetchMembershipPlans = async () => {
  try {
    const response = await axios.get("/user/fetch-membership-plans");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while fetching membership plans.",
    };
  }
};

interface MembershipFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  gotra?: string;
  dob?: string;
  plan_id: string;
  plan_name: string;
  amount: string;
}

export const joinMemberShip = async (data: MembershipFormData) => {
  try {
    const response = await axios.post("/user/join-membership", data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while joining membership.",
    };
  }
};

export const joinAsVolenteer = async (data: any) => {
  try {
    const response = await axios.post("/user/join-as-volenteer");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while joining as volenteer.",
    };
  }
};

export const fetchBanners = async () => {
  try {
    const response = await axios.get("/user/fetch-banners");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while fetching banners.",
    };
  }
};

export const fetchUpcomingKathaPosters = async () => {
  try {
    const response = await axios.get("/user/fetch-upcoming-katha-posters");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return {
      status: false,
      message: "An error occurred while fetching upcoming katha posters.",
    };
  }
};

export const createDonatePayment = async (amount: number) => {
  const params = new URLSearchParams();

  params.append("amount", amount.toString());

  const response = await axios.post("/user/create-donate-payment", params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response.data;
};
