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

export type ActivePlan = {
  id: number;
  name: string;
  slug: string;
  amount_paid: string;
  start_date: string;
  end_date: string;
  duration: number;
  duration_unit: string;
  status: "active" | "cancelled" | "expired";
};

export type PlansState = {
  isPlansLoadedOnce: boolean;
  plans: Plan[];
};
