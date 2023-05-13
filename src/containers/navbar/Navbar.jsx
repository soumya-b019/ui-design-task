import {React, useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Logo from '../../assets/Logo.png'

const Menu = () => {
  return(
      <>
          <p><a href='#hero'>Features</a></p>
          <p><a href='#blog'>Blog</a></p>
          <p><a href='#about'>About</a></p>
          <p><a href='#cta'>Contact</a></p>
      </>
  )
}

const Navbar = () => {

  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>

        <div className='navbar-links_logo'>
          <img src={Logo} alt='logo' width={88} height={88} />
        </div>

        <div className='navbar-links_container'>
          <div className='navbar-links_container_links'>
            <Menu/>
          </div>
          <div className='navbar-links_container_sign'>
            <button>Join Waitlist</button>
          </div>
        </div>

      </div>
      <div className='navbar-menu'>
        {toggleMenu 
            ? <RiCloseLine color='var(--text-color-nav)' size='2em'
            cursor='pointer' onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='var(--text-color-nav)' size='2em' 
            cursor='pointer' onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
              <div className='navbar-menu_container-links'>
                  <Menu/>
                  <div className='navbar-menu_container-links-sign'>
                      <button>Join Waitlist</button>
                  </div>
              </div>
          </div>
        )}  
      </div>         
    </div>
  )
}

export default Navbar