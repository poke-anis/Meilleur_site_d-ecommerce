import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Article from './Article';





const AllArticles  = () =>{
    
    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = 'http://localhost:1337/categories';
        axios.get(apiUrl).then((repos) => {
          const allRepos = repos.data;
          setAppState({ loading: false, repos: allRepos });
        });
      }, [setAppState]);
    
    return(
        <div>
        </div>

    )
};

export default AllArticles ;