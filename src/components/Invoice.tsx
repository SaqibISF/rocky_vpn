"use client";

import React, { FC } from "react";
import { AppLogo } from "@/icons";
import { Divider, Skeleton, Spinner } from "@heroui/react";
import { useBillingAddress } from "@/hooks/use-billing-address";
import { usePurchasedPlan } from "@/hooks/usePlans";
import { getFormattedDate } from "@/lib/utils";
import { notFound, useSearchParams } from "next/navigation";

const Invoice: FC = () => {
  const searchParams = useSearchParams();
  const purchaseId = searchParams.get("purchaseId");
  const token = searchParams.get("token");
  if (!purchaseId || !token) {
    notFound();
  }

  const { isBillingAddressLoading, billingAddress } = useBillingAddress(token);
  const { isPurchasedPlanLoading, purchasedPlan } = usePurchasedPlan(
    +purchaseId,
    token
  );

  if (!isPurchasedPlanLoading && !purchasedPlan) {
    notFound();
  }

  return (
    <div className="w-[49.625rem] h-[70.1875rem] text-background bg-foreground p-6 space-y-8 relative">
      {isBillingAddressLoading && (
        <div className="space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      )}

      {!isBillingAddressLoading && !billingAddress && (
        <>No fetch data from server</>
      )}

      {!isBillingAddressLoading && billingAddress && (
        <>
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <h4 className="text-2xl font-semibold">
                Invoice #{purchasedPlan?.id}
              </h4>
              {purchasedPlan && (
                <p className="text-sm font-normal">
                  Date Issued: {getFormattedDate(purchasedPlan.start_date)}
                </p>
              )}
            </div>

            <div className="space-y-3 max-w-64 w-full">
              <AppLogo />
              <p className="text-sm font-normal">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p className="text-sm font-normal">tecclubbx@gmail.com</p>
            </div>
          </div>

          <Divider />

          <div className="flex justify-between items-end px-8">
            <div className="space-y-2">
              <h4 className="text-2xl font-semibold">Issue For</h4>
              <table className="w-80 text-sm prose-th:font-semibold prose-th:p-1 prose-th:text-start prose-td:p-1">
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{billingAddress.name}</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>
                      {billingAddress.address}, {billingAddress.state},{" "}
                      {billingAddress.city}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-2">
              <h6 className="text-sm font-semibold">Order ID::</h6>
              <span>#{purchasedPlan?.id}</span>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto border border-default-300 rounded-lg pb-4 overflow-auto">
            <table className="w-full text-sm prose-th:font-semibold prose-th:p-4 prose-th:text-start prose-td:p-4">
              <thead>
                <tr className="border-b-1 border-default-300">
                  <th>Plan Name</th>
                  <th>Duration</th>
                  <th>Amount Paid</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody className="prose-tr:border-b-1 last:prose-tr:border-b-0 prose-tr:border-default-300">
                {isPurchasedPlanLoading && (
                  <tr>
                    <td align="center" colSpan={5}>
                      <Spinner />
                    </td>
                  </tr>
                )}

                {!isPurchasedPlanLoading && purchasedPlan && (
                  <tr>
                    <th>{purchasedPlan.plan.name}</th>
                    <td>{purchasedPlan.plan.duration}</td>
                    <td>${purchasedPlan.amount_paid}</td>
                    <td>{getFormattedDate(purchasedPlan.start_date)}</td>
                    <td>{getFormattedDate(purchasedPlan.end_date)}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-start mx-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h6 className="text-sm font-semibold">Sale by:</h6>
                <span>Rocky VPN</span>
              </div>
              <span>Thanks for your business</span>
            </div>

            <table className="min-w-56 text-end text-sm prose-th:font-semibold prose-th:p-1 prose-th:text-start prose-td:p-1">
              <tbody>
                <tr>
                  <th>Sub Total:</th>
                  <td>${purchasedPlan?.amount_paid}</td>
                </tr>
                <tr>
                  <th>Discount:</th>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <th>Tax:</th>
                  <td>$0.00</td>
                </tr>
              </tbody>
              <tfoot className="border-t-1 border-default-300">
                <tr>
                  <th>Total:</th>
                  <td>${purchasedPlan?.amount_paid}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-sm font-semibold text-center absolute right-0 left-0 bottom-4">
            Thank you for your purchase!
          </p>
        </>
      )}
    </div>
  );
};

export default Invoice;
