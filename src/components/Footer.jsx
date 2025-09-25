const Footer = () => {
  return (
    <footer className="bg-marrom w-full text-black pt-6 pb-10 mt-10 shadow-sm flex items-center justify-center min-h-[80px]">
      <div className="w-full flex justify-center items-center">
        <p className="text-xs text-white md:text-sm text-center">
          © {new Date().getFullYear()} Bookshare - Todos os direitos reservados.
          <br />
          Incentivando o hábito de leitura de forma sustentável.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
