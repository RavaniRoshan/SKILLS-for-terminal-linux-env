const tabs = ['ALL SKILLS', 'BY CATEGORY', 'MY FAVORITES']

export default function NavTabs({ activeTab, onTabChange }) {
  return (
    <nav className="flex items-center gap-1">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-lg transition-all duration-200 ${
            activeTab === tab
              ? 'bg-cyan/10 text-cyan shadow-[0_0_12px_rgba(0,255,255,0.15)]'
              : 'text-white/50 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}