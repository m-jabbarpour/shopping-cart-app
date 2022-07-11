import { Box, Typography } from "@mui/material";
import React from "react";
import { footerStyles, headerStyles } from "./layout.styles";

const Layout = ({ children }) => {
  return (
    <>
      <Box component="header" sx={headerStyles}>
        <Typography>React Shopping Cart</Typography>
      </Box>
      {children}
      <Box component="footer" sx={footerStyles}>
        <Typography align="center">All right is reserved</Typography>
      </Box>
    </>
  );
};

export default Layout;
