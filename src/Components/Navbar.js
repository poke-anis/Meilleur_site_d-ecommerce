import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import SvgIcon from '@mui/material/SvgIcon';
import ReorderIcon from '@mui/icons-material/Reorder';
import InfoIcon from '@mui/icons-material/Info';
const Navbardiv = styled.div`
grid-column-start:1;
grid-column-end:4;
grid-row-start:2;
grid-row-end:3;
background-color:#00a19d;
display:flex;
justify-content: flex-start;
align-items:center;
`
const Categories = styled.button`
height:100%;

`
const Cart = styled.div`
`
const DivBar = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding-left: 20px;
padding-right: 20px;
height:100%;
`

const Navbar = () =>{

    return(
        <Navbardiv>
            <DivBar style={{backgroundColor:'#e05d5d'}}>
                <ReorderIcon/>
                Categories
            </DivBar>
            <DivBar>
                <SvgIcon >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
                Accueil
            </DivBar>
            <DivBar>
                <InfoIcon/>
                À propos
            </DivBar>
        </Navbardiv>
    );
    
};

export default Navbar;