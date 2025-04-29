import FormularioProducto from '@/components/FormularioProducto';
import ListaProductos from '@/components/ListaProductos';
import FiltroProductos from '@/components/FiltroProductos';
import OrdenadorProductos from '@/components/OrdenadorProductos';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">

      {/* Fondo granulado */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Luz radial sutil */}
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />

      {/* Contenido principal */}
      <main className="relative z-10 p-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center gap-6 bg-[#1b1b1b] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700 p-6 min-h-[650px]">
          {/* Filtro + Formulario */}
          <h1 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8 tracking-tight">
            <a href="/src/assets/pruebaTecnica.doc" download>Prueba Técnica - Desarrollador Junior React</a>
          </h1>
          <FiltroProductos />
          <FormularioProducto />
          <footer className="w-full mt-10 p-6 bg-[#111111] rounded-2xl flex flex-col items-center gap-6 text-center">
            <h2 className="text-gray-500 text-base">
              Creado por{' '}
              <a
                href="https://www.linkedin.com/in/johanbodev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline transition"
              >
                JohanBoDev
              </a>
            </h2>
            <nav className="w-full">
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                <li>
                  <a
                    href="https://github.com/JohanBoDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition text-xl sm:text-2xl md:text-3xl"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/johanbodev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-800 hover:bg-gray-700 text-sky-400 hover:text-sky-300 transition text-xl sm:text-2xl md:text-3xl"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.johanbodev.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-800 hover:bg-gray-700 text-green-400 hover:text-green-300 transition text-xl sm:text-2xl md:text-3xl"
                    aria-label="Portafolio Web"
                  >
                    <FaGlobe />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:bohorquezjohan958@gmail.com"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-800 hover:bg-gray-700 text-red-400 hover:text-red-300 transition text-xl sm:text-2xl md:text-3xl"
                    aria-label="Correo Gmail"
                  >
                    <FaEnvelope />
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col gap-6 bg-[#1b1b1b] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700 p-6 min-h-[650px]">
          {/* Ordenador + Lista de Productos */}
          <OrdenadorProductos />
          <ListaProductos />
        </div>
      </main>
    </div>
  );
};

export default Home;
