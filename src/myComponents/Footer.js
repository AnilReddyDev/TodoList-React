import React from 'react'
  
export const Footer = () => {
  let footerStyle = {
    position: "relative",
    width: "100vw",
    fontSize: "20px",
    // marginTop: "8%"
    // bottom:"0"
  }
  return (
    <footer className='text-center bg-black text-white py-3 ' style={footerStyle}>
      copyright &copy; MyTodoApp
    </footer>
  )
} 
