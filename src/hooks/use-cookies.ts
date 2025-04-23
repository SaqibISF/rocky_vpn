import { USER_COOKIE_KEY } from "@/lib/constants";
import { User } from "@/types/user";
import { useCookies } from "react-cookie";

export const useUserCookie = () => {
  const [userCookie, setCookie, removeCookie] = useCookies([USER_COOKIE_KEY]);

  const user: User = userCookie.rocky_user ?? null;

  const setUserCookie = (user: User) => {
    setCookie(USER_COOKIE_KEY, JSON.stringify(user), {
      path: "/",
      maxAge: 60 * 60 * 24 * 1, // 1 day
      secure: true,
      sameSite: "strict",
    });
  };

  const removeUserCookie = () => {
    removeCookie(USER_COOKIE_KEY, { path: "/" });
  };

  return { user, setUserCookie, removeUserCookie } as const;
};
