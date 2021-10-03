import styled from 'styled-components';
import * as React from 'react';

const CategTitle= styled.div`
margin-top: -1.3em ;
text-align: center;

`
const BorderedTop= styled.div`
width:100%;
height:20%;
margin-top: 100px;
margin-left: 24px;
margin-right: 24px;
border-top: #0A1129 solid 1px;
flex-basis: auto;
`

const Title = ()=>{
    return(
            <BorderedTop>
            <CategTitle> <h1 style={{display: 'inline-block', paddingLeft: '20px', paddingRight: '20px',backgroundColor:'#f0f2f5'}}> Categories d'equipements </h1> </CategTitle>
            </BorderedTop>
)
};

export default Title;