import React, { useState, useEffect } from 'react'
import styled from 'styled-components';


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

`

const Navbar = () =>{

    return(
        <Navbardiv>
            <Categories>
                Categories
            </Categories>
            <DivBar>
                Accueil
            </DivBar>
            <DivBar>
                À propos
            </DivBar>
        </Navbardiv>
    );
    
};

export default Navbar;