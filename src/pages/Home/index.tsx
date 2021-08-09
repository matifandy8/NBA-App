import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Get } from '../../services/Api';

function Home() {
  const [data, setData] = useState([])

  useEffect( () => {
      Get('/teams').then((res) => setData(res.data.data))  
      
}, [])
console.log(data)
  return (
    <div className="Home">
      <Navbar />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
