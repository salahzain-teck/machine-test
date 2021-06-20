import React from 'react'
import {Bar} from 'react-chartjs-2'

const MixedBarGraph = () => {
  return (
  
  
    <div>
    <Bar
      data={{
        label: 'Line Dataset'  ,
        labels: ['Ana', 'Jenny', 'Johti', 'Lars', 'Mike', 'Sophia'],
        datasets: [
          {  
           
            maxBarThickness: 38,
            minBarLength: 0,
            label: '# of votes',
            data: [900,1000,700,850,860,820],
            backgroundColor: [
            'green'
            ],
         
            borderWidth: 0,
          },
          {
            label: 'Line Dataset',
            data: [1250, 1100, 950, 1600,1500,1200],
            type: 'bar',
            backgroundColor: [
              '#0FA0CE'
              ],
           
            order: 1
        }
          
        ],
      }}
      height={250}
      width={200}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }}
    />
  </div>

    
   
    
  )}

export default MixedBarGraph