import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.div`
    text-align: center;
`;


const NewLink = styled(Link)`
    color: #FF7E14;
    border: 1px solid #FF7E14;
    border-radius: 5px;
    padding: 10px;
    text-decoration: none;
    &:hover {
        background-color: #FF7E14;
        color: #fff;
        text-decoration: none;
    }
`;

const Card = (props) => (
    <Grid className={props.classStyle}>
        <NewLink to={props.link}>
            <span>{props.text}</span>
            <i className={"fa " + props.icon}></i>
        </NewLink>
    </Grid>
);

export default Card;