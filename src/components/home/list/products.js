import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProduct } from "../../../store/actions/productAction";
import styled from 'styled-components';

class Products extends Component {

    componentDidMount() {
        this.props.loadProduct();
    }
    render() {

        const Products = styled.div`
            text-align: center;
        `;
        const Card = styled.div`
            display: inline-block;
            height: 200px;
            width: 300px;
            border: 1px solid #e6e6e6;
            text-align: center;
            padding: 15px;
            margin: 10px;
            -webkit-animation-name: spinner;
            -webkit-animation-timing-function: linear;
            -webkit-animation-iteration-count: 1;
            -webkit-animation-duration: 2s;

            animation-name: spinner;
            animation-timing-function: linear;
            animation-iteration-count: 1;
            animation-duration: 1s;

            -webkit-transform-style: preserve-3d;
            -moz-transform-style: preserve-3d;
            -ms-transform-style: preserve-3d;
            transform-style: preserve-3d;
            @-webkit-keyframes spinner {
              from { -webkit-transform: rotateY(0deg);    }
              to   { -webkit-transform: rotateY(-360deg); }
            }
            /* all other browsers */
            @keyframes spinner {
              from {
                -moz-transform: rotateY(0deg);
                -ms-transform: rotateY(0deg);
                transform: rotateY(0deg);
              }
              to {
                -moz-transform: rotateY(-360deg);
                -ms-transform: rotateY(-360deg);
                transform: rotateY(-360deg);
              }
        `;

        const Title = styled.h1`
            color: #359094;
            font-weight: bold;
        `;

        const Subtitle = styled.div`
            border: 1px solid #359094;
            padding: 5px;
            background-color: #e6e6e6;
        `;

        const Back = styled(Link)`
            border: 1px solid #359094;
            border-radius: 5px;
            margin-left: 10px;
            padding: 5px;
            color: #359094;
            &:hover {
                text-decoration: none;
                color: #fff;
                background-color: #359094;
            }
        `;
        
        return (
            <div className="row">
                <Back to="/">Voltar</Back>
                <Products className="col-md-12">
                    <h2>Produtos</h2>
                    {
                        this.props.products.products !== undefined ?
                            this.props.products.products.map((product, key) =>
                                <Card className="col-md-12" key={key}>
                                    <Title>{product.name}</Title>
                                    <div>Cod: {product.id}</div>
                                    <Subtitle>
                                        <div>Quantidade: {product.amount}</div>
                                        <div>Preço: R${product.price_per_unit}</div>
                                        <div>Preço total: R${product.total_price}</div>
                                    </Subtitle>
                                </Card>
                            )
                            : ''
                    }
                </Products>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        products: state.product
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        loadProduct: (id) => {
            dispatch(loadProduct(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);