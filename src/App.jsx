import Nav from './Nav';
import {ColorsList, ColorItem, ColorForm} from './components';
import './App.css';
import { Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import colors from "./colors.json"


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Nav />}> */}
          {/* <Route index element={<Home />} /> */}
            <Route path="colors">
              <Route index element={<ColorsList colors={colors} />} />
              <Route path="new" element={<ColorForm inputTextName={inputTextName} setInputTextName={setInputTextName} inputTextHex={inputTextHex} setInputTextHex={setInputTextHex} colors={colors} setColor={setColors}/>}/>
              <Route path=":color" element={<ColorItem colors={colors} />}/>
            {/* </Route> */}
            <Route path="*" element={<h1>Hi</h1>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
