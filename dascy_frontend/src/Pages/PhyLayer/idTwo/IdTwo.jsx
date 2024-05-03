import React from 'react'
import { useState } from 'react';
import './idTwo.css';

const IdTwo = () => {

  const [showEncoding1, setEncoding1] = useState();
  const [showEncoding2, setEncoding2] = useState();
  const [showEncoding3, setEncoding3] = useState();
  const [showEncoding4, setEncoding4] = useState();
  const [showEncoding5, setEncoding5] = useState();
  const [showEncoding6, setEncoding6] = useState();

  const handleClick1 = () => {
    setEncoding1(true);
  };
  const handleClick2 = () => {
    setEncoding2(true);
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

  return (
    <>
    <div className='dascy__idTwo'>
      <div className='dascy__idTwo-container'>
          <input type="radio" name='slide' id='c1' checked />
          <label htmlFor="c1" className='dascy__idTwo-card' onClick={handleClick1}>
            <div className='dascy__idTwo-row'>
              <div className='dascy__idTwo-icon'>1</div>
              <div className='dascy__idTwo-description'>
                <h4>Codage tout ou rien (unipolaire)</h4>
                <p>On utlise deux valeurs pour representer le 0 et le 1</p>
              </div>
            </div>
          </label>
          <input type="radio" name='slide' id='c2' checked/>
        <label htmlFor="c2" className='dascy__idTwo-card' onClick={handleClick2}>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>2</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage bipolaire</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c3' checked/>
        <label htmlFor="c3" className='dascy__idTwo-card' onClick={handleClick3}>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>3</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage NRZ (No Return to Zero)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c4' checked/>
        <label htmlFor="c4" className='dascy__idTwo-card' onClick={handleClick4}>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>4</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage RZ (Return to Zero)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c5' checked/>
        <label htmlFor="c5" className='dascy__idTwo-card' onClick={handleClick5}>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>5</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage biphasé (Manchester)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c6' checked/>
        <label htmlFor="c6" className='dascy__idTwo-card' onClick={handleClick6}>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>6</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage biphasé différentiel (Manchester différentiel)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
      </div>
    </div>

    <div className='dascy__idTwo-encoding'>
      <div className='encoding-1'>
        {showEncoding1 && (
          <>
          <div className='encoding-1_graph'>
      <div className="arrows">
        <div className="arrow-x"></div>
        <div className="arrow-y"></div>
      </div>
      <div className="dashed-lines">
        <div className="dashed-line"></div>
        <div className="dashed-line1"></div>
        <div className="dashed-line2"></div>
        <div className="dashed-line3"></div>
        <div className="dashed-line4"></div>
        <div className="dashed-line5"></div>
        <div className="dashed-line6"></div>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
        <div className="line5"></div>
        <div className="line6"></div>
        <div className="line7"></div>
        <div className="line8"></div>
        <div className="line9"></div>
        <div className="line10"></div>
      </div>
      <div className="numbers">
        <p>0</p>
        <p>1</p>
        <p>1</p>
        <p>0</p>
        <p>0</p>
        <p>1</p>
        <p>0</p>
      </div> 
    </div>
          </>
        )}
      </div>
      <div className='encoding-2'>
      {showEncoding2 && (<>
      <div className='encoding-2_graph'>
      <div className="arrows">
        <div className="arrow-x" id='arr-x'></div>
        <div className="arrow-y"></div>
      </div>
      <div className="dashed-lines">
        <div className="dashed-line"  id='DL'></div>
        <div className="dashed-line1" id='DL1'></div>
        <div className="dashed-line2" id='DL2'></div>
        <div className="dashed-line3" id='DL3'></div>
        <div className="dashed-line4" id='DL4'></div>
        <div className="dashed-line5" id='DL5'></div>
        <div className="dashed-line6" id='DL6'></div>
      </div>
      
      <div className="numbers" id='nmbr'>
        <p>0</p>
        <p>1</p>
        <p>1</p>
        <p>0</p>
        <p>0</p>
        <p>1</p>
        <p>0</p>
      </div> 
      </div>
      </>)}
      </div>
      <div className='encoding-3'>
      {showEncoding3 && (<>
      <div className='encoding-3_graph'>
      <div className="arrows">
        <div className="arrow-x" id='arr3-x'></div>
        <div className="arrow-y"></div>
      </div>
      <div className="dashed-lines">
        <div className="dashed-line"  id='DL'></div>
        <div className="dashed-line1" id='DL1'></div>
        <div className="dashed-line2" id='DL2'></div>
        <div className="dashed-line3" id='DL3'></div>
        <div className="dashed-line4" id='DL4'></div>
        <div className="dashed-line5" id='DL5'></div>
        <div className="dashed-line6" id='DL6'></div>
      </div>
      <div className="numbers" id='nmbr'>
        <p>0</p>
        <p>1</p>
        <p>1</p>
        <p>0</p>
        <p>0</p>
        <p>1</p>
        <p>0</p>
      </div> 
      </div>
      </>)}
      </div>
      <div className='encoding-3'>
      {showEncoding4 && (<>
      <div className='encoding-3_graph'>
      <div className="arrows">
        <div className="arrow-x" id='arr4-x'></div>
        <div className="arrow-y"></div>
      </div>
      <div className="dashed-lines">
        <div className="dashed-line"  id='DL'></div>
        <div className="dashed-line1" id='DL1'></div>
        <div className="dashed-line2" id='DL2'></div>
        <div className="dashed-line3" id='DL3'></div>
        <div className="dashed-line4" id='DL4'></div>
        <div className="dashed-line5" id='DL5'></div>
        <div className="dashed-line6" id='DL6'></div>
      </div>
      <div className="numbers" id='nmbr'>
        <p>0</p>
        <p>1</p>
        <p>1</p>
        <p>0</p>
        <p>0</p>
        <p>1</p>
        <p>0</p>
      </div> 
      </div>
      </>)}
      </div>
      <div className='encoding-3'>
      {showEncoding5 && (<>
      <div className='encoding-3_graph'>
      <div className="arrows">
        <div className="arrow-x" id='arr5-x'></div>
        <div className="arrow-y"></div>
      </div>
      <div className="dashed-lines">
        <div className="dashed-line"  id='DL'></div>
        <div className="dashed-line1" id='DL1'></div>
        <div className="dashed-line2" id='DL2'></div>
        <div className="dashed-line3" id='DL3'></div>
        <div className="dashed-line4" id='DL4'></div>
        <div className="dashed-line5" id='DL5'></div>
        <div className="dashed-line6" id='DL6'></div>
      </div>
      <div className="numbers" id='nmbr'>
        <p>0</p>
        <p>1</p>
        <p>1</p>
        <p>0</p>
        <p>0</p>
        <p>1</p>
        <p>0</p>
      </div> 
      </div>
      </>)}
      </div>
      <div className='encoding-3'>
      {showEncoding6 && (<>
      <div className='encoding-3_graph'>
      <div className="arrows">
        <div className="arrow-x" id='arr6-x'></div>
        <div className="arrow-y"></div>
      </div>
      <div className="dashed-lines">
        <div className="dashed-line"  id='DL'></div>
        <div className="dashed-line1" id='DL1'></div>
        <div className="dashed-line2" id='DL2'></div>
        <div className="dashed-line3" id='DL3'></div>
        <div className="dashed-line4" id='DL4'></div>
        <div className="dashed-line5" id='DL5'></div>
        <div className="dashed-line6" id='DL6'></div>
      </div>
      <div className="numbers" id='nmbr'>
        <p>0</p>
        <p>1</p>
        <p>1</p>
        <p>0</p>
        <p>0</p>
        <p>1</p>
        <p>0</p>
      </div> 
      </div>
      </>)}
      </div>
    </div>

    
    
    </>
  )
}
export default IdTwo
