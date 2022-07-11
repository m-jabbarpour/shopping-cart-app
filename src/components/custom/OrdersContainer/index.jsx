import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { contexts } from "../../../contexts";
import OrderCard from "../OrderCard";
import {
  ordersContainerCardsStyles,
  ordersContainerTitleStyles,
  totalPricesStyles,
} from "./ordersContainer.styles";

function OrdersContainer() {
  const { orders } = useContext(contexts);
  const [totalOrders, setTotalOrders] = useState(0);
  useEffect(() => {
    let sum = 0;
    orders.forEach((order) => {
      sum += parseFloat(order.price) * order.number;
    });
    setTotalOrders(sum.toFixed(1));
  }, [orders]);
  return (
    <Box component="section">
      <Box sx={ordersContainerTitleStyles}>
        <Typography>
          {orders.length === 0
            ? "Cart is Empty"
            : orders.length === 1
            ? `You have ${orders.length} product in the Cart.`
            : `You have ${orders.length} products in the Cart.`}
        </Typography>
      </Box>
      <Box sx={ordersContainerCardsStyles}>
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            id={order.id}
            description={order.description}
            imgUrl={order.imgUrl}
            price={order.price}
            number={order.number}
          />
        ))}
      </Box>
      {orders.length > 0 ? (
        <Box sx={totalPricesStyles}>
          <Typography>Total Price: ${totalOrders}</Typography>
          <Button variant="contained" color="secondary">Proceed</Button>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default OrdersContainer;
