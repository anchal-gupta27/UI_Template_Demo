import React from 'react';
import chart from '../images/chart.jpeg';
import './dashboard.css';

function Chart() {
    return (
        <div className="charts">
            <div className="chartelement">

                <strong>32,451</strong> <br /> Visits <br /> +14.00(+0.50%)
                </div>
                <div className="chartelement">
              <img src={chart} alt=""></img>
            </div>
            <div className="chartelement">
                <strong>32,451</strong> <br /> Visits <br /> +14.00(+0.50%)
                </div>
                <div className="chartelement">
              <img src={chart} alt=""></img>
            </div>
            <div className="chartelement">
                <strong>32,451</strong> <br /><span className="span-style">Visits </span><br /> +14.00(+0.50%)
                </div>
                <div className="chartelement">
              <img src={chart} alt=""></img>
            </div>
            <div className="chartelement">
                <strong>32,451</strong> <br /> Visits <br /> +14.00(+0.50%)
                </div>
                <div className="chartelement">
              <img src={chart} alt=""></img>
            </div>
        </div>
    )
}

export default Chart
