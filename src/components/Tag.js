import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react";
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const[tag,SetTag]=useState("car");
    // const[gif,setGif]=useState('');
    // const[loading,setLoading]=useState('false');
   
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data}=await axios.get(url);
    //     const imageSource=data.data.images.downsized_large.url;
    //     setGif(imageSource)
    //     setLoading(false);
    // }
    // useEffect( () => {
    //     fetchData();
    // },[]) 
    const {gif,loading,fetchData}=useGif(tag);
    function clickHandler()
    {
        fetchData(tag);
    }
    function changeHandler(event)
    {
        SetTag(event.target.value)
    }

    
  return (
    <div className='w-1/2 ] bg-blue-500  mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold '
        >Random {tag} Gif</h1>
        {
            loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
        }
       <input
           className='w-10/12 text-lg py-2 rounded-lg mb-[3px]'
           onChange={changeHandler}
           value={tag}
       />

        <button onClick={clickHandler} className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'
        >
        Generate
        </button>
    </div>
  )
}

export default Tag