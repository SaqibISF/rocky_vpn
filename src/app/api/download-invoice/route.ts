import { INVOICE_PAGE_PATH } from "@/lib/pathnames";
import { chromium } from "playwright";

export async function GET(request: Request) {
  const host = request.headers.get("host") || "localhost:3000";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const requestURL = new URL(request.url);
  const purchaseId = requestURL.searchParams.get("purchaseId");
  const token = requestURL.searchParams.get("token");

  if (!purchaseId || !token) {
    throw new Error("Purchase Id and token are required");
  }

  const url = `${protocol}://${host}${INVOICE_PAGE_PATH}?purchaseId=${purchaseId}&token=${token}`;

  try {
    const browser = await chromium.launch({
      headless: true,
    });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="react-app-output.pdf"',
      },
    });
  } catch (error) {
    throw error;
  }
}
