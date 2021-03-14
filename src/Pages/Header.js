import React, {useState} from 'react'
import * as MdIcons from 'react-icons/md'
import './dashboard.css'

//This contains the pro version button and has a close icon which hides this section on clicking.
function Header() {
    const [close, setClose] = useState(true)
    const closeElement = () => setClose(!close)
    return close && (
        <div className="header">
           
                Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!
           
                <button className="buttonn">
                    Check Pro Version
                </button>
            <MdIcons.MdClose style={{marginLeft:20, cursor:'pointer'}} onClick={closeElement}/>

        </div>
    )
}

export default Header
