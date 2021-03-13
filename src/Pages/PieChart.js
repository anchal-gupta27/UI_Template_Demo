import React from 'react'
import {Pie} from 'react-chartjs-2';
import './dashboard.css'

function PieChart() {
    const state ={
        labels: ['Jan','Feb', 'Mar', 'Apr','May','Jun'],
        datasets: [
            {
                label:'Sales',
                data: [65,59,80,81,56,78]
            }
        ]
    }
    return (
        <div>
            <Pie data = {state} 
           
            options = {
                {
                    responsive: true,
                    maintainAspectRatio: true,
                    title: {
                        display: true,
                        text: 'Sales',
                        fontSize:20
                    }
                }
            }
            />
        </div>
    )
}

export default PieChart
