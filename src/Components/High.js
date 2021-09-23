import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {Avatar} from '@mui/material';
const Highdiv = styled.header`
grid-column-start:1;
grid-column-end:4;
grid-row-start:1;
grid-row-end:2;
background-color:#E05D5D;
display:flex;
justify-content:space-between;

`



const High = () =>{

    return(
        <Highdiv>
            <img src={}/>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <p>Nom d'utilisateur</p>
        </Highdiv>
    );
    
};

export default High;