import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plan, PlansState } from "@/types";

const initialState: PlansState = {
  isPlansLoadedOnce: false,
  plans: [],
};

const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    setPlans: (state, action: PayloadAction<Plan[]>) => {
      state.isPlansLoadedOnce = true;
      state.plans = action.payload;
    },
  },
});

export const { setPlans } = plansSlice.actions;

export default plansSlice.reducer;
