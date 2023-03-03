import {
    RiLinkedinBoxFill,
    RiGithubLine,
  } from "react-icons/ri";
  
  const Footer = () => {
    return (
      <footer className="bg-footer p-8 xl:p-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
          {/* Logo */}
          <div className="w-2/6">
            <a
              href="home"
              className="text-xl font-bold relative p-1 bg-footer text-white"
            >
              Dalmiro's Portfolio
            </a>
          </div>
          {/* Social media */}
          <nav className="flex items-center gap-4">
            <a target="_blank" href="https://www.linkedin.com/in/dalmiro-alvarez-b47641174/" className="block text-white p-4 bg-indigo-500 rounded-full">
              {" "}
              <RiLinkedinBoxFill />{" "}
            </a>
            <a target='_blank' href="https://github.com/dalmiroalvarez" className="block text-white p-4 bg-indigo-500 rounded-full">
              {" "}
              <RiGithubLine />{" "}
            </a>
          </nav>
        </div>
        <div className="mt-20">
          <p className="text-gray-300 text-center">
          © Website developed by Dalmiro Alvarez
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;