import React from 'react';
import './Subtotal.css';
//for currency we have installed npm i react-currency-format 
import CurrencyFormat from "react-currency-format";

export default function Subtotal() {
    return (
        <div className="subtotal">

        <CurrencyFormat
        //render on the screen
        renderText={(value)=>(

            <>
            <p>
              {/* Part of the homework */}
              Subtotal ( 0   items): <strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        //the price value will go to 2 decimal places
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        //if the rupees will be in thousand then it will give copmma
        thousandSeparator={true}
        //prefix means the the sign of amount before value
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
    )
}
            