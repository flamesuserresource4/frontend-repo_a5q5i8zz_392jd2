import { Activity, Route, MapPin, Radar } from 'lucide-react';

export default function StatsCards() {
  const stats = [
    { label: 'Active Robots', value: 12, icon: Activity },
    { label: 'Routes Today', value: 47, icon: Route },
    { label: 'Waypoints Traversed', value: '3.2k', icon: MapPin },
    { label: 'Utilization', value: '86%', icon: Radar },
  ];

  return (
    <section className="-mt-16 relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-xl border border-white/20 bg-neutral-900 text-white p-4 shadow-xl/10">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-300">{label}</span>
              <Icon size={18} className="text-neutral-400" />
            </div>
            <div className="mt-2 text-2xl font-semibold">{value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
