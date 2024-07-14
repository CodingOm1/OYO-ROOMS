import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Service from "../../components/Services/Service";
import BookingS from "../../components/Booking/Booking";



function Home() {
  return (
    <>
      <Header />
      <Service />
      <BookingS />
    </>
  );
}

export default Home;
