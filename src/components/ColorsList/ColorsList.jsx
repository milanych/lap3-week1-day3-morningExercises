import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";

export default function ColorsList({colors}) {
  return (
    <div>
      <h1>Colors</h1>
      <div>
        {colors.map((el, i) => (
          <p key={i}>
            <Link style={{color: `${el.hex}`}} to={`/colors/${el.name}`}>{el.name} / {el.hex}</Link>
            </p>
        ))}
      </div> 
    </div>
  )
}
