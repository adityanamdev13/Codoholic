import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Courses from "./Pages/Courses";
import TermsToUse from "./Pages/TermsToUse";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/terms-of-use" element={<TermsToUse/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
