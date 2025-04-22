import { useCallback, useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import { GET_PLANS_ROUTE } from "@/lib/constants";
import { Plan } from "@/types";
import { setPlans } from "@/store/plans.slice";
import { addToast } from "@heroui/react";

export const usePlansState = () =>
  useSelector((state: RootState) => state.plans);

export const usePlans = () => {
  const dispatch = useDispatch();
  const { plans, isPlansLoadedOnce } = useSelector(
    (state: RootState) => state.plans
  );

  const [isPlansLoading, setLoading] = useState<boolean>(true);

  const fetchPlans = useCallback(async () => {
    try {
      if (isPlansLoadedOnce) return;
      const response = await axios
        .get<{ status: boolean; plans: Plan[] }>(GET_PLANS_ROUTE)
        .then((res) => res.data);
      if (response.status) {
        dispatch(setPlans(response.plans));
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to Plans Load";
      addToast({ color: "danger", description: errorMessage });
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  return { isPlansLoading, plans } as const;
};
