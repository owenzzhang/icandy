import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/category/subcategory" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
