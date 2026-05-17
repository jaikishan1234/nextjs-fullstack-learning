"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Orders = () => {
  const router = useRouter();

  return (
    <>
    <div
      className="hover:cursor-pointer"
      onClick={() => router.push("/shop/products")}
    >
      Go To Products 
    </div>
    <button className="flex cursor-pointer" onClick={() => router.refresh()}>Refresh</button>
    </>
  );
};

export default Orders;