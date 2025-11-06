import HeaderNav from './components/HeaderNav';
import Hero3D from './components/Hero3D';
import StatsCards from './components/StatsCards';
import RobotTable from './components/RobotTable';
import RoutePlanner from './components/RoutePlanner';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-200">
      <HeaderNav />
      <Hero3D />
      <StatsCards />
      <RobotTable />
      <RoutePlanner />
      <footer id="settings" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} AMR Control Hub — Manage fleet, routes, and logs.
      </footer>
    </div>
  );
}
