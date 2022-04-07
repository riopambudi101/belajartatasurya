import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import KuisSection from '../components/KuisSection';

import '../styles/detail-page.css';
import dataPlanet from '../data/details.json';

import Matahari from '../data/3D/Matahari.glb';
import MatahariUSDZ from '../data/3D/MatahariUSDZ.usdz';
import Merkurius from '../data/3D/Merkurius.glb';
import MerkuriusUSDZ from '../data/3D/MerkuriusUSDZ.usdz';
import Venus from '../data/3D/Venus.glb';
import VenusUSDZ from '../data/3D/VenusUSDZ.usdz';
import Bumi from '../data/3D/Bumi.glb';
import BumiUSDZ from '../data/3D/BumiUSDZ.usdz';
import Mars from '../data/3D/Mars.glb';
import MarsUSDZ from '../data/3D/MarsUSDZ.usdz';
import Yupiter from '../data/3D/Jupiter.glb';
import YupiterUSDZ from '../data/3D/JupiterUSDZ.usdz';
import Saturnus from '../data/3D/Saturnus.glb';
import SaturnusUSDZ from '../data/3D/SaturnusUSDZ.usdz';
import Uranus from '../data/3D/Uranus.glb';
import UranusUSDZ from '../data/3D/UranusUSDZ.usdz';
import Neptunus from '../data/3D/Neptunus.glb';
import NeptunusUSDZ from '../data/3D/NeptunusUSDZ.usdz';

const DetailPage = () => {
  const params = useParams();
  const [detailPlanet, setDetailPlanet] = useState(null);
  const [src3d, setSrc3d] = useState(null);
  const [srcUsdz, setSrcUsdz] = useState(null);

  useEffect(() => {
    getDataPlanet(params.slug);
    set3DPlanet(params.slug);
  });

  const getDataPlanet = (slug) => {
    dataPlanet.forEach((item) => {
      if (item.nama === slug) {
        setDetailPlanet(item);
      }
    });
  };
  const set3DPlanet = (slug) => {
    switch (slug) {
      case 'matahari':
        setSrc3d(Matahari);
        setSrcUsdz(MatahariUSDZ);
        break;
      case 'merkurius':
        setSrc3d(Merkurius);
        setSrcUsdz(MerkuriusUSDZ);
        break;
      case 'venus':
        setSrc3d(Venus);
        setSrcUsdz(VenusUSDZ);
        break;
      case 'bumi':
        setSrc3d(Bumi);
        setSrcUsdz(BumiUSDZ);
        break;
      case 'mars':
        setSrc3d(Mars);
        setSrcUsdz(MarsUSDZ);
        break;
      case 'yupiter':
        setSrc3d(Yupiter);
        setSrcUsdz(YupiterUSDZ);
        break;
      case 'saturnus':
        setSrc3d(Saturnus);
        setSrcUsdz(SaturnusUSDZ);
        break;
      case 'uranus':
        setSrc3d(Uranus);
        setSrcUsdz(UranusUSDZ);
        break;
      case 'neptunus':
        setSrc3d(Neptunus);
        setSrcUsdz(NeptunusUSDZ);
        break;
      default:
        setSrc3d(Mars);
        setSrcUsdz(MarsUSDZ);
        break;
    }
  };
  return (
    <section id="detail-page">
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
            (params.slug === 'yupiter' &&
              '-0.2762606736053257m 0.09093562290065106m 0.1941716920319873m')
          }
          data-visibility-attribute="visible"
        >
          <div id="annotation">{params.slug}</div>
        </button>
      </model-viewer>

      {detailPlanet !== null && (
        <div className="description-section container my-9">
          <h1 className="text-3xl text-center">{detailPlanet.nama}</h1>
          <p className="font-comic mt-4 text-center tracking-wider">
            {detailPlanet.desc}
          </p>
          <p className="text-xl mt-8 text-center" id="text-fakta">
            3 Fakta{' '}
            {detailPlanet.nama === 'matahari'
              ? detailPlanet.nama
              : `Planet ${detailPlanet.nama}`}
          </p>
          <ul className="mt-3">
            {detailPlanet.facts.map((item, idx) => (
              <li
                key={idx}
                className="font-comic tracking-wider relative pl-8 mb-2"
              >
                <span className="absolute left-0 text-2xl font-bold">
                  {idx + 1}.
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="kuis-section">
        <KuisSection data={params.slug} />
      </div>
    </section>
  );
};

export default DetailPage;
