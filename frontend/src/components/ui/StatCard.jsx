function StatCard({ title, value, color }) {
  return (
    <div
      className="bg-white rounded-3xl p-6 shadow-sm border border-pink-100 hover:shadow-lg transition duration-300"
    >
      <p className="text-gray-500 text-sm mb-2">
        {title}
      </p>

      <h2
        className="text-4xl font-bold"
        style={{ color }}
      >
        {value}
      </h2>
    </div>
  );
}

export default StatCard;