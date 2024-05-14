import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FullProduct from "./pages/FullProduct";
import { useEffect, useState } from "react";

function App() {
  const [cartArr, setCartArr] = useState(
    JSON.parse(localStorage.getItem("cart"))
    // по умолчанию получаем массив из localStorage
  );
  function addToCart(item) {
    const carrentItem = getCartItem(item);
    if (carrentItem) {
      setCartArr((prev) =>
        prev.map((item) => {
          if (item.id === carrentItem.id) {
            item.count++;
          }
          return item;
        })
      );
    } else {
      setCartArr((prev) => [...prev, { ...item, count: 1 }]);
    }
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }, [cartArr]);
  // При каждом изменении cartArr сохраняем в локальное хранилище
  function getCartItem(item) {
    const carrentItem = cartArr.find((elem) => item.id === elem.id);
    return carrentItem;
  }
  console.log(cartArr);
  function clearCart() {
    if (window.confirm("Вы уверены, что хотите очистить корзину?")) {
      setCartArr([]);
    }
  }
  function minusCartItem(item) {
    const carrentItem = getCartItem(item);
    if (carrentItem) {
      setCartArr((prev) =>
        prev.map((item) => {
          if (item.id === carrentItem.id) {
            item.count--;
          }
          return item;
        })
      );
    }
  }
  function deleteCartItem(item) {
    if (window.confirm("Вы уверены, что хотите удалить товар из корзины?")) {
      const carrentItem = getCartItem(item);
      setCartArr((prev) => prev.filter((item) => item.id !== carrentItem.id));
    }
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} getCartItem={getCartItem} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartArr={cartArr}
              clearCart={clearCart}
              addToCart={addToCart}
              minusCartItem={minusCartItem}
              deleteCartItem={deleteCartItem}
            />
          }
        />
        <Route path="/product/:id" element={<FullProduct />} />
      </Routes>

      {/* описываем здесь пути и страницы по которым можем переходить */}
    </div>
  );
}

export default App;
