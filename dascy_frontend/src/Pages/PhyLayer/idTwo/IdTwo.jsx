import React from 'react'
import { useState } from 'react';
import './idTwo.css';
/* import { useState } from 'react'; 
 const [showEncoding1, setEncoding1] = useState();
  const handleClick1 = () => {
    setEncoding1(true);
  };*/
const IdTwo = () => {

  const [showEncoding1, setEncoding1] = useState();
  const [showEncoding2, setEncoding2] = useState();
  const [showEncoding3, setEncoding3] = useState();
  const [showEncoding4, setEncoding4] = useState();
  const [showEncoding5, setEncoding5] = useState();
  const [showEncoding6, setEncoding6] = useState();

  const handleClick1 = () => {
    setEncoding1(true);
    setEncoding2(false);
  };
  const handleClick2 = () => {
    setEncoding2(true);
    setEncoding1(false);
  };
  const handleClick3 = () => {
    setEncoding3(true);
  };
  const handleClick4 = () => {
    setEncoding4(true);
  };
  const handleClick5 = () => {
    setEncoding5(true);
  };
  const handleClick6 = () => {
    setEncoding6(true);
  };
/*<div className='dascy__idTwo-graph'>
              <div className="arrows">
                <div className="arrow-x"></div>
                <div className="arrow-y"></div>
              </div>
              </div> 
<div className='dascy__idTwo-icon'>1</div>
              <div className='dascy__idTwo-description'>
                <h4>Codage tout ou rien (unipolaire)</h4>
                <p>On utlise deux valeurs pour representer le 0 et le 1</p>
              </div>
<div className='dascy__idTwo-icon'>2</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage bipolaire</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
<div className='dascy__idTwo-icon'>3</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage NRZ (No Return to Zero)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
*/
  return (
    <>
    <div className='dascy__idTwo'>
      <div className='dascy__idTwo-container'>
          <input type="radio" name='slide' id='c1' checked />
          <label htmlFor="c1" className='dascy__idTwo-card' onClick={handleClick1}>
            <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon' id='icon'>1</div>
            <div className='dascy__idTwo-graph'>
              <div className="arrows">
                <div className="arrow-x" id='aar1-x'></div>
                <div className="arrow-y" id='arr1-y'></div>
              </div>
              <div className="dashed-lines">
                <div className="dashed-line" id='dash-line'></div>
                <div className="dashed-line1" id='dash-line1'></div>
                <div className="dashed-line2" id='dash-line2'></div>
                <div className="dashed-line3" id='dash-line3'></div>
                <div className="dashed-line4" id='dash-line4'></div>
                <div className="dashed-line5" id='dash-line5'></div>
                <div className="dashed-line6" id='dash-line6'></div>
              </div>
              <div className="lines">
                <div className="line" id='LN'></div>
                <div className="line1" id='LN1'></div>
                <div className="line2" id='LN2'></div>
                <div className="line3" id='LN3'></div>
                <div className="line4" id='LN4'></div>
                <div className="line5" id='LN5'></div>
                <div className="line6" id='LN6'></div>
                <div className="line7" id='LN7'></div>
                <div className="line8" id='LN8'></div>
                <div className="line9" id='LN9'></div>
                <div className="line10" id='LN10'></div>
              </div>
              <div className='nmbrs'>
                <p>0</p>
                <p>1</p>
                <p>1</p>
                <p>0</p>
                <p>0</p>
                <p>1</p>
                <p>0</p>
              </div> 
              </div>
            </div>
          </label>
          <input type="radio" name='slide' id='c2' checked/>
        <label htmlFor="c2" className='dascy__idTwo-card' onClick={handleClick2}>
          <div className='dascy__idTwo-row'>
              <div className='dascy__idTwo-graph'>
                  <div className="arrows2">
                    <div className="arrow-x" id='arr2-x'></div>
                    <div className="arrow-y" id='arr2-y'></div>
                  </div>
                  <div className="dashed-lines2">
                    <div className="dashed-line" id='dash-line'></div>
                    <div className="dashed-line1" id='dash-line1'></div>
                    <div className="dashed-line2" id='dash-line2'></div>
                    <div className="dashed-line3" id='dash-line3'></div>
                    <div className="dashed-line4" id='dash-line4'></div>
                    <div className="dashed-line5" id='dash-line5'></div>
                    <div className="dashed-line6" id='dash-line6'></div>
                  </div>
                  <div className='nmbrs' id='nbr'>
                    <p>0</p>
                    <p>1</p>
                    <p>1</p>
                    <p>0</p>
                    <p>0</p>
                    <p>1</p>
                    <p>0</p>
                  </div> 
              </div> 
          </div>
        </label>
        <input type="radio" name='slide' id='c3' />
        <label htmlFor="c3" className='dascy__idTwo-card' onClick={handleClick3}>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-graph'>
                  <div className="arrows2">
                    <div className="arrow-x" id='arr2-x'></div>
                    <div className="arrow-y" id='arr2-y'></div>
                  </div>
                  <div className="dashed-lines2">
                    <div className="dashed-line" id='dash-line'></div>
                    <div className="dashed-line1" id='dash-line1'></div>
                    <div className="dashed-line2" id='dash-line2'></div>
                    <div className="dashed-line3" id='dash-line3'></div>
                    <div className="dashed-line4" id='dash-line4'></div>
                    <div className="dashed-line5" id='dash-line5'></div>
                    <div className="dashed-line6" id='dash-line6'></div>
                  </div>
                  <div className='nmbrs' id='nbr'>
                    <p>0</p>
                    <p>1</p>
                    <p>1</p>
                    <p>0</p>
                    <p>0</p>
                    <p>1</p>
                    <p>0</p>
                  </div> 
            </div> 
          </div>
        </label>
        <input type="radio" name='slide' id='c4' />
        <label htmlFor="c4" className='dascy__idTwo-card' onClick={handleClick4}>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>4</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage RZ (Return to Zero)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c5' />
        <label htmlFor="c5" className='dascy__idTwo-card' onClick={handleClick5}>
          <div className='dascy__idTwo-row'>
          <div className='dascy__idTwo-graph'>
                  <div className="arrows2">
                    <div className="arrow-x" id='arr2-x'></div>
                    <div className="arrow-y" id='arr2-y'></div>
                  </div>
                  <div className="dashed-lines2">
                    <div className="dashed-line" id='dash-line'></div>
                    <div className="dashed-line1" id='dash-line1'></div>
                    <div className="dashed-line2" id='dash-line2'></div>
                    <div className="dashed-line3" id='dash-line3'></div>
                    <div className="dashed-line4" id='dash-line4'></div>
                    <div className="dashed-line5" id='dash-line5'></div>
                    <div className="dashed-line6" id='dash-line6'></div>
                  </div>
                  <div className='nmbrs' id='nbr'>
                    <p>0</p>
                    <p>1</p>
                    <p>1</p>
                    <p>0</p>
                    <p>0</p>
                    <p>1</p>
                    <p>0</p>
                  </div> 
            </div> 
          </div>
        </label>
        <input type="radio" name='slide' id='c6' />
        <label htmlFor="c6" className='dascy__idTwo-card' onClick={handleClick6}>
          <div className='dascy__idTwo-row'>
          <div className='dascy__idTwo-graph'>
                  <div className="arrows2">
                    <div className="arrow-x" id='arr2-x'></div>
                    <div className="arrow-y" id='arr2-y'></div>
                  </div>
                  <div className="dashed-lines2">
                    <div className="dashed-line" id='dash-line'></div>
                    <div className="dashed-line1" id='dash-line1'></div>
                    <div className="dashed-line2" id='dash-line2'></div>
                    <div className="dashed-line3" id='dash-line3'></div>
                    <div className="dashed-line4" id='dash-line4'></div>
                    <div className="dashed-line5" id='dash-line5'></div>
                    <div className="dashed-line6" id='dash-line6'></div>
                  </div>
                  <div className='nmbrs' id='nbr'>
                    <p>0</p>
                    <p>1</p>
                    <p>1</p>
                    <p>0</p>
                    <p>0</p>
                    <p>1</p>
                    <p>0</p>
                  </div> 
            </div> 
          </div>
        </label>
      </div>
    </div>

    

    
    
    </>
  )
}
export default IdTwo
