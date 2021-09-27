import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'
import High from './High';
import Carouseldiv from './Carousel';
import Categories from './Categories';

const Section = styled.section`
display:grid;
grid-template-columns: 25% auto 20%;
grid-template-rows: 15% 8% auto 10%;
background-color: #FFF8E5;
width: 99vw;
height: 100vh;
`
const Content = styled.main`
grid-column-start:1;
grid-column-end:4;
grid-row-start:3;
grid-row-end:4;
padding-top:1%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
position: relative;
`

const Footer = styled.footer`

`

const Test = () => { 


    return(
        <Section>
            <High class=''>

            </High>
            <Navbar>

            </Navbar>
            <Content>
                <Carouseldiv/>
                <Categories/>
            </Content>

        </Section>
    );
};



export default Test;