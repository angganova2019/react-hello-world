import React, { Component, Fragment } from 'react';
import "./Product.css";
import CardProduct from './CardProduct/CardProduct';
import { RootContext, GlobalConsumer } from '../../../context/context';
// import { connect } from 'react-redux';

class Product extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="./img_logo_etanee_white.svg" alt="" />
                    </div>
                    <div className="troley">
                        <img src="./ic_cart_white.svg" alt="" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                {/* <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} /> */}
                <CardProduct />
            </Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);