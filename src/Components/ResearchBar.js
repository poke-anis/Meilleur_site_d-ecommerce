import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const Research = styled.div`
width: 40%;
`

const ResearchBar = () => {
    return(
        <Research>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
        </Research>
    )
}

export default ResearchBar;