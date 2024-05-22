import React from 'react'
import './taille.css';


const taille = () => {
  return (
    <>
    
    <div className='dascy__taille'>
      <div className='dascy__taille-title'>
        <h1>Types of Networks</h1>
      </div>
      <div className='dascy__taille-container'>
        <input type="radio" name='slide' id='c1' checked />
        <label htmlFor="c1" className='dascy__taille-card'>
          <div className='dascy__taille-row'>
            <div className='dascy__taille-icon'>1</div>
            <div className='dascy__taille-description'>
              <h2>Local Area Network</h2>
             {/* <p>On utlise deux valeurs pour representer le 0 et le 1</p>*/}
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c2' checked/>
        <label htmlFor="c2" className='dascy__taille-card'>
          <div className='dascy__taille-row'>
            <div className='dascy__taille-icon'>2</div>
            <div className='dascy__taille-description'>
              <h2>Wide Area Network</h2>
             
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c3' checked/>
        <label htmlFor="c3" className='dascy__taille-card'>
          <div className='dascy__taille-row'>
            <div className='dascy__taille-icon'>3</div>
            <div className='dascy__taille-description'>
              <h2> Metropolitan Area Network</h2>
            </div>
          </div>
        </label>
        
      </div>
    </div>

    </>
  )
}
export default taille