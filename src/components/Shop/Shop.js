import React from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import {useState} from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [card, setCard] = useState([]);


    const handleAddProduct = (product) =>{
        console.log('Product added', product);
        const newCard = [...card, product];
        setCard(newCard);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
            
            {
                products.map(products => 
                <Product 
                    handleAddProduct ={handleAddProduct}
                    products={products}>
                </Product>)
            }
           
            </div>
            <div className="card-container">
                <Cart Cart ={card} />
            </div>

        </div>
    );
};

export default Shop;