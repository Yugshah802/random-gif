import React from 'react'
import { useState,useEffect } from "react";
import axios from 'axios';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;



const useGif = (tag) => {
    const[gif,setGif]=useState('');
    const[loading,setLoading]=useState('false');

    const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    async function fetchData(tag) {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data}=await axios.get(tag? tagMemeurl : randomMemeurl);
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource)
        setLoading(false);
    }

    useEffect( () => {
        fetchData('car');
    },[]) 

    

    return {gif,loading,fetchData}
}

export default useGif