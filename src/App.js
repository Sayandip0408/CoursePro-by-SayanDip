import React from "react";
import Navbar from "./Navbar";
import NavbarUlMob from "./NavbarUlMob";
import Header from "./Header";
import Services from "./Services";
import Records from "./Records";
import Courses from "./Courses";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <NavbarUlMob />
      <Header />
      <Records />
      <Services />
      <Courses />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
