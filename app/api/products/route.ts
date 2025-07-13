// import { wooApi } from "@/lib/woocommerce";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const response = await wooApi.get("products", { per_page: 20 });
//     return NextResponse.json(response.data);
//   } catch (error: any) {
//     console.error("WooCommerce API error:", error.message);
//     return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
//   }
// }

import { wooApi, WooCommerceProduct } from "@/lib/woocommerce";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Check if required environment variables are present
    if (!process.env.WC_API_URL || !process.env.WC_API_KEY || !process.env.WC_API_SECRET) {
      console.error("Missing WooCommerce API credentials");
      return NextResponse.json(
        { error: "Missing API credentials" }, 
        { status: 500 }
      );
    }

    console.log("Fetching products from WooCommerce...");
    
    const response = await wooApi.get("products", { 
      per_page: 20,
      status: "publish" // Only get published products
    });

    const products: WooCommerceProduct[] = response.data;
    
    console.log(`Successfully fetched ${products.length} products`);
    
    return NextResponse.json(products);
  } catch (error: any) {
    console.error("WooCommerce API error:", error.response?.data || error.message);
    
    // More detailed error handling
    if (error.response) {
      const { status, data } = error.response;
      return NextResponse.json(
        { 
          error: "Failed to fetch products", 
          details: data?.message || "Unknown API error",
          status: status 
        }, 
        { status: status || 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to fetch products", details: error.message }, 
      { status: 500 }
    );
  }
}

// Optional: Add CORS headers if needed
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}