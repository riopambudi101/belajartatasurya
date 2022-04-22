import React, { useEffect } from 'react';

const Tentang = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="tentang" className="container min-h-screen pt-10">
      <h1 className="text-center text-2xl">Tentang</h1>
      <p className="text-center font-comic pt-8">
        Website Augmented Reality ini dibuat oleh Mahasiswa Universitas
        Diponegoro bernama Prio Pambudi. Tujuan dibuatnya website ini adalah
        sebagai pemenuhan Tugas Akhir kuliah jurusan Teknik Komputer. Pada
        website ini, pengguna bisa menemukan beberapa contoh Augmented Reality
        dari Matahari dan planet-planet yang ada di Tata Surya.
      </p>
    </section>
  );
};

export default Tentang;
