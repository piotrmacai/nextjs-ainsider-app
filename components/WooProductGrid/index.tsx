"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
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

const WooProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch("/api/products");
        
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        
        // Validate that we received an array
        if (!Array.isArray(data)) {
          throw new Error("Invalid response format");
        }
        
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError(error instanceof Error ? error.message : "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Helper function to get display price
  const getDisplayPrice = (product: Product) => {
    if (product.sale_price && product.sale_price !== product.regular_price) {
      return {
        current: product.sale_price,
        original: product.regular_price,
        onSale: true
      };
    }
    return {
      current: product.regular_price || product.price,
      original: null,
      onSale: false
    };
  };

  // Helper function to decode HTML entities
  const decodeHtml = (html: string) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  if (loading) {
    return (
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p className="font-bold">Error loading products</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <p className="text-lg">No products found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => {
            const priceInfo = getDisplayPrice(product);
            
            return (
              <Link
                key={product.id}
                href={product.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-md rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative">
                  <Image
                    src={product.images?.[0]?.src || "/placeholder.png"}
                    alt={product.images?.[0]?.alt || product.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-64 mb-4 rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.png";
                    }}
                  />
                  {priceInfo.onSale && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      Sale
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 line-clamp-2" title={decodeHtml(product.name)}>
                  {decodeHtml(product.name)}
                </h3>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-blue-600">
                    ${priceInfo.current}
                  </span>
                  {priceInfo.onSale && priceInfo.original && (
                    <span className="text-sm text-gray-500 line-through">
                      ${priceInfo.original}
                    </span>
                  )}
                </div>
                
                {product.categories && product.categories.length > 0 && (
                  <p className="text-sm text-gray-500 mb-2">
                    {product.categories.map(c => c.name).join(", ")}
                  </p>
                )}
                
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded ${
                    product.stock_status === 'instock' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stock_status === 'instock' ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WooProductGrid;


// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   id: number;
//   name: string;
//   permalink: string;
//   price: string;
//   images: { src: string }[];
//   categories: { name: string }[];
// }

// const WooProductGrid = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const fetchProducts = async () => {
//       try {
//         const apiUrl =
//           process.env.NEXT_PUBLIC_API_URL || "/api/products";

//         const res = await fetch(apiUrl, {
//           cache: "no-store", 
//         });

//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }

//         const data = await res.json();

//         if (data.error) {
//           throw new Error(data.error);
//         }

//         setProducts(data);
//       } catch (error: any) {
//         console.error("Failed to fetch products:", error.message);
//         setError("Failed to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <div className="text-center">Loading products...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;

//   return (
//     <section className="py-10">
//       <div className="max-w-screen-xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6">Our Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <Link
//                 key={product.id}
//                 href={product.permalink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
//               >
//                 <Image
//                   src={product.images?.[0]?.src || "/placeholder.png"}
//                   alt={product.name}
//                   width={300}
//                   height={300}
//                   className="object-contain w-full h-64 mb-4"
//                 />
//                 <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
//                 <p className="text-lg text-meta font-medium">${product.price}</p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {product.categories?.map((c) => c.name).join(", ") || "No categories"}
//                 </p>
//               </Link>
//             ))
//           ) : (
//             <div className="text-center">No products found.</div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WooProductGrid;


// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   id: number;
//   name: string;
//   permalink: string;
//   price: string;
//   images: { src: string }[];
//   categories: { name: string }[];
// }

// const WooProductGrid = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch(process.env.NEXT_PUBLIC_API_URL || "/api/products", {
//           cache: "no-store", // Ensure fresh data
//         });
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         const data = await res.json();
//         if (data.error) {
//           throw new Error(data.error);
//         }
//         setProducts(data);
//       } catch (error: any) {
//         console.error("Failed to fetch products:", error.message);
//         setError("Failed to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <div className="text-center">Loading products...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;

//   return (
//     <section className="py-10">
//       <div className="max-w-screen-xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6">Our Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <Link
//                 key={product.id}
//                 href={product.permalink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
//               >
//                 <Image
//                   src={product.images?.[0]?.src || "/placeholder.png"}
//                   alt={product.name}
//                   width={300}
//                   height={300}
//                   className="object-contain w-full h-64 mb-4"
//                 />
//                 <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
//                 <p className="text-lg text-meta font-medium">${product.price}</p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {product.categories?.map((c) => c.name).join(", ") || "No categories"}
//                 </p>
//               </Link>
//             ))
//           ) : (
//             <div className="text-center">No products found.</div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WooProductGrid;