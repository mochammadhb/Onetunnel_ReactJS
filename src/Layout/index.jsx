import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import BtmNavbar from "../Components/BtmNavbar";
import SendMsg from "../Components/SendMesg";
import TopNavbar from "../Components/TopNavbar";
import NavClose from "../Components/TopNavbar/navClose";
import Login from "./Accounts";
import Register from "./Accounts/Register";
import Articles from "./Articles";
import Home from "./Home";
import Stores from "./Stores";

const Index = () => {
  const location = useLocation();
  const [path, setPath] = useState("");

  const pathLocation = () => {
    if (location.pathname === "/stores") {
      return setPath("Stores");
    } else if (location.pathname === "/articles") {
      return setPath("Articles");
    } else if (location.pathname === "/accounts/login") {
      return setPath("Sign In");
    } else if (location.pathname === "/accounts/register") {
      return setPath("Sign Up");
    } else {
      return setPath("");
    }
  };
  useEffect(() => {
    pathLocation();
  }, [location]);
  return (
    <div id="container" className="selection:bg-indigo-200">
      <div id="main-page" className="relative mx-auto">
        {location.pathname !== "/" && location.pathname !== "/livechat" ? (
          <NavClose name={path} />
        ) : (
          <TopNavbar />
        )}
        <div id="content">
          <div className="w-full bg-slate-50 h-auto max-w-screen-sm mx-auto mt-14 mb-16 px-4 py-5">
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="accounts">
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
      {location.pathname !== "/livechat" ? <BtmNavbar /> : <SendMsg />}
    </div>
  );
};

export default Index;
