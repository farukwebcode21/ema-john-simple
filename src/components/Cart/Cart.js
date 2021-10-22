import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    

    // const total = Cart.reduce((total, prd) => total + prd.price, 0)

    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.99
    }else if(total > 0){
        shipping = 12.99
    }
    const tax = (total /10);
    const grandTotal = (total + shipping + Number(tax));


    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered :{cart.length}</p>
            <p>Product Price : {total.toFixed(2)}</p>
            <p><small>Shipping Cost :{shipping.toFixed(2)}</small></p>
            <p><small>Tax + VAT : {tax.toFixed(2)}</small></p>
            <p>Total Price : {grandTotal.toFixed(2)}</p>

        </div>
    );
};

export default Cart;