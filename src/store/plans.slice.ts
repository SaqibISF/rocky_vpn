import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plan, PlansState, PurchasedPlan } from "@/types";

const initialState: PlansState = {
  isPlansLoadedOnce: false,
  plans: [],
  isActivePlanLoadedOnce: false,
  activePlan: null,
};

const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    setPlans: (state, action: PayloadAction<Plan[]>) => {
      state.isPlansLoadedOnce = true;
      state.plans = action.payload;
    },

    setActivePlan: (state, action: PayloadAction<PurchasedPlan>) => {
      state.isActivePlanLoadedOnce = true;
      state.activePlan = action.payload;
    },
  },
});

export const { setPlans, setActivePlan } = plansSlice.actions;

export default plansSlice.reducer;
