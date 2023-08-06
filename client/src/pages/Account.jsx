import AccountSideBar from "../components/ui/AccountSideBar";
import React from "react";
import { useQuery } from "@apollo/client";
import SaleHistory from "../components/ui/SaleHistory";
import PurchaseHistory from "../components/ui/PurchaseHistory";
import Home from "./Home";
import { useState } from "react";

import { QUERY_ALL_PRODUCTS } from "../utils/queries";

export default function Account() {
  const [accountPage, setAccountPage] = useState("Home");

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  if (!products.length) {
    return <h3>No items in this category</h3>;
  }

  return (
    <>
      <AccountSideBar
        accountPage={accountPage}
        setAccountPage={setAccountPage}
      />
      {accountPage === "Home" ? (
        <Home />
      ) : accountPage === "Purchase History" ? (
        <PurchaseHistory />
      ) : accountPage === "Sale History" ? (
        <SaleHistory />
      ) : (
        <Home />
      )}
      <SaleHistory />
    </>
  );
}
