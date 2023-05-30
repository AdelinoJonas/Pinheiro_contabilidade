import React from 'react'
import { useNavigate } from 'react-router-dom';

export function About () {
  const navigate = useNavigate();

  return (
  <>
    <button onClick={()=> navigate("/services")}>index</button>
    <button onClick={() => setIsDarkTheme(!isDarkTheme)}>theme</button>
  </>
  )
}
