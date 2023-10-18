import Nav from './Nav';
import { ColorsList, ColorItem, ColorForm } from './components';
import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import colorsList from "./colors.json"
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState('')
  const [inputHex, setInputHex] = useState('')
  const [colors, setColors] = useState([ColorsList])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="colors">
            <Route index element={<ColorsList colors={colorsList} />} />
            <Route path="new" element={<ColorForm inputName={inputName} setInputName={setInputName} inputHex={inputHex} setInputHex={setInputHex} colorsList={colorsList} setColors={setColors} />} />
            <Route path=":color" element={<ColorItem colorsList={colorsList} setColors={setColors} />} />
          </Route>
          <Route path="*" element={<ColorsList colors={colorsList} />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
