import NextLink from "next/link";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { CreditScoreOutlined, RemoveShoppingCartOutlined, ShopOutlined } from "@mui/icons-material";

import { ShopLayout } from "@/components/layouts";
import { CartList } from "@/components/cart";
import { OrderSummary } from "@/components/cart/OrderSummary";

const OrderPage = () => {
  return (
    <ShopLayout title={"Carrito - 3"} pageDescription="Carrito de compras en la tienda">
      <Grid container columnSpacing={8} rowSpacing={2}>
        {/* Grid item for the cart list */}
        <Grid item xs={12} lg={7}>
          <Typography variant="h1" component="h1" sx={{ mb: 0.5 }}>
            Orden: 123
          </Typography>

          {/* <Chip
            label="Pendiente de pago"
            sx={{ mb: 2 }}
            icon={<RemoveShoppingCartOutlined />}
            variant="outlined"
            color="error"
          /> */}
          <Chip
            label="La orden fue pagada"
            sx={{ mb: 2 }}
            icon={<CreditScoreOutlined />}
            variant="outlined"
            color="success"
          />
          <CartList />
        </Grid>

        {/* Grid item for the order summary */}
        <Grid item xs={12} lg={5}>
          <Card className="summary-card" sx={{ position: "sticky", top: 64 }}>
            <CardContent>
              <Box display="flex" justifyContent={"space-between"}>
                <Typography variant="h2" fontWeight={500}>
                  Orden
                </Typography>
                <ShopOutlined />
              </Box>

              <Divider sx={{ my: 2 }} />

              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Typography>Pagar</Typography>
                <Chip
                  label="La orden fue pagada"
                  sx={{ my: 1 }}
                  icon={<CreditScoreOutlined />}
                  variant="outlined"
                  color="success"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
