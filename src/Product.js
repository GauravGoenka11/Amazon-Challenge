import React from 'react';
import './Product.css';

//now this will automatically imported when we write useStateProvider() 
//on the last line of stateprovider.js we have mention this usestatevValue()
import { useStateValue } from './StateProvider';

//This below code will give same product in the page but we want differennt images for every product so the part below comment is by using props
// function Product() {
//     return (
//         <div className="product">
//             <div className="product_info">
//                 <p>The Lean Startup</p>
//                 <p className="product_price">
//                     <small>$</small>
//                     <strong>19.99</strong>
//                 </p>
//                 <div className="product_rating">
//                     <p>🌟</p>
//                 </div>
//             </div>
//             <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="Lean Startup"/>
//            <button>Add To Basket</button>
//         </div>
//     )
// }

//props in es6 can be used with {}
function Product({ title, image, price, rating }) {
    //now we want to pull data from DatatLayer so in state provider.js class we have mentioned last line for pulling data from data layer
    // state is the state of global 
    // dispatch is how we manipulate the data 
    const [state, disptach] = useStateValue();

    //addtobasket function for passing data to dtatlayer
    // function will take no arguments
    const addToBasket = () => {
        //disptach some action i.e disptach the item to data layer
        //disptach is like a gun
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>

                        ))}
                </div>
            </div>
            <img src={image} alt="Lean Startup" />
            {/* //this was the simple button without the pushing data to data layer  */}
            {/* <button>Add To Basket</button> */}

            {/* connect addtobasket to put data to datalayer */}
            {/* now on click we are writing a function addToBasket  */}
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
