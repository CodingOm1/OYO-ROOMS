import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  // Li effects Motion
  useEffect(() => {
    const listItems = document.querySelectorAll(".links li");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      listItems.forEach((li) => {
        const { left, top, width, height } = li.getBoundingClientRect();
        const isHovered =
          clientX > left - 50 &&
          clientX < left + width + 50 &&
          clientY > top - 50 &&
          clientY < top + height + 50;

        if (isHovered) {
          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);
          li.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        } else {
          li.style.transform = `translate(0, 0)`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <svg
            width="81"
            height="29"
            viewBox="0 0 81 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g clip-path="url(#clip0_310_13411)">
              {" "}
              <path
                d="M14.3888 29C6.44207 29 0 22.5081 0 14.5C0 6.49187 6.44207 0 14.3888 0C22.3355 0 28.7775 6.49187 28.7775 14.5C28.7775 22.5081 22.3355 29 14.3888 29ZM14.3888 20.0769C17.4452 20.0769 19.9229 17.5801 19.9229 14.5C19.9229 11.42 17.4452 8.92308 14.3888 8.92308C11.3323 8.92308 8.85463 11.42 8.85463 14.5C8.85463 17.5801 11.3323 20.0769 14.3888 20.0769Z"
                fill="#282828"
              ></path>{" "}
              <path
                d="M66.3888 29C58.4421 29 52 22.5081 52 14.5C52 6.49187 58.4421 0 66.3888 0C74.3355 0 80.7775 6.49187 80.7775 14.5C80.7775 22.5081 74.3355 29 66.3888 29ZM66.3888 20.0769C69.4452 20.0769 71.9229 17.5801 71.9229 14.5C71.9229 11.42 69.4452 8.92308 66.3888 8.92308C63.3323 8.92308 60.8546 11.42 60.8546 14.5C60.8546 17.5801 63.3323 20.0769 66.3888 20.0769Z"
                fill="#282828"
              ></path>{" "}
              <path
                d="M25 0H35.3728L40.6272 8.67084L45.6947 0H55.9686L45.1222 18.5587V29H36.2695V18.5971L25 0Z"
                fill="#282828"
              ></path>{" "}
            </g>{" "}
            <defs>
              {" "}
              <clipPath id="clip0_310_13411">
                {" "}
                <rect width="81" height="29" fill="white"></rect>{" "}
              </clipPath>{" "}
            </defs>{" "}
          </svg>
        </div>
        <ul className="links">
          <li>
            <NavLink to="/">
              <span>Home</span>
              {/* <span>Home</span> */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking">
              <span>Booking</span>
              {/* <span>Booking</span> */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/locations">
              <span>Centres</span>
              {/* <span>Centres</span> */}
            </NavLink>
          </li>
          <li className="login">
            <NavLink to="/login&signup">
              <span>Sign Up</span>
              {/* <span>Login</span> */}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
