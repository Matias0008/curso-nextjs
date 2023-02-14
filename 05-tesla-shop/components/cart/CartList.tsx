import { useContext } from "react";
import NextLink from "next/link";

import { Box, CardActionArea, CardMedia, Grid, IconButton, Link, Typography } from "@mui/material";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { CartContext } from "@/context/cart";

import { ItemCounter, Price } from "@/components/ui";
import { ICartProduct } from "@/interfaces";

interface Props {
  editable?: boolean;
  titleBold?: boolean;
  cartListGap?: boolean;
}

export const CartList: React.FC<Props> = ({
  editable = false,
  titleBold = false,
  cartListGap = false,
}) => {
  const { cart, updateCartQuantity, deleteItemFromCart } = useContext(CartContext);

  const onQuantityChange = (product: ICartProduct, newQuantity: number) => {
    updateCartQuantity(product, newQuantity);
  };

  const onDeleteItem = (product: ICartProduct) => {
    deleteItemFromCart(product);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" gap={3}>
        {cart.map((product) => (
          <Grid container spacing={2} key={product.slug + product.size}>
            <Grid item xs={4} sm={2}>
              <NextLink href={`/product/${product.slug}`} passHref legacyBehavior>
                <Link>
                  <CardActionArea sx={{ height: "100%" }}>
                    <CardMedia image={`/products/${product.image}`} component="img" height="100%" />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>

            <Grid item xs={8} sm={8}>
              <Box display="flex" flexDirection="column" gap={1.5}>
                <Box display="flex" flexDirection="column" gap={cartListGap ? 1 : 0}>
                  <Typography variant="body1" fontWeight={550}>
                    {product.title}
                  </Typography>
                  {editable ? (
                    <>
                      <ItemCounter
                        currentValue={product.quantity}
                        onQuantityChange={(value) => onQuantityChange(product, value)}
                        maxValue={10}
                      />
                      <Typography variant="subtitle1" display={{ xs: "none", sm: "block" }}>
                        {product.size}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography>Cantidad: {product.quantity}</Typography>
                      <Typography variant="subtitle1" display={{ xs: "none", sm: "block" }}>
                        {product.size}
                      </Typography>
                    </>
                  )}
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" display={{ xs: "block", sm: "none" }}>
                      ${product.price} / {product.size}
                    </Typography>
                    {editable && (
                      <Link
                        display={{ xs: "block", sm: "none" }}
                        fontWeight={700}
                        underline="hover"
                        sx={{
                          maxWidth: "100px",
                        }}
                      >
                        <DeleteOutlinedIcon color="error" />
                      </Link>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={2}
              sm={2}
              alignItems="end"
              flexDirection="column"
              display={{ xs: "none", sm: "flex" }}
            >
              <Price>$ {product.price}</Price>

              {editable && (
                <Link
                  color="error"
                  fontWeight={700}
                  underline="hover"
                  sx={{
                    maxWidth: "100px",
                    cursor: "pointer",
                  }}
                >
                  <IconButton sx={{ padding: 0 }} onClick={() => onDeleteItem(product)}>
                    <DeleteOutlinedIcon color="error" />
                  </IconButton>
                </Link>
              )}
            </Grid>
          </Grid>
        ))}
      </Box>
    </>
  );
};
