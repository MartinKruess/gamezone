import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landingpage } from "./pages/landingpage";
import { CelestAbyss } from "./pages/celestAbyss";
import { Merch } from "./pages/merch";
import { Header } from "./components/reusables/header";
import { Navbar } from "./components/reusables/navbar";
import { Streamplan } from "./pages/streamplan";
import { Technikshop } from "./pages/technikshop";
import { Shop } from "./pages/shop";
import { Footer } from "./components/reusables/footer";

// MANAGEMENT PAGES
import { Login } from "./pages/loginpage";
import { Dashboard } from "./pages/management/dashboard";
import { CaArticle } from "./pages/caArticle";
import { CreateMerchArticle } from "./pages/management/createMerchArticle";


export const backendURL = "http://localhost:5500";

function App() {
  return (
    <main className="App">
      <Header />
      <Navbar />
      <Routes>
        {/* Public Pages */}
        <Route exact path="/" element={<Landingpage />} />
        <Route exact path="/myGame/CelestAbyss" element={<CelestAbyss />} />
        <Route exact path="/shop/merch" element={<Merch />} />
        <Route exact path="/live/streamplan" element={<Streamplan />} />
        <Route exact path="/shop/technik" element={<Technikshop />} />
        <Route exact path="/shop/extras" element={<Shop />} />

        {/* MANAGEMENT PAGES */}
        <Route exact path="/management/login" element={<Login />} /> 
        <Route exact path="/management/dashboard" element={<Dashboard />} />
        <Route exact path="/management/celestabyss" element={<CaArticle />} />
        <Route exact path="/management/merch" element={<CreateMerchArticle />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
