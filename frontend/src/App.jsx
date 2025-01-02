import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/adminView/layout";
import AdminDashboard from "./pages/adminView/dashboard";
import AdminFeatures from "./pages/adminView/features";
import AdminOrders from "./pages/adminView/orders";
import AdminProducts from "./pages/adminView/products";
import ShoppingLayout from "./components/shoppingView/layout";
import NotFound from "./pages/notFound";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component */}
      <h1>Header components</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
