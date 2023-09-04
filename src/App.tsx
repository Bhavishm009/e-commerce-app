import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import LoadingBox from "./components/LoadingBox";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
