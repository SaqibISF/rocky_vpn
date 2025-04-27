import { GET_BILLING_ADDRESS_ROUTE } from "@/lib/constants";
import { setBillingAddress } from "@/store/app.slice";
import { RootState } from "@/store/store";
import { BillingAddress } from "@/types";
import { addToast } from "@heroui/react";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserCookie } from "./use-cookies";

export const useBillingAddress = (token?: string) => {
  const dispatch = useDispatch();
  const { user } = useUserCookie();
  const { billingAddress, isBillingAddressLoadedOnce } = useSelector(
    (state: RootState) => state.app
  );

  const [isBillingAddressLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBillingAddress = async () => {
      try {
        if (isBillingAddressLoadedOnce) return;
        const response = await axios
          .get<{ status: boolean; user: { billing_address: BillingAddress } }>(
            GET_BILLING_ADDRESS_ROUTE,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token ? token : user.access_token}`,
              },
            }
          )
          .then((res) => res.data);
        if (response.status) {
          dispatch(setBillingAddress(response.user.billing_address));
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Billing Address Load";
        addToast({ color: "danger", description: errorMessage });
      } finally {
        setLoading(false);
      }
    };

    fetchBillingAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isBillingAddressLoading, billingAddress } as const;
};
