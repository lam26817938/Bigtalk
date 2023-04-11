import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MTK from "./pages/MTK";
import Home from "./pages/Home";
import RA from "./pages/RA";
import Info from "./pages/Info";

function App() {

    return (
        <Router basename="/Bigtalk">

              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/MTK' element={<MTK/>}/>
                <Route path='/RA' element={<RA/>}/>
                <Route path='/Info' element={<Info/>}/>
              </Routes>

        </Router >
    );
  }


export default App;