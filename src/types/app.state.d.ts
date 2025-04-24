export type BillingAddress = {
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
};

export type AppState = {
  isAppMounted: boolean;
  isLegalNoticeLoadedOnce: boolean;
  termsAndConditions: string;
  privacyPolicy: string;
  isBillingAddressLoadedOnce: boolean;
  billingAddress: BillingAddress | null;
};
