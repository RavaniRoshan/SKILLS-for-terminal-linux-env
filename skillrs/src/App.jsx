import { useState, useMemo } from 'react'
import '@fontsource/inter'
import '@fontsource/jetbrains-mono'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import CategorySection from './components/CategorySection'
import SkillCard from './components/SkillCard'
import SkillModal from './components/SkillModal'
import { skills, categories } from './data/skills'

export default function App() {
  const [activeTab, setActiveTab] = useState('ALL SKILLS')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [favorites, setFavorites] = useState([])

  const filteredSkills = useMemo(() => {
    let result = skills
    if (activeTab === 'MY FAVORITES') {
      result = skills.filter(s => favorites.includes(s.id))
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        s => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
      )
    }
    return result
  }, [searchQuery, activeTab, favorites])

  const groupedSkills = useMemo(() => {
    const map = {}
    filteredSkills.forEach(s => {
      if (!map[s.category]) map[s.category] = []
      map[s.category].push(s)
    })
    return categories.map(c => ({ category: c, items: map[c] || [] }))
  }, [filteredSkills])

  const toggleFavorite = id => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const handleView = skill => setSelectedSkill(skill)

  const handleDownload = skill => {
    const content = `# ${skill.name}\n\n> ${skill.description}\n\n---\n\n${skill.content}\n`
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${skill.id}.skill.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const favoriteSkills = filteredSkills.filter(s => favorites.includes(s.id))

  return (
    <div className="min-h-screen bg-jet-black text-white selection:bg-cyan/30 selection:text-white">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <HeroBanner />

      <main className="max-w-5xl mx-auto px-6 pb-20">
        {activeTab === 'ALL SKILLS' && (
          <div className="space-y-3">
            {filteredSkills.map(skill => (
              <SkillCard
                key={skill.id}
                skill={skill}
                onView={handleView}
                onDownload={handleDownload}
                isFavorite={favorites.includes(skill.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}

        {activeTab === 'BY CATEGORY' && (
          groupedSkills.map(({ category, items }) =>
            items.length > 0 ? (
              <CategorySection
                key={category}
                category={category}
                skills={items}
                onView={handleView}
                onDownload={handleDownload}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            ) : null
          )
        )}

        {activeTab === 'MY FAVORITES' && (
          favoriteSkills.length > 0 ? (
            <div className="space-y-3">
              {favoriteSkills.map(skill => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  onView={handleView}
                  onDownload={handleDownload}
                  isFavorite={true}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/30 text-lg">No favorites yet. Click the heart icon on any skill to add it.</p>
            </div>
          )
        )}

        {filteredSkills.length === 0 && activeTab !== 'MY FAVORITES' && (
          <div className="text-center py-20">
            <p className="text-white/30 text-lg">No skills match your search.</p>
          </div>
        )}
      </main>

      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </div>
  )
}