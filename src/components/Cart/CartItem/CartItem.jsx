import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">{item.name}</Typography>
        <Typography variant="body2">
          {item.price.formatted_with_code}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => {
              handleUpdateCartQty(item.id, item.quantity - 1);
            }}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => {
              handleUpdateCartQty(item.id, item.quantity + 1);
            }}
          >
            +
          </Button>
        </div>
        <Button 
        variant="contained" 
        type="button" 
        color="secondary"
        onClick={() => { handleRemoveFromCart(item.id) }}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
