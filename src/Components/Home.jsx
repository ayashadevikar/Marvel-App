import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios"


const Home = () => {
const [url,setUrl] = useState("");
const [item,SetItem] = useState();
useEffect(()=>{
      const fetch = async()=>{
            const res = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2de96d32476a4d63624e927e9b82bb88&hash=c40f6841d6c7057bfe9242f76f7e586a`)
            SetItem(res.data.data.results);
      }
      fetch();
},[url])



  return (
    <div className='header'>
          <div className="bg">
                <img src="./Images/bg.png" alt="" />
            </div>

            <div className='logo-img'>
                 <img src="./Images/logo.jpg" alt="" />
            </div>

            <div className='content'>
                 {
                    <Card data={item}/>
                 }
            </div>
      </div>
  )
}

export default Home