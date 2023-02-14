import { useContext, useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material";

import { CartContext } from "@/context/cart";

import { ShopLayout } from "@/components/layouts";
import { CartList, Discount } from "@/components/cart";
import { OrderSummary } from "@/components/cart";
import Cookies from "js-cookie";

const SummaryPage = () => {
  const { numberOfItems } = useContext(CartContext);

  return (
    <ShopLayout
      title={`Resumen del pedido - ${numberOfItems} | Tesla-Shop`}
      pageDescription="Carrito de compras en la tienda"
    >
      <Box display="flex" minHeight={"500px"} justifyContent="center" alignItems="center">
        <Grid container maxWidth={1400} margin="0 auto">
          {/* Grid item for the cart list */}
          <Grid item xs={12} md={7} bgcolor="#efefef" padding={"32px"}>
            <Typography
              variant="h1"
              component="h1"
              fontWeight={500}
              sx={{ mb: 3 }}
              textAlign={{ xs: "center", md: "start" }}
            >
              Resumen del pedido
            </Typography>
            <CartList titleBold />
          </Grid>
          <Grid
            item
            xs={12}
            md={1}
            display={{ xs: "initial", md: "flex" }}
            justifyContent={{ xs: "initial", md: "center" }}
          >
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" } }} />
            <Divider
              orientation="horizontal"
              sx={{ display: { xs: "block", md: "none" }, my: 3 }}
            />
          </Grid>

          {/* Grid item for the order summary */}
          <Grid item xs={12} md={4}>
            <Box bgcolor="#efefef" padding={"32px"}>
              <Typography variant="subtitle1">Resumen ({numberOfItems})</Typography>
              <Divider sx={{ mb: 2, mt: 1 }} />
              <OrderSummary />
            </Box>

            <Discount />
            <Divider sx={{ my: 3 }} />

            <Box
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              rowGap={1}
              sx={{ mt: 3 }}
              flexDirection={{ xs: "column", lg: "row-reverse" }}
            >
              <NextLink href="/checkout/summary" passHref legacyBehavior>
                <Link>
                  <Button
                    color="primary"
                    className="circular-btn"
                    size="large"
                    fullWidth
                    sx={{ fontSize: 19 }}
                  >
                    Continuar
                  </Button>
                </Link>
              </NextLink>
              <NextLink href="/cart" passHref legacyBehavior>
                <Link>
                  <Button
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 400, fontSize: 19 }}
                    size="large"
                    fullWidth
                  >
                    Volver a tu carrito
                  </Button>
                </Link>
              </NextLink>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ShopLayout>
  );
};

export default SummaryPage;
