import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#F9EDEF] border-r border-[#F1D7DE] p-6 flex flex-col">

      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-4xl font-black text-[#C77D92] tracking-wide">
          GestMat
        </h1>

        <p className="text-sm text-[#9A7E88] mt-2">
          Gestion de matériels
        </p>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-3">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#5E4B56] font-medium hover:bg-[#F6DDE3] hover:text-[#C77D92] transition-all duration-300"
        >
          🏠
          Dashboard
        </Link>

        <Link
          to="/users"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#5E4B56] font-medium hover:bg-[#F6DDE3] hover:text-[#C77D92] transition-all duration-300"
        >
          👤
          Utilisateurs
        </Link>

        <Link
          to="/materiels"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#5E4B56] font-medium hover:bg-[#F6DDE3] hover:text-[#C77D92] transition-all duration-300"
        >
          📦
          Matériels
        </Link>

        <Link
          to="/etablissements"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#5E4B56] font-medium hover:bg-[#F6DDE3] hover:text-[#C77D92] transition-all duration-300"
        >
          🏫
          Établissements
        </Link>

      </nav>

      {/* Bottom */}
      <div className="mt-auto pt-10">

        <Link
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#5E4B56] font-medium hover:bg-[#F6DDE3] hover:text-[#C77D92] transition-all duration-300"
        >
          ⚙️
          Paramètres
        </Link>

        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#E16B8C] font-semibold hover:bg-[#FFE8EE] transition-all duration-300 mt-2"
        >
          🚪
          Déconnexion
        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;