# Dashboard Storytelling: Data with Narrative

## Problem

Traditional dashboards show data without story. Users scan metrics, miss patterns, don't understand impact.

## Solution

Structure dashboard as narrative progression:

1. **Overview**: Snapshot of key metrics ✓
2. **Trends**: What's changing and why ✓
3. **Segments**: Who is experiencing this ✓
4. **Actions**: What to do next ✓

## Implementation Pattern

```jsx
import { motion, AnimatePresence } from 'framer-motion'

export default function StoryDashboard() {
  const [selectedMetric, setSelectedMetric] = useState(null)
  const [timeRange, setTimeRange] = useState('7d')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
      {/* Narrative column */}
      <div className="lg:col-span-8 space-y-8">
        {/* Main visualization */}
        <section className="relative aspect-video rounded-2xl bg-gradient-to-br from-blue-900 to-purple-900 p-8">
          <motion.h2
            className="text-2xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Revenue is trending up 23%
          </motion.h2>
          
          <motion.p
            className="text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Strong performance in enterprise segment driving growth
          </motion.p>

          {/* Animated chart */}
          <ChartCanvas metric={selectedMetric} timeRange={timeRange} />
        </section>

        {/* Supporting story elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StoryCard
            title="Top Performing Region"
            value="North America"
            change="+12%"
            trend="up"
          />
          <StoryCard
            title="Conversion Rate"
            value="4.8%"
            change="+0.6%"
            trend="up"
          />
        </div>
      </div>

      {/* Controls & details */}
      <div className="lg:col-span-4 space-y-6">
        <TimeRangeSelector value={timeRange} onChange={setTimeRange} />
        <ActionRecommendations metric={selectedMetric} />
        <RecentEvents feed={events} />
      </div>
    </div>
  )
}
```

## Story Card Component

```jsx
function StoryCard({ title, value, change, trend }) {
  return (
    <motion.div
      className="rounded-xl border border-slate-200 p-6"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => setSelectedMetric(title)}
      style={{ cursor: 'pointer' }}
    >
      <h3 className="text-sm font-medium text-slate-500">{title}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
    </motion.div>
  )
}
```

## Key Principles

1. **Lead with insight**: Show conclusion first, data supports
2. **Progressive disclosure**: Details appear on interaction
3. **Single focal point**: One main chart, others supportive
4. **Narrative depth**: Column scrolling reveals deeper analysis
5. **Actionability**: Every metric has recommended next step

## Motion Guidelines

- Chart transitions: 0.6s ease-out
- Card hovers: 180ms spring
- Data updates: 400ms staggered
- Tab switches: 0.3s crossfade

## What to Avoid

- KPI grid with 12 metrics (focus paralysis)
- Multiple chart types on primary view
- Real-time refreshes (unless monitoring)
- Precious color palettes (data needs clarity)
- Sparklines without context