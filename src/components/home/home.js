import React from 'react';
import List from './list';
import Header from '../header';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    padding-top: 20px;
`;

const Home = () => (
    <div className="home">
        <Container className="col-md-12 col-12">
            <Header/>
            <div className="col-md-12 col-sm-12">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Mercado</h1>
                        <p className="lead">Encontre produtos para todos os gostos</p>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-sm-12">
                <List />
            </div>
        </Container>
    </div>
)

export default Home;