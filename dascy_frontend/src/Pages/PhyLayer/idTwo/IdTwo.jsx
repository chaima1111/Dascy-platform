import React from 'react'
import './idTwo.css';
/*import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "0",
    pv: 0,
  },
  {
    name: "1",
    pv: 0,
  },
  {
    name: "1",
    pv: 1,
  },
  {
    name: "0",
    pv: 1,
  },
  {
    name: "0",
    pv: 0,
  },
  {
    name: "1",
    pv: 1,
  },
  {
    name: "0",
    pv: 0,
  }
];*/

const IdTwo = () => {
  return (
    <>
    <div className='dascy__idTwo'>
      <div className='dascy__idTwo-title'>
        <h1></h1>
      </div>
      <div className='dascy__idTwo-container'>
        <input type="radio" name='slide' id='c1' checked />
        <label htmlFor="c1" className='dascy__idTwo-card'>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>1</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage tout ou rien (unipolaire)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c2' checked/>
        <label htmlFor="c2" className='dascy__idTwo-card'>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>2</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage bipolaire</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c3' checked/>
        <label htmlFor="c3" className='dascy__idTwo-card'>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>3</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage NRZ (No Return to Zero)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c4' checked/>
        <label htmlFor="c4" className='dascy__idTwo-card'>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>4</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage RZ (Return to Zero)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c5' checked/>
        <label htmlFor="c5" className='dascy__idTwo-card'>
          <div className='dascy__idTwo-row'>
            <div className='dascy__idTwo-icon'>5</div>
            <div className='dascy__idTwo-description'>
              <h4>Codage biphasé (Manchester)</h4>
              <p>On utlise deux valeurs pour representer le 0 et le 1</p>
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c6' checked/>
        <label htmlFor="c6" className='dascy__idTwo-card'>
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
    
    </>
  )
}
export default IdTwo
