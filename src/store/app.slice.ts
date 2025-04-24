import { AppState, BillingAddress } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppState = {
  isAppMounted: false,
  isLegalNoticeLoadedOnce: false,
  termsAndConditions: "",
  privacyPolicy: "",
  isBillingAddressLoadedOnce: false,
  billingAddress: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppMounted: (state) => {
      state.isAppMounted = true;
    },

    setLegalNotes: (
      state,
      action: PayloadAction<{
        termsAndConditions: string;
        privacyPolicy: string;
      }>
    ) => {
      state.isLegalNoticeLoadedOnce = true;
      state.termsAndConditions = action.payload.termsAndConditions;
      state.privacyPolicy = action.payload.privacyPolicy;
    },

    setBillingAddress: (
      state,
      action: PayloadAction<BillingAddress | null>
    ) => {
      state.billingAddress = action.payload;
    },
  },
});

export const { setAppMounted, setLegalNotes, setBillingAddress } =
  appSlice.actions;

export default appSlice.reducer;
