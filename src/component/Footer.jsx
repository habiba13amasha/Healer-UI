import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <img src="path-to-your-logo-image.jpg" alt='Healer' width={150} height={50}/>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Terms </a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Search by</h4>
        <ul>
          <li><a href="#">Speciality</a></li>
          <li><a href="#">Area</a></li>
          <li><a href="#">Insurance</a></li>
          <li><a href="#">Hospital</a></li>
          <li><a href="#">Center</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Are You A Doctor ?</h4>
        <ul>
          <li><a href="#">Join Healer Doctors</a></li>
          <li>
            <a href="#">
             <img src="path-to-your-phone-image-left.jpg" alt="Google Play" width={150} height={50}/>
            </a>
          </li>
          <li>
            <a href="#">
             <img src="path-to-your-phone-image-right.jpg" alt="App Store" width={150} height={50} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Countries</h4>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}> 
          <p>Egypt</p>
          <p>KSA</p>
          <p>UAE</p>
          <p>Qatar</p>
          <p>Oman</p>
        </div>
      </div>
    </div>
  );
}
