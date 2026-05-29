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
  amount: number;
  desc: string;
  badge: string;
  isFeatured?: boolean;
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
  customAmount: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface GauSevaPlansProps {
  selectedPlan: PlanType | null;
  customAmount: string;
  setCustomAmount: Dispatch<SetStateAction<string>>;
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