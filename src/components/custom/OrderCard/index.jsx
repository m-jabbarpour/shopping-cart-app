import { Box, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { contexts } from "../../../contexts";
import {
  orderCardDetailsStyles,
  orderCardImageStyles,
  rootStyles,
} from "./orderCard.styles";

function OrderCard({ id, description, imgUrl, price, number }) {
  const { orders, setOrders } = useContext(contexts);

  const removeOrder = (id) => {
    const foundOrder = orders.find((order) => order.id === id);
    let newOrders;
    if (foundOrder.number === 1) {
      newOrders = orders.filter((order) => order.id !== id);
    } else {
      newOrders = orders.map((order) =>
        order.id === id ? { ...order, number: order.number - 1 } : order
      );
    }
    setOrders(newOrders);
  };

  return (
    <Box sx={rootStyles}>
      <Box component="img" src={imgUrl} sx={orderCardImageStyles} />
      <Box>
        <Typography>{description}</Typography>
        <Box sx={orderCardDetailsStyles}>
          <Typography>
            ${price} × {number}
          </Typography>
          <Button variant="contained" onClick={() => removeOrder(id)}>
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderCard;
