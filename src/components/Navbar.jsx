import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/nav.css';

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  };

  const openNav = () => {
    setNavActive(!navActive);
    const el = document.querySelector('.nav-item-wrap');
    const isContain = el.classList.contains('active');
    if (isContain) {
      el.classList.remove('active');
      document.body.style.overflow = null;
    } else {
      el.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };
  return (
    <section
      id="navbar"
      className="h-16 py-3 px-5 flex items-center justify-between sticky top-0 z-50"
      style={{
        background: '#09173c',
        borderBottom: '1px solid rgb(22 46 114)',
      }}
    >
      <p className="title-nav" onClick={toHome}>
        Tata Surya
      </p>
      <div className="w-9 h-9">
        <button
          className="btn bg-transparent w-full h-full p-1"
          onClick={() => openNav()}
        >
          <img
            src={navActive ? '/assets/close.svg' : '/assets/menu.svg'}
            alt="menu icon"
          />
        </button>
      </div>
      <div className="nav-item-wrap absolute right-0 bottom-0 bg-blue-primary-0 p-5">
        <ul className="text-sm grid gap-5">
          <li>
            <Link className="w-full" to={'/petunjuk'} onClick={() => openNav()}>
              Halaman Petunjuk
            </Link>
          </li>
          <li>
            <Link className="w-full" to={'/tentang'} onClick={() => openNav()}>
              Halaman Tentang
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
