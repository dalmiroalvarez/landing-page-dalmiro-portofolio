import reactImg from '../images/react-1.png'
import jsImg from '../images/js-1.png'
import tailwindcssImg from '../images/tw-1.png'
import bootstrapcssImg from '../images/bootstrap-1.png'
import sassImg from '../images/sass-logo.jpg'
import typescriptImg from '../images/ts-logo.png'
import gatsbyImg from '../images/gatsby-logo.png'

const Clients = () => {
    return (
      <div className="bg-gray-100 mt-20 px-20 py-10" id='skills'>
        <h1 className="text-3xl xl:text-4xl font-bold xl:leading-[7.5rem] text-center mb-10 xl:my-2">
        Technologies
        </h1>
        <div className="grid sm:grid-rows-1 lg:grid-cols-7 lg:grid-rows-2 gap-4">                   
          
          {/* REACT */}
          <div className='w-full grid sm:grid-cols-1 lg:row-start-1 lg:col-start-1 justify-items-center p-6 gap-3 border-2 rounded-2xl'>
            <img src={reactImg} 
                className="w-full h-full rounded-full object-cover"
            />            
            <h2 
              className='text-xl font-semibold'
            >Name
            </h2>
            <button className='rounded-full bg-black text-white text-2xl px-4'>React</button>
                        
          </div>
          {/* JAVSASCRIPT */}
          <div className='w-full grid sm:grid-cols-1 lg:row-start-2 lg:col-start-2 justify-items-center p-6 gap-3 border-2 rounded-2xl'>
            <img src={jsImg} 
                className="w-full h-full rounded-full object-cover" 
            />            
            <h2 
              className='text-xl font-semibold'
            >Name
            </h2>
            <button className='rounded-full bg-yellow-400/70 text-2xl '>JavaScript</button>   
          {/* TAILWIND */}
          </div>
          <div className='w-full grid sm:grid-cols-1 lg:row-start-1 lg:col-start-3 justify-items-center p-6 gap-3 border-2 rounded-2xl'>
            <img src={tailwindcssImg} 
                className="w-full h-full rounded-full object-cover" 
            />
            <h2 
              className='text-xl font-semibold'
            >Name
            </h2>
            <button className='rounded-full bg-sky-200/80 text-2xl '>Tailwind</button> 
          </div>
          {/* BOOTSTRAP */}
          <div className='w-full grid sm:grid-cols-1 lg:row-start-2 lg:col-start-4 justify-items-center p-6 gap-3 border-2 rounded-2xl'>
            <img src={bootstrapcssImg} 
                className="w-full h-full rounded-full object-cover" 
            />
            <h2 
              className='text-xl font-semibold'
            >Name
            </h2>
            <button className='rounded-full bg-violet-900/50 text-2xl'>Bootstrap</button> 
          </div>
          {/* SASS */}
          <div className='w-full grid sm:grid-cols-1 lg:row-start-1 lg:col-start-5 justify-items-center p-6 gap-3 border-2 rounded-2xl'>
            <img src={sassImg} 
                className="w-full h-full rounded-full object-cover" 
            />
            <h2 
              className='text-xl font-semibold'
            >Name
            </h2>
            <button className='rounded-full bg-pink-400/50 text-2xl px-1 text-white'>Sass Css</button>  
          </div>
          {/* TYPESCRIPT */}
          <div className='w-full grid sm:grid-cols-1 lg:row-start-2 lg:col-start-6 justify-items-center p-6 gap-3 border-2 rounded-2xl'>
            <img src={typescriptImg} 
                className="w-full h-full rounded-full object-cover" 
            />
            <h2 
              className='text-xl font-semibold'
            >Name
            </h2>
            <button className='rounded-full bg-blue-700/70 text-2xl '>TypeScript</button>  
            </div>
          {/* GATSBY */}
          <div className='w-full grid sm:grid-cols-1 lg:row-start-1 lg:col-start-7 justify-items-center p-6 gap-3 border-2 rounded-2xl'>
            <img src={gatsbyImg} 
                className="w-full h-full rounded-full object-cover" 
            />
            <h2 
              className='text-xl font-semibold'
            >Name
            </h2>
            <button className='rounded-full bg-violet-900/50 text-2xl'>Gatsby</button>           
          </div>

        </div>
      </div>
    );
  };
  
  export default Clients;