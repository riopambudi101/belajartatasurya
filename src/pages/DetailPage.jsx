import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../styles/detail-page.css';
// import dataPlanets from '../data/planets.json';

import Bumi from '../data/3D/Bumi.glb';
import BumiUSDZ from '../data/3D/BumiUSDZ.usdz';
import Jupiter from '../data/3D/Jupiter.glb';
import JupiterUSDZ from '../data/3D/JupiterUSDZ.usdz';
import Mars from '../data/3D/Mars.glb';
import MarsUSDZ from '../data/3D/MarsUSDZ.usdz';
import Matahari from '../data/3D/Matahari.glb';
import MatahariUSDZ from '../data/3D/MatahariUSDZ.usdz';
// import Merkurius from '../data/3D/Merkurius.glb';
// import MerkuriusUSDZ from '../data/3D/MerkuriusUSDZ.usdz';
// import Neptunus from '../data/3D/Neptunus.glb';
// import NeptunusUSDZ from '../data/3D/NeptunusUSDZ.usdz';
// import Saturnus from '../data/3D/Saturnus.glb';
// import SaturnusUSDZ from '../data/3D/SaturnusUSDZ.usdz';
// import Uranus from '../data/3D/Uranus.glb';
// import UranusUSDZ from '../data/3D/UranusUSDZ.usdz';
// import Venus from '../data/3D/Venus.glb';
// import VenusUSDZ from '../data/3D/VenusUSDZ.usdz';

const DetailPage = () => {
  const params = useParams();
  // const [setDetail] = useState(null);
  const [src3d, setSrc3d] = useState(null);
  const [srcUsdz, setSrcUsdz] = useState(null);

  useEffect(() => {
    // setDataPlanet(params.slug);
    set3DPlanet(params.slug);
  });

  // const setDataPlanet = (slug) => {
  //   dataPlanets.forEach((item, idx) => {
  //     if (item.nama === slug) {
  //       setDetail(item);
  //     }
  //   });
  // };
  const set3DPlanet = (slug) => {
    switch (slug) {
      case 'bumi':
        setSrc3d(Bumi);
        setSrcUsdz(BumiUSDZ);
        break;
      case 'jupiter':
        setSrc3d(Jupiter);
        setSrcUsdz(JupiterUSDZ);
        break;
      case 'mars':
        setSrc3d(Mars);
        setSrcUsdz(MarsUSDZ);
        break;
      case 'matahari':
        setSrc3d(Matahari);
        setSrcUsdz(MatahariUSDZ);
        break;
      default:
        setSrc3d(Bumi);
        setSrcUsdz(BumiUSDZ);
        break;
    }
  };
  return (
    <section id="detail-page">
      <h1 className="text-center h-12">Navbar</h1>
      <model-viewer
        id="ar-item"
        alt={params.slug}
        src={src3d}
        ios-src={srcUsdz}
        camera-controls
        auto-rotate
        seamless-poster
        shadow-intensity="1"
        ar
        ar-modes="webxr scene-viewer quick-look"
      >
        <button
          slot="hotspot-hand"
          data-position={
            (params.slug === 'bumi' &&
              '-0.2846509796021381m 0.1684630967699225m 0.37599614030119904m') ||
            (params.slug === 'jupiter' &&
              '-0.2762606736053257m 0.09093562290065106m 0.1941716920319873m')
          }
          data-visibility-attribute="visible"
        >
          <div id="annotation">{params.slug}</div>
        </button>
      </model-viewer>
    </section>
  );
};

export default DetailPage;
