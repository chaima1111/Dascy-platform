import React from 'react'
import { useState } from 'react';
import './idTwo.css';

const IdTwo = () => {
/*<div className='dascy__idTwo-graph'>
              <div className="arrows">
                <div className="arrow-x"></div>
                <div className="arrow-y"></div>
              </div>
              </div> 
<div className='dascy__idTwo-icon'>1</div>
              <div className='dascy__idTwo-description'>
                <h4>Codage tout ou rien (unipolaire)</h4>
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
<div className='dascy__idTwo-icon'>4</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage RZ (Return to Zero)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
*/
  return (
    <>
    <div className='dascy__idTwo'>
      <div className='dascy__idTwo-container'>
          <input type="radio" name='slide' id='c1' checked />
          <label htmlFor="c1" className='dascy__idTwo-card' >
            <div className='dascy__idTwo-row'>
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
        <label htmlFor="c2" className='dascy__idTwo-card' >
          <div className='dascy__idTwo-row'>
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
                    <div className='graph2_Line-1'></div>
                    <div className='graph2_Line-2'></div>
                    <div className='graph2_Line-3'></div>
                    <div className='graph2_Line-4'></div>
                    <div className='graph2_Line-5'></div>
                    <div className='graph2_Line-6'></div>
                    <div className='graph2_Line-7'></div>
                    <div className='graph2_Line-8'></div>
                    <div className='graph2_Line-9'></div>
                    <div className='graph2_Line-10'></div>
                    <div className='graph2_Line-11'></div>
                    <div className='graph2_Line-12'></div>
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
        <input type="radio" name='slide' id='c3' checked/>
        <label htmlFor="c3" className='dascy__idTwo-card' >
          <div className='dascy__idTwo-row'>
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
                    <div className="graph3_line-1"></div>
                    <div className="graph3_line-2"></div>
                    <div className="graph3_line-3"></div>
                    <div className="graph3_line-4"></div>
                    <div className="graph3_line-5"></div>
                    <div className="graph3_line-6"></div>
                    <div className="graph3_line-7"></div>
                    <div className="graph3_line-8"></div>
                    <div className="graph3_line-9"></div>
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
                  </div> 
            </div> 
          </div>
        </label>
        <input type="radio" name='slide' id='c4' checked/>
        <label htmlFor="c4" className='dascy__idTwo-card' >
          <div className='dascy__idTwo-row'>
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
                <div className="graph4_line-3"></div>
                <div className="graph4_line-4"></div>
                <div className="graph4_line-5"></div>
                <div className="graph4_line-6"></div>
                <div className="graph4_line-7"></div>
                <div className="graph4_line-8"></div>
                <div className="graph4_line-9"></div>
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
        <input type="radio" name='slide' id='c5' />
        <label htmlFor="c5" className='dascy__idTwo-card' >
          <div className='dascy__idTwo-row'>
          <div className='dascy__idTwo-graph'>
                  <div className="arrows5">
                    <div className="arrow-x" id='arr2-x'></div>
                    <div className="arrow-y" id='arr2-y'></div>
                  </div>
                  <div className="dashed-lines5">
                    <div className="dashed-line" id='dash-line'></div>
                    <div className="dashed-line1" id='dash-line1'></div>
                    <div className="dashed-line2" id='dash-line2'></div>
                    <div className="dashed-line3" id='dash-line3'></div>
                    <div className="dashed-line4" id='dash-line4'></div>
                    <div className="dashed-line5" id='dash-line5'></div>
                    <div className="dashed-line6" id='dash-line6'></div>
                  </div>
                  <div className='nmbrs' id='nbr5'>
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
        <label htmlFor="c6" className='dascy__idTwo-card' >
          <div className='dascy__idTwo-row'>
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
                  <div className='nmbrs' id='nbr6'>
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
