import React,{useState} from 'react';
import {HorizontalBar} from 'react-chartjs-2';


function Bars({cases,active,deaths}) {
    const state ={
        labels: ["cases","active","death"],
        datasets: [
          {
            label: 'Covid status',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [cases,active,deaths]
          }
        ]
      }
    return (
        <div>

                    <HorizontalBar
                    data={state}
                    width="600px"
                    height="200px"
                    options={{
                      maintainAspectRatio: true
                    }}
                  />
          
      </div>
    )
}

export default Bars


