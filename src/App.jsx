// import HomeLayout from "./pages/Home";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import Invoicing from "./pages/Invoicing";
import { ThemeProvider } from "./context/themeContext";
import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
