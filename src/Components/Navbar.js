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
background-color:#051c48;
color: white;
`
const Categories = styled.div`

width:250px;
display:flex;
align-items:center;
justify-content:space-between;
padding-left: 20px;
padding-right: 20px;
height:100%;
`
const Centerdiv = styled.div`
display:flex;

height:100%;
margin-right:auto;
margin-left:10%;
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
            <Centerdiv >
            <Categories style={{backgroundColor:'#e05d5d'}}>
                
                Categories
                <ReorderIcon/>
            </Categories>
            <DivBar>
                <SvgIcon >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
                Accueil
            </DivBar>
            <DivBar >
                <InfoIcon/>
                À propos
            </DivBar>
            </Centerdiv>
        </Navbardiv>
    );
    
};

export default Navbar;