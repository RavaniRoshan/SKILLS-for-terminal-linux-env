import { motion } from 'framer-motion'

// Claude (Anthropic) - Stylized "A" / hexagon shape
const ClaudeLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M14 2L25 8V21L14 27L3 21V8L14 2Z"
      stroke="#D97706"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M14 6L21 9V20L14 23L7 20V9L14 6Z"
      stroke="#D97706"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M14 10L18 12V18L14 20L10 18V12L14 10Z"
      fill="#D97706"
    />
  </svg>
)

// ChatGPT (OpenAI) - Swirling spiral / S shape
const ChatGPTLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M14 4C8 4 4 9 4 14C4 19 8 24 14 24C19.5 24 23.5 19.5 23.5 14C23.5 8.5 19.5 4 14 4ZM14 22C9.5 22 6 18.5 6 14C6 9.5 9.5 6 14 6C18.5 6 22 9.5 22 14C22 18.5 18.5 22 14 22Z"
      fill="#10A37F"
    />
    <path
      d="M14 7C10 7 7 11 7 14C7 17 10 21 14 21C18 21 21 17 21 14C21 11 18 7 14 7ZM14 19C11 19 9 16 9 14C9 12 11 10 14 10C17 10 19 12 19 14C19 16 17 19 14 19Z"
      fill="#0D9488"
    />
    <path
      d="M14 10C12 10 10 12 10 14C10 16 12 18 14 18C16 18 18 16 18 14C18 12 16 10 14 10Z"
      fill="#F0FDFA"
    />
  </svg>
)

// GitHub Copilot - Robot / Wing symbol
const CopilotLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="12" stroke="#0078D4" strokeWidth="2" fill="none" />
    <path
      d="M8 14C8 10 10 8 14 8C18 8 20 10 20 14"
      stroke="#0078D4"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="10" cy="13" r="1.5" fill="#0078D4" />
    <circle cx="18" cy="13" r="1.5" fill="#0078D4" />
    <path
      d="M11 16C11 17 12 17.5 13 17.5"
      stroke="#0078D4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15 17C15 17 16 17.5 17 17.5"
      stroke="#0078D4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

// Gemini (Google) - Multi-pointed star/gem
const GeminiLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M14 2L15.5 9L23 10L17 15L18 22L14 18.5L10 22L11 15L5 10L12.5 9L14 2Z"
      fill="#4285F4"
      stroke="#34A853"
      strokeWidth="1"
    />
    <path
      d="M14 6L15.8 10L20.5 10.7L17 14L18 19L14 16.2L10 19L11 14L7.5 10.7L12.2 10L14 6Z"
      fill="#FBBC04"
    />
    <path
      d="M14 9L14.6 11.5L17.3 12.2L15 14L15.7 16.5L14 15.6L12.3 16.5L13 14L10.7 12.2L13.4 11.5L14 9Z"
      fill="#EA4335"
    />
  </svg>
)

// Perplexity - Question mark in circle / magnifying glass
const PerplexityLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle
      cx="14"
      cy="14"
      r="10"
      stroke="#1F2937"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9 11C9 8.79 10.79 7 13 7C15.21 7 17 8.79 17 11C17 13.21 15.21 15 13 15C12.45 15 11.44 14.85 10.65 14.63L12.59 16.57L13.41 15.75L16.75 12.41C17.16 12 17.5 11.44 17.61 10.79C18.17 8.8 16.8 7.17 14.86 7.03C14.85 7.82 14.83 8.58 14.83 9.33C14.83 11.5 13.33 13.33 10.67 13.33C8.71 13.33 7 11.62 7 9.67C7 7.71 8.71 6 10.67 6C13.82 6 16.33 8.51 16.33 11.67C16.33 14.83 13.82 17.33 10.67 17.33C8.06 17.33 5.87 15.36 5.5 13L4.5 13L5 12C5 9.24 7.24 7 10 7"
      stroke="#1F2937"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="12" cy="11" r="1.5" fill="#1F2937" />
  </svg>
)

// Mistral - Wind swirl / abstract M
const MistralLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M6 22C6 18 9 14 16 14C22 14 25 20 25 22C25 24 22 26 16 26C10 26 6 24 6 22Z"
      fill="#FF6B35"
    />
    <path
      d="M10 18C9 16 10 12 13 11C16 10 19 13 20 16C21 19 16 22 13 22"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7 21C7 23 9 24 13 24C17 24 19 23 19 21"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
)

const agents = [
  { name: 'Claude', component: ClaudeLogo },
  { name: 'ChatGPT', component: ChatGPTLogo },
  { name: 'Copilot', component: CopilotLogo },
  { name: 'Gemini', component: GeminiLogo },
  { name: 'Perplexity', component: PerplexityLogo },
  { name: 'Mistral', component: MistralLogo },
]

export default function AgentCarousel() {
  return (
    <div className="flex items-center gap-8 overflow-hidden relative">
      {agents.map((agent, i) => (
        <motion.div
          key={agent.name}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: 0,
          }}
          transition={{
            duration: 3.5,
            delay: i * 0.6,
            repeat: Infinity,
            repeatDelay: agents.length * 0.6,
            ease: 'easeInOut',
          }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5">
            <agent.component />
          </div>
          <span className="text-sm font-semibold text-white whitespace-nowrap tracking-tight">
            {agent.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}