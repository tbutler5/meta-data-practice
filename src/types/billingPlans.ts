export interface BillingPlan {
    planId: string;
    planName: string;
    pricePerMonth: number;
    features: string[];
    maxUsers: string;
    isActive: boolean;
    billingCycle: string;
    discounts: Discount[];
    overageCharges: Overage[];
}

export interface LegalInfo {
    notice: string;
    termsUrl: string;
}

interface Discount {
    type: string; // e.g., "seasonal"
    amount: number; // e.g., 5.00
    validUntil: string; // ISO date string, e.g., "2024-12-31"
}

interface Overage {
    perUser: number; // e.g., "seasonal"
    maxCharge: number; // e.g., 5.00
}