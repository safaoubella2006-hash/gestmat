import DashboardLayout from "../../components/layouts/DashboardLayout";
import StatCard from "../../components/ui/StatCard";

function Dashboard() {
  return (
    <DashboardLayout>

      <h1 className="text-5xl font-bold text-[#3E2D36]">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Bienvenue sur GestMat 👋
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Matériels"
          value="245"
          color="#C98CA7"
        />

        <StatCard
          title="Utilisateurs"
          value="18"
          color="#B97592"
        />

        <StatCard
          title="Établissements"
          value="12"
          color="#D7A6B9"
        />

        <StatCard
          title="Alertes"
          value="3"
          color="#E27D60"
        />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;