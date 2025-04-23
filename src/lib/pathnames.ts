export const LOGIN_PAGE_PATH = "/login";

export const SIGNUP_PAGE_PATH = "/signup";

export const FORGOT_PASSWORD_PAGE_PATH = "/forgot-password";

export const RESET_PASSWORD_PAGE_PATH = "/reset-password";

export const RESENT_EMAIL_VERIFICATION_PAGE_PATH = "/resend-verification";

export const EMAIL_VERIFY_PAGE_PATH = "/email-verify";

export const HOME_PAGE_PATH = "/";

export const FEATURES_PAGE_PATH = "/features";

export const WHAT_IS_A_VPN_PAGE_PATH = "/what-is-a-vpn";

export const SERVERS_PAGE_PATH = "/servers";

export const PRICING_PAGE_PATH = "/pricing";

export const CONTACT_US_PAGE_PATH = "/contact-us";

export const DOWNLOADS_PAGE_PATH = "/downloads";

export const PRIVACY_POLICY_PAGE_PATH = "/privacy-policy";

export const TERMS_AND_CONDITIONS_PAGE_PATH = "/terms-and-conditions";

export const DASHBOARD_PAGE_PATH = "/dashboard";

export const BILLING_DETAILS_PAGE_PATH =
  DASHBOARD_PAGE_PATH + "/billing-details";

export const SUBSCRIPTION_PAGE_PATH = DASHBOARD_PAGE_PATH + "/subscription";

export const PAYMENT_PROCESSING_PAGE_PATH = "/payment-processing";

export const CHECKOUT_PAGE_PATH = (planId: number) => `/checkout?planId=${planId}`;
