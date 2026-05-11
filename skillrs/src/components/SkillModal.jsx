import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function SkillModal({ skill, onClose }) {
  const [copied, setCopied] = useState(false)

  if (!skill) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(skill.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        />
        <motion.div
          className="relative w-full max-w-3xl max-h-[85vh] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white">{skill.name}</h3>
              <p className="text-xs text-white/40 font-mono">{skill.id}/SKILL.md</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg hover:bg-white/10 text-white/50 hover:text-cyan transition-colors"
                title="Copy content"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(85vh - 64px)' }}>
            <pre className="text-sm text-white/80 leading-relaxed whitespace-pre-wrap font-mono" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
              {skill.content}
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}