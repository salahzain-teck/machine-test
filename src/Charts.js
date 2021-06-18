import React from 'react'
import './Charts.css'
import FileCopyTwoToneIcon from '@material-ui/icons/FileCopyTwoTone';
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import Funnel from './Funnel/Funnel';
import Todolist from './TodoList/Todolist';

import BarGraphFrame from './Bargraph/BarGraphFrame'
import PieChartFram  from './PieChart/PieChartFram';
import MixedBarGraphFrame from './MixedBarGraph/MixedBarGraphFrame';

import GaugeFrame from './Gauge/GaugeFrame';
import Contacts from './Contacts/Contacts';
import Total from './Total/Total';
import LineGraphFrame from './Lingraph/LineGraphFrame';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Charts() {
    return (
        <div className='chart'>
            <div className='heading'>
             <div className='left_head'>
                 <h4>Good Morning Mike</h4>
                 <h5>Sales Dashboard</h5>
             </div>
             <div className='right_head'>
                 <div className='custom_charts'>
                     <FileCopyTwoToneIcon/>
                     <p>MANAGE CUSTOM CHARTS</p>
                 </div>
                 <div className='widgets'>
                     <AppsTwoToneIcon/>
                     <p>ADD WIDGETS</p>
                 </div>
             </div>    
            </div>

            <div className='content'>
               
              
              
              

  <div class="row row-cols-1 row-cols-md-3 g-3 " >
  <div class="col">
  <Funnel/>
  </div>
  <div class="col">
  <Todolist/>
  </div>
  <div class="col">
  <LineGraphFrame/>
  </div>
  </div>

  <div class="row row-cols-1 row-cols-md-3 g-3 " >
  <div class="col">
  <BarGraphFrame/>
  </div>
  <div class="col">
  <PieChartFram/>
  </div>
  <div class="col">
  <Contacts/>
  </div>
  </div>

  <div class="row row-cols-1 row-cols-md-3 g-3 " >
  <div class="col">
  <Total/>
  </div>
  <div class="col">
  <GaugeFrame/>
  </div>
  <div class="col">
  <MixedBarGraphFrame/>
  </div>
  </div>
            </div>   
        </div>
    )   
}

export default Charts
