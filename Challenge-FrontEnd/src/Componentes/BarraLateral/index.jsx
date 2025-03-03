import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './BarraLateral.css';
import MenuLink from '../MenuLink';
import { Link } from 'react-router-dom';

function BarraLateral() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1100);
  const [isNarrow, setIsNarrow] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1100) {
        setIsOpen(false);
        setIsNarrow(false);
      } else if (windowWidth <= 1440) {
        setIsOpen(true);
        setIsNarrow(true);
      } else {
        setIsOpen(true);
        setIsNarrow(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    if (window.innerWidth > 1100) {
      setIsNarrow(!isNarrow);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (isNarrow) {
      setIsNarrow(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isNarrow && window.innerWidth <= 1440) {
      setIsNarrow(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) &&
        window.innerWidth <= 1100
      ) {
        setIsOpen(false);
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth <= 1100) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    
    if (sidebarRef.current) {
      sidebarRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    handleResize();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      if (sidebarRef.current) {
        sidebarRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <button 
        ref={hamburgerRef}
        className={`hamburger ${isOpen && window.innerWidth <= 1100 ? 'hidden' : ''}`} 
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div 
        ref={sidebarRef}
        className={`d-flex flex-column flex-shrink-0 p-3 BarraLateral-custom ${isOpen ? 'open' : ''} ${isNarrow ? 'narrow' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="toggle-button" onClick={toggleSidebar}>
          <i className={`bi ${isNarrow ? 'bi-chevron-right' : 'bi-chevron-left'}`}></i>
        </button>
        <Link to="/" className="d-flex BarraLateral-logo align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src="/logo.png" alt="Tech Titans" className="" />
          <span className="fs-5">Tech Titans</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <MenuLink to='/Home' >
              <i className="bi bi-house-door"></i> <span className="menu-text">Home</span>
            </MenuLink>
          </li>
          <li>
            <MenuLink to='/Tickets'>
              <i className="bi bi-ticket-detailed-fill"></i> <span className="menu-text">Tickets</span>
            </MenuLink>
          </li>
          <li>
            <MenuLink to='/KnowledgeBase'>
              <i className="bi bi-journal-text"></i> <span className="menu-text">Knowledge Base</span>
            </MenuLink>
          </li>
          <li>
            <MenuLink to='/'>
              <i className="bi bi-info-circle-fill"></i> <span className="menu-text">Sobre o Projeto</span>
            </MenuLink>
          </li>
        </ul>
        <hr />
        <div>
          <MenuLink to="#" className="nav-link">
            <i className="bi bi-box-arrow-right"></i> <span className="menu-text">Logout</span>
          </MenuLink>
        </div>
      </div>
    </>
  );
}

export default BarraLateral;
