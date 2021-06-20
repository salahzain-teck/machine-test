import React from 'react'
import GaugeChart from 'react-gauge-chart';
import './Gauge.css'
function Gauge() {
    return (
        <div className='gauge'>
<GaugeChart  
 nrOfLevels={2} 
 percent={.68} 
 colors={['green', 'grey']}
 textColor='#163350'
 
/>
        </div>
    )
}      

export default Gauge            
