import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import logo from "../assets/sajal-logo.jpeg"

function Navbar() {
  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <nav className=' h-auto md:h-18 p-2 bg-white  mx-auto flex justify-between md:items-center sticky top-0 '>
      <Link to='/'>
        
        <img src={logo} alt="logo-sajal" className=' w-24' />
      </Link>
      <div
        className={
          togglerNav ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'
        }
      >
        <NavLink className='nav-link' onClick={clickHandler} to='/'>
          HOME
        </NavLink>
        <NavLink className='nav-link' onClick={clickHandler} to='/signin'>
          SIGN IN
        </NavLink>
        <NavLink className='nav-link' onClick={clickHandler} to='/signup'>
        SIGN UP
        </NavLink>
      </div>
      <button
        className=' inline md:hidden self-start nav-link'
        onClick={clickHandler}
      >
        {togglerNav ? <AiOutlineClose /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;