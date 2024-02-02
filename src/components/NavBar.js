import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    /* display an <a> tag for each link here */
    <ul>
    {links.map((link, index) => (
      // Each <a> element gets a unique key prop
     
        <a href={`#${link}`} key={index}>{link}</a>
      
    ))}
  </ul>
    }</nav>;
}

export default NavBar;
 