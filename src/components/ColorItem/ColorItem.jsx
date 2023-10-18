import React from "react"

export default function ColorItem({ colorsList }) {
    const url = window.location.href;
    const split = (url.split('/'))

    const col = colorsList.filter(el => el.name.toLowerCase() === split[split.length - 1].replace('%20', ' ').toLowerCase())

    const bg = {
      display: 'flex',
      width: '100%',
      justifyContent: "center",
      alignItems: 'center',
          color: "white",
          backgroundColor: col[0].hex,
          height:'100vh',
          fontSize: '4rem',
          flexDirection: 'column'
        };
    return (<>
      <div style={bg}>
        <span>Name: {col[0].name}</span>
        <br />
        <span>Hex: {col[0].hex}</span>
        </div>
    </>)
}

