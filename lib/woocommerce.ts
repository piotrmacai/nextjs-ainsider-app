// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// export const wooApi = new WooCommerceRestApi({
//   url: process.env.WC_API_URL!,
//   consumerKey: process.env.WC_API_KEY!,
//   consumerSecret: process.env.WC_API_SECRET!,
//   version: "wc/v3",
// });

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// Validate required environment variables
const requiredEnvVars = {
  WC_API_URL: process.env.WC_API_URL,
  WC_API_KEY: process.env.WC_API_KEY,
  WC_API_SECRET: process.env.WC_API_SECRET,
};

// Check if all required environment variables are present
for (const [key, value] of Object.entries(requiredEnvVars)) {
  if (!value) {
    console.error(`Missing required environment variable: ${key}`);
  }
}

export const wooApi = new WooCommerceRestApi({
  url: process.env.WC_API_URL || "https://ainsider.store",
  consumerKey: process.env.WC_API_KEY || "",
  consumerSecret: process.env.WC_API_SECRET || "",
  version: "wc/v3",
  queryStringAuth: true, // Force Basic Authentication as query string
});

// Type definitions for WooCommerce API
export interface WooCommerceProduct {
  id: number;
  name: string;
  permalink: string;
  price: string;
  regular_price: string;
  sale_price: string;
  images: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  status: string;
  stock_status: string;
  description: string;
  short_description: string;
}