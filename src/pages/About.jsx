import grupo from "../imgs/grupo-bookshare.jpeg";
import logo from "../imgs/logo-bookshare.png";

const AboutMe = () => {
  return (
    <div className="bg-backgound text-principalText min-h-[calc(100vh-200px)] flex items-center justify-center px-10 md:px-20 flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center">
        <div className="flex justify-center md:justify-start py-10">
          <img
            src={grupo}
            alt="Foto do grupo"
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="md:col-span-2 pt-0 pb-10 md:py-10 flex items-center text-marromText">
          <p className="text-lg md:text-2xl">
            Projeto desenvolvido por estudantes do curso de Design de Mídias
            Digitais, pela Fatec Carapicuíba.
            <br />
            <br />
            Beatriz Lafranco, Janaina Rosa, Jayne Matias, Misha e Sara Honda.
            <br />
            <br />
            Acreditamos no poder transformador da leitura e queremos torná-la
            acessível a todos por meio do Bookshare, para que cada novo livro se
            torne uma experiência única na vida dos leitores.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center">
        <div className="md:col-span-2 pt-0 pb-10 md:py-10 flex items-center text-marromText order-2 md:order-1">
          <p className="text-lg md:text-2xl">
            Projeto desenvolvido para obtenção de notas nas disciplinas de
            Administração e Marketing Dital, do curso de Design de Mídias
            Digitais.
          </p>
        </div>
        <div className="flex justify-center md:justify-end py-10 order-1 md:order-2">
          <img
            src={logo}
            alt="Foto do grupo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
