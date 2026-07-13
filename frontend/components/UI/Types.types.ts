import { ChangeEvent, FormEvent, Dispatch, SetStateAction } from "react";

export interface QAPair {
  id: string;
  category: string;
  subBadge: string;
  question: string;
  answer: string;
  points: string[];
  videoUrl: string;
  imageUrl: string;
}

export interface GauSevaHeroProps {
  onActionClick: () => void;
}

export interface PlanType {
  id: string;
  title: string;
  amount: number | string;
  desc: string;
  badge: string;
  isFeatured?: boolean | string | undefined;
  isCustomAmount?: number | string | boolean;
}

export interface DonorInfoType {
  fullName: string;
  phone: string;
  email: string;
  sankalpaGotra: string;
}

export interface DonorFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  donorInfo: DonorInfoType;
  selectedPlan: PlanType | null;
  customAmount: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface GauSevaPlansProps {
  plans: PlanType[];
  selectedPlan: PlanType | null;
  customAmount: number;
  setCustomAmount: Dispatch<SetStateAction<number>>;
  onPlanSelect: (plan: PlanType) => void;
}

export interface StatItem {
  metric: string;
  label: string;
  detail: string;
}

export interface PhilosophyItem {
  verse: string;
  source: string;
  meaning: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  caption: string;
  aspectClass: string;
}

export interface PhilosophyItem {
  verse: string;
  source: string;
  meaning: string;
}

export interface KathaAmountInfoProps {
  selectedKatha: string;
}

export interface KathaBookingFormProps {
  formState: {
    yajmanName: string;
    phone: string;
    preferredDate: string;
    venueType: string;
    fullAddress: string;
    additionalNotes: string;
  };
  onChange: (fields: Partial<KathaBookingFormProps["formState"]>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitted: boolean;
}

export interface KathaTypesProps {
  selectedKatha: string;
  onSelect: (kathaType: string) => void;
}

export interface formData {
  fullName: string;
  email: string;
  phone: string;
  purpose: string;
  message: string;
}

export interface GurukulamJoinSectionProps {
  formData: formData;
  setFormData: Dispatch<SetStateAction<formData>>;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export interface CauseType {
  id: string;
  title: string;
  badge: string;
  desc: string;
}

export interface BlogPost {
  // Essential Fields (Backend se aa rahe hain)
  id: string | number;
  title: string;
  category: string;
  content: string;
  imageUrl: string;
  publishDate: string;
  author: string;
  likes: string | number;
  status: string;

  // Optional Fields (Handling extra/conditional data)
  videoUrl?: string | null;
  uploadedVideoUrl?: string | null;

  // UI Specific Fields (Component ke andar map karne ke liye)
  excerpt?: string;
  readTime?: string;
  featured?: boolean;
}

export interface BlogsViewProps {
  posts: BlogPost[];
  onAddPost: (newPost: BlogPost) => void;
}

export interface ContactQuery {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  receivedDate: string;
  status: "Pending" | "Resolved";
  seva_interest: string;
  created_at: string;
}

export interface AdminProfile {
  name: string;
  email: string;
  phone: string;
  role: string;
  designation: string;
  avatarUrl: string;
  joinedDate: string;
}