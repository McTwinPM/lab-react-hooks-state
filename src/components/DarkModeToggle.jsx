import React, { useState } from 'react'

import './DarkMode.module.css'

const DarkModeToggle = ({darkMode, setDarkMode}) => {
  // TODO: Implement dark mode toggle logic
  const handleToggle = () => {
    setDarkMode(!darkMode)
  }
    
    

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button 
        className="darkModeButton" 
        onClick={handleToggle}
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      </div>
    // <div style={{ 
    //   backgroundColor: darkMode? 'black' : 'white',
    //   color: darkMode ? 'white' : 'black',
    //   }}>
    
    // <button class= "darkModeButton" onClick={() => setDarkMode(!darkMode)}> Toggle Dark Mode</button>
    // </div>

    
  )
}

export default DarkModeToggle
