import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MTK from "./pages/MTK";

function App() {

    return (
        <Router basename="/Bigtalk">

              <Routes>
                <Route path='/' element={<MTK/>}/>
              </Routes>

        </Router >
    );
  }


export default App;