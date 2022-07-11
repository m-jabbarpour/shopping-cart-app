import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { contexts } from "../../../contexts";

import {
  productCardImageStyles,
  productCardStyles,
} from "./productCard.styles";

const ProductCard = ({ id, imgUrl, description, price }) => {
  const { orders, setOrders } = useContext(contexts);

  const addOrder = (id, description, imgUrl, price) => {
    const foundOrder = orders.find((order) => order.id === id);
    if (!foundOrder) {
      setOrders((prev) => [
        ...prev,
        { id, description, imgUrl, price, number: 1 },
      ]);
    } else {
      const newOrders = orders.map((order) =>
        order.id === id ? { ...order, number: order.number + 1 } : order
      );
      setOrders(newOrders);
    }
  };

  return (
    <Box sx={productCardStyles}>
      <Box component="img" alt="" src={imgUrl} sx={productCardImageStyles} />
      <Typography className="description" align="center" my={2}>
        {description}
      </Typography>
      <Box
        px={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>${price}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => addOrder(id, description, imgUrl, price)}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
