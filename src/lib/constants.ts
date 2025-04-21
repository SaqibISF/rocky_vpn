export const USER_COOKIE_KEY = "rocky_user";

export const REST_API_BASE_URL = process.env.NEXT_PUBLIC_REST_API_BASE_URL!;

export const GET_SERVERS_ROUTE = REST_API_BASE_URL + "/servers";

export const LOGIN_ROUTE = REST_API_BASE_URL + "/login";
export const SIGNUP_ROUTE = REST_API_BASE_URL + "/signup";
export const FORGOT_PASSWORD_ROUTE = REST_API_BASE_URL + "/forgot-password";
export const RESET_PASSWORD_ROUTE = REST_API_BASE_URL + "/reset-password";
