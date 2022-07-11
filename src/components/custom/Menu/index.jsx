import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { contexts } from "../../../contexts";
import { filterInputStyles, orderInputStyles, rootStyles } from "./menu.styles";

const Menu = () => {
  const { order, setOrder, filter, setFilter } = useContext(contexts);

  const orderHandler = (e) => {
    setOrder(e.target.value);
  };

  const filterHandler = (e) => {
    setFilter(e.target.value)
  }

  return (
    <Box sx={rootStyles}>
      <Typography>6 Products</Typography>
      <FormControl sx={orderInputStyles}>
        <InputLabel id="order-input">Order</InputLabel>
        <Select
          labelId="order-input"
          id="order-select"
          label="Order"
          value={order}
          onChange={orderHandler}
        >
          <MenuItem value="Lowest">Lowest</MenuItem>
          <MenuItem value="Highest">Highest</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={filterInputStyles}>
        <InputLabel id="filter-input">Filter</InputLabel>
        <Select
          labelId="filter-input"
          id="filter-select"
          label="Filter"
          value={filter}
          onChange={filterHandler}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="XS">XS</MenuItem>
          <MenuItem value="S">S</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="L">L</MenuItem>
          <MenuItem value="XL">XL</MenuItem>
          <MenuItem value="XXL">XXL</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Menu;
