import React, {useState, useEffect} from "react";
import jwtDecode from "jwt-decode"
import axios from "axios"
import Quotes from "./quotes";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function Home() {
    const [token, setToken] = useState("");

useEffect(() => {
refreshToken()
}, [])

const refreshToken = async() => {
try {
const response = await axios.get("http://localhost:5000/v1/api/refresh_token")
setToken(response.data.accessToken);
const decoded = jwtDecode(response.data.accessToken);
console.log(decoded)
}catch (error) {
 console.log(error)
}
}
  return (
    <div id="Home">
      <div className="w-full flex justify-center">
        <div className="w-40 bg-white rounded-3xl h-9 flex items-center mb-5">
          <NavLink
            to="/"
            className={(nav) =>
              nav.isActive
                ? "w-20 h-7 bg-indigo-500 rounded-l-3xl flex justify-center items-center text-white"
                : "w-20 h-7 bg-white text-indigo-500 rounded-l-3xl flex justify-center items-center border border-indigo-300"
            }
          >
            <span id="home" style={{ fontSize: "12px" }}>
              Home
            </span>
          </NavLink>
          <NavLink
            to="/livechat"
            className={(nav) =>
              nav.isActive
                ? "w-20 h-7 bg-indigo-500 rounded-r-3xl flex justify-center items-center text-white"
                : "w-20 h-7 bg-white text-indigo-500 rounded-r-3xl flex justify-center items-center border border-indigo-300"
            }
          >
            <span id="livechat" style={{ fontSize: "12px" }}>
              Live Chat
            </span>
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default Home;
