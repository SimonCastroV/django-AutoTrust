import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarList from "./components/CarList";
import Header from "./components/header";
import CarForm from "./components/CarForm";
import AutoTrustHomepage from "./components/HomePage"

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Header />
        <Routes>
          <Route path="/home" element={<AutoTrustHomepage />} />
          <Route path="/" element={<CarList />} />
          <Route path="/CarForm" element={<CarForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
