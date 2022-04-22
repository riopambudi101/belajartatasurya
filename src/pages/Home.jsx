import React, { useEffect } from 'react';
import Item from '../components/Item';
import '../styles/home.css';

import data from '../data/planets.json';

const Home = () => {
  return (
    <section id="Home">
      <div className="cover-top relative h-screen grid place-items-center">
        <div className="img-wrap h-full overflow-hidden">
          <img
            src="assets/images/cover.png"
            alt="cover planet"
            className="h-full object-cover opacity-75"
          />
        </div>
        <div className="text-cover absolute">
          <h1 className="text-4xl text-center">belajar</h1>
          <h1 className="text-5xl text-center">tata surya</h1>
        </div>
      </div>
      <div className="container">
        <div className="prolog-home my-10">
          <h2 className="text-2xl">
            apa aja sih <br /> yang ada di <br /> tata surya kita?
          </h2>
        </div>

        <div className="daftar-planet-wrap mb-10">
          {data.map((item, i) => (
            <Item data={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
