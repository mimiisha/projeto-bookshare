import grupo from "../imgs/grupo-bookshare.jpeg";

const AboutMe = () => {
  return (
    <div className="bg-backgound text-principalText min-h-[calc(100vh-200px)] flex items-center justify-center px-10 md:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center">
        <div className="flex justify-center md:justify-start py-10">
          <img
            src={grupo}
            alt="Foto do grupo"
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="md:col-span-2 py-10 flex items-center text-marromText">
          <p className="text-lg md:text-2xl">
            Sou estudante de Design de Mídias Digitais, pela FATEC, e atuo com
            desenvolvimento front-end, unindo tecnologia e criatividade para
            criar soluções funcionais, acessíveis e centradas no usuário. Tenho
            experiência prática com React.js, JavaScript, TypeScript, Styled
            Components, integração com APIs e criação de componentes
            reutilizáveis.
            <br />
            <br />
            Também já atuei em projetos completos — do protótipo no Figma à
            implementação — sempre buscando unir UX/UI, organização e empatia
            pelo usuário.
            <br />
            <br />
            Gosto de aprender, colaborar com pessoas e transformar ideias em
            experiências digitais de verdade. Se quiser conversar ou criar algo
            juntos, estou por aqui! :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
