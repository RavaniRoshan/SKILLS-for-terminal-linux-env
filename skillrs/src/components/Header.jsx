import NavTabs from './NavTabs'
import SearchBar from './SearchBar'

export default function Header({ activeTab, onTabChange, searchQuery, onSearchChange }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-jet-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" stroke="#00FFFF" strokeWidth="2" fill="none" />
              <text x="18" y="22" textAnchor="middle" fill="#00FFFF" fontSize="14" fontWeight="bold" fontFamily="monospace">S</text>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              skill<span className="text-cyan">.rs</span>
            </h1>
            <p className="text-[10px] text-white/40 tracking-wide leading-tight hidden md:block">
              Your personal library of <span className="text-cyan/60">.skill.md</span> files for AI Agents.
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavTabs activeTab={activeTab} onTabChange={onTabChange} />
          <SearchBar value={searchQuery} onChange={onSearchChange} />
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-green-500/20 bg-green-500/5">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
            </span>
            <span className="text-[10px] font-mono text-green-400/80 tracking-wider">REPO: MySkillsRepo</span>
          </div>
        </div>
      </div>
    </header>
  )
}