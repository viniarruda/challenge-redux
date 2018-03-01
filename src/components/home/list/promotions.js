import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Back = styled(Link)`
    border: 1px solid #359094;
    border-radius: 5px;
    padding: 5px;
    color: #359094;
    &:hover {
        text-decoration: none;
        color: #fff;
        background-color: #359094;
    }
`;

const Title = styled.h1`
    margin-top: 15px;
`;

const Promotion = (props) => (
    <div >
        <Back to="/">
            Voltar
        </Back>
        <Title>Não há promoções ativas no momento</Title>
    </div>
)

export default Promotion