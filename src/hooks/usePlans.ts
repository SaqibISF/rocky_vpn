import { useCallback, useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import {
  GET_PLANS_ROUTE,
  GET_PURCHASE_ACTIVE_PLAN_ROUTE,
  GET_PURCHASE_PLAN_ROUTE,
} from "@/lib/constants";
import { Plan, PurchasedPlan } from "@/types";
import { setActivePlan, setPlans } from "@/store/plans.slice";
import { addToast } from "@heroui/react";
import { useUserCookie } from "./use-cookies";

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

export const useActivePlan = () => {
  const dispatch = useDispatch();
  const { user } = useUserCookie();
  const { activePlan, isActivePlanLoadedOnce } = useSelector(
    (state: RootState) => state.plans
  );

  const [isActivePlanLoading, setLoading] = useState<boolean>(true);

  const fetchActivePlan = useCallback(async () => {
    try {
      if (isActivePlanLoadedOnce) return;
      const response = await axios
        .get<{ status: boolean; plan: PurchasedPlan }>(
          GET_PURCHASE_ACTIVE_PLAN_ROUTE,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (response.status) {
        dispatch(setActivePlan(response.plan));
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to Load Active Plan";
      addToast({ color: "danger", description: errorMessage });
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchActivePlan();
  }, [fetchActivePlan]);

  return { isActivePlanLoading, activePlan } as const;
};

export const usePurchasedPlan = (
  purchaseId: number | string,
  token?: string
) => {
  const { user } = useUserCookie();
  const [purchasedPlan, setPurchasedPlan] = useState<PurchasedPlan>();
  const [isPurchasedPlanLoading, setLoading] = useState<boolean>(true);

  const fetchPurchasedPlan = useCallback(async () => {
    try {
      const response = await axios
        .get<{ status: boolean; purchase: PurchasedPlan }>(
          GET_PURCHASE_PLAN_ROUTE(purchaseId),
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token ? token : user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (response.status) {
        console.log(response.purchase);
        setPurchasedPlan(response.purchase);
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to Load Active Plan";
      addToast({ color: "danger", description: errorMessage });
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchPurchasedPlan();
  }, [fetchPurchasedPlan]);

  return { isPurchasedPlanLoading, purchasedPlan } as const;
};
