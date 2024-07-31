import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
// import Check from "./components/Check/Check";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Scrollup from "./components/Scrollup/Scrollup";
import Service from "./components/Services/Service";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Header from "./components/header/Header";
import Qualification from "./components/qualification/Qualification";
// import Testimonials from "./components/testimonials/Testimonials";
// import useLocalStorage from "use-local-storage";
// import { useColorScheme } from "react-native";
// import { ThemeProvider } from "./ThemeContext";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className={`App ${theme}`}>
        <Header onClick={toggleTheme} />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Service />
          <Qualification />
          <Work />
          {/* <Testimonials /> */}
          <Contact />
          {/* <Check /> */}
        </main>
        <Footer />
        <Scrollup />
      </div>
    </>
  );
}

export default App;
