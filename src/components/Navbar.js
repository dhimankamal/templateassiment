import React from 'react'
import logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <section>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container'>
            <NavLink className='navbar-brand' to='/'>
              <img src={logo} alt='logo' />
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link mx-3'
                    aria-current='page'
                    to='/'
                  >
                   Home
                  </NavLink>
                </li>
                <li className='nav-item mx-3'>
                  <NavLink className='nav-link' to='/about'>
                    About us
                  </NavLink>
                </li>
                <li className='nav-item mx-3'>
                  <NavLink className='nav-link' to='/admmission'>
                    Admmission
                  </NavLink>
                </li>
                <li className='nav-item mx-3'>
                  <NavLink className='nav-link' to='/pages'>
                    Pages
                  </NavLink>
                </li>
                <li className='nav-item mx-3'>
                  <NavLink className='nav-link' to='/news'>
                    News
                  </NavLink>
                </li>
                <li className='nav-item mx-3'>
                  <NavLink className='nav-link' to='/contact'>
                    Contact
                  </NavLink>
                </li>
                <li className='nav-item mx-3'>
                  <button className='nav-button'>Apply now</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar
