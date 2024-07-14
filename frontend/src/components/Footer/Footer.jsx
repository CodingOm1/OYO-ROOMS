import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerColumn flex column">
        <h1>OYO ROOMS</h1>
      </div>
      <div className="footerColumn flex column">
        <h2>Links</h2>
        <ul>
            <li>Home</li>
            <li>Locations</li>
            <li>Appointments</li>
            <li>Main Hotels</li>
            <li>Bookings</li>
        </ul>
      </div>
      <div className="footerColumn flex column">
        <h2>Contact us</h2>
        <ul>
            <li>Help Center: support@oyo.in</li>
            <li>Customer Help Line. +12 2015-25-6032</li>
            <li>Report Line. report@oyorooms.help</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
