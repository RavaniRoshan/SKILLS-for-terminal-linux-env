import {
  Bot, BrainCircuit, BarChart3, Search, Cloud, Zap, Code2, CreditCard, Database,
  Paintbrush, Globe, Server, Rocket, CloudSun, Bug, ListChecks, TestTube, Cog,
  Layers, Palette, HeartHandshake, Gauge, Play, Package, Sparkles, Video,
  Terminal, Clapperboard, Camera, FileText, FileOutput, FileSpreadsheet,
  Presentation, ScrollText, GitBranch, BookOpen, FileCode, Star
} from 'lucide-react'

const iconMap = {
  Bot, BrainCircuit, BarChart3, Search, Cloud, Zap, Code2, CreditCard, Database,
  Paintbrush, Globe, Server, Rocket, CloudSun, Bug, ListChecks, TestTube, Cog,
  Layers, Palette, HeartHandshake, Gauge, Play, Package, Sparkles, Video,
  Terminal, Clapperboard, Camera, FileText, FileOutput, FileSpreadsheet,
  Presentation, ScrollText, GitBranch, BookOpen, FileCode, Star
}

export function DynamicIcon({ name, className, size = 18 }) {
  const Icon = iconMap[name] || FileCode
  return <Icon className={className} size={size} />
}

export function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={size}
          className={i <= rating ? 'text-cyan fill-cyan' : 'text-white/20'}
        />
      ))}
    </div>
  )
}