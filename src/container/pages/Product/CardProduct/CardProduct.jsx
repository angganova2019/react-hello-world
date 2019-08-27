import React, { Component } from 'react';
import "../../Product/Product.css";
import Counter from './Counter.jsx';

class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="./colonel_ori_pack10.jpg" alt="product-img" />
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                <p className="product-price">Rp 410,000</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduct;