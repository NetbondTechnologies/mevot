
import { NavLink } from "react-router";

const Navbar = () => {
  const handleScrollTo = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
  return (
    <div className="navbar">
      <div className="nav-item" onClick={()=>{
        handleScrollTo()
      }}>
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
      </div>
        <NavLink to={"/"}>
      <div className="nav-logo" onClick={()=>{
        handleScrollTo()
      }}>

        <img src="./asset 0.webp" alt="" />
      </div>
        </NavLink>
      <div className="nav-item" onClick={()=>{
        handleScrollTo()
      }}>
        <NavLink to="/contact">
          <h3>Contact Us</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
