import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ViewProduct from "./components/ViewProduct";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/" element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
