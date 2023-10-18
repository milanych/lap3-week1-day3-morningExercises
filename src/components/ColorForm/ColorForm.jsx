import React, { useState } from "react"

export default function ColorForm({ inputTextName, setInputTextName, inputTextHex, setInputTextHex, colors, setColors }) {
    const handleInputName = (e) => {
        setInputText(e.target.value)
    }
    const handleInputHex = (e) => {
        setInputText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        colors.unshift({"name":inputTextName,"hex":inputTextHex})
        setInputTextName('')
        setInputTextHex('')

    }
    return (
        <>
        <header>Color Form </header>
        <form onSubmit={handleSubmit}>
          <input value={inputTextName} type="text" onChange={handleInputName} placeholder="Name" />
          <input value={inputTextHex} type="text" onChange={handleInputHex} placeholder="Hex Code" />
          <button type="submit">Add</button>       
        </form>
        </>
    )
}
