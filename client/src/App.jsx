import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import PurchaseHistory from "./components/ui/PurchaseHistory";
import SaleHistory from "./components/ui/ProductOrders";

{
  /*import Home from './pages/Home';*/
}
import ProductForm from "./pages/ProductForm";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import ProductList from "./components/ui/ProductList";
import ProductSubmission from "./pages/ProductSubmission";
import UserProducts from "./pages/UserProducts";
import SingleProduct from "./pages/SingleProduct";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/productsubmission" element={<ProductSubmission />} />
            <Route path="/addProduct" element={<ProductForm />} />
            <Route path="/products/details" element={<ProductDetails />} />
            <Route path="/products/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/purchase-history" element={<PurchaseHistory />} />
            <Route path="/account/sale-history" element={<SaleHistory />} />
            <Route path="/user" element={<UserProducts />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
  return <ImageUpload />;
}

export default App;
