import {
  FiBell,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-[#DDD6CE] px-8 flex items-center justify-between">

      {/* Left */}
      <div>
        <h2 className="text-3xl font-bold text-[#2F2F2F]">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Bienvenue sur GestMat
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Rechercher..."
            className="pl-11 pr-5 py-3 w-80 rounded-full border border-[#DDD6CE] bg-[#F8F6F2] outline-none focus:ring-2 focus:ring-[#A67C52]"
          />

        </div>

        {/* Notification */}
        <button className="relative w-12 h-12 rounded-full bg-[#F8F6F2] flex items-center justify-center hover:bg-[#ECE6DF] transition">

          <FiBell size={20} />

          <span className="absolute top-3 right-3 w-2 h-2 bg-[#A67C52] rounded-full"></span>

        </button>

        {/* Avatar */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-12 h-12 rounded-full bg-[#A67C52] text-white flex items-center justify-center text-lg font-bold">
            S
          </div>

          <div>

            <h4 className="font-semibold text-[#2F2F2F]">
              Safae
            </h4>

            <p className="text-sm text-gray-500">
              Administratrice
            </p>

          </div>

          <FiChevronDown className="text-gray-500" />

        </div>

      </div>

    </header>
  );
}

export default Navbar;