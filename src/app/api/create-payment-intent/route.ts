import { NextResponse } from "next/server";
import { STRIPE_SECRET_KEY } from "@/lib/constants";
import Stripe from "stripe";

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    if (!amount || isNaN(amount)) {
      throw new Error("Invalid amount value.");
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        
      },
    });

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret },
      { status: 200 }
    );
  } catch (error) {
    throw error;
  }
}
