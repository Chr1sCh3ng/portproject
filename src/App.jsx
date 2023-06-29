import "./App.css";
import Footer from "./components/footer/Footer";
import React from "react";
import SiteNav from "./components/SiteNav";
// import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MittsAndDice from "./components/christmasgames/mittsanddice/MittsAndDice";
import WhiteElephantTwist from "./components/christmasgames/whiteelephanttwist/WhiteElephantTwist";

import Home from "./components/Home";
import AboutMe from "./components/aboutme/AboutMe";
import "./components/StyleSheet.css";
import QRModal from "./components/qrCodemodals/QRModal";
import Visual from "./components/christmasgames/mittsanddice/VirtualRep";
import HomeMobile from "./components/qrCodemodals/HomeMobile";

function App() {
  return (
    <React.Fragment>
      <div className="bg-dark min-vh-100">
        <div>
          <SiteNav />
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/two" element={<HomeMobile />}></Route>
            <Route path="/aboutme" element={<AboutMe />}></Route>
            <Route path="/mittsanddice" element={<MittsAndDice />}></Route>
            <Route
              path="/whiteelephanttwist"
              element={<WhiteElephantTwist />}
            ></Route>
            <Route path="/qrcode" element={<QRModal />}></Route>

            <Route path="/visualrep" element={<Visual />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default App;
