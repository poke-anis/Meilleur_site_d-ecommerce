import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {Avatar} from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import ResearchBar from './ResearchBar';

const Highdiv = styled.header`
grid-column-start:1;
grid-column-end:4;
grid-row-start:1;
grid-row-end:2;
background-color:#ffb344;
display:flex;
justify-content:space-around;
align-items:center;

`
const P = styled.p`
padding-left: 10px;
border-left: 2px solid;
height:50%;
`
const Profilestatus = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
width:15%;

`



const High = () =>{

    return(
        <Highdiv>
            <img src='{}'/>
            <ResearchBar/>
            <Profilestatus>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                <P>Nom d'utilisateur</P>
            </Profilestatus>

        </Highdiv>
    );
    
};

export default High;