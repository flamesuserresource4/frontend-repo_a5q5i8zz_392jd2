import { CheckCircle2, Clock, Route, MapPin } from 'lucide-react';

const statusStyles = {
  idle: 'bg-neutral-200 text-neutral-700',
  working: 'bg-blue-100 text-blue-700',
  done: 'bg-emerald-100 text-emerald-700',
};

const mockRobots = [
  { id: 'AMR-001', task: 'Material pickup - Bay A', status: 'working', progress: 62, location: 'Aisle 3' },
  { id: 'AMR-014', task: 'Inspection - Line 2', status: 'idle', progress: 0, location: 'Dock' },
  { id: 'AMR-009', task: 'Delivery - Packaging', status: 'done', progress: 100, location: 'Packaging' },
];

export default function RobotTable() {
  return (
    <section id="overview" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-neutral-900">Fleet Activity</h2>
        <div className="text-sm text-neutral-500">{new Date().toLocaleString()}</div>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">Robot</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">Task</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">Progress</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">Location</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 bg-white">
            {mockRobots.map((r) => (
              <tr key={r.id}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-900">{r.id}</td>
                <td className="px-6 py-4 text-sm text-neutral-700">{r.task}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[r.status]}`}>
                    {r.status === 'working' && <Clock size={14} />} 
                    {r.status === 'done' && <CheckCircle2 size={14} />} 
                    {r.status === 'idle' && <Route size={14} />} 
                    {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="h-2 w-40 overflow-hidden rounded bg-neutral-200">
                    <div className="h-full bg-neutral-900" style={{ width: `${r.progress}%` }} />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-neutral-700 flex items-center gap-2">
                  <MapPin size={16} className="text-neutral-400" /> {r.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
