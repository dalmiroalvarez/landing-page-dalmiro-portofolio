import heroimg from '../images/fd2e.png'

import reactImg from '../images/react-1.png'
import jsImg from '../images/js-1.png'
import tailwindImg from '../images/tw-1.png'
import {
  RiCheckboxBlankCircleFill,    
} from "react-icons/ri";
import {IoEyeSharp} from "react-icons/io5"

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-5xl font-bold xl:leading-[7.5rem]">
            Frontend Developer{" "}
            <span className="text-primary py-2 px-10 border-8 border-primary relative inline-block my-5">
              React
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-600 text-2xl leading-[2.5rem]">
          Hello everyone! I'm Dalmiro, I invite you to my portfolio. I have been a frontend developer for a few years, I spend my time creating applications with technologies such as React js, Javascript, Tailwind Css among others.
          I would like you to get to know me a little more.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href='skills'><button 
              className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl"              
            >
            Skills
            </button>
            </a>            
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src={heroimg}
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
            <div className="flex items-center">
              <a target="_blank" href='https://www.linkedin.com/in/dalmiro-alvarez-b47641174/'><img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png?w=826&t=st=1674658644~exp=1674659244~hmac=1bee20091ca308b3782f77c4970772f0ce872ecf86a858d103676ecbffcfae52"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-400"
              />
              </a>
              <a target="_blank" href='https://github.com/dalmiroalvarez'>
              <img
                src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                className="w-10 h-10 object-cover rounded-full ring-1 ring-gray-300 ml-4"
              />
              </a>                            
            </div>
            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              My Networks
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <IoEyeSharp className="text-primary" /> Take a Peek
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className="text-primary text-8xl" />
                <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>

        {/* Logos */}
        <img
          src={jsImg}
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute top-[12%] right-[20%] xl:right-[10%]"
        />
        <img
          src={reactImg}
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
        />
        <img
          src={tailwindImg}
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[10%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};

export default Hero;