export type SchemeCategory = "all" | "household" | "business" | "commercial";

export interface ChitScheme {
  id: string;
  code: string;
  title: string;
  category: "household" | "business" | "commercial";
  chitValue: number;
  durationMonths: number;
  monthlyGrossInstallment: number;
  avgNetInstallment: number;
  estimatedDividend: number;
  maxBorrowableAmount: number;
  totalSubscribers: number;
  availableSlots: number;
  startDate: string;
  colorSurface: string;
  badgeLabel?: string;
  suitableFor: string;
}

export interface AuctionSchedule {
  id: string;
  schemeCode: string;
  groupName: string;
  chitValue: number;
  auctionNumber: number;
  totalMonths: number;
  nextAuctionDate: string;
  auctionTime: string;
  lastMonthDividend: number;
  status: "upcoming" | "live" | "completed";
}

export interface EnrollmentFormData {
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  selectedSchemeId: string;
  preferredDuration: number;
  purpose: string;
}
