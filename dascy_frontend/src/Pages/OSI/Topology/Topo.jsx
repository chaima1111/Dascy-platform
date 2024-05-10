import React, { useState, useRef } from 'react';//ajouter
import "./topo.css"
import photo1 from "../../../assets/Osi/pc2.png";
import tl from "../../../assets/Osi/topo/tl.png"
import Ligne from "../../../assets/Osi/topo/Ligne 1.png"
import Ligne2 from "../../../assets/Osi/topo/Ligne 2.png"
import Ligne3 from "../../../assets/Osi/topo/Ligne 3.png"
import Ligne4 from "../../../assets/Osi/topo/Ligne 4.png"
import Ligne7 from "../../../assets/Osi/topo/Ligne 7.png"
import Ligne6 from "../../../assets/Osi/topo/Ligne 6.png"
import Ligne8 from "../../../assets/Osi/topo/Ligne 8.png"
import Ligne9 from "../../../assets/Osi/topo/Ligne 9.png"
import Ligne10 from "../../../assets/Osi/topo/Ligne 10.png"
import Electric from "../../../assets/Osi/topo/elec.webp"
import Cercle from "../../../assets/Osi/topo/cercle.png"
const Topo = () => {
  
  const [selectedTopology, setSelectedTopology] = useState(null);
  const nextSectionRef = useRef(null); //ajouter
 
  // Gestionnaire d'événement pour une carte
  const handleCardClick = (topology) => {
    setSelectedTopology(topology);

    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
  };
 
  

  return (
    
    <div >
      <div ref={nextSectionRef}> 
        <div className='dascy__topo'>
          <div className='dascy__topo-title'>
            <h1>How networks communicate with different devices?</h1>
          </div>
          <div className='dascy__topo-container'>
            <input type="radio" name='slide' id='c1' checked />
            <label htmlFor="c1" className='dascy__topo-card' onClick={() => handleCardClick("MESH TOPOLOGY")}>
              <div className='dascy__topo-row'>
                <div className='dascy__topo-icon'>1</div>
                <div className='dascy__topo-description'>
                  <h4>MESH TOPOLOGY</h4>
                </div>
              </div>
            </label>
        <input type="radio" name='slide' id='c2' checked/>
        <label htmlFor="c2" className='dascy__topo-card'onClick={() => handleCardClick("STAR TOPOLOGY")}>
          <div className='dascy__topo-row'>
            <div className='dascy__topo-icon'>2</div>
            <div className='dascy__topo-description'>
              <h4>STAR TOPOLOGY</h4>
              
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c3' checked/>
        <label htmlFor="c3" className='dascy__topo-card'onClick={() => handleCardClick("RING TOPOLOGY")}>
          <div className='dascy__topo-row'>
            <div className='dascy__topo-icon'>3</div>
            <div className='dascy__topo-description'>
              <h4>RING TOPOLOGY</h4>
              
            </div>
          </div>
        </label>
        <input type="radio" name='slide' id='c4' checked/>
        <label htmlFor="c4" className='dascy__topo-card'onClick={() => handleCardClick("BUS TOPOLOGY")}>
          <div className='dascy__topo-row'>
            <div className='dascy__topo-icon'>4</div>
            <div className='dascy__topo-description'>
              <h4>BUS TOPOLOGY</h4>
             
            </div>
          </div>
        </label>
        
      </div>
    </div></div>
             
              {/* Affichage de la photo animée en fonction de la carte sélectionnée */}
      {selectedTopology && (
        <div className="animated-photo4"    ref={nextSectionRef}>
          {/* Utilisez la photo animée correspondant à la topologie sélectionnée */}
          {selectedTopology === "MESH TOPOLOGY" && (
            <>
             <img src={photo1} alt="MESH Topology"className="mesh1" />
              <img src={photo1} alt="MESHR Topology"className="mesh1"/>
             <div className="writing-square3">
                <h2>Nothing can seperate us</h2>
               </div>
               
              <img src={photo1} alt="MESH Topology" className="mesh1"/>
              <img src={photo1} alt="MESH Topology" className="mesh1"/>

              <img src={Ligne4} alt="MESH Topology" className="mesh2"/>
              <img src={Ligne4} alt="MESH Topology" className="mesh3"/>
              <img src={Ligne6} alt="MESH Topology" className="mesh6"/>
              <img src={Ligne7} alt="MESH Topology" className="mesh7"/>
              <img src={Ligne10} alt="MESH Topology" className="mesh4"/>
              <img src={Ligne10} alt="MESH Topology" className="mesh5"/>
              <img src={Electric } alt="MESH Topology"className="mesh12" />
              <img src={Electric } alt="MESH Topology"className="mesh13" /> 
              <img src={Electric } alt="MESH Topology"className="mesh8" />
              <img src={Electric } alt="MESH Topology"className="mesh9" />
              <img src={Electric } alt="MESH Topology"className="mesh10" />
              <img src={Electric } alt="MESH Topology"className="mesh11" />

            </>
          )}
        </div>
      )}
{selectedTopology && (
        <div className="animated-photo">
          {/* Utilisez les photos correspondantes à la topologie sélectionnée */}
          {selectedTopology === "STAR TOPOLOGY" && (
            <>
              <img src={photo1} alt="STAR Topology"className="image-large2" />
              <div className="writing-square">
                <h2>What happened??</h2>
               </div>
              <img src={photo1} alt="STAR Topology"className="image-large2"/>
              <div className="writing-square1">
                <h2>Dont blame me!</h2>
               </div>
              <img src={photo1} alt="STAR Topology" className="image-large2"/>
              <div className="writing-square2">
                <h2>The cable is broken</h2>
                </div>

              <img src={tl} alt="STAR Topology"className="image-large" />
              <img src={Ligne} alt="STAR Topology"className="image-small" />
              <img src={Ligne2} alt="STAR Topology"className="image-smaller" />
              <img src={Ligne3} alt="STAR Topology"className="image-smallest" />
              <img src={Electric } alt="STAR Topology"className="image-larger" />
              <img src={Electric } alt="STAR Topology"className="image-larger2" />
            </>
          )}
          {/* Ajoutez d'autres conditions pour d'autres topologies si nécessaire */}
      </div>
        )}

{selectedTopology && (
        <div className="animated-photo2"    ref={nextSectionRef}>
        
          {selectedTopology === "RING TOPOLOGY" && (<>
            <img src={photo1} alt="RINGTopology" className='ring1'/>
            <div className="writing-square8">
                <h2>No, we're old</h2>
               </div>
            <img src={photo1} alt="RINGTopology" className='ring2'/>
            <div className="writing-square7">
                <h2>Do people still use us</h2>
               </div>
            <img src={photo1} alt="RINGTopology"className='ring3' />
            <div className="writing-square9">
                <h2>It's me sorry</h2>
               </div>
            <img src={photo1} alt="RINGTopology" className='ring4'/>
            <div className="writing-square10">
                <h2>Who broke the cable?</h2>
               </div>
            <img src={Cercle} alt="RINGTopology" className="cercle"/>

            <img src={Ligne9} alt="RINGTopology" className="ring5"/>
            <img src={Ligne9} alt="RINGTopology" className="ring6"/>
            <img src={Electric } alt="BUS Topology"className="ring7" />

            </>
          )}
        </div>
      )}

{selectedTopology && (
        <div className="animated-photo3"    ref={nextSectionRef}>
          {/* Utilisez la photo animée correspondant à la topologie sélectionnée */}
          {selectedTopology === "BUS TOPOLOGY" && (<>
            <img src={photo1} alt="BUS Topology"className="bus"  />
            <div className="writing-square4">
                <h2>Oops sorry!</h2>
               </div>
            <img src={photo1} alt="BUS Topology"className="bus"  />
            <div className="writing-square5">
                <h2>we can't communicate anymore</h2>
               </div>
            <img src={photo1} alt="BUS Topology" className="bus" />
            <div className="writing-square6">
                <h2>What's wrong?</h2>
               </div>
            <img src={photo1} alt="BUS Topology"className="bus"  />
            
            <img src={Ligne8} alt="BUS Topology"className="image1" />
            <img src={Ligne9} alt="BUS Topology"className="image2" />
            <img src={Ligne9} alt="BUS Topology"className="image3" />
            <img src={Ligne9} alt="BUS Topology"className="image4" />
            <img src={Ligne9} alt="BUS Topology"className="image5" />
            <img src={Electric } alt="BUS Topology"className="image6" />
            <img src={Electric } alt="BUS Topology"className="image7" />
            <img src={Electric } alt="BUS Topology"className="image8" />
            <img src={Electric } alt="BUS Topology"className="image9" />
            <img src={Electric } alt="BUS Topology"className="image10" />
            <img src={Electric } alt="BUS Topology"className="image11" />
            <img src={Electric } alt="BUS Topology"className="image12" />
            </>
          )}
        </div> 
      )}
      </div> 
  )
  
}

export default Topo