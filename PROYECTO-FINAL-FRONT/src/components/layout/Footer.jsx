import React from 'react'

const Footer = () => {
  return (
   <footer className="container">
      <p className="float-right"><a href="#">Back to top</a></p>
      <p>&copy; {props.text} &middot; <a href="#"></a> &middot; <a href="#">Terms</a></p>
   </footer>
  )
}

export default Footer