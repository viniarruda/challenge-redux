import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Card from './card';
import Products from './products';
import Promotions from './promotions';

const Cards = () => {
    return (
        <div className="row">
            <Card classStyle="col-md-6" link="/promocoes" text="Promoções"/>
            <Card classStyle="col-md-6" link="/produtos" text="Produtos" icon="fa-cart-arrow-down"/>
        </div>
    )
};

const List = () => (
    <Switch>
        <Route path="/promocoes" component={Promotions} />
        <Route path="/produtos" component={Products} />
        <Route path="/" component={Cards} />
    </Switch>
);

export default List;