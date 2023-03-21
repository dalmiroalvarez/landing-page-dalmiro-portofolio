import workQubo from '../images/work-1.png'
import workJuegoTenis from '../images/work-2.png'
import workCMagico from '../images/work-3.png'
import workACarnes from '../images/work4-3.png'
import workCotizadorGastos from '../images/work-gastos-2.png'
import workCotizadorCriptos from '../images/work-cripto.png'
import workVeterinario from '../images/work-vet.png'
import workFincaGonzalez from '../images/work-5-4.png'

const Works = () => {
    return (
      <div id="aboutUs" className="p-8 xl:px-20">
        <div className="mb-4">
          <h1 className="text-5xl xl:text-4xl font-bold xl:leading-[7.5rem] sm:mt-8 xl:mt-1">
            Projects
          </h1>
          <p className="text-xl text-gray-600 my-8 xl:my-1">
          I would like to share with all of you the most significant projects throughout my career.
          Many of them are on my GitHub and are {''}
            <span className="font-bold">open source.</span>
          </p>
        </div>
        {/* Works */}
        <div className="grid sm:grid-rows-1 lg:grid-cols-4 gap-6 my-8">       
            <div className="grid grid-cols-1 gap-4 border-2 rounded-lg hover:border-gray-900/60 transition-all p-3">
              <img
                src={workQubo}
                className="w-[90%] h-auto object-cover rounded-3xl"
              />
              <p className="text-gray-500">Institutional project "QUBO Projects"</p>
              <h3 className="text-xl font-bold">
                QUBO Proyectos
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 border-2 rounded-lg hover:border-gray-900/60 transition-all p-3">
              <img
                src={workJuegoTenis}
                className="w-[90%] h-auto object-cover rounded-3xl"
              />
              <p className="text-gray-500">Institutional project "Doblas Tenis"</p>
              <h3 className="text-xl font-bold">
                Doblas Tenis
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 border-2 rounded-lg hover:border-gray-900/60 transition-all p-3">
              <img
                src={workCMagico}
                className="w-[90%] h-auto object-cover rounded-3xl"
              />
              <p className="text-gray-500">Institutional project "Circulo Magico"</p>
              <h3 className="text-xl font-bold">
                Circulo Mágico
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 border-2 rounded-lg hover:border-gray-900/60 transition-all p-3">
              <img
                src={workACarnes}
                className="w-[85%] h-auto object-cover rounded-3xl"
              />
              <p className="text-gray-500">Institutional project "Al Fuego Carnes"</p>
              <h3 className="text-xl font-bold">
                Al Fuego Carnes
              </h3>
            </div>         
          
            <div className="grid grid-cols-1 gap-4 border-2 rounded-lg hover:border-gray-900/60 transition-all p-3">
              <img
                src={workCotizadorGastos}
                className="w-[90%] h-auto object-cover rounded-3xl"
              />
              <p className="text-gray-500">Enterprise Software Development</p>
              <h3 className="text-xl font-bold">
                Cotizador de Gastos
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 border-2 rounded-lg hover:border-gray-900/60 transition-all p-3">
              <img
                src={workVeterinario}
                className="w-[90%] h-auto object-cover rounded-3xl"
              />
              <p className="text-gray-500">Enterprise Software Development</p>
              <h3 className="text-xl font-bold">
                Citas Pacientes Veterinaria
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 border-2 rounded-lg hover:border-gray-900/60 transition-all p-3">
              <img
                src={workCotizadorCriptos}
                className="w-[90%] h-auto object-cover rounded-3xl"
              />
              <p className="text-gray-500">Enterprise Software Development</p>
              <h3 className="text-xl font-bold">
                Cotizador de Criptomonedas
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 border-2 rounded-lg hover:border-gray-900/60 transition-all p-3">
              <img
                src={workFincaGonzalez}
                className="w-[90%] h-auto object-cover rounded-3xl"
              />
              <p className="text-gray-500">Institutional project "Finca Gonzalez"</p>
              <h3 className="text-xl font-bold">
                Finca Gonzalez
              </h3>
            </div>           
        </div>
      </div>
    );
  };
  
  export default Works;