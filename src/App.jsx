// import HomeLayout from "./pages/Home";
import Home from "./pages/Home";
import Invoicing from "./pages/Invoicing";

import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/invoicing" element={<Invoicing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
