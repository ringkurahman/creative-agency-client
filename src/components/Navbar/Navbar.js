import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import './Navbar.css';




const Navbar = () => {

  const [loggedInUser, setLogInUser] = useContext(UserContext);

  return (
            <nav className='navbar navbar-expand-lg navbar-light container my-3'>
              <Link to='/'>
                  <img style={{ height: '50px'}} className="navbar-brand" src={logo} alt="Creative Agency" />
              </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ml-auto'>
                    <li className='nav-item active'>
                        <Link to='/' className='nav-link mr-4 text-dark active'>
                        Home <span className='sr-only'>(current)</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio' className='nav-link mr-4 menu-text'>
                        Our Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/team' className='nav-link mr-4 menu-text'>
                        Our Team
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contactus' className='nav-link mr-4 menu-text'>
                        Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-link text-white btn btn-login px-4'>
                            {loggedInUser.email ? loggedInUser.name.slice(0, 6) : 'Login'}
                            </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
};

export default Navbar;
