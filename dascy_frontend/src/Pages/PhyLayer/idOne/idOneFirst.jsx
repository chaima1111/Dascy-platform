import './idOneFirst.css';
import BitAnimation from './BitAnimation';
import img from "../../../assets/cylin.jpg";
import pc2 from "../../../assets/Osi/pc2.png";
import sender from "../../../assets/Osi/sender.gif";
import receiver from "../../../assets/Osi/receiver.gif";
import linearr from "../../../assets/linearr.png";
import line from "../../../assets/line.png";
import ProgressBar from './ProgressBar';
import SineWaveCanvas from './SineWaveCanvas';
import AnalogDigitalCharts from './AnalogDigitalCharts';
import React, {useState} from 'react';

const IdOneFirst = () => {
  const [selectedCard,setSelecteedCard]= useState('c1');
  return (
     <div className="dascy_laws_App">
       <div className="dascy_laws_wrapper">
         
          <div class="circle">
            <div class="next"></div>
           </div>
         
            <div className="dascy_laws_container">
            <input type="radio" name="slide" id="c1" checked={selectedCard ==='c1'}
            onChange={()=> setSelecteedCard('c1')} />
            <label for="c1" class="dascy_laws_card">
                <div class="dascy_laws_row">
                    <div class="dascy_laws_icon">1</div>
                    
                    <img src={line} alt='line' className="dascy_laws_line1"/>
                    <img src={line} alt='line' className="dascy_laws_line2"/>

                    <img src={line} alt='line' className="dascy_laws_vline1"/>
                    <img src={line} alt='line' className="dascy_laws_vline2"/>
                    <img src={line} alt='line' className="dascy_laws_vline3"/>
                    <img src={line} alt='line' className="dascy_laws_vline4"/>
                    <div class="dascy_laws_v">L=4</div>
                    <div class="dascy_laws_nbl">number of levels</div>
                    
                    <div className="dascy_laws_vLaw">L=2<sup>n</sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    n=log<sub>2</sub>(L)
                    </div>
                    
                    <div class="dascy_laws_n">n=2 <br/></div>
                    <div class="dascy_laws_nbb">number of bits</div>
                    
                    
                    <div className="dascy_laws_charts"><AnalogDigitalCharts /></div>
                    <div class="dascy_laws_description">
                        <h4>Levels / n</h4>
                        <p>Number of all possible signal levels / number of bits per level </p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c2" checked={selectedCard ==='c2'}
            onChange={()=> setSelecteedCard('c2')}/>
            <label for="c2" class="dascy_laws_card">
                <div class="dascy_laws_row">
                    <div class="dascy_laws_icon">2</div>
                    <div class="dascy_laws_t">T=0.3s
                    </div>
                    <img src={linearr} alt='linearr' className="dascy_laws_linear"/>
                    <div class="dascy_laws_t2">T=0.5s
                    </div>
                    <img src={linearr} alt='linearr' className="dascy_laws_linear2"/>

                    <div class="dascy_laws_r">R=3 bauds
                    </div>
                    <img src={line} alt='line' className="dascy_laws_line11r"/>
                    <img src={line} alt='line' className="dascy_laws_line21r"/>
                    <img src={line} alt='line' className="dascy_laws_line31r"/>
                    {/* <div class="nbls">number of levels
                    </div> */}
                    <img src={linearr} alt='dascy_laws_linearr' className="dascy_laws_linear1"/>
                    <div class="dascy_laws_r2">R=2 bauds
                    </div>
                    <img src={line} alt='line' className="dascy_laws_line12r"/>
                    <img src={line} alt='line' className="dascy_laws_line22r"/>
                    {/* <div class="nbls">number of levels
                    </div> */}
                    <div class="dascy_laws_rlaw">R = 1/T bauds
                    </div>
                    <div class="dascy_laws_rlaws">
                    1 baud = 1 signal/second
                    </div>
                    <img src={linearr} alt='linearr' className="dascy_laws_linear21"/>

                    <div className="dascy_laws_charts"><AnalogDigitalCharts /></div>
                    <div class="dascy_laws_description">
                        <h4>Period / Rapidity</h4>
                        <p>Period in seconds of one level / number of signal levels in one second</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c3" checked={selectedCard ==='c3'}
            onChange={()=> setSelecteedCard('c3')}/>
            <label for="c3" class="dascy_laws_card">
                <div class="dascy_laws_row">
                    <div class="dascy_laws_icon">3</div>

                    <h5 class="dascy_laws_info1">Transformed <span>Bits</span></h5>
                    <h5 class="dascy_laws_info2">Transmission Medium</h5>
                    <h5  class="dascy_laws_info3">Per <span>1</span> Seconde</h5>            
                       <img src={img} alt='img' className="dascy_laws_image"/>
                        <div className="dascy_laws_word"><BitAnimation /></div>  
                    <p class="dascy_laws_pr">D = n / T</p>
                    <p class="dascy_laws_pr2">D = n * R</p>

                    <div className="dascy_laws_prog"><ProgressBar /></div>
                    <img src={receiver} alt='img' className="dascy_laws_receiver"/>
                    <img src={pc2} alt='pc' className="dascy_laws_pc1"/>
                    
                    <h5 className="dascy_laws_rece">Receiver</h5>
                   
                   <img src={pc2} alt='pc' className="dascy_laws_pc2"/>
                   <img src={sender} alt='img' className="dascy_laws_sender"/>
                    <h5 className="dascy_laws_send">Sender</h5>

                    <div class="dascy_laws_description">
                        <h4>Bit Rate</h4>
                        <p>the bit rate is the number of the transmitterd
                            bits over the medium per one seconde
                        </p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c4" checked={selectedCard ==='c4'}
            onChange={()=> setSelecteedCard('c4')}/>
            <label for="c4" class="dascy_laws_card">
                <div class="dascy_laws_row">
                    <div class="dascy_laws_icon">4</div>

                    <h2  class="dascy_laws_mesg-c">Capacity</h2> 
                    <div  class="dascy_laws_lawc">= W log<sub>2</sub>(1+SNR)</div>  
                    <img src={line} alt='line' className="dascy_laws_line1c"/>
                    <img src={line} alt='line' className="dascy_laws_line2c"/>


                    <div  class="dascy_laws_mesg-bw">bandwidth W</div> 
                    <div  class="dascy_laws_mesg-snr">Signal noise ratio SNR</div> 
                       
                        <img src={img} alt='img' className="dascy_laws_imageW"/>
                        <div className="dascy_laws_wordW"><BitAnimation /></div>  
                        <img src={img} alt='img' className="dascy_laws_imageW2"/>
                        <div className="dascy_laws_wordW2"><BitAnimation /></div>
                        <div className="dascy_laws_wordW22"><BitAnimation /></div>
                        <div  class="dascy_laws_highbw">high bandwidth</div> 
                        <div  class="dascy_laws_lowbw">low bandwidth</div>  
                    
                    {/* <p class="pr">D = n / T</p> */}  

                        <img src={img} alt='img' className="dascy_laws_imageSNR"/>
                        
                        <div className="dascy_laws_wordSNR"><BitAnimation /></div>  
                        <img src={img} alt='img' className="dascy_laws_imageSNR2"/>
                        <div class="dascy_laws_blurred-overlay"></div>
                        <div class="dascy_laws_blurred-overlay-low"></div>
                        <div className="dascy_laws_wordSNR2"><BitAnimation /></div>
                        <div  class="dascy_laws_highSNR">high SNR</div> 
                        <div  class="dascy_laws_lowSNR">low SNR</div>                   
                
                    <div className="dascy_laws_description">
                        <h4>Capacity</h4>
                        <p>The amount 
                            of bits that can be transmitted over a medium  
                            in one second, it represents the maximum bit rate</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c5" checked={selectedCard ==='c5'}
            onChange={()=> setSelecteedCard('c5')} />
            <label for="c5" class="dascy_laws_card">
                <div class="dascy_laws_row">
                    <div class="dascy_laws_icon">5</div>

                    <div className="dascy_laws_canvas-container"><SineWaveCanvas /></div>
                    <div className="dascy_laws_canvas-container2"><SineWaveCanvas /></div>
                    <img src={line} alt='line' className="dascy_laws_line-sp"/>
                    
                    <h5 class="dascy_laws_info-pd">Transmission Medium</h5>
                    <img src={img} alt='img' className="dascy_laws_image-pd"/>
                    <img src={linearr} alt='linearr' className="dascy_laws_linear-pd"/>
                    
                    <div class="dascy_laws_x"></div>
                    <div class="dascy_laws_y"></div>
                    <div class="dascy_laws_ptlaw">Propagation Time (s) = Pd / Ps </div>
                    <div class="dascy_laws_pd">Pd = Propagation Distance </div>
                    <div class="dascy_laws_ps">Ps = Propagation Speed</div>
                    {/* ................. */}
                    <img src={pc2} alt='pc' className="dascy_laws_pc17pt"/>
                   <img src={pc2} alt='pc' className="dascy_laws_pc27pt"/>

                   <img src={receiver} alt='img' className="dascy_laws_receiver7pt"/>
                   <img src={sender} alt='img' className="dascy_laws_sender7pt"/>

                    <div class="dascy_laws_vertical-linept"></div>
                    <div class="dascy_laws_vertical-line2pt"></div>

                    <div class="dascy_laws_arrowspt">

                    <div class="dascy_laws_horz-line1pt"></div>
                    <div class="dascy_laws_horz-line2pt"></div>
                    
                    <div class="dascy_laws_arrowpt"></div>
                    <div class="dascy_laws_arrow2pt"></div>

                    </div>

                    <img src={linearr} alt='linearr' className="dascy_laws_linear72pt"/>

                    <div class="dascy_laws_mes2pt">Propagation Time</div>

                    <div class="dascy_laws_first">1st bit</div>
                    <div class="dascy_laws_last">last bit</div>
                    <div class="dascy_laws_description">
                        <h4>propagation time</h4>
                        <p>The time necessary for the signal
                             to propagate from the transmitter to the receiver</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c6" checked={selectedCard ==='c6'}
            onChange={()=> setSelecteedCard('c6')} />
            <label for="c6" class="dascy_laws_card">
                <div class="dascy_laws_row">
                    <div class="dascy_laws_icon">6</div>
                    <img src={pc2} alt='pc' className="dascy_laws_pc17"/>
                   <img src={pc2} alt='pc' className="dascy_laws_pc27"/>

                   <img src={receiver} alt='img' className="dascy_laws_receiver7"/>
                   <img src={sender} alt='img' className="dascy_laws_sender7"/>

                    <div class="dascy_laws_vertical-line"></div>
                    <div class="dascy_laws_vertical-line2"></div>

                    <div class="dascy_laws_arrows">

                    <div class="dascy_laws_horz-line2"></div>
                    <div class="dascy_laws_horz-line3"></div>
                    <div class="dascy_laws_arrow"></div>
                    <div class="dascy_laws_arrow2"></div>

                    </div>

                    <img src={linearr} alt='linearr' className="dascy_laws_linear71"/>
                    
                    <div class="dascy_laws_mes1">Transmission Time (s)</div>
                    <div class="dascy_laws_ttlaw">= Sent message size / Bit rate</div>

                    <div class="dascy_laws_first">1st bit</div>
                    <div class="dascy_laws_description">
                        <h4>transmission time</h4>
                        <p>The time necessary for the entire message
                             to be injected onto the medium</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c7" checked={selectedCard ==='c7'}
            onChange={()=> setSelecteedCard('c7')} />
            <label for="c7" class="dascy_laws_card">
                <div class="dascy_laws_row">
                    <div class="dascy_laws_icon">7</div>

                    <img src={pc2} alt='pc' className="dascy_laws_pc17"/>
                   <img src={pc2} alt='pc' className="dascy_laws_pc27"/>

                   <img src={receiver} alt='img' className="dascy_laws_receiver7"/>
                   <img src={sender} alt='img' className="dascy_laws_sender7"/>

                    <div class="dascy_laws_vertical-line"></div>
                    <div class="dascy_laws_vertical-line2"></div>

                    <div class="dascy_laws_arrows">

                    <div class="dascy_laws_horz-line1"></div>
                    <div class="dascy_laws_horz-line2"></div>
                    <div class="dascy_laws_horz-line3"></div>
                    <div class="dascy_laws_arrow"></div>
                    <div class="dascy_laws_arrow2"></div>

                    </div>

                    <img src={linearr} alt='linearr' className="dascy_laws_linear7"/>
                    <img src={linearr} alt='linearr' className="dascy_laws_linear71"/>
                    <img src={linearr} alt='linearr' className="dascy_laws_linear72"/>

                    <div class="dascy_laws_mes">Transfer Time</div>
                    <div class="dascy_laws_mes1">Transmission Time</div>
                    <div class="dascy_laws_mes2">Propagation Time</div>

                    <div class="dascy_laws_first">1st bit</div>
                    <div class="dascy_laws_last">last bit</div>
                   
                    <div class="dascy_laws_description">
                        <h4>Transfer time</h4>
                        <p>The length of time which separates the
                             start of transmission from the end of reception</p>
                    </div>
                </div>
            </label>

        </div>
    </div>
    </div>
  );
}

export default IdOneFirst
