function RecentMaterials() {
  const materials = [
    {
      id: 1,
      name: "Ordinateur HP",
      category: "Informatique",
      state: "Disponible",
    },
    {
      id: 2,
      name: "Projecteur Epson",
      category: "Audiovisuel",
      state: "En maintenance",
    },
    {
      id: 3,
      name: "Imprimante Canon",
      category: "Bureau",
      state: "Disponible",
    },
    {
      id: 4,
      name: "Scanner HP",
      category: "Informatique",
      state: "Occupé",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 mt-10 p-6">

      <h2 className="text-2xl font-bold text-[#3E2D36] mb-6">
        Derniers matériels
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3 text-gray-500">
              Nom
            </th>

            <th className="text-left py-3 text-gray-500">
              Catégorie
            </th>

            <th className="text-left py-3 text-gray-500">
              État
            </th>

          </tr>

        </thead>

        <tbody>

          {materials.map((item) => (

            <tr
              key={item.id}
              className="border-b hover:bg-pink-50 transition"
            >

              <td className="py-4 font-medium">
                {item.name}
              </td>

              <td>
                {item.category}
              </td>

              <td>

                <span className="bg-pink-100 text-[#B97592] px-3 py-1 rounded-full text-sm">

                  {item.state}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentMaterials;