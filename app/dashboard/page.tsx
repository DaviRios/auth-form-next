
import { verifySession } from "../_lib/session";

export default async function Dashboard() {
  const session = await verifySession();
  const role = session?.role;

  if (role === "admin") {
    return <AdminDashboard />;
  }

  return <UserDashboard />;
}

function AdminDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-red-600">Admin Dashboard</h1>
      <p>Área exclusiva para administradores.</p>
    </div>
  );
}

function UserDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-blue-600">User Dashboard</h1>
      <p>Bem-vindo ao seu painel de usuário.</p>
    </div>
  );
}
