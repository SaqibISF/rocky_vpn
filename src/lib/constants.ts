export const USER_COOKIE_KEY = "rocky_user";
export const ACTIVE_PLAN_COOKIE_KEY = "rocky_user_active_plan";

export const REST_API_BASE_URL = process.env.NEXT_PUBLIC_REST_API_BASE_URL!;

export const GET_SERVERS_ROUTE = REST_API_BASE_URL + "/servers";

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
