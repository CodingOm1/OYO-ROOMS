import React from "react";
import "./service.css";

function Service() {
  return (
    <div className="service">
      <h2 id="main-service-heading">Services of <span id="hoverText">OYO ROOMS</span></h2>
      <div className="services-Container">
        <div className="serviceBox border-bottom">
          <div className="infoService">
            <h4>OYO FANS</h4>
            <h2>Temerature Controller Fans</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              molestias error minus nam architecto dignissimos unde ducimus
              debitis recusandae distinctio! Suscipit hic iure vitae quia illo
              nemo veniam dolore adipisci veritatis facere?
            </p>
            <div className="btn-flex">
              <button id="hoverBtn1">
                <span>Show More</span>
              </button>
              <button id="hoverBtn2">
                <span>360 View</span>
              </button>
            </div>
          </div>
          <div className="serviceShow">
            <img width={"250px"}
              src="https://dam.thdstatic.com/content/production/GDIT0kH6HMqwOtNpdz706g/8EDRB3ATMxa7syX6nzCV7g/optimizedFile/Hero-2019_PCK_CeilingFans_301231214_L_TIF.Jpg?im=Resize=(920,575)"
              alt="Error to Load image"
            />
          </div>
        </div>
        <div className="serviceBox border-bottom reverse-row">
          <div className="infoService">
            <h4>OYO TV's</h4>
            <h2>Digital 4k TV's</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              molestias error minus nam architecto dignissimos unde ducimus
              debitis recusandae distinctio! Suscipit hic iure vitae quia illo
              nemo veniam dolore adipisci veritatis facere?
            </p>
            <div className="btn-flex">
              <button id="hoverBtn1">
                <span>Get Product</span>
              </button>
            </div>
          </div>
          <div className="serviceShow">
            <img width={"250px"}
              src="https://www.cnet.com/a/img/resize/e601910f4435bde813097469d1832af22bc4de92/hub/2023/11/03/2f1f4405-834a-4994-a333-185ecf528e4d/hisense-65u8k-oct-2023-8591.jpg?auto=webp&fit=crop&height=360&width=640"
              alt="Error to Load image"
            />
          </div>
        </div>
        <div className="serviceBox ">
          <div className="infoService">
            <h4>OYO BEDS</h4>
            <h2>Soft and Resting Beds</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              molestias error minus nam architecto dignissimos unde ducimus
              debitis recusandae distinctio! Suscipit hic iure vitae quia illo
              nemo veniam dolore adipisci veritatis facere?
            </p>

          </div>
          <div className="serviceShow">
            <img width={"250px"}
              src="https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products/crown_mark/color/jaymes_b6580-q-hb+fbd+kq-rail-b1.jpg?width=450&height=450&scale=both&trim.threshold=20"
              alt="Error to Load image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
