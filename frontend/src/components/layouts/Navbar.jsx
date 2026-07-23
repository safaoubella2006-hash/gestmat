function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-[#F1D7DE] px-8 flex items-center justify-between">

      {/* Left */}
      <div>
        <h2 className="text-3xl font-bold text-[#5E4B56]">
          Dashboard
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-72 px-5 py-2 rounded-full bg-[#FFF6F8] border border-[#F3D9E0] outline-none focus:ring-2 focus:ring-[#E8B8C7] transition"
        />

        {/* Notification */}
        <button className="w-11 h-11 rounded-full bg-[#FFF6F8] hover:bg-[#F6DDE3] transition flex items-center justify-center text-xl">
          🔔
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-[#E8B8C7] text-white font-bold flex items-center justify-center">
            S
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-[#5E4B56]">
              Bonjour, Safae 👋
            </span>

            <span className="text-sm text-gray-500">
              Administratrice
            </span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;