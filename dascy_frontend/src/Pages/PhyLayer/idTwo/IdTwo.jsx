import React from 'react'
import { useState } from 'react';
import './idTwo.css';
/*<div className='dascy__idTwo-graph'>
              <div className="arrows">
                <div className="arrow-x"></div>
                <div className="arrow-y"></div>
              </div>
              </div> 
<div>1</div>
              <div className='dascy__idTwo-description'>
                <h4>Codage tout ou rien (unipolaire)</h4>
              </div>
<div className='dascy__idTwo-icon'>2</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage bipolaire</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
<div className='dascy__idTwo-icon'>3</div>
            <div>
              <h4>Codage NRZ (No Return to Zero)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
<div className='dascy__idTwo-icon'>4</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage RZ (Return to Zero)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
*/
/*const [selectedCard, setSelectedCard] = useState('c1'); */
const IdTwo = () => {

  const [selectedCard, setSelectedCard] = useState('c1');
  
const [hoverMessage, setHoverMessage] = useState('');

const handleMouseEnter = (message) => {
  setHoverMessage(message);
};

const handleMouseLeave = () => {
  setHoverMessage('');
};

const [hoverMessage2, setHoverMessage2] = useState('');

  const handleMouseEnter2 = (message2) => {
    setHoverMessage2(message2);
  };

  const handleMouseLeave2 = () => {
    setHoverMessage2('');
  };

  const [hoverMessage3, setHoverMessage3] = useState('');

  const handleMouseEnter3 = (message3) => {
    setHoverMessage3(message3);
  };

  const handleMouseLeave3 = () => {
    setHoverMessage3('');
  };
  const [hoverMessage4, setHoverMessage4] = useState('');

const handleMouseEnter4 = (message) => {
  setHoverMessage4(message);
};

const handleMouseLeave4 = () => {
  setHoverMessage4('');
};
const [hoverMessage6, setHoverMessage6] = useState('');

const handleMouseEnter6 = (message) => {
  setHoverMessage6(message);
};

const handleMouseLeave6 = () => {
  setHoverMessage6('');
};
  return (
    <>
    <div className='dascy__idTwo'>
      <div className='dascy__idTwo-container'>
          <input type="radio" name='slide' id='c1' checked={selectedCard === 'c1'}
          onChange={() => setSelectedCard('c1')} />
          <label htmlFor="c1" className='dascy__idTwo-card' >
            <div className='dascy__idTwo-row'>
            <p className='dascy__idTwo-title'>Tension</p>
            <div className='dascy__idTwo-graph'>  
              <div className="arrows">
                <div className="arrow-x" id='aar1-x'></div>
                <div className="arrow-y" id='arr1-y'></div>
              </div>
              <div className="dashed-lines">
                <div className="dashed-line dash-line" id='dash' ></div>
                <div className="dashed-line1 dash-line1" ></div>
                <div className="dashed-line2 dash-line2" ></div>
                <div className="dashed-line3 dash-line3" ></div>
                <div className="dashed-line4 dash-line4" ></div>
                <div className="dashed-line5 dash-line5" ></div>
                <div className="dashed-line6 dash-line6" ></div>
              </div>
              <div className="lines">
                <div 
                  className="line" id='LN'
                  onMouseEnter={() => handleMouseEnter('un tension nulle code le 0')}
                  onMouseLeave={handleMouseLeave}
                ></div>
                <div className="line1" id='LN1'></div>
                <div 
                  className="line2" id='LN2'
                  onMouseEnter={() => handleMouseEnter('une tension positive code le 1')}
                  onMouseLeave={handleMouseLeave}
                ></div>
                <div className="line3" id='LN3'></div>
                <div className="line4" id='LN4'></div>
                <div 
                  className="line5" id='LN5'
                  onMouseEnter={() => handleMouseEnter('un tension nulle code le 0')}
                  onMouseLeave={handleMouseLeave}
                ></div>
                <div className="line6" id='LN6'></div>
                <div className="line7" id='LN7'></div>
                <div 
                  className="line8" id='LN8'
                  onMouseEnter={() => handleMouseEnter('une tension positive code le 1')}
                  onMouseLeave={handleMouseLeave}
                ></div>
                <div className="line9" id='LN9'></div>
                <div 
                  className="line10" id='LN10'
                  onMouseEnter={() => handleMouseEnter('un tension nulle code le 0')}
                  onMouseLeave={handleMouseLeave}
                ></div>
              </div>
              <div className='nmbrs'>
                <p>0</p>
                <p>1</p>
                <p>1</p>
                <p>0</p>
                <p>0</p>
                <p>1</p>
                <p>0</p>
                <p className='temps'>Temps</p>
              </div> 
              {hoverMessage && <div className="hover-message">{hoverMessage}</div>}
              <div className='icon-description'>
                <div className='icon1'>1</div>
                <div className='description'>
                  <h4>Codage tout ou rien (unipolaire)</h4>
                  <p>On utlise deux valeurs pour representer le 0 et le 1</p>
                </div>
              </div>
              </div>
            </div>
          </label>
          <input type="radio" name='slide' id='c2' checked={selectedCard === 'c2'}
          onChange={() => setSelectedCard('c2')}/>
        <label htmlFor="c2" className='dascy__idTwo-card' >
          <div className='dascy__idTwo-row'>
          <p className='tension'>Tension</p>
              <div className='dascy__idTwo-graph'>
                  <div className="arrows2">
                    <div className="arrow-x" id='arr2-x'></div>
                    <div className="arrow-y" id='arr2-y'></div>
                  </div>
                  <div className="dashed-lines2">
                    <div className="dashed-line" id='dash-line'></div>
                    <div className="dashed-line1" id='dash-line1'></div>
                    <div className="dashed-line2" ></div>
                    <div className="dashed-line3"></div>
                    <div className="dashed-line4" ></div>
                    <div className="dashed-line5" ></div>
                    <div className="dashed-line6" ></div>
                  </div>
                  <div className="lines2">
              <div
                className='graph2_Line-1'
                onMouseEnter={() => handleMouseEnter4('un tension nulle code le 0')}
                onMouseLeave={handleMouseLeave4}
              ></div>
              <div className='graph2_Line-2'></div>
              <div
                className='graph2_Line-3'
                onMouseEnter={() => handleMouseEnter4('une tension positive indique le 1')}
                onMouseLeave={handleMouseLeave4}
              ></div>
              <div className='graph2_Line-4'></div>
              <div
                className='graph2_Line-5'
                onMouseEnter={() => handleMouseEnter4('une tension negative indique le 1')}
                onMouseLeave={handleMouseLeave4}
              ></div>
              <div className='graph2_Line-6'></div>
              <div className='graph2_Line-7'></div>
              <div 
                className='graph2_Line-8'
                onMouseEnter={() => handleMouseEnter4('un tension nulle code le 0')}
                onMouseLeave={handleMouseLeave4}
              ></div>
              <div className='graph2_Line-9'></div>
              <div 
                className='graph2_Line-10'
                onMouseEnter={() => handleMouseEnter4('une tension positive indique le 1')}
                onMouseLeave={handleMouseLeave4}
              ></div>
              <div className='graph2_Line-11'></div>
              <div
                className='graph2_Line-12'
                onMouseEnter={() => handleMouseEnter4('un tension nulle code le 0')}
                onMouseLeave={handleMouseLeave4}
              ></div>
            </div>
                  <div className='nmbrs' id='nbr'>
                    <p>0</p>
                    <p>1</p>
                    <p>1</p>
                    <p>0</p>
                    <p>0</p>
                    <p>1</p>
                    <p>0</p>
                    <p className='temps2'>Temps</p>
                  </div> 
                  {hoverMessage4 && <div className="hover-message4">{hoverMessage4}</div>}
                  <div className='icon-description'>
                    <div className='icon2'>2</div>
                    <div className='description' id='dscrption'>
                  <h4>Codage bipolaire</h4>
                  <p>On utlise deux valeurs pour representer le 0 et le 1</p>
                  </div>
              </div>
              </div> 
          </div>
        </label>
        <input type="radio" name='slide' id='c3'  checked={selectedCard === 'c3'}
          onChange={() => setSelectedCard('c3')}/>
        <label htmlFor="c3" className='dascy__idTwo-card' >
          <div className='dascy__idTwo-row'>
          <p className='tension'>Tension</p>
            <div className='dascy__idTwo-graph'>
                  <div className="arrows3">
                    <div className="arrow-x" id='arr2-x'></div>
                    <div className="arrow-y" id='arr2-y'></div>
                  </div>
                  <div className="dashed-lines3">
                    <div className="dashed-line" id='dash-line'></div>
                    <div className="dashed-line1" id='dash-line1'></div>
                    <div className="dashed-line2" id='dash-line2'></div>
                    <div className="dashed-line3" id='dash-line3'></div>
                    <div className="dashed-line4" id='dash-line4'></div>
                    <div className="dashed-line5" id='dash-line5'></div>
                    <div className="dashed-line6" id='dash-line6'></div>
                  </div>
                  <div className="lines3">
              <div
                className="graph3_line-1"
                onMouseEnter={() => handleMouseEnter2('une tension negative code le 0')}
                onMouseLeave={handleMouseLeave2}
              ></div>
              <div className="graph3_line-2"></div>
              <div
                className="graph3_line-3"
                onMouseEnter={() => handleMouseEnter2('une tension positive indique le 1')}
                onMouseLeave={handleMouseLeave2}
              ></div>
              <div className="graph3_line-4"></div>
              <div
                className="graph3_line-5"
                onMouseEnter={() => handleMouseEnter2('une tension negative code le 0')}
                onMouseLeave={handleMouseLeave2}
              ></div>
              <div className="graph3_line-6"></div>
              <div
                className="graph3_line-7"
                onMouseEnter={() => handleMouseEnter2('une tension positive indique le 1')}
                onMouseLeave={handleMouseLeave2}
              ></div>
              <div className="graph3_line-8"></div>
              <div 
                className="graph3_line-9"
                onMouseEnter={() => handleMouseEnter2('une tension negative code le 0')}
                onMouseLeave={handleMouseLeave2}
              ></div>
              <div className="graph3_line-10"></div>
            </div>
                  <div className='nmbrs' id='nbr1'>
                    <p>0</p>
                    <p>1</p>
                    <p>1</p>
                    <p>0</p>
                    <p>0</p>
                    <p>1</p>
                    <p>0</p>
                    <p className='temps2'>Temps</p>
                  </div> 
                  {hoverMessage2 && <div className="hover-message2">{hoverMessage2}</div>}
                  <div className='icon-description'>
                    <div className='icon3'>3</div>
                    <div className='description' id='dscrption3'>
                  <h4>Codage NRZ (No Return to Zero)</h4>
                  <p>On utlise deux valeurs pour representer le 0 et le 1</p>
                  </div>
              </div>
            </div> 
          </div>
        </label>
        <input type="radio" name='slide' id='c4'  checked={selectedCard === 'c4'}
          onChange={() => setSelectedCard('c4')}/>
        <label htmlFor="c4" className='dascy__idTwo-card' >
          <div className='dascy__idTwo-row'>
          <p className='dascy__idTwo-title4'>Tension</p>
          <div className='dascy__idTwo-graph'>
              <div className="arrows4">
                <div className="arrow-x" id='aar1-x'></div>
                <div className="arrow-y" id='arr1-y'></div>
              </div>
              <div className="dashed-lines4">
                <div className="dashed-line dash-line" id='dash' ></div>
                <div className="dashed-line1 dash-line1" ></div>
                <div className="dashed-line2 dash-line2" ></div>
                <div className="dashed-line3 dash-line3" ></div>
                <div className="dashed-line4 dash-line4" ></div>
                <div className="dashed-line5 dash-line5" ></div>
                <div className="dashed-line6 dash-line6" ></div>
              </div>
              <div className="lines4">
              <div className="graph4_line-1"></div>
              <div className="graph4_line-2"></div>
              <div 
                className="graph4_line-3"
                onMouseEnter={() => handleMouseEnter3('Front descendant = 1')}
                onMouseLeave={handleMouseLeave3}
              ></div>
              <div className="graph4_line-4"></div>
              <div className="graph4_line-5"></div>
              <div 
                className="graph4_line-6"
                onMouseEnter={() => handleMouseEnter3('Front descendant = 1')}
                onMouseLeave={handleMouseLeave3}
              ></div>
              <div className="graph4_line-7"></div>
              <div className="graph4_line-8"></div>
              <div 
                className="graph4_line-9"
                onMouseEnter={() => handleMouseEnter3('Front descendant = 1')}
                onMouseLeave={handleMouseLeave3}
              ></div>
            </div>
              <div className='nmbrs'>
                <p>0</p>
                <p>1</p>
                <p>1</p>
                <p>0</p>
                <p>0</p>
                <p>1</p>
                <p>0</p>
                <p className='temps4'>Temps</p>
              </div> 
              {hoverMessage3 && <div className="hover-message3">{hoverMessage3}</div>}
              <div className='icon-description'>
                <div className='icon1'>4</div>
                <div className='description'>
                  <h4>Codage RZ (Return to Zero)</h4>
                  <p>On utlise deux valeurs pour representer le 0 et le 1</p>
                </div>
              </div>
              </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c6'  checked={selectedCard === 'c6'}
          onChange={() => setSelectedCard('c6')}/>
        <label htmlFor="c6" className='dascy__idTwo-card' >
          <div className='dascy__idTwo-row'>
          <p className='tension'>Tension</p>
          <div className='dascy__idTwo-graph'>
                  <div className="arrows6">
                    <div className="arrow-x" id='arr2-x'></div>
                    <div className="arrow-y" id='arr2-y'></div>
                  </div>
                  <div className="dashed-lines6">
                    <div className="dashed-line" id='dash-line'></div>
                    <div className="dashed-line1" id='dash-line1'></div>
                    <div className="dashed-line2" id='dash-line2'></div>
                    <div className="dashed-line3" id='dash-line3'></div>
                    <div className="dashed-line4" id='dash-line4'></div>
                    <div className="dashed-line5" id='dash-line5'></div>
                    <div className="dashed-line6" id='dash-line6'></div>
                  </div>
                  <div className="lines6">
                    <div 
                      className="graph6_line-1"
                      onMouseEnter={() => handleMouseEnter6('(Par fois ) Front montant au debut = 0')}
                      onMouseLeave={handleMouseLeave6}
                    ></div>
                    <div className="graph6_line-2"></div>
                    <div 
                      className="graph6_line-3"
                      onMouseEnter={() => handleMouseEnter6('(Par fois ) Front descendant au milieu = 1')}
                      onMouseLeave={handleMouseLeave6}
                    ></div>
                    <div className="graph6_line-4"></div>
                    <div 
                      className="graph6_line-5"
                      onMouseEnter={() => handleMouseEnter6('(Par fois ) Front montant au milieu = 1')}
                      onMouseLeave={handleMouseLeave6}
                    ></div>
                    <div className="graph6_line-6"></div>
                    <div 
                      className="graph6_line-7"
                      onMouseEnter={() => handleMouseEnter6('(Par fois ) Front descendant au debut = 0')}
                      onMouseLeave={handleMouseLeave6}
                    ></div>
                    <div className="graph6_line-8"></div>
                    <div 
                      className="graph6_line-9"
                      onMouseEnter={() => handleMouseEnter6('(Par fois ) Front montant au debut = 0')}
                      onMouseLeave={handleMouseLeave6}
                    ></div>
                    <div className="graph6_line-10"></div>
                    <div 
                      className="graph6_line-11"
                      onMouseEnter={() => handleMouseEnter6('(Par fois ) Front descendant au milieu = 1')}
                      onMouseLeave={handleMouseLeave6}
                    ></div>
                    <div className="graph6_line-12"></div>
                    <div 
                      className="graph6_line-13"
                      onMouseEnter={() => handleMouseEnter6('(Par fois ) Front montant au debut = 0')}
                      onMouseLeave={handleMouseLeave6}
                    ></div>
                  </div>
                  <div className='nmbrs' id='nbr6'>
                    <p>0</p>
                    <p>1</p>
                    <p>1</p>
                    <p>0</p>
                    <p>0</p>
                    <p>1</p>
                    <p>0</p>
                    <p className='temps2'>Temps</p>
                  </div> 
                  {hoverMessage6 && <div className="hover-message3" id='hover-message6'>{hoverMessage6}</div>}
                  <div className='icon-description'>
                <div className='icon6'>5</div>
                <div className='description'>
                  <h4>Codage Manchester différentiel</h4>
                  <p>On utlise deux valeurs pour representer le 0 et le 1</p>
                </div>
              </div>
            </div> 
          </div>
        </label>
      </div>
    </div>
    <div className='dascy__idTwo-button'>
      <button>Next</button>
    </div>
    </>
  )
}
export default IdTwo
