import React from 'react';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';

import MTK from "./pages/MTK";
import Home from "./pages/Home";
import RA from "./pages/RA";
import Info from "./pages/Info";
import Itri from "./pages/Itri";
import Library from "./pages/Library";
import Encoder from "./pages/encoder";
import Gamma from "./pages/gamma";

function App() {

    return (
        <Router>

              <Routes>
                <Route path='/' element={<Gamma/>}/>
                {/* <Route path='/MTK' element={<MTK/>}/>
                <Route path='/RA' element={<RA/>}/>
                <Route path='/Info' element={<Info/>}/>
                <Route path='/Itri' element={<Itri/>}/>
                <Route path='/Library' element={<Library/>}/>
                <Route path='/encoder' element={<Encoder/>}/> */}
                <Route path='/Gamma' element={<Gamma/>}/>
              </Routes>

        </Router >
    );
  }


export default App;