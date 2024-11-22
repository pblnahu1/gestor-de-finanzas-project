
// algunas cosas las pongo a modo de ejemplo
// pero en un momento van a cambiar, solo están
// para dar a entender de cómo se vería con los datos de verdad....

import { useEffect, useState } from "react"

export default function PageDashboard() {

  const [user, setUser] = useState({
    name: 'Pablo Torrez',
    role: 'Student',
    profilePicture: 'https://github.com/pblnahu1.png'
  });

  const [menuItems, setMenuItems] = useState([
    { icon: "fa-chart-simple", label: "Dashboard", link: "/dashboard" },
    { icon: "fa-wallet", label: "Wallet", link: "/wallet" },
    { icon: "fa-coins", label: "Transactions", link: "/transactions" },
    { icon: "fa-chart-line", label: "Revenue analytics", link: "/analytics" },
    { icon: "fa-magnifying-glass", label: "Search", link: "/search" }
  ]);

  useEffect(() => {
    document.title = 'Dashboard';

    // Simulando una carga de datos (ej. desde una API)
    const fetchedUserData = {
      name: 'Pablo Torrez',
      role: 'Student',
      profilePicture: 'https://github.com/pblnahu1.png'
    };

    const fetchedMenuItems = [
      { icon: "fa-chart-simple", label: "Dashboard", link: "/overview" },
      { icon: "fa-wallet", label: "Wallet", link: "/my-wallet" },
      { icon: "fa-coins", label: "Transactions", link: "/transactions" },
      { icon: "fa-chart-line", label: "Revenue Analytics", link: "/analytics" },
      { icon: "fa-magnifying-glass", label: "Search", link: "/search" }
    ];

    setUser(fetchedUserData);
    setMenuItems(fetchedMenuItems);

  }, []);

  return (
    <div className="drawer lg:drawer-open w-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="fixed top-0 left-0 h-full menu bg-base-200 text-base-content min-h-full">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

        <div className="flex justify-center items-center flex-col">
          <img
            src={user.profilePicture}
            alt="Foto de Perfil"
            className="rounded-full w-20 h-20"
          />
          <h1
            className="text-xl font-bold"
          >
            {user.name}
          </h1>
          <span
            className="text-lg text-base-400"
          >
            {user.role}
          </span>
        </div>

        <ul className="w-60 p-4">
          {
            menuItems.map((item, index) => (
              <li key={index}><a className="py-4" href={item.link}><i className={`fa-solid ${item.icon}`}></i>{item.label}</a></li>
            ))
          }
        </ul>

        <div className="flex justify-center items-center absolute bottom-10">
          <ul className="w-60 p-4">
            <li><a className="py-4"><i className="fa-solid fa-gear"></i>Ajustes</a></li>
            <li><a className="py-4" onClick={() => window.location.href = '/'}><i className="fa-solid fa-right-from-bracket"></i>Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
