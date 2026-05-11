import { motion } from 'framer-motion'
import SkillCard from './SkillCard'

export default function CategorySection({ category, skills, onView, onDownload, favorites, onToggleFavorite }) {
  return (
    <section className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-5"
      >
        <h3 className="text-lg font-bold text-white">{category}</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        <span className="text-[11px] font-mono text-white/30">{skills.length} skills</span>
      </motion.div>

      <div className="space-y-3">
        {skills.map(skill => (
          <SkillCard
            key={skill.id}
            skill={skill}
            onView={onView}
            onDownload={onDownload}
            isFavorite={favorites?.includes(skill.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  )
}