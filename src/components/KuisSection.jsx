import React, { useEffect, useState } from 'react';

function KuisSection({ data }) {
  const [kunci, setKunci] = useState('');
  const [soal, setSoal] = useState('');
  const [pilihan, setPilihan] = useState([]);
  const [jawaban, setJawaban] = useState(null);
  const [isTrue, setIsTrue] = useState(null);

  useEffect(() => {
    if (data) {
      switch (data) {
        case 'mars':
          setKunci('coklat');
          setSoal('Apakah warna dari mars?');
          setPilihan(['coklat', 'biru', 'kuning']);
          break;
        default:
          setKunci('');
          break;
      }
    }
  }, [data]);

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
          pilihan.map((item, idx) => (
            <div
              className="jawaban-wrap font-comic flex items-center gap-2 mb-2"
              key={idx}
            >
              <input
                type="radio"
                name="jawaban"
                value={item}
                id={idx}
                onChange={() => {
                  setJawaban(item);
                  setIsTrue(null);
                }}
              />
              <label htmlFor={idx}>{item}</label>
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
