import React from 'react'
import './About.css'
import aboutImg from "../../Components/images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
    <div className='container'>
      <div className='section-title'>
        <h2>About</h2>
      </div>

      <div className='about-content grid'>
        <div className='about-img'>
          <img src = {aboutImg} alt = "" />
        </div>
        <div className='about-text'>
          <h2 className='about-title fs-26 ls-1'>Hakkında</h2>
          <p className='fs-17'>sen, kitaplarla büyümüş bir hayalperesttir. Kitaplar, onun için yalnızca birer eğlence kaynağı değil, hayatın derinliklerine inen bir merdivendir. Her sayfa, onun için bir keşif, her karakter yeni bir dost, her hikaye bir yolculuktur. senin dünyasında kitaplar, hayatın karmaşasından kaçmak değil, daha derin bir anlam bulmaktır. Onun okuma sevgisi, sadece kelimelere olan tutkusundan değil, o kelimelerin arkasındaki dünyalara olan ilgisinden doğar. Kitaplar, ona hem yaşadığı anı hem de geçmişi, geleceği keşfetme fırsatı sunar. Her kitap, onun için bir dünya, her okuma deneyimi yeni bir bakış açısıdır. senin kitaplarla tanıştığı dünya, hayal gücünün sınırlarını zorlayan, duygularını özgür bırakabileceği, kendini bulabileceği bir yerdir. Onun için her kitap, bir hayatı değiştirecek kadar güçlüdür.</p>
        
        </div>
      </div>
    </div>
  </section>
  )
}

export default About