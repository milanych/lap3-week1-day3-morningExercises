import React from "react"

export default function ColorForm({ inputName, setInputName, inputHex, setInputHex, colorsList, setColors }) {
  const handleInputName = (e) => setInputName(e.target.value)
  const handleInputHex = (e) => setInputHex(e.target.value)


  function isValidHexaCode(str) {
    if (str[0] != '#')
      return false;

    if (!(str.length == 4 || str.length == 7))
      return false;

    for (let i = 1; i < str.length; i++)
      if (!((str[i].charCodeAt(0) <= '0'.charCodeAt(0) && str[i].charCodeAt(0) <= 9)
        || (str[i].charCodeAt(0) >= 'a'.charCodeAt(0) && str[i].charCodeAt(0) <= 'f'.charCodeAt(0))
        || (str[i].charCodeAt(0) >= 'A'.charCodeAt(0) || str[i].charCodeAt(0) <= 'F'.charCodeAt(0))))
        return false;

    return true;
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (isValidHexaCode(inputHex)) {
      colorsList.unshift({ "name": inputName, "hex": `${inputHex}` })
      console.log(colorsList)

      setInputName('')
      setInputHex('')
    } else {
      alert("Invalid Color Hex")
    }


  }
  return (
    <div className="formBlock">
      <h1>Color Form </h1>
      <form className="form" onSubmit={handleSubmit}>
        <input value={inputName} type="text" onChange={handleInputName} placeholder="Name" />
        <input value={inputHex} type="text" onChange={handleInputHex} placeholder="Hex Code" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
