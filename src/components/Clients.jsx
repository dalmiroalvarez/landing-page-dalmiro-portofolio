import reactImg from '../images/react-1.png'
import jsImg from '../images/js-1.png'
import tailwindcssImg from '../images/tw-1.png'
import bootstrapcssImg from '../images/bootstrap-1.png'
import sassImg from '../images/sass-logo.jpg'
import typescriptImg from '../images/ts-logo.png'
import gatsbyImg from '../images/gatsby-logo.png'

const Clients = () => {
    return (
      <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
        <h1 className="text-2xl font-medium text-gray-800 text-center">
        Technologies I use
        </h1>
        <div className="w-[4/4] flex flex-col md:flex-row items-center justify-center flex-wrap gap-36">                   
          
          {/* REACT */}
          <div className='w-[13%] grid justify-items-center'>
            <img src={reactImg} 
                className="w-[100%] h-[26vh] rounded-full object-cover"
            />            
            <h2 
              className='font-semibold hover:border-solid hover:border-2 hover:border-gray-400 hover:transition-all hover:rounded-md 
                          mt-8 text-lg hover:py-[2.5] hover:px-8 cursor-default'
            >React
            </h2>            
          </div>
          {/* JAVSASCRIPT */}
          <div className='w-[13%] grid justify-items-center'>
            <img src={jsImg} 
                className="w-[100%] h-[26vh] rounded-full object-cover" 
            />            
            <h2 
              className='font-semibold hover:border-solid hover:border-2 hover:border-gray-400 hover:transition-all hover:rounded-md 
                          mt-8 text-lg hover:py-[2.5] hover:px-8 cursor-default'
            >Javascript
            </h2>   
          {/* TAILWIND */}
          </div>
          <div className='w-[13%] grid justify-items-center'>
            <img src={tailwindcssImg} 
                className="w-[100%] h-[26vh] rounded-full object-cover border-x-4" 
            />
            <h2 
              className='font-semibold hover:border-solid hover:border-2 hover:border-gray-400 hover:transition-all hover:rounded-md 
                          mt-8 text-lg hover:py-[2.5] hover:px-8 cursor-default'
            >Tailwind
            </h2> 
          </div>
          {/* BOOTSTRAP */}
          <div className='w-[13%] grid justify-items-center'>
            <img src={bootstrapcssImg} 
                className="w-[100%] h-[26vh] rounded-full object-cover" 
            />
            <h2 
              className='font-semibold hover:border-solid hover:border-2 hover:border-gray-400 hover:transition-all hover:rounded-md 
                          mt-8 text-lg hover:py-[2.5] hover:px-8 cursor-default'
            >Bootstrap
            </h2> 
          </div>
          {/* SASS */}
          <div className='w-[13%] grid justify-items-center'>
            <img src={sassImg} 
                className="w-[100%] h-[26vh] rounded-full object-cover" 
            />
            <h2 
              className='font-semibold hover:border-solid hover:border-2 hover:border-gray-400 hover:transition-all hover:rounded-md 
                          mt-8 text-lg hover:py-[2.5] hover:px-8 cursor-default'
            >SASS
            </h2> 
          </div>
          {/* TYPESCRIPT */}
          <div className='w-[13%] grid justify-items-center'>
            <img src={typescriptImg} 
                className="w-[100%] h-[26vh] rounded-full object-cover" 
            />
            <h2 
              className='font-semibold hover:border-solid hover:border-2 hover:border-gray-400 hover:transition-all hover:rounded-md 
                          mt-8 text-lg hover:py-[2.5] hover:px-8 cursor-default'
            >Typescript
            </h2> 
            </div>
          {/* GATSBY */}
          <div className='w-[13%] grid justify-items-center'>
            <img src={gatsbyImg} 
                className="w-[100%] h-[26vh] rounded-full object-cover" 
            />
            <h2 
              className='font-semibold hover:border-solid hover:border-2 hover:border-gray-400 hover:transition-all hover:rounded-md 
                          mt-8 text-lg hover:py-[2.5] hover:px-8 cursor-default'
            >Gatsby
            </h2>          
          </div>

        </div>
      </div>
    );
  };
  
  export default Clients;