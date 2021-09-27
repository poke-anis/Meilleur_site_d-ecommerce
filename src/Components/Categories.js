import styled from 'styled-components';
import * as React from 'react';
import Card from 'react-bootstrap/Card'
import Lavevaisselle from '../Assets/Images/Lavevaisselle.png'
import cuisinière from '../Assets/Images/cuisinière.jpg'
import Televiseur from '../Assets/Images/Television.jpg'
import lavelinge from '../Assets/Images/lave-linge.jpg'
import Refrigerateur from '../Assets/Images/refrigerateur.webp'

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
flex-wrap: wrap;
width:100%;
display:flex;
justify-content: space-around;
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
position: relative;
`
const ImageCateg = styled.img`
width:100%;
`
const Categories = ()=>{
return(
    <Categ>
        <BorderedTop>
        <CategTitle> <h1 style={{display: 'inline-block',backgroundColor: '#FFF8E5', paddingLeft: '20px', paddingRight: '20px'}}> Categories d'equipements </h1> </CategTitle>
        </BorderedTop>
        {Categdata.map((categorie,index)=>(
        <BorderedCateg>
        <CategTitle> 
        <h1 style={{display: 'inline-block',backgroundColor: '#FFF8E5', paddingLeft: '20px', paddingRight: '20px',fontSize:'1.8em'}}> {categorie.Produits}</h1>
        </CategTitle>
            <ImageCateg src={categorie.image} ></ImageCateg>
        </BorderedCateg>

))}






        {/* {Categdata.map((categorie,index)=>(
            <BorderedCateg>
            <CategTitle> <h1 style={{display: 'inline-block',backgroundColor: '#FFF8E5', paddingLeft: '20px', paddingRight: '20px'}}> {categorie.Produits} </h1> </CategTitle>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={categorie.image}
            />
        </CardActionArea>
</Card>
</BorderedCateg>
        ))} */}

    </Categ>

)

};

export default Categories;