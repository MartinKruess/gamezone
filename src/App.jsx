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
import { CaArticle } from "./pages/ca-article";

export const backendURL = "http://localhost:4000";

function App() {
  const [count, setCount] = useState(0);

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

        <Route exact path="/managment/ca_article" element={<CaArticle />} />

        {/* Footer & more */}
        {/* <Route exact path="/partners" element={<Partner />} />
        <Route exact path="/" element={<Contact />} />
        <Route exact path="/" element={<Impressum />} />
        <Route exact path="/" element={<Datenschutz />} /> */}

        {/* Specials */}
        
        {/* <Route exact path="/" element={<Special02 />} /> */}

        {/* TESTSEITE */}
        {/* <Route exact path="/test" element={<Testpage />} />  */}
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
