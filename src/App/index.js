import { Container, Grid, ThemeProvider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Main from "../components/common/Main";
import Menu from "../components/custom/Menu";
import ProductCard from "../components/custom/ProductCard";
import Layout from "../Layout";

import Data from "../data/data.json";

import { contexts } from "../contexts";
import OrdersContainer from "../components/custom/OrdersContainer";
import ProductsContainer from "../components/custom/ProductsContainer";

const App = () => {
  const { setData, displayedData, setDisplayedData, order, filter } =
    useContext(contexts);

  useEffect(() => {
    setData(Data);
    setDisplayedData(Data);
  }, []);

  useEffect(() => {
    switch (order) {
      case "Lowest":
        Data.sort((a, b) => a.price - b.price);
        setDisplayedData([...Data]);
        break;
      case "Highest":
        Data.sort((a, b) => b.price - a.price);
        setDisplayedData([...Data]);
        break;
    }
  }, [order]);

  useEffect(() => {
    let newList;
    switch (filter) {
      case "All":
        newList = Data.filter((product) => product.size.includes("ALL"));
        setDisplayedData(newList);
        break;
      case "XS":
        newList = Data.filter((product) => product.size.includes("XS"));
        setDisplayedData(newList);
        break;
      case "S":
        newList = Data.filter((product) => product.size.includes("S"));
        setDisplayedData(newList);
        break;
      case "M":
        newList = Data.filter((product) => product.size.includes("M"));
        setDisplayedData(newList);
        break;
      case "L":
        newList = Data.filter((product) => product.size.includes("L"));
        setDisplayedData(newList);
        break;
      case "XL":
        newList = Data.filter((product) => product.size.includes("XL"));
        setDisplayedData(newList);
        break;
      case "XXL":
        newList = Data.filter((product) => product.size.includes("XXL"));
        setDisplayedData(newList);
        break;
    }
  }, [filter]);

  return (
    <Layout>
      <Container>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} xl={8}>
            <Menu />
            <ProductsContainer />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <OrdersContainer />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default App;
