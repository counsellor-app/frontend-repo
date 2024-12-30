import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import MenuBar from "./component/menubar/menubar";
import image1 from "./image/image1.jpg";
import image2 from "./image/image2.jpg";
import video from "./image/video.jpg";
import phone from "./image/phone.png";
import chat from "./image/chat.png";
import "./component/styles.css";
import SearchCounsellor from "./page/search_counsellor";
import Home from "./page/home";
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search_counsellor" element={<SearchCounsellor />}/>
        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
