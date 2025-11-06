import { Bot, Map, Activity, Settings } from 'lucide-react';

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 backdrop-blur bg-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
              <Bot size={20} />
            </div>
            <span className="text-white text-lg font-semibold tracking-tight">AMR Control Hub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#overview" className="hover:text-white transition-colors flex items-center gap-2">
              <Activity size={16} /> Overview
            </a>
            <a href="#routes" className="hover:text-white transition-colors flex items-center gap-2">
              <Map size={16} /> Routes
            </a>
            <a href="#settings" className="hover:text-white transition-colors flex items-center gap-2">
              <Settings size={16} /> Settings
            </a>
          </nav>
          <div className="flex items-center">
            <button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors">
              <Bot size={16} /> New Robot
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
