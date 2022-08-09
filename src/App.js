import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Blank from "./components/Blank/Blank";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Blank />} />
          <Route path="/events" element={<Blank />} />
          <Route path="/clients" element={<Blank />} />
          <Route path="/reservations" element={<Blank />} />
          <Route path="/testimonials" element={<Blank />} />
          <Route path="/contact" element={<Blank />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
