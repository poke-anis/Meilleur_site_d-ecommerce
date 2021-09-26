import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'
import High from './High';
import Carouseldiv from './Carousel';

const Section = styled.section`
display:grid;
grid-template-columns: 25% auto 20%;
grid-template-rows: 15% 10% auto 10%;
background-color: #FFF8E5;
width: 100vw;
height: 100vh;
`
const Content = styled.main`
grid-column-start:2;
grid-column-end:3;
grid-row-start:3;
grid-row-end:4;
;`

const Footer = styled.footer``

const Test = () => { 


    return(
        <Section>
            <High class=''>

            </High>
            <Navbar>

            </Navbar>
            <Content>
                <Carouseldiv/>
            </Content>

        </Section>
    );
};



export default Test;