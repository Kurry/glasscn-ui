import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Sparkles, CheckCircle2, Loader2, FileText, Zap, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Task } from './TaskList'

interface Agent {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  description: string
}

const agents: Agent[] = [
  {
    id: 'parser',
    name: 'Parser Agent',
    icon: <Bot className="w-12 h-12 md:w-16 md:h-16" />,
    color: 'blue',
    description: 'Analyzing resume structure and extracting content',
  },
  {
    id: 'grammar',
    name: 'Grammar Agent',
    icon: <FileText className="w-12 h-12 md:w-16 md:h-16" />,
    color: 'green',
    description: 'Checking grammar, spelling, and style consistency',
  },
  {
    id: 'optimizer',
    name: 'Optimizer Agent',
    icon: <Zap className="w-12 h-12 md:w-16 md:h-16" />,
    color: 'purple',
    description: 'Enhancing action verbs and quantifying achievements',
  },
  {
    id: 'keyword',
    name: 'Keyword Agent',
    icon: <Sparkles className="w-12 h-12 md:w-16 md:h-16" />,
    color: 'orange',
    description: 'Adding industry keywords for ATS optimization',
  },
  {
    id: 'formatter',
    name: 'Format Agent',
    icon: <Clock className="w-12 h-12 md:w-16 md:h-16" />,
    color: 'pink',
    description: 'Ensuring consistent formatting and structure',
  },
]

export interface AgentCarouselProps {
  currentAgent: number
  onAgentChange: (index: number) => void
  tasks: Task[]
  className?: string
}

export function AgentCarousel({ currentAgent, onAgentChange, tasks, className }: AgentCarouselProps) {
  const agent = agents[currentAgent]
  const task = tasks.find((t) => t.agentId === agent.id)

  const getAgentColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-600'
      case 'green':
        return 'text-green-600'
      case 'purple':
        return 'text-purple-600'
      case 'orange':
        return 'text-orange-600'
      case 'pink':
        return 'text-pink-600'
      default:
        return 'text-blue-600'
    }
  }

  return (
    <div className={cn('h-full flex flex-col', className)}>
      {/* Agent Indicators */}
      <div className="flex justify-center gap-2 p-4">
        {agents.map((_, index) => (
          <button
            key={index}
            onClick={() => onAgentChange(index)}
            className={cn(
              'h-2 rounded-full transition-all',
              index === currentAgent
                ? 'w-8 bg-blue-600'
                : index < currentAgent
                  ? 'w-2 bg-green-500'
                  : 'w-2 bg-gray-300 dark:bg-gray-600',
            )}
            aria-label={`Go to agent ${index + 1}`}
          />
        ))}
      </div>

      {/* Agent Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={agent.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col items-center justify-center px-4 md:px-8"
        >
          {/* Agent Avatar */}
          <div
            className={cn(
              'w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-6',
              task?.status === 'completed'
                ? 'bg-green-100 dark:bg-green-900/30'
                : task?.status === 'error'
                  ? 'bg-red-100 dark:bg-red-900/30'
                  : 'bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30',
            )}
          >
            {task?.status === 'completed' ? (
              <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-green-600" />
            ) : task?.status === 'error' ? (
              <div className="w-12 h-12 md:w-16 md:h-16 text-red-600 flex items-center justify-center">❌</div>
            ) : task?.status === 'active' ? (
              <Loader2 className={cn('w-12 h-12 md:w-16 md:h-16 animate-spin', getAgentColorClass(agent.color))} />
            ) : (
              <div className={cn('w-12 h-12 md:w-16 md:h-16', getAgentColorClass(agent.color))}>{agent.icon}</div>
            )}
          </div>

          {/* Agent Info */}
          <h3 className="text-xl md:text-2xl font-bold mb-2">{agent.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6 max-w-md">{agent.description}</p>

          {/* Progress Visualization */}
          {task?.status === 'active' && (
            <div className="w-full max-w-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Processing...</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{task.progress}%</span>
              </div>
              <motion.div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${task.progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          )}

          {/* Sample Enhancement */}
          {task?.status === 'active' && task.progress > 30 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl max-w-lg w-full"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Live Enhancement:</p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="text-red-500 dark:text-red-400 line-through">Managed team</span>
                  <span className="text-green-600 dark:text-green-400 ml-2">→ Led cross-functional team of 12</span>
                </div>
                {task.progress > 60 && (
                  <div className="text-sm">
                    <span className="text-red-500 dark:text-red-400 line-through">Improved system</span>
                    <span className="text-green-600 dark:text-green-400 ml-2">
                      → Optimized system performance by 35%
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
