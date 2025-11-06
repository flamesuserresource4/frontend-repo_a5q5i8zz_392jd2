import { useState } from 'react';
import { Map, Waypoints, Send, Plus, Minus } from 'lucide-react';

function WaypointRow({ wp, onChange, onRemove }) {
  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      <input
        className="col-span-2 rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
        placeholder="Label (e.g., Bay A)"
        value={wp.label}
        onChange={(e) => onChange({ ...wp, label: e.target.value })}
      />
      <input
        className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
        placeholder="X"
        type="number"
        value={wp.x}
        onChange={(e) => onChange({ ...wp, x: e.target.value })}
      />
      <input
        className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
        placeholder="Y"
        type="number"
        value={wp.y}
        onChange={(e) => onChange({ ...wp, y: e.target.value })}
      />
      <button onClick={onRemove} className="inline-flex items-center justify-center rounded-md bg-neutral-100 hover:bg-neutral-200 transition-colors h-9 w-9">
        <Minus size={16} />
      </button>
    </div>
  );
}

export default function RoutePlanner() {
  const [robot, setRobot] = useState('AMR-001');
  const [waypoints, setWaypoints] = useState([
    { id: 1, label: 'Dock', x: 0, y: 0 },
  ]);

  const addWaypoint = () => {
    const id = Date.now();
    setWaypoints((w) => [...w, { id, label: '', x: 0, y: 0 }]);
  };

  const updateWaypoint = (id, data) => {
    setWaypoints((w) => w.map((i) => (i.id === id ? data : i)));
  };

  const removeWaypoint = (id) => {
    setWaypoints((w) => w.filter((i) => i.id !== id));
  };

  const handleAssign = () => {
    // In a full app this would call the backend; for now we just show an alert.
    alert(`Assigned ${waypoints.length} waypoints to ${robot}.`);
  };

  return (
    <section id="routes" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Map size={20} className="text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Route Planner</h2>
        </div>
        <div className="text-sm text-neutral-500">Simple waypoint assignment</div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Waypoints size={16} /> Waypoints
            </div>
            <button onClick={addWaypoint} className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-black transition-colors">
              <Plus size={16} /> Add
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {waypoints.map((wp) => (
              <WaypointRow
                key={wp.id}
                wp={wp}
                onChange={(data) => updateWaypoint(wp.id, data)}
                onRemove={() => removeWaypoint(wp.id)}
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <label className="text-sm font-medium text-neutral-700">Assign to Robot</label>
          <select
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            value={robot}
            onChange={(e) => setRobot(e.target.value)}
          >
            <option>AMR-001</option>
            <option>AMR-014</option>
            <option>AMR-009</option>
          </select>

          <button onClick={handleAssign} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-black transition-colors">
            <Send size={16} /> Assign Route
          </button>

          <p className="mt-3 text-xs text-neutral-500">
            This is a local demo. In production, assignment triggers a backend API that validates collisions, schedules, and navigation graph constraints.
          </p>
        </div>
      </div>
    </section>
  );
}
