import {
  FiHome,
  FiUsers,
  FiBox,
  FiGrid,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiHome size={20} />,
    },
    {
      name: "Utilisateurs",
      path: "/users",
      icon: <FiUsers size={20} />,
    },
    {
      name: "Matériels",
      path: "/materiels",
      icon: <FiBox size={20} />,
    },
    {
      name: "Établissements",
      path: "/etablissements",
      icon: <FiGrid size={20} />,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-[#ECE6DF] border-r border-[#DDD6CE] flex flex-col">

      {/* Logo */}
      <div className="px-8 py-8 border-b border-[#DDD6CE]">
        <h1 className="text-3xl font-extrabold text-[#A67C52] tracking-wide">
          GestMat
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Gestion des matériels
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-6 px-4">

        {menuItems.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-5 py-4 rounded-2xl mb-2 transition-all duration-300

            ${
              location.pathname === item.path
                ? "bg-[#A67C52] text-white shadow-md"
                : "text-[#3B3B3B] hover:bg-white"
            }`}
          >

            {item.icon}

            <span className="font-medium">
              {item.name}
            </span>

          </Link>

        ))}

      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-[#DDD6CE]">

        <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[#3B3B3B] hover:bg-white transition">

          <FiSettings size={20} />

          Paramètres

        </button>

        <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-red-500 hover:bg-white transition mt-2">

          <FiLogOut size={20} />

          Déconnexion

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;