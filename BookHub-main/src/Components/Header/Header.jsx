import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchFrom from '../SearchForm/SearchForm'
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Gülbahar’ın Kitaplarla Buluştuğu Yer</h2>
          <br />
          <p className='header-text fs-18 fw-3'> Kitaplar, senin için sadece basılı sayfalardan oluşan bir koleksiyon değil; her biri bir iç yolculuğun kapılarını aralar. Her hikaye, zihinlerinde yankı bulan bir yankı, ruhunda derin izler bırakan bir deneyimdir. Kitaplar, senin hayatında yalnızca kaçış noktaları değil, birer aynadır; kelimeler, onu kendi içindeki bilinmeyenlere, unuttuğu duygulara ve keşfetmediği düşüncelere taşır. Burada, kalbinin derinliklerine hitap eden, her sayfasında yeni bir katman keşfedeceğin kitaplarla buluşacaksın. Her kitap, seni yeni bir bakış açısına, sorgulamalara ve belki de daha önce fark etmediğin gerçekliklere yönlendirecek. kendi izinden git, kendi içsel keşif yolculuğuna başla; her sayfa seni biraz daha derine çekecek.</p>
          <SearchFrom/>


        </div>
      </header>
    </div>
  )
}

export default Header