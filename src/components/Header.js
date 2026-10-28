import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-success shadow-sm mb-4">
      <div className="container">
        <span className="navbar-brand fw-bold fs-4">
          <i className="bi bi-building me-2"></i>HotelEco
        </span>
        <div className="navbar-nav ms-auto gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              'nav-link px-3 rounded ' + (isActive ? 'active bg-white text-success fw-bold' : 'text-white')
            }
          >
            inicio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              'nav-link px-3 rounded ' + (isActive ? 'active bg-white text-success fw-bold' : 'text-white')
            }
          >
            hotel
          </NavLink>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              'nav-link px-3 rounded ' + (isActive ? 'active bg-white text-success fw-bold' : 'text-white')
            }
          >
            habitaciones
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              'nav-link px-3 rounded ' + (isActive ? 'active bg-white text-success fw-bold' : 'text-white')
            }
          >
            contactos
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
