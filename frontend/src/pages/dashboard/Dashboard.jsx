import DashboardLayout from "../../components/layouts/DashboardLayout";
import StatCard from "../../components/ui/StatCard";
import RecentMaterials from "../../components/ui/RecentMaterials";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#2F2F2F]">
          Bonjour, Safae 👋
        </h1>

        <p className="text-[#6B6B6B] mt-2 text-lg">
          Bienvenue sur votre espace de gestion GestMat.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Matériels"
          value="245"
        />

        <StatCard
          title="Utilisateurs"
          value="18"
        />

        <StatCard
          title="Établissements"
          value="12"
        />

        <StatCard
          title="Alertes"
          value="3"
        />

      </div>

      {/* Recent Materials */}
      <RecentMaterials />

    </DashboardLayout>
  );
}

export default Dashboard;