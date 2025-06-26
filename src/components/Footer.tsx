import React from "react";
import { NavLink } from "react-router";

const Footer: React.FC = () => {
    const handleScrollTo = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
  return (
    <div className="footer">
      <NavLink to={"/"}>
        <div className="foot-logo">
          <img src="./asset 0.webp" alt="" />
        </div>
      </NavLink>
      <div className="foot-item" onClick={()=>{
        handleScrollTo();
      }}>
        <NavLink to="/terms-and-conditions">
          <h3>Terms and Conditions</h3>
        </NavLink>
      </div>
      <div className="contact">
        contact@ridemevot.com
      </div>
    </div>
  );
};

export default Footer;
