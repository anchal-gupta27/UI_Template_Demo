import React from 'react'
import { Line } from 'react-chartjs-2'

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
    const options = {
        title: {
            display: true,
            text: 'Sales Statistics Overview'
        }
    }
    return (
        <Line data={data} options = {options} />
    )
}

export default LineChart
