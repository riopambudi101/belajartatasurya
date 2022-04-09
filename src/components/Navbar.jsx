import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  };
  return (
    <section
      id="navbar"
      className="h-16 py-3 px-5 flex items-center justify-between sticky top-0 z-50"
      style={{
        background: '#09173c',
        borderBottom: '1px solid rgb(32 53 108 / 52%)',
      }}
    >
      <p className="title-nav" onClick={toHome}>
        Tata Surya
      </p>
      <div>
        <div onClick={() => console.log('hai')}>
          <img src="/assets/menu.svg" alt="menu icon" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
