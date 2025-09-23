import menina from "../imgs/menina-lendo.webp";

const Home = () => {
  return (
    <div className="bg-bege min-h-[calc(100vh-230px)]">
      <div className="grid md:grid-cols-2 mt-10 md:-mt-30 -mb-50">
        <div className="flex flex-col justify-center items-start px-10 md:px-20 gap-6 z-10 mb-16 md:mb-0">
          <h1 className="text-[50px] md:text-[98px] font-abril text-marrom">
            Bookshare
          </h1>
          <p className="text-sm text-marromText md:text-lg leading-relaxed text">
            Bem-vindo ao desconecta.ai, onde a tranquilidade encontra a
            tecnologia. Inspirados pela natureza, criamos um refúgio digital
            para te ajudar a desacelerar, encontrar clareza e nutrir seu
            bem-estar. Descubra como uma desconexão consciente pode trazer mais
            vida, leveza e significado para o seu dia a dia.
          </p>
        </div>
        <div className="flex justify-center md:justify-end md:mr-20 items-center">
          <img
            src={menina}
            alt="Logo"
            className="w-auto h-full object-contain animate-bounce-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
