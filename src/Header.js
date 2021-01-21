//rfce
import React from 'react'
import './Header.css'

function Header() {
    return (
        // Logo
        <div className='header'>
            <img clasName='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/>

            {/* Search Bar */}
            <div className="header_search">
                <input className="header_search" type="text" />
            </div>

            {/* Options in header of signin,cart  */}
            <div className="header_nav">
                <div className="header_option">
                   <span className="header_option_LineOne">Hello Guest</span> 
                   <span className="header_option_LineTwo">Sign In</span> 
                </div>

                    <div className="header_option">
                    <span className="header_option_LineOne">Returns</span> 
                   <span className="header_option_LineTwo">& Orders</span> 
                    </div>

                    <div className="header_option">
                    <span className="header_option_LineOne">Your</span> 
                   <span className="header_option_LineTwo">Prime</span>                     </div>

            </div>

        </div>

    )
}

export default Header
