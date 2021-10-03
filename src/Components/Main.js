import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'
import High from './High';
import Carouseldiv from './Carousel';
import Categories from './Categories';
import Title from './CategoriesTitle';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// const Section = styled.section`
// display:grid;

// grid-template-rows: 15% 8% auto;
// `
// const Content = styled.main`
// grid-column-start:1;
// grid-column-end:4;
// grid-row-start:3;
// grid-row-end:4;
// padding-top:1%;
// display:flex;
// align-items:center;
// justify-content:center;
// flex-direction:column;

// `

// const Footer = styled.footer`

// `

const Main = () => { 
    return(
        // <Section>
        //     <High class=''>

        //     </High>
        //     <Navbar>

        //     </Navbar>
        //     <Content>
        //         <Carouseldiv/>
        //         <Categories/>
        //     </Content>

        // </Section>
        <Layout style={{ height:'100vh'}}>
            <Navbar></Navbar>
            <Layout>
                
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Row justify="center">
                    <Carouseldiv/>
                </Row>
                <Row style={{paddingBottom:50}}>
                    <Title></Title>
                </Row>
                
                    <Categories/>
        
                </Content>
                
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    );
};



export default Main;