import React, { useEffect } from 'react';
import './Cursor.css';

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { scrollX, scrollY } = window;
      cursor.style.top = `${clientY + scrollY}px`;
      cursor.style.left = `${clientX + scrollX}px`;

      // Detect the element under the cursor
      const element = document.elementFromPoint(clientX, clientY);
       const cursorType = window.getComputedStyle(element).cursor;

      // Add or remove class based on cursor type
      if (cursorType === 'pointer') {
        cursor.classList.add("cursor--pointer");
      } else {
        cursor.classList.remove("cursor--pointer");
      }


    };

    const handleMouseEnter = () => {
      cursor.classList.add("cursor--active");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor--active");
      cursor.classList.add("cursor--disactive");
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div className="cursor"><div className="dot"></div></div>;
}

export default Cursor;
