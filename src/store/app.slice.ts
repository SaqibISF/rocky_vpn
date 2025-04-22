import { AppState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppState = {
  isAppMounted: false,
  isLegalNoticeLoadedOnce: false,
  termsAndConditions: "",
  privacyPolicy: "",
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
  },
});

export const { setAppMounted, setLegalNotes } = appSlice.actions;

export default appSlice.reducer;
