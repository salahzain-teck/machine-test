import React from 'react'
import { Line } from 'react-chartjs-2'



const LineGraph = () => {
  return (
    <div>
      <Line
        data={{
        
          labels: ['2017-Q4', '2018-Q2', '2018 Q-3', '20188 Q-4', '2019 Q-1', '2019 Q-3'],
          datasets: [
            {
              label: 'Bronze',
              data: [10000, 20000, 22000, 18000, 23000,27000],
              backgroundColor: [
                'rgb(255, 174, 0)'
              ],
              borderColor: [
                'rgb(255, 174, 0)'
              ],
              // borderWidth: 1,
            },

            {
              label: 'Silver',
              data: [15000, 32000, 30000, 27000,29000,22000],
              type: 'line',
              backgroundColor: [
                'green'
                ],
                borderColor: [
                  'green'
                ],
             
              order: 1
          }
          ,

            {
              label: 'Gold',
              data: [15000, 42000, 27000, 23000,30000,60000],
              type: 'line',
              backgroundColor: [
                '#0FA0CE'
                ],
                
                borderColor: [
                  '#0FA0CE'
                ],
             
              order: 1
          }
			
          
          ],
		 
        }}
        height={230}
        width={150}
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
  )
}

export default LineGraph
