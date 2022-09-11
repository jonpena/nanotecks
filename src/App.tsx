import { useRef } from "react";

function App() {
  const questionRef = [
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
  ];

  const onClickFAQ = (question: React.RefObject<HTMLDivElement>, i: Number) => {
    questionRef.forEach((itemRef, index) => {
      if (i !== index) itemRef.current?.classList.add("hidden");
    });
    question.current?.classList.toggle("hidden");
  };

  return (
    <div className="">
      {/* barra de navegacion */}

      <div className="fixed left-0 top-0 z-50 py-1 bg-white w-screen border-b-2 border-b-purple-500">
        <nav className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img className="w-14" src="./assets/logo.png" alt="logo" />
            <span className="text-2xl text-gradient-left font-medium font-roboto tracking-wider">
              nanotecks
            </span>
          </a>

          <button className="text-size-0 px-4 border-4 btn text-blue-custom border-blue-custom hover:border-morado-custom hover:text-morado-custom transition-colors duration-300">
            Comenzar
          </button>
        </nav>
      </div>

      {/* hero de landing page */}

      <div className="relative max-w-7xl px-8 mx-auto mt-6 md:mt-16 pt-8 flex">
        <img
          className="w-20 lg:w-28 bottom-2 lg:top-0 lg:left-4 left-1/2 -translate-x-1/2 lg:translate-x-0 -ml-32 lg:ml-0 absolute"
          src="./assets/icon-wifi.png"
          alt="wifi icon"
        />
        <img
          className="w-20 lg:w-36 bottom-2 lg:top-28 lg:left-16 left-1/2 -translate-x-1/2 lg:translate-x-0 absolute"
          src="./assets/icon-control.png"
          alt="wifi icon"
        />

        <img
          className="w-20 lg:w-36 bottom-2 lg:left-auto lg:-right-0 lg:bottom-12 left-1/2 -translate-x-1/2 lg:translate-x-0 ml-32 absolute"
          src="./assets/icon-card.png"
          alt="wifi icon"
        />

        <h1 className="max-w-3xl mx-auto mt-8 mb-24 pb-4 text-gradient-right text-size-3 xl:text-5xl font-bold leading-tight">
          Cambia la forma de trabajar con tecnología y mucho más
        </h1>
      </div>

      {/* banner 1 */}

      <div className="w-full bg-gradient left-0 pt-16 pb-20">
        <h2 className="mx-auto text-white text-size-2 font-bold leading-tight">
          Trabaja donde quieras. Trabaja cuando quieras
        </h2>

        <p className="max-w-4xl mx-auto mt-8 px-12 text-white text-size-0 font-semibold">
          ¿Quieres trabajar desde nanotecks ? Ingresa tu Email para pertenecer a
          la lista VIP.
        </p>

        <div className="w-max mt-8 mx-auto px-1 py-1 rounded-lg bg-white flex">
          <img
            className="w-4 mx-2"
            src="./assets/icon-email.svg"
            alt="icono email"
          />
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-48 sm:w-80 outline-none"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="ml-4 p-2 btn text-white bg-blue-custom hover:opacity-70 transition-opacity"
              type="submit"
              value="Comenzar"
            />
          </form>
        </div>
      </div>

      {/* Service Section */}

      <div className="relative max-w-7xl mx-auto px-6 mt-8 mb-16 py-8 grid md:grid-cols-2 place-items-center gap-x-12 gap-y-16 md:gap-y-48">
        {/* service-section1 */}

        <div className="ml-2 flex flex-col">
          <div className="flex items-center">
            <h3 className="text-size-4 text-gradient-right font-semibold">
              Canales
            </h3>
            <img
              className="w-12 h-auto ml-1"
              src="./assets/icon-wifi.png"
              alt="icono wifi"
            />
          </div>
          <p className="text-size-1 text-left text-gray-800 mt-2">
            Crea salas de aprendizaje, añade canales digitales, programa y
            publica contenido prémium o gratuito donde prefieras.
          </p>
          <button className="mt-5 text-size-1 px-4 border-4 btn text-blue-custom border-blue-custom hover:border-morado-custom hover:text-morado-custom transition-colors duration-300">
            Comenzar
          </button>
        </div>

        <img className="w-full" src="./assets/example1.png" alt="example 1" />

        {/* service-section 2 */}

        <div className="ml-2 flex flex-col md:order-4">
          <div className="flex items-center">
            <h3 className="text-size-4 text-gradient-right font-semibold">
              Salas
            </h3>
            <img
              className="w-14 h-auto ml-2"
              src="./assets/icon-control.png"
              alt="icono wifi"
            />
          </div>

          <p className="text-size-1 text-left text-gray-800 mt-2">
            Únete a salas gratis y pagadas para educarte o entretenerte.
          </p>
          <p className="text-size-1 text-left text-gray-800 mt-3">
            Crea salas prémium para monetizar y libres para compartir tu
            conocimiento.
          </p>

          <button className="mt-5 text-size-1 px-4 border-4 btn text-blue-custom border-blue-custom hover:border-morado-custom hover:text-morado-custom transition-colors duration-300">
            Comenzar
          </button>
        </div>

        <img
          className="w-full md:order-3"
          src="./assets/example2.png"
          alt="example 2"
        />

        {/* service-section 3 */}

        <div className="ml-2 flex flex-col md:order-5">
          <div className="flex items-center">
            <h3 className="text-size-4 text-gradient-right font-semibold">
              Comercio
            </h3>
            <img
              className="w-14 h-auto ml-2"
              src="./assets/icon-card.png"
              alt="icono wifi"
            />
          </div>

          <p className="text-size-1 text-left text-gray-800 mt-2">
            Monetiza tus salas de aprendizaje con tus habilidades y
            conocimientos.
          </p>
          <p className="text-size-1 text-left text-gray-800 mt-3">
            Genera nuevas líneas de ingresos, comercializa tus empresas,
            servicios y productos.
          </p>

          <button className="mt-5 text-size-1 px-4 border-4 btn text-blue-custom border-blue-custom hover:border-morado-custom hover:text-morado-custom transition-colors duration-300">
            Comenzar
          </button>
        </div>

        <img
          className="w-full md:order-6"
          src="./assets/example3.png"
          alt="example 3"
        />
      </div>

      {/* FAQ Section */}

      <div className="bg-gradient w-full pt-12 pb-12">
        <h2 className="max-w-4xl mx-auto text-white text-size-4 font-bold leading-tight">
          Preguntas frecuentes
        </h2>

        {/* Question 1 */}

        <div
          className="max-w-3xl w-11/12 lg:w-full p-2 md:p-5 relative mt-12 mx-auto rounded-lg bg-white cursor-pointer"
          onClick={() => onClickFAQ(questionRef[0], 0)}
        >
          <div className="flex items-center justify-start">
            <h3 className="text-size-0 md:text-3xl text-gray-800 ml-1">
              ¿Qué es Nanotecks?
            </h3>
            <img
              className="w-10 md:w-12 h-auto absolute right-1"
              src="./assets/icon-plus.png"
              alt="icono plus"
            />
          </div>
          <div
            ref={questionRef[0]}
            className="hidden mt-4 text-left text-size-0"
          >
            <p className="ml-1">
              Nanotecks es una plataforma de transformación digital para cambiar
              la forma de trabajar con ayuda de la tecnología, ofreciendo
              herramientas digitales y soluciones más simples para todos sus
              usuarios tecnológicos.
            </p>
          </div>
        </div>

        {/* Question 2 */}

        <div
          className="max-w-3xl w-11/12 lg:w-full p-2 md:p-5 relative mt-3 mx-auto rounded-lg bg-white cursor-pointer"
          onClick={() => onClickFAQ(questionRef[1], 1)}
        >
          <div className="flex items-center justify-start">
            <h3 className="text-size-0 md:text-3xl text-gray-800 ml-1">
              ¿Cómo monetizo mi Cuenta?
            </h3>
            <img
              className="w-10 md:w-12 h-auto absolute right-1"
              src="./assets/icon-plus.png"
              alt="icono plus"
            />
          </div>
          <div
            ref={questionRef[1]}
            className="hidden mt-4 text-left text-size-0"
          >
            <p className="ml-1">
              Actualmente, hay dos formas de monetizar tu cuenta:
            </p>
            <p className="ml-1 mt-4">
              Primera forma: Es con la creación de Salas de Nanotecks para
              educar a tus seguidores con contenido prémium de tus
              conocimientos, cobrando con diferentes modelos.
            </p>
            <p className="ml-1 mt-4">
              Segunda forma: Es con la venta y comercialización de servicios o
              productos en el Comercio de Nanotecks.
            </p>
          </div>
        </div>

        {/* Question 3 */}

        <div
          className="max-w-3xl w-11/12 lg:w-full p-2 md:p-5 relative mt-3 mx-auto rounded-lg bg-white cursor-pointer"
          onClick={() => onClickFAQ(questionRef[2], 2)}
        >
          <div className="flex items-center justify-start">
            <h3 className="text-size-0 md:text-3xl text-gray-800 ml-1">
              ¿A quién va dirigido?
            </h3>
            <img
              className="w-10 md:w-12 h-auto absolute right-1"
              src="./assets/icon-plus.png"
              alt="icono plus"
            />
          </div>
          <div
            ref={questionRef[2]}
            className="hidden mt-4 text-left text-size-0"
          >
            <p className="ml-1">
              Nanotecks va dirigido a todos esos usuarios tecnológicos,
              profesionales, freelances, emprendedores y empresarios que desean
              trabajar con ayuda de la tecnología creando una cultura digital.
            </p>
          </div>
        </div>

        {/* Question 4 */}

        <div
          className="max-w-3xl w-11/12 lg:w-full p-2 md:p-5 relative mt-3 mx-auto rounded-lg bg-white cursor-pointer"
          onClick={() => onClickFAQ(questionRef[3], 3)}
        >
          <div className="flex items-center justify-start">
            <h3 className="text-size-0 md:text-3xl text-gray-800 ml-1">
              ¿Qué son las Salas?
            </h3>
            <img
              className="w-10 md:w-12 h-auto absolute right-1"
              src="./assets/icon-plus.png"
              alt="icono plus"
            />
          </div>
          <div
            ref={questionRef[3]}
            className="hidden mt-4 text-left text-size-0"
          >
            <p className="ml-1">
              Las Salas de Nanotecks son espacios muy parecido a un salón de
              clases para educar o aprender:
            </p>
            <p className="ml-1 mt-4">
              Educar: Es la creación de Salas para publicar contenido con tu
              conocimiento gratuito o prémium que puedes monetizar.
            </p>
            <p className="ml-1 mt-4">
              Aprender: Puedes añadir Salas de tu interés y unirte si son libres
              o comprar si son Prémium.
            </p>
          </div>
        </div>

        {/* Question 5 */}

        <div
          className="max-w-3xl w-11/12 lg:w-full p-2 md:p-5 relative mt-3 mx-auto rounded-lg bg-white cursor-pointer"
          onClick={() => onClickFAQ(questionRef[4], 4)}
        >
          <div className="flex items-center justify-start">
            <h3 className="text-size-0 md:text-3xl text-gray-800 ml-1">
              ¿Por qué cambiar la forma de trabajar?
            </h3>
            <img
              className="w-10 md:w-12 h-auto absolute right-1"
              src="./assets/icon-plus.png"
              alt="icono plus"
            />
          </div>
          <div
            ref={questionRef[4]}
            className="hidden mt-4 text-left text-size-0"
          >
            <p className="ml-1">
              Para ser más productivo y tener más libertad con ayuda de la
              tecnología tenemos que cambiar la forma de como trabajamos
              cotidianamente para adaptarnos a los cambios de la transformación
              digital que vivimos hoy en la actualidad y así crear más
              oportunidades para todos.
            </p>
          </div>
        </div>

        {/* Information Email Landing Page */}

        <p className="max-w-4xl mx-auto mt-20 px-4 text-white text-size-0 font-semibold">
          ¿Quieres trabajar desde nanotecks ? Ingresa tu Email para pertenecer a
          la lista VIP.
        </p>

        <div className="w-max mt-8 mx-auto px-1 py-1 rounded-lg bg-white flex">
          <img
            className="w-4 mx-2"
            src="./assets/icon-email.svg"
            alt="icono email"
          />
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-48 sm:w-80 outline-none"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="ml-4 p-2 btn text-white bg-blue-custom hover:opacity-70 transition-opacity"
              type="submit"
              value="Comenzar"
            />
          </form>
        </div>
      </div>

      {/* Footer */}

      <footer className="w-screen bg-white py-4 text-center">
        <p className="text-size-0">© 2022 - Nanotecks</p>
      </footer>
    </div>
  );
}

export default App;
