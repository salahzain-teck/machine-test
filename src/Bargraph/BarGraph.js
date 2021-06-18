import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarGraph = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['Ana', 'Jenny', 'Johti', 'Lars'],
          datasets: [
            {  
             
              maxBarThickness: 30,
              minBarLength: 0,
              label: '# of votes',
              data: [10,5,2,2,6,5],
              backgroundColor: [
              'green'
              ],
             
              borderWidth: 0,
            },
             
            
          ],
        }}
        height={250}
        width={50}
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

export default BarGraph