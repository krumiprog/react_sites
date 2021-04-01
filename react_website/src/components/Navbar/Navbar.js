import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Navbar.scss';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    showButton();
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  const handleClick = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            Web Site
            <i class="fas fa-frog" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={menu ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={menu ? 'nav active' : 'nav'}>
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/services" className="nav__link" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/products" className="nav__link" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav__link-mobile"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
