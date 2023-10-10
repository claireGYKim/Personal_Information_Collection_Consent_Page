import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from "./Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FinalPage from "./Final";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/App' element={<App/>}/>
            <Route path='/Final' element={<FinalPage/>}/>
        </Routes>
    </BrowserRouter>
);