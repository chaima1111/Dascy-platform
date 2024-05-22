import React, { useState } from "react";
import "./errDet.css"
import pc from "../../../assets/DatTwo/pc2.png"
import arrow from "../../../assets/DatTwo/arrowDa2.png"
import arrowinv from "../../../assets/DatTwo/arrowDaInv.png"

const ErrorDet = () => {
  const [step, setStep] = useState(0);

  const handleKeyPress = () => {
    setStep(prevStep => Math.min(prevStep + 1, 17));  
  };

  return (
<>
      <h1 className='dascy__errorDet-title'>Parity Method</h1>
    <div className='dascy__errorDet' tabIndex="0" onKeyPress={handleKeyPress}  >
      <div className='dascy__errorDet-sender'>
      {step > 0 && (
        <div className="dascy__errorDet-sender-img">
<img src={pc} alt="" />
        </div>
      )}
      {step > 1 && (

        <div className="dascy__errorDet-sender-data">
            100011
        </div>
                      )}
      {step > 2&& (

        <div className="dascy__errorDet-sender-arrow">
    <img src={arrow} alt="" />        
        </div>
                      )}
      {step > 3 && (

        <div className="dascy__errorDet-sender-parite">
            compute parity bit
            
        </div>
                              )}
      {step > 4 && (

        <div className="dascy__errorDet-sender-arrow">
        <img src={arrow} alt="" />        
        </div>
                                      )}

        <div className="dascy__errorDet-sender-data-detecte">
        {step > 5&& (

            <div className="dascy__errorDet-sender-data-sent" >   
            100011
        </div>
                                              )}
        {step > 6&& (

        <div className="dascy__errorDet-sender-data-add">
            1
        </div>
                                                      )}

        </div>
      </div>

      
      <div className="dascy__errorDet-sender-data-trs">
        <div></div>
        <div></div>
        <div className="dascy__errorDet-sender-transmissio">
        {step > 7&& (

        <div className="dascy__errorDet-tra-arrow">
        <img src={arrow} alt="" />        
        </div>
        ) }
                {step > 8&& (

        <div className="dascy__errorDet-sender-data-trs_box">
        Transmission Media
      </div>
                ) }
                        {step > 9&& (

      <div className="dascy__errorDet-tra-arrow">
        <img src={arrow} alt="" />        
        </div>
                        )}
        </div>
        </div>
    

      {/* receiver */}
      <div className='dascy__errorDet-sender'>
        {step > 16 && (
        <div className="dascy__errorDet-sender-img">
   <img src={pc} alt="" />
                </div>
        )}
{/* rejct accept */}
        <div className="dascy__errorDet-sender-data-receiver">
        {step > 15&& (

           <div className="dascy__errorDet-sender-data1"><span>N</span> Reject Data</div>
        )}
           {step > 15&& (

           <div className="dascy__errorDet-receiver-arrow-rec">
        <img src={arrow} alt="" />        
        </div>
           )}
        {step > 15&& (

           <div className="dascy__errorDet-sender-data2">Even</div>
        ) }
           {step > 15&& (

           <div className="dascy__errorDet-receiver-arrow-rec2">
        <img src={arrowinv} alt="" />        
        </div>
        ) }
        {step > 15&& (

           <div className="dascy__errorDet-sender-data1">
           <span>Y</span> Accepte Data</div>
        )}
        </div>
        {step > 14&& (

        <div className="dascy__errorDet-receiver-arrow">
        <img src={arrow} alt="" />        

        </div>
        )}
        {/* compute parity */}
        {step > 13&& (

        <div className="dascy__errorDet-sender-parite">
            compute parity bit
            
        </div>
        ) }
        {step > 12&& (

        <div className="dascy__errorDet-receiver-arrow">
        <img src={arrow} alt="" />        
        </div>
        )}
        <div className="dascy__errorDet-sender-data-detecte">
        {step > 10&& (
            <div className="dascy__errorDet-sender-data-sent" >   
            100011
        </div>
        )}
                {step > 11&& (

        <div className="dascy__errorDet-sender-data-add">
            1
        </div>
                ) }
        </div>
      </div>
    </div>
      <div className="dascy__errorDet-button">
        <button>  Next</button>
      </div>
    </>
  )
}

export default ErrorDet
