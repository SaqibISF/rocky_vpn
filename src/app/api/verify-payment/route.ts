import { NextResponse } from "next/server";
import { STRIPE_SECRET_KEY } from "@/lib/constants";
import Stripe from "stripe";

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST(request: Request) {
  try {
    const { paymentIntent } = await request.json();

    if (!paymentIntent) {
      throw new Error("paymentIntent required");
    }

    const verifyPaymentIntent = await stripe.paymentIntents.retrieve(
      paymentIntent
    );

    return NextResponse.json(
      { paymentStatus: verifyPaymentIntent.status === "succeeded" },
      { status: 200 }
    );
  } catch (error) {
    throw error;
  }
}
