import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {InfoCircleOutlined,HomeOutlined,MenuOutlined} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from '../Assets/Images/Logo2.png'
const { Header } = Layout;

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
const LogoImage = styled.img`
  float: left;
  width: 150px;
padding-bottom:50px;

`
const Navbar = () =>{

    return(
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" ><LogoImage src={Logo} /></div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['98'] }>
                <Menu.SubMenu title='Categories' icon={<MenuOutlined />}> 
                <Menu.Item key="1">Television</Menu.Item>
                <Menu.Item key="2">Refrigerateur</Menu.Item>
                <Menu.Item key="3">Machine a laver</Menu.Item>
                <Menu.Item key="4"> Son</Menu.Item>
                <Menu.Item key="5">Photo et video</Menu.Item>
                <Menu.Item key="6">Cuisson</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="98" icon={<HomeOutlined />}>Accueil</Menu.Item>
                <Menu.Item key="99" icon={<InfoCircleOutlined />}>À propos </Menu.Item>
                
            </Menu>
        </Header>

    );
    
};

export default Navbar;