import React from 'react'
import "./SecondPage.css"
const SecondPage = () => {
  return (
    
    <div className="dascy__firstPage">
      <div className="dascy__firstPage-content">
      <div className="title">
      <h2>Flow Chart</h2>
      </div>
      
      
      <div className="flow-chart">
          <div className="first">
        <div className="rectangle11">
          <span class="normal-text">From Data Link Layer</span>
        </div>
        
        <div className="rectangle12">
          <span class="normal-text">To Data Link Layer</span>
        </div>
        </div> 
        
        <span class="img1"> <img src={fleche2} alt='fleche'/>
        </span>
       
        <span class="img2"> <img src={fleche} alt='fleche' />
        </span>
        
        <div className="second"> 
        
        <div className="rectangle21">
       <span class="normal-text">Physical Layer</span>
          <span class="hover-text">00001001</span>
        </div>
     
        <div className="rectangle22">
         <span class="normal-text">Physical Layer</span>
          <span class="hover-text">00001001</span>
        </div>
        </div>
         <div className="rec">  
              
            <span class="img11"> <img src={flecher} alt='fleche'/>
            </span>
            
            <span class="img22"> <img src={flecherl} alt='fleche' />
            </span>
           
            <span className="rectangle">
              <span class="normal-text">Transmission Medium</span>
            </span>
            <span class="digital"> Analog Transmission </span>

            <div class="circle">
            <span class="next"> <img src={vector} alt='fleche'/>
            </span>
            </div>
          
        </div>
      </div>
      </div>

    </div>
    
  );
}

export default SecondPage