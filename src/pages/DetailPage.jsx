import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import KuisSection from "../components/KuisSection";

import "../styles/detail-page.css";
import dataPlanet from "../data/details.json";

import AllPlanet from "../data/3D/allPlanet.glb";
// import AllPlanetUSDZ from "../data/3D/allPanetUSDZ.usdz";
import Matahari from "../data/3D/Matahari.glb";
import MatahariUSDZ from "../data/3D/MatahariUSDZ.usdz";
import Merkurius from "../data/3D/Merkurius.glb";
import MerkuriusUSDZ from "../data/3D/MerkuriusUSDZ.usdz";
import Venus from "../data/3D/Venus.glb";
import VenusUSDZ from "../data/3D/VenusUSDZ.usdz";
import Bumi from "../data/3D/Bumi.glb";
import BumiUSDZ from "../data/3D/BumiUSDZ.usdz";
import Mars from "../data/3D/Mars.glb";
import MarsUSDZ from "../data/3D/MarsUSDZ.usdz";
import Yupiter from "../data/3D/Jupiter.glb";
import YupiterUSDZ from "../data/3D/JupiterUSDZ.usdz";
import Saturnus from "../data/3D/Saturnus.glb";
import SaturnusUSDZ from "../data/3D/SaturnusUSDZ.usdz";
import Uranus from "../data/3D/Uranus.glb";
import UranusUSDZ from "../data/3D/UranusUSDZ.usdz";
import Neptunus from "../data/3D/Neptunus.glb";
import NeptunusUSDZ from "../data/3D/NeptunusUSDZ.usdz";

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
      case "tata surya":
        setSrc3d(AllPlanet);
        // setSrcUsdz(AllPlanetUSDZ);
        break;
      case "matahari":
        setSrc3d(Matahari);
        setSrcUsdz(MatahariUSDZ);
        break;
      case "merkurius":
        setSrc3d(Merkurius);
        setSrcUsdz(MerkuriusUSDZ);
        break;
      case "venus":
        setSrc3d(Venus);
        setSrcUsdz(VenusUSDZ);
        break;
      case "bumi":
        setSrc3d(Bumi);
        setSrcUsdz(BumiUSDZ);
        break;
      case "mars":
        setSrc3d(Mars);
        setSrcUsdz(MarsUSDZ);
        break;
      case "yupiter":
        setSrc3d(Yupiter);
        setSrcUsdz(YupiterUSDZ);
        break;
      case "saturnus":
        setSrc3d(Saturnus);
        setSrcUsdz(SaturnusUSDZ);
        break;
      case "uranus":
        setSrc3d(Uranus);
        setSrcUsdz(UranusUSDZ);
        break;
      case "neptunus":
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
            (params.slug === "tata surya" &&
              "-0.3417478667202622m 0.03859932796501728m 0.06247669002350904m") ||
            (params.slug === "matahari" &&
              "-0.3417478667202622m 0.03859932796501728m 0.06247669002350904m") ||
            (params.slug === "merkurius" &&
              "-0.34275061910239846m 0.03867006072989036m 0.05666563506740437m") ||
            (params.slug === "venus" &&
              "-0.34731479153455375m 0.029318954736529432m 0.031135379275482142m") ||
            (params.slug === "bumi" &&
              "-0.2846509796021381m 0.1684630967699225m 0.37599614030119904m") ||
            (params.slug === "mars" &&
              "-0.39177285930249145m 0.03325020869884427m 0.07071831859277002m") ||
            (params.slug === "yupiter" &&
              "-0.3932530283020205m 0.061257648726476176m 0.03212822786051995m") ||
            (params.slug === "saturnus" &&
              "-0.19679586440045554m 0.06530596750728945m 0.2664904465192564m") ||
            (params.slug === "uranus" &&
              "-0.15169969939539651m 0.1000825738895726m 0.35598720482901547m") ||
            (params.slug === "neptunus" &&
              "-0.15722495209258464m 0.07874766152485002m 0.30249446274660113m")
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
          {detailPlanet.facts.length > 0 && (
            <p className="text-xl mt-8 text-center" id="text-fakta">
              3 Fakta{" "}
              {detailPlanet.nama === "matahari"
                ? detailPlanet.nama
                : `Planet ${detailPlanet.nama}`}
            </p>
          )}
          <ul className="mt-3">
            {detailPlanet.facts.length > 0 &&
              detailPlanet.facts.map((item, idx) => (
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
