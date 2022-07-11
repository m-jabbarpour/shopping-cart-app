import React, { useContext } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../ProductCard";
import { contexts } from "../../../contexts";

const ProductsContainer = () => {
  const { displayedData } = useContext(contexts);

  return (
    <Grid container spacing={3} py={2}>
      {displayedData.map((product) => (
        <Grid item xs={12} sm={6} lg={4} mb={4} key={product.id}>
          <ProductCard
            id={product.id}
            imgUrl={product.url}
            description={product.description}
            price={product.price}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsContainer;
