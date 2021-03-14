import React from 'react'
import {Pie} from 'react-chartjs-2';
import './dashboard.css'

//pie chart with some random data
function PieChart() {
    const state ={
        labels: ['Jan','Feb', 'Mar'],
        datasets: [
            {
                label:'Sales',
                data: [65,59,80],
                backgroundColor: ['red','blue','green']
            
            }
        ]
    }
    return (
        
            <Pie data = {state} 
           
            options = {
                {
                    responsive: true,
                    maintainAspectRatio: true,
                    title: {
                        display: true,
                        text: 'Net Profit Margin',
                  
                    }
                }
            }
            />
       
    )
}

export default PieChart
