import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/index";
import NotFound from "./components/NotFound";
import Overview from "./pages/Overview";
import Home from "./components/home/index";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/properties-overview" element={<Overview />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AppRouter;
