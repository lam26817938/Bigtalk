import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MTK from "./pages/MTK";
import Home from "./pages/Home";
import RA from "./pages/RA";
import Info from "./pages/Info";
import Itri from "./pages/Itri";
import Library from "./pages/Library";
import Encoder from "./pages/encoder";

function App() {

    return (
        <Router basename="/Bigtalk">

              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/MTK' element={<MTK/>}/>
                <Route path='/RA' element={<RA/>}/>
                <Route path='/Info' element={<Info/>}/>
                <Route path='/Itri' element={<Itri/>}/>
                <Route path='/Library' element={<Library/>}/>
                <Route path='/encoder' element={<Encoder/>}/>
              </Routes>

        </Router >
    );
  }


export default App;