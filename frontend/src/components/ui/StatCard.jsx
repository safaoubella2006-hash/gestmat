function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-3xl border border-[#DDD6CE] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      <p className="text-[#777777] text-sm font-medium">
        {title}
      </p>

      <h2 className="text-5xl font-bold text-[#A67C52] mt-4">
        {value}
      </h2>

    </div>
  );
}

export default StatCard;