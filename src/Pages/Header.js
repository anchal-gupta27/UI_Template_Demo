import React, {useState} from 'react'
import * as MdIcons from 'react-icons/md'

function Header() {
    const [close, setClose] = useState(true)
    const closeElement = () => setClose(!close)
    return (
        <div>
           
                Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!
           
                <button className="buttonn">
                    Check Pro Version
                </button>
            <MdIcons.MdClose style={{marginLeft:20}} onClick={closeElement}/>

        </div>
    )
}

export default Header
