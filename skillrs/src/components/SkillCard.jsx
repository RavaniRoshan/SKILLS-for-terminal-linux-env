import { Download, Eye, Heart, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'
import { DynamicIcon, StarRating } from './Icon'

export default function SkillCard({ skill, onView, onDownload, isFavorite, onToggleFavorite }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-cyan/20 hover:bg-white/[0.04] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0">
          <DynamicIcon name={skill.icon} className="text-cyan" size={18} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-white text-sm truncate">{skill.name}</h4>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/40 border border-white/10 shrink-0">
              v{skill.version}
            </span>
          </div>
          <p className="text-xs text-white/50 leading-relaxed line-clamp-2">
            {skill.description || 'No description available.'}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {onToggleFavorite && (
            <button
              onClick={() => onToggleFavorite(skill.id)}
              className={`p-1.5 rounded-lg border transition-all duration-200 ${
                isFavorite
                  ? 'text-red-400 border-red-400/30 bg-red-400/10'
                  : 'text-white/20 border-transparent hover:text-white/40 hover:border-white/10'
              }`}
            >
              <Heart size={14} className={isFavorite ? 'fill-red-400' : ''} />
            </button>
          )}
          <button
            onClick={() => onView(skill)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-lg border border-white/10 text-white/60 hover:text-cyan hover:border-cyan/40 transition-all duration-200"
          >
            <Eye size={14} />
            View .skill
          </button>
          <button
            onClick={() => onDownload(skill)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-cyan/10 text-cyan border border-cyan/20 hover:bg-cyan/20 hover:border-cyan/40 transition-all duration-200"
          >
            <Download size={14} />
            Download
          </button>
          <StarRating rating={skill.stars} />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
        <Terminal size={12} className="text-white/30 shrink-0" />
        <code className="text-[11px] font-mono text-white/40" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
          {skill.installCommand}
        </code>
      </div>
    </motion.div>
  )
}