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
            É um aplicativo de troca de livros que tem como propósito incentivar
            o hábito da leitura, promover o consumo consciente e criar uma
            comunidade unida entre leitores. A plataforma possibilita que os
            usuários descubram novos títulos e se conectem com pessoas que
            compartilham interesses literários semelhantes.
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
