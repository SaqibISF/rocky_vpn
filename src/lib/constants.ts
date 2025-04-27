export const USER_COOKIE_KEY = "rocky_user";
export const ACTIVE_PLAN_COOKIE_KEY = "rocky_user_active_plan";

export const STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
export const STRIPE_SECRET_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!;

export const REST_API_BASE_URL = process.env.NEXT_PUBLIC_REST_API_BASE_URL!;

export const GET_SERVERS_ROUTE = (page: number) =>
  `${REST_API_BASE_URL}/web/servers?page=${page}`;

export const LOGIN_ROUTE = REST_API_BASE_URL + "/login";
export const SIGNUP_ROUTE = REST_API_BASE_URL + "/signup";
export const LOGOUT_ROUTE = REST_API_BASE_URL + "/logout";
export const FORGOT_PASSWORD_ROUTE = REST_API_BASE_URL + "/forgot-password";
export const RESET_PASSWORD_ROUTE = REST_API_BASE_URL + "/reset-password";

export const EMAIL_VERIFICATION_ROUTE = (id: number | string, hash: string) =>
  REST_API_BASE_URL + "/email/verify/" + id + "/" + hash;

export const RESENT_EMAIL_VERIFICATION_ROUTE =
  REST_API_BASE_URL + "/email/resend-verification";

export const GET_PLANS_ROUTE = REST_API_BASE_URL + "/plans";
export const GET_LEGAL_NOTES_ROUTE = REST_API_BASE_URL + "/options";

export const ADD_PURCHASE_PLAN_ROUTE = REST_API_BASE_URL + "/purchase/add";
export const GET_PURCHASE_ACTIVE_PLAN_ROUTE =
  REST_API_BASE_URL + "/purchase/active";
export const GET_PURCHASE_PLAN_ROUTE = (purchaseId: number | string) =>
  `${REST_API_BASE_URL}/purchase/${purchaseId}`;
export const GET_PURCHASE_HISTORY_ROUTE = (page: number) =>
  `${REST_API_BASE_URL}/purchase/history?page=${page}`;

export const UPDATE_USER_INFO_ROUTE = REST_API_BASE_URL + "/user/update";
export const UPDATE_USER_PASSWORD_ROUTE =
  REST_API_BASE_URL + "/user/update-password";
export const DELETE_USER_ACCOUNT_ROUTE = REST_API_BASE_URL + "/user/delete";

export const GET_BILLING_ADDRESS_ROUTE = REST_API_BASE_URL + "/billing-address";
export const UPDATE_BILLING_ADDRESS_ROUTE =
  REST_API_BASE_URL + "/billing-address/store";
