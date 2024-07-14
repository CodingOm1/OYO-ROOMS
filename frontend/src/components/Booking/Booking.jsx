import React from "react";
import "./Bookings.css";
import { RiMapPin2Fill } from "react-icons/ri";

function BookingS() {
  return (
    <div className="booking">
      <div className="box-container-book">
        <div className="bookBox">
          <div className="bookingImg">
            <img
              src="https://images.pexels.com/photos/2084291/pexels-photo-2084291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Error to load image"
            />

          </div>
          <div className="bookingInfo">
            <h2>Classic top 1</h2>
            <div className="location">
              <RiMapPin2Fill id="map" /> <p>Ankush Nagar, Old Chrhata Road, Beed -431122</p>
            </div>
          </div>
        </div>
        <div className="bookBox">
          <div className="bookingImg">
            <img
              src="https://images.pexels.com/photos/1637780/pexels-photo-1637780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Error to load image"
            />

          </div>
          <div className="bookingInfo">
            <h2>Classic top 1</h2>
            <div className="location">
              <RiMapPin2Fill id="map" /> <p>Ankush Nagar, Old Chrhata Road, Beed -431122</p>
            </div>
          </div>
        </div>
        <div className="bookBox">
          <div className="bookingImg">
            <img
              src="https://images.pexels.com/photos/1637802/pexels-photo-1637802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Error to load image"
            />

          </div>
          <div className="bookingInfo">
            <h2>Classic top 1</h2>
            <div className="location">
              <RiMapPin2Fill id="map" /> <p>Ankush Nagar, Old Chrhata Road, Beed -431122</p>
            </div>
          </div>
        </div>
        <div className="bookBox">
          <div className="bookingImg">
            <img
              src="https://images.pexels.com/photos/257499/pexels-photo-257499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Error to load image"
            />

          </div>
          <div className="bookingInfo">
            <h2>Classic top 1</h2>
            <div className="location">
              <RiMapPin2Fill id="map" /> <p>Ankush Nagar, Old Chrhata Road, Beed -431122</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingS;
