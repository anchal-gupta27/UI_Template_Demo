import React from 'react';
import chart from '../images/chart.jpeg';
import './dashboard.css';

//This component displays the charts which keeps track of visits, impressions, conversion and downloads
function Chart() {
    return (
        <div className="charts">
            <div className="chartelement">

            <strong style={{fontSize:18}}>32,451</strong> <br /><span className="span-style">Visits </span><br /> +14.00(+0.50%)
                </div>
                <div className="chartelement">
              <img src={chart} alt="Visits"></img>
            </div>
            <div className="chartelement">
            <strong style={{fontSize:18}}>15,236</strong> <br /><span className="span-style">Impressions </span><br /> +138.97(+0.54%)
                </div>
                <div className="chartelement">
              <img src={chart} alt="Impressions"></img>
            </div>
            <div className="chartelement">
                <strong style={{fontSize:18}}>7,688</strong> <br /><span className="span-style">Conversion </span><br /> +14.00(+0.50%)
                </div>
                <div className="chartelement">
              <img src={chart} alt="Conversion"></img>
            </div>
            <div className="chartelement">
            <strong style={{fontSize:18}}>1,553</strong> <br /><span className="span-style">Downloads </span><br /> +14.00(+0.50%)
                </div>
                <div className="chartelement">
              <img src={chart} alt="Downloads"></img>
            </div>
        </div>
    )
}

export default Chart
