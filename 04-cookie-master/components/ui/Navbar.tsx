import NextLink from "next/link";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";

export function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <NextLink href="/" passHref legacyBehavior>
          <Link underline="none" color="white">
            <Typography variant="h6">CookieMaster</Typography>
          </Link>
        </NextLink>
        <div style={{ flex: 1 }} />
        <NextLink href="/theme-changer" passHref legacyBehavior>
          <Link underline="none" color="white">
            <Typography variant="h6">Cambiar tema</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
}
