//rfce
import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";

function Header() {
    return (
        // Logo
        <div className='header'>

            {/* We have used Link here bcz when user click the image he will be redirected to home page so we have mentioned the imag tag that is amazon logo and link to / means home page */}
            <Link to='/'>
                <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
            </Link>

            {/* We have commented the below image bcz we have put that image in above link tag bcz if user link on image then it will be link to jhome page */}
            {/* <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/> */}

            {/* Search Bar */}
            {/* Header Search is sourounded with input serach and serach icon so when we apply display flex it will be in a row  */}
            <div className="header_search">

                <input className="header_searchInput" type="text" />
                {/* For Icon we have used Material UI of React and installed it using npm(npm install @material-ui/core) and for icon also we have used npm (npm install @material-ui/icons)to install icon
                Then Imported it and used the Search Icon below here */}
                <SearchIcon className='header_searchIcon' />

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
                    <span className="header_option_LineTwo">Prime</span>
                </div>

                {/* Similar way we have done on amnazon logo here aslo when user click baket button we will be re directed to checkout page by using link */}
                <Link to="/Checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_option_LineTwo header_basketCount">0</span>
                    </div>
                </Link>

                {/* This is the basket button code which we have linked above in checkout page */}
                {/* <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_option_LineTwo header_basketCount">0</span>
                </div> */}
            </div>

        </div>

    )
}

export default Header
