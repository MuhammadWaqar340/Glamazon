import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
const App = () => {
  const theme = {
    color: {
      heading: "rgb(24 24 29)",
      border: "rgba(29, 29, 29,.8)",
      white: "#FFF",
      white: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243,0.5) 0%",
      hr: "#fffff",
      gradient:
        "linear-gradient(0deg,rgb(125 144 255) 0%, rgb(98 189 252) 100%  )",
      shadow:
        "rgba(0, 0, 0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35,0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0, 0, 0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "786px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="card" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
