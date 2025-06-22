import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SideMenu = ({ is_open, setMenu }) => {
  return (
    <section className={`fixed w-full h-full top-0 left-0 z-40 transition-opacity ${is_open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Fundo escuro */}
      <div className="absolute w-full h-full bg-gray-500 opacity-75"></div>

      {/* Menu lateral */}
      <div
        className={`
          absolute top-0 left-0 h-full w-[80%] bg-white z-50
          transition-transform duration-500 ease-in-out
          ${is_open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <ul className="p-4">
          <li>
            <NavLink to="/" className="text-darkGray2 text-base font-light font-inter hover:underline">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Produtos" className="text-darkGray2 text-base font-light font-inter hover:underline hover:text-darkGray3">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/Produtos" className="text-darkGray2 text-base font-light font-inter hover:underline hover:text-darkGray3">Categorias</NavLink>
          </li>
          <li>
            <NavLink to="/Produtos" className="text-darkGray2 text-base font-light font-inter hover:underline hover:text-darkGray3">Meus Pedidos</NavLink>
          </li>
        </ul>
        <button className="p-2 text-sm" onClick={() => setMenu(false)}>fechar menu</button>
      </div>
    </section>
  );
};
export default SideMenu;
