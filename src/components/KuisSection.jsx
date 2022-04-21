import React, { useEffect, useState } from 'react';

import dataKuis from '../data/kuis.json';

function KuisSection({ data }) {
  const [kunci, setKunci] = useState('');
  const [soal, setSoal] = useState('');
  const [pilihan, setPilihan] = useState([]);
  const [jawaban, setJawaban] = useState(null);
  const [isTrue, setIsTrue] = useState(null);

  useEffect(() => {
    let dataMiniKuis = null;
    dataKuis.forEach((item) => {
      if (item.planet === data) {
        dataMiniKuis = item;
      }
    });

    setDataKuis(dataMiniKuis);
  }, [data]);

  const setDataKuis = (item) => {
    const { planet, kunci, soal, pilihan } = item;
    if (planet) {
      setKunci(kunci);
      setSoal(soal);
      setPilihan(pilihan);
    }
  };

  const seeAnswer = (e) => {
    e.preventDefault();

    if (jawaban !== null) {
      if (kunci === jawaban) {
        setIsTrue(true);
        setJawaban(null);
      } else {
        setIsTrue(false);
        setJawaban(null);
      }
    } else {
      alert('Pilih satu jawaba dulu');
    }
  };

  return (
    <div className="container mt-10">
      <p className="text-center text-2xl">Mini Kuis</p>
      <p className="text-center text-lg mt-3 font-comic">
        {soal !== '' && soal}
      </p>
      <form className="px-4 mt-2" onSubmit={(e) => seeAnswer(e)}>
        {pilihan.length !== 0 &&
          pilihan.map((item) => (
            <div
              className="jawaban-wrap font-comic flex items-center gap-2 mb-2"
              key={item.id}
            >
              <input
                type="radio"
                name="jawaban"
                value={item.text}
                id={item.id}
                onChange={() => {
                  setJawaban(item.id);
                  setIsTrue(null);
                }}
              />
              <label htmlFor={item.id}>{item.text}</label>
            </div>
          ))}
        <button
          disabled={jawaban === null ? true : false}
          type="submit"
          className={`w-full py-3 h-max mt-8 bg-blue-400 transition-all ${
            jawaban === null ? 'opacity-50' : 'opacity-100'
          }`}
        >
          Lihat jawaban
        </button>
        {isTrue !== null && (
          <div className="mt-7 border-2 border-white border-dashed rounded-lg p-3">
            {isTrue && <p className="text-green-400">Jawaban Benar!</p>}
            {!isTrue && <p className="text-red-500">Jawaban Salah :(</p>}
          </div>
        )}
      </form>
    </div>
  );
}

export default KuisSection;
