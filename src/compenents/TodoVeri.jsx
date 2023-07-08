import React from 'react'
import { useState } from 'react'

const TODOVERİ = ({gonder}) => {
    const [baslik, setBaslik] = useState("");
    const [aciklama, setAciklama] = useState("");
    const baslikDegistir=(event) => {
        setBaslik(event.target.value);
        console.log(baslik);
    }
     const aciklamaDegistir=(event) => {
         setAciklama(event.target.value);
        console.log(aciklama);
    }
    const verileriGonder=(event) => {
        event.preventDefault();
        gonder(baslik, aciklama);
        setBaslik("");
        setAciklama("");
    }
  return (
    <div className='task'>
           <h3>Lütfen Bilgileri Gir</h3>
          <form className='form'>
              <label className='Baslik' >
                  Başlik
              </label>
              <input onChange={baslikDegistir} value={baslik} className='InputSyle'/>
              <label className='Baslik'>
                  Aciklama
              </label>
              <textarea onChange={aciklamaDegistir} value={aciklama} className='InputSyle' rows={5}/>
              <button onClick={verileriGonder} className='TaskButton'>Olustur</button>
          </form>
    </div>
  )
}

export default TODOVERİ
