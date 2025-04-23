export type Plan = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number | string;
  duration: number;
  duration_unit: string;
  created_at: string;
  updated_at: string;
};

export type PurchasedPlan = {
  id: number;
  plan: Plan;
  plan_id: number;
  amount_paid: string;
  start_date: string;
  end_date: string;
  status: "active" | "cancelled" | "expired";
};

export type PlansState = {
  isPlansLoadedOnce: boolean;
  plans: Plan[];
  isActivePlanLoadedOnce: boolean;
  activePlan: PurchasedPlan | null;
};
