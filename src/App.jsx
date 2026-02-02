import React, { useEffect, useState } from 'react';
import Cards from './compoments/Cards';

const App = () => {
  const [data, setData] = useState([]);
  const [index,setIndex]= useState(1)

  const getData = async () => {
  const url = `https://picsum.photos/v2/list?page=${index}&limit=10`;
    const response = await (await fetch(url)).json();
    setData(response);
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className='bg-black min-h-screen  p-4 '>
      <div className="flex gap-5  flex-wrap  mx-10 mt-10 ">
        {data.map((e,idx) => (
          <Cards key={idx} e={e}/>
        ))}
      </div>
      <div className='flex justify-center gap-10 m-10'>     
        <button className='bg-white  p-1 w-20 rounded-2xl' 
        onClick={()=>{
        
        if(index>1){ setIndex(index-1)}
      }}>Perv</button>
       <span className='text-white font-bold text-xl'>Page {index}</span>
      <button className='bg-white  p-1 w-20 rounded-2xl' 
        onClick={()=>
        setIndex(index+1)
      }>Next</button>
      </div>
    </div>
  );
};

export default App;
