import { useContext } from "react";
import NextLink from "next/link";

import { AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material";

import { UIContext } from "../../context/ui";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ paddingX: { xs: "10px", sm: 3 } }}>
        <NextLink href="/" passHref legacyBehavior>
          <Link underline="none" color="white">
            <Typography variant="h6">OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
