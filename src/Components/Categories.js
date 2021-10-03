import styled from 'styled-components';

import axios from 'axios'
import React, { useState, useEffect } from 'react'

import Lavevaisselle from '../Assets/Images/Lavevaisselle.png'
import cuisinière from '../Assets/Images/cuisinière.jpg'
import Televiseur from '../Assets/Images/Television.jpg'
import lavelinge from '../Assets/Images/lave-linge.jpg'
import Refrigerateur from '../Assets/Images/refrigerateur.webp'
import { Row, Col } from 'antd';

const Categdata=[
    {
        image:Televiseur,
        Produits:'Televiseur'
      },
      {
        image:
          lavelinge,
          Produits:'lavelinge'
      },
      {
        image:
          Refrigerateur,
          Produits:'Refrigerateur'
      },
      {
        image:
        cuisinière,
          Produits:'cuisinière'
      },
      {
        image:
        Lavevaisselle,
          Produits:'Lave vaisselle'
      }
    
]


const Categ = styled.div`

`
const CategTitle= styled.div`
margin-top: -1.5em ;
text-align: center;
`
const BorderedTop= styled.div`
width:100%;
height:20%;
margin-top: 100px;
margin-left: 24px;
margin-right: 24px;
border-top: #0A1129 solid 1px;
flex-basis: auto;
`
const BorderedCateg= styled.div`
border: #0A1129 solid 1px;
width:220px;
height:300px;
position: relative;
`
const ImageCateg = styled.img`
width:100%;
padding:10px;
`

const Categories = ()=>{

  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'http://localhost:1337/categories';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

return(
<Row >
  {!appState.repos || appState.repos.length === 0? <p>No repos, sorry</p>:
  appState.loading?      
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time :)
      </p>:
      appState.repos.map((categorie,index)=>(
  <Col span={4}>
    <BorderedCateg>
      <CategTitle> 
        <h1 style={{display: 'inline-block', paddingLeft: '20px', paddingRight: '20px',fontSize:'1.8em',backgroundColor:'#f0f2f5'}}> {categorie.Name}</h1>
      </CategTitle>
      <ImageCateg src={'http://localhost:1337'+categorie.Picture.url} ></ImageCateg>
    </BorderedCateg>
  </Col>
))}


</Row>
)

};

export default Categories;