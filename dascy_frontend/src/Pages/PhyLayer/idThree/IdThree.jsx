import React from 'react'
import "./idThree.css"
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ASK from './ASK';
import FSK from './FSK';
import PSK from './PSK';

function IdThree() {
  return (
    <div className='dascy__idThree'>
        <h2>Modulation Techniques</h2>
        <VerticalTimeline lineColor='#000'className='timeline' >
          <VerticalTimelineElement className='vertical-timeline-element first' 
          contentArrowStyle={{ top: '50%', marginTop: '-4px', borderRight: '12px solid #fff'}} 
          iconStyle={{ background: '#000', color: '#000' ,top: '45%', marginTop: '8px',width:'24px',height:'24px',marginLeft:'-12px' }}
          date="ASK(Amplitude Shift Keying)" >
            <div className='text-box'><ASK/> </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element second' 
          contentArrowStyle={{ top: '50%', marginTop: '-4px', borderRight: '12px solid #fff'}} 
          iconStyle={{ background: 'black',color: 'red', top: '45%', marginTop: '6px',width:'24px',height:'24px',marginLeft:'-12px'}}
          date="FSK(Frequincy Shift Keying)">
            <div className='text-box'><FSK/> </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element third' 
          contentArrowStyle={{ top: '50%', marginTop: '-4px', borderRight: '12px solid #fff'}} 
          iconStyle={{ background: '#000', color: '#000' , top: '45%', marginTop: '8px',width:'24px',height:'24px',marginLeft:'-12px'}}
          date="PSK(Phase Shift Keying)">
            <div className='text-box'><PSK/> </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

    
  );
}

export default IdThree
