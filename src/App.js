import React, { useState, useEffect } from "react";
import { Cart, CheckoutForm , Navbar, Products } from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts([data]);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    console.log(response);
    setCart(response);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    console.log(response);
    setCart(response);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    console.log(response);
    setCart(response);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const handleCaptureCheckout = async (newOrder) => {
    try {
      refreshCart();
      const incomingOrder = await commerce.checkout.capture(newOrder);
      setOrder(incomingOrder);

    } catch (error) {
      console.log(error);
      setErrorMessage(error.data.error.message);
      
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          <Route path="/checkout"  element={<CheckoutForm cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
