import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu'; // تأكد من تثبيت @mui/icons-material
import { Button } from '@mui/material';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" >
        <img className="navbar-imgLogo" src="/logo.webp" alt="" width={30} height={30} style={{borderRadius:"5px",marginRight:"2px"}} />
        <a href='/'>Healer</a>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu} >
        <MenuIcon/>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="search">Search</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="about">About</a></li>
        <li><a href="hospitals">Hospitals</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
      <div className="navbar-languages">
        <img src="/KSA-flag.png" alt="" width={15} height={15} />
        <select>
          <option value="ar">Arabic</option>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
      <div className="navbar-buttons">
        <Button size='small' variant="contained" sx={{backgroundColor:"#27a344",marginRight:"10px"}}>Login</Button>
        <Button size='small' variant="contained" sx={{backgroundColor:"#a34e27"}}>Register</Button>
      </div>
    </nav>
  );
}
