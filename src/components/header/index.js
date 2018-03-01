import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div`
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    margin: 0 0 10px;
    padding: 15px 0 0;
`;

const List = styled.li`
    display: inline-block;
    list-style: none;
    margin: 10px;
    &:hover {
        color: #FF7E14;
        cursor: pointer;
    }
`;

const NewLink = styled(Link)`
    color: #000;
    &:hover {
        text-decoration: none;
        color: #FF7E14;
        cursor: pointer;
    }
`;

const Home = () => (
    <div className="home">
        <Header>
            <ul>
                <List><NewLink to="/">Home</NewLink></List>
                <List><NewLink to="/produtos">Produtos</NewLink></List>
                <List><NewLink to="/promocoes">Promoções</NewLink></List>
                <List>Sobre</List>
                <List>Contato</List>
            </ul>
        </Header>
    </div>
)

export default Home;