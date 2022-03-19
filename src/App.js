import "./App.css";
import { NavBarComponet } from "./components/Navbar/Navbar";
import { Body } from "./components/Body/TextFieldandBannerImage";
import { Route, Routes } from "react-router-dom";
import { SignsPage } from "./Pages/Signs";
import { HoroscopeComponent } from "./Pages/Horoscope";

function App() {
  return (
    <>
      <NavBarComponet></NavBarComponet>
      <Routes>
        <Route path="/*" element={<Body></Body>}></Route>
        <Route path="/signs" element={<SignsPage />}></Route>
        <Route
          path="/signs/*"
          element={<HoroscopeComponent></HoroscopeComponent>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
