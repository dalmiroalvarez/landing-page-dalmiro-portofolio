import React from 'react'

const Test = () => {
  return (
    <div className="w-[4/4] flex flex-col md:flex-row items-center justify-center flex-wrap gap-36">                   
    <img src={reactImg} 
        className="w-[12%] h-[25vh] rounded-full object-cover"
    />
    <div className='flex-row'>
      <h2>React js</h2>
    </div>
    <img src={jsImg} 
        className="w-[12%] h-[25vh] rounded-full object-cover" 
    />
    <img src={tailwindcssImg} 
        className="w-[12%] h-[25vh] rounded-full object-cover border-x-4" 
    />
    <img src={bootstrapcssImg} 
        className="w-[12%] h-[25vh] rounded-full object-cover" 
    />
    <img src={sassImg} 
        className="w-[12%] h-[25vh] rounded-full object-cover" 
    />
    <img src={typescriptImg} 
        className="w-[12%] h-[25vh] rounded-full object-cover" 
    />
    <img src={gatsbyImg} 
        className="w-[12%] h-[25vh] rounded-full object-cover" 
    />         

  </div>
  )
}

export default Test