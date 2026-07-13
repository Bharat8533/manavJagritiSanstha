export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  publishDate: string;
  likes: number;
  status: "Published" | "Draft";
  content: string;
  imageUrl: string;
  videoUrl?: string;
  uploadedVideoUrl?: string;
}

export interface MetricItem {
  title: string;
  value: string;
  sub: string;
  icon: React.ComponentType<any>;
  color: string;
  bg: string;
}

export interface PlanType {
  id: string;
  title: string;
  amount: number;
  desc: string;
  badge: string;
  isFeatured?: boolean | string | number;
  isCustomAmount?: boolean | string | number;
}

export interface SankalpaItem {
  id: string;
  donorName: string;
  phone: string;
  email: string;
  gotra: string;
  location: string;
  plan: string; // "एक समय का संपूर्ण भोजन", "3 दिवसीय संपूर्ण पोषण सेवा", आदि स्टोर होगा
  description: string;
  amount: number;
  date: string;
  mode: string;
  status: "Completed" | "Pending" | "Failed";
  isInformed: boolean;
}