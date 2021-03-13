import React from 'react'
import * as FcIcons from 'react-icons/fc'
import * as RiIcons from 'react-icons/ri'

function Option() {
    return (
        <div className="option-flex">
            <div className="option-style">
                <FcIcons.FcPrevious/>
                <span style={{margin:50}}>03/02/2019-20/08/2019</span>
                <FcIcons.FcNext/>
            </div>
            <div className="option-style">
                <span style={{margin:10}}>All Day</span>
                <FcIcons.FcExpand />
                
            </div>
            <div className="style2">
                Advanced Options
            </div>
            <div ><button className="btn">
                New
            </button></div>
            
            <div style={{marginLeft:435}} className="option-style">
            <span style={{margin:10}}> Export </span>
                <FcIcons.FcExpand />
            </div>
        </div>
    )
}

export default Option

