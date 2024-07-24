import DollarIcon from "./DollarIcon";
import Theme from "./Theme";


export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Inicio</a></li>
            <li>
              <a>Tus gastos</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Ayuda</a></li>
            <Theme />
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><DollarIcon />Your Finance</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Inicio</a></li>
          <li>
            <details>
              <summary>Tus gastos</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Ayuda</a></li>
          <Theme />
        </ul>
      </div>
      <div className="navbar-end mr-5">
        <a className="btn">Iniciar Sesión</a>
      </div>
      {/* <Theme /> */}
    </div>
  )
}
