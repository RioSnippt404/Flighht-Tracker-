import React from 'react'

const Cards = ( p) => {
  return (
    <div>
         <a className=''
            href={p.e.url}>
            <div
                className='rounded-2xl'
                key={p.e.id}> 
              <img
                className="h-45 w-60 object-cover  rounded-xl"
                src={p.e.download_url}
                alt={p.e.author}
              />
              <h3 className='text-white text-xl font-bold'>
                {p.e.author}
              </h3>
          </div>
          </a>
    </div>
  )
}

export default Cards
