import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from './styles';


function Products({products, onAddToCart}) {
 
  const classes=useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={4} justifyContent="center">
        {products[0]?.map((product) => {
          return (
            <Grid  key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          )
        } )}
      </Grid>
    </main>
  );
}

export default Products;
