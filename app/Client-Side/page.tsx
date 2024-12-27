"use client";
import React, { useEffect, useState } from "react";
import Loding from "@/components/Loding";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Clientside = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        setData(products);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <Loding />
        </div>
      ) : (
        <>
          <div
            className="flex justify-center items-center font-bold text-4xl sm:text-5xl my-5 text-purple-800 bg-purple-100 py-4 rounded-md shadow-md"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Product Store
          </div>
          <div
            className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
          >
            {data.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative w-full h-60">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-contain bg-gray-100"
                  />
                </div>
                <div className="p-5 flex flex-col gap-4">
                  <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-gray-600 text-sm">
                    {product.description.length > 100
                      ? `${product.description.slice(0, 100)}...`
                      : product.description}
                  </p>
                  <p className="text-gray-800 font-medium">
                    Price: <span className="text-green-600">${product.price}</span>
                  </p>
                  <div className="flex items-center gap-2 text-sm text-yellow-500">
                    <span>⭐ {product.rating.rate}</span>
                    <span className="text-gray-500">
                      ({product.rating.count} reviews)
                    </span>
                  </div>
                  <button className="mt-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Clientside;
