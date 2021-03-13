import React from 'react'
import './dashboard.css'
import LineChart from './LineChart'
import Chart from './Chart.js'
import PieChart from './PieChart'
import Header from './Header'
import Option from './Option'

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="header">
                 < Header />
            </div>
            <p><strong>Dashboard</strong> ICE Market data | Own Analysis | Historic market data <span style={{marginLeft:535}}>Settings | Analytics | Watchlist</span></p>
            <div>
                <Option />
            </div>
            <div>
                <Chart />
            </div>
            <div className="chart-flex">
                <div className="chart">
                      <LineChart />
                </div>
                 <div className="piechart">
                      <PieChart />
                 </div>
            </div>
        </div>
    )
}

export default Dashboard
