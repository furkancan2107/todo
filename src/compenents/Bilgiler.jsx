import React from 'react'
import { useState } from 'react';
const Bilgiler = ({ bilgi,silme,duzenlenenIcerik}) => {
  const [kontrol, setKontrol] = useState(false);
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const sil=() => {
    silme(bilgi.id);
   //console.log(bilgi.id);
  }
  const duzenle=() => {
    setKontrol(true);
  }
 
  const basliğiDuzenle=(event) => {
    setBaslik(event.target.value);
   
  }
  const aciklamayiDuzenle=(event) => {
    setAciklama(event.target.value);
   
  }
  const duzenlemeTamamlandi = (event) => {
    event.preventDefault();
    duzenlenenIcerik(baslik, aciklama,bilgi.id);
    
    setKontrol(false);
  }
    return (
      
    <div className='Bilgiler'>
        {
          kontrol ? <>
            <div className='title'>
              Değiştir
            </div>
            <form >
              <label  className='editForm' >Başlığı değiştir: </label>
              <input onChange={basliğiDuzenle} value={baslik} className='editInput' />
              <label className='editForm'>Açıklamayi değiştir: </label>
              <textarea onChange={aciklamayiDuzenle} value={aciklama} className='editInput' rows="5"></textarea>
            </form>
            <button onClick={duzenlemeTamamlandi}>Tamam</button>
          </> : <> <h3>{bilgi.title}</h3>
          <h4 className='title'>Yapilacaklar: </h4>
            <p>{bilgi.task}</p>
            
            <button onClick={sil} className='butons'>Sil</button>
            <button onClick={duzenle} className='butons'>Düzenle</button>
            </>
            }
            
         
        </div>
        
        
  )
}

export default Bilgiler
