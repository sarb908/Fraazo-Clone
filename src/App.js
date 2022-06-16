import { Container } from "@chakra-ui/react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { SimpleSidebar } from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";
import MyCredits from "./pages/MyCredits";
import Invite from "./pages/Invite";
import Support from "./pages/Support";
import Checkout from "./pages/Checkout";

import Login from "./pages/Login";

import Footer from "./components/Footer";


function App() {
  return (
    <Container className="App" maxW={"none"}>
      <Navbar />

      <Container
        style={{ padding: "20px 0 0 0", border: "1px solid blue" }}
        maxW="container.xl"
        mt={"88px"}
        boxSizing="border-box"
      >
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path={`/products/:id`} element={<ProductDetails />} />
          <Route path="/myaccount/*" element={<SimpleSidebar />}>
            <Route path="myorders" element={<MyOrders />} />
            <Route path="mycredits" element={<MyCredits />} />
            <Route path="invite" element={<Invite />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route
            path="/products/mangoes/:subcategory"
            element={<Products />}
          />
          <Route
            path="/products/vegetables/:subcategory"
            element={<Products />}
          />
          <Route
            path="/products/fruits/:subcategory"
            element={<Products />}
          />
          <Route
            path="/products/herbs/:subcategory"
            element={<Products />}
          />
          <Route
            path="/products/dryfruits/:subcategory"
            element={<Products />}
          />
          <Route
            path="/products/kitchenstapels/:subcategory"
            element={<Products />}
          />
          <Route
            path="/products/category/:subcategory"
            element={<Products />}
          />


          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />

          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
