import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FullProduct from "./pages/FullProduct";

function App() {
  // При каждом изменении cartArr сохраняем в локальное хранилище

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<FullProduct />} />
      </Routes>

      {/* описываем здесь пути и страницы по которым можем переходить */}
    </div>
  );
}

export default App;
