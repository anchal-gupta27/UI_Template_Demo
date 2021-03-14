import React from 'react'
import { Line } from 'react-chartjs-2'

//Line chart with random data

function LineChart() {

    const data = {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May'
        ],
        datasets: [
            {
                label: 'Revenue',
                data:[100,50,200,150,250],
                
                borderColor: ['rgba(153, 0, 204, 0.2)'],
                backgroundColor: ['rgba(153, 0, 204, 0.2)'],
                pointBackgroundColor: 'rgba(153, 0, 204, 0.2)',
                pointBorderColor: 'rgba(153, 0, 204, 0.2)'

            },
            {
                label: 'Sales',
                data: [200,250,150,200,100],
                borderColor: ['rgba(0, 102, 0, 0.2)'],
                backgroundColor: ['rgba(0, 102, 0, 0.2)'],
                pointBackgroundColor: 'rgba(0, 102, 0, 0.2)',
                pointBorderColor: 'rgba(0, 102, 0, 0.2)'
            }
        ]
    }
    
    return (
        <div>
            <div style={{display:'flex', flexDirection: 'row'}}>
              <div style={{margin:15}}>
                 <strong>Sales Statistics Overview</strong>  <br /> Lorem ipsum is placeholder text commonly used
              </div>
              <div style={{margin:10, marginLeft:190}}>
                    <button>1D</button>
                    <button>5D</button>
                    <button>1M</button>
                    <button>1Y</button>
              </div>
            </div>
            
            <div style={{display:'flex', flexDirection:'row'}}>
                <div><span>Total Cost</span> <br /> <strong> <span style={{fontSize:18}}>15,263</span> 89.5% </strong> of 20,000 Total </div> 
                <div><span>Total Cost</span> <br /> <strong> <span style={{fontSize:18}}>15,263</span> 89.5% </strong> of 20,000 Total </div>
            </div>
             <Line data={data}  />
        </div>
    )
}

export default LineChart
