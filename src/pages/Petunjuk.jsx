import React, { useEffect } from 'react';

const dataPetunjuk = [
  {
    id: 1,
    txt: `Buka halaman utama pada <a className="underline" href="https://belajartatasurya.vercel.app"> belajartatasurya.vercel.app </a>`,
  },
  {
    id: 2,
    txt: `Pilih salah satu planet atau matahari yang ingin kamu ketahui lebih detail.`,
  },
  {
    id: 3,
    txt: `Setelah memasuki halaman detail, maka akan terlihat 3D preview dari planet yang kamu pilih, deskripsi, 3 fakta mengenai planet tersebut, serta mini kuis untuk melatih pemahaman kamu. Pada halaman detail ini, kamu bisa memutar dan memperbesar 3D preview yang ada dengan menggunakan dua jari.`,
  },
  {
    id: 4,
    txt: `Selanjutnya, klik pada <strong> icon kotak </strong> yang terletak di kanan bawah 3D preview, untuk beralih ke mode <strong> Augmented Reality </strong>`,
  },
  {
    id: 5,
    txt: `Lakukan scan dengan mengarahkan kamera smartphone ke bidang datar (lantai), maka akan muncul 3D. Kamu bisa menggeser dan merubah ukuran 3D tersebut dengan cara menggunakan 2 jari.`,
  },
];

const Petunjuk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="petunjuk" className="container mt-10">
      <h1 className="text-center text-2xl mb-8 ">Petunjuk</h1>
      {dataPetunjuk.map((text) => (
        <div className="flex mb-4">
          <p className="font-comic mr-4 text-xl font-bold">{text.id}.</p>
          <p
            className="list-petunjuk font-comic tracking-wide"
            dangerouslySetInnerHTML={{ __html: text.txt }}
          ></p>
        </div>
      ))}
    </section>
  );
};

export default Petunjuk;
