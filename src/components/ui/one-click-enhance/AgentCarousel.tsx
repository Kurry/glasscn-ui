import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Robot, Sparkle, CheckCircle, CircleNotch, FileText, Lightning, Clock } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import type { Task } from './TaskList'

interface Agent {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  description: string
}

// CVA patterns for comprehensive agent styling
const agentIndicator = cva('h-2 rounded-full transition-all', {
  variants: {
    state: {
      current: 'w-8 bg-blue-600',
      completed: 'w-2 bg-green-500',
      pending: 'w-2 bg-gray-300 dark:bg-gray-600',
    },
  },
})

const agentAvatar = cva('w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-6', {
  variants: {
    status: {
      completed: 'bg-green-100 dark:bg-green-900/30',
      error: 'bg-red-100 dark:bg-red-900/30',
      active: 'bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30',
      pending: 'bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30',
    },
  },
})

const agentIcon = cva('', {
  variants: {
    size: {
      mobile: 'w-12 h-12',
      desktop: 'w-16 h-16',
    },
    color: {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      pink: 'text-pink-600',
    },
    status: {
      active: 'animate-spin',
      completed: 'text-green-600',
      error: 'text-red-600',
      pending: '',
    },
  },
  compoundVariants: [
    {
      size: 'mobile',
      status: 'active',
      className: 'w-12 h-12',
    },
    {
      size: 'desktop',
      status: 'active',
      className: 'w-16 h-16',
    },
    {
      size: 'mobile',
      status: 'completed',
      className: 'w-12 h-12',
    },
    {
      size: 'desktop',
      status: 'completed',
      className: 'w-16 h-16',
    },
  ],
})

const agentTitle = cva('font-bold mb-2', {
  variants: {
    size: {
      mobile: 'text-xl',
      desktop: 'text-2xl',
    },
  },
})

const agentContainer = cva('flex-1 flex flex-col items-center justify-center', {
  variants: {
    size: {
      mobile: 'px-4',
      desktop: 'px-8',
    },
  },
})

const progressBar = cva('h-full rounded-full', {
  variants: {
    status: {
      active: 'bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600',
      pending: 'bg-gray-300 dark:bg-gray-600',
      completed: 'bg-green-500 dark:bg-green-600',
      error: 'bg-red-500 dark:bg-red-600',
    },
  },
})

const enhancementCard = cva('mt-8 p-4 rounded-xl max-w-lg w-full', {
  variants: {
    theme: {
      light: 'bg-gray-50 dark:bg-gray-800/50',
    },
  },
})

const enhancementText = cva('text-sm', {
  variants: {
    type: {
      old: 'text-red-500 dark:text-red-400 line-through',
      new: 'text-green-600 dark:text-green-400 ml-2',
      label: 'text-gray-600 dark:text-gray-400 mb-2',
    },
  },
})

const agents: Agent[] = [
  {
    id: 'parser',
    name: 'Parser Agent',
    icon: <Robot />,
    color: 'blue',
    description: 'Analyzing resume structure and extracting content',
  },
  {
    id: 'grammar',
    name: 'Grammar Agent',
    icon: <FileText />,
    color: 'green',
    description: 'Checking grammar, spelling, and style consistency',
  },
  {
    id: 'optimizer',
    name: 'Optimizer Agent',
    icon: <Lightning />,
    color: 'purple',
    description: 'Enhancing action verbs and quantifying achievements',
  },
  {
    id: 'keyword',
    name: 'Keyword Agent',
    icon: <Sparkle />,
    color: 'orange',
    description: 'Adding industry keywords for ATS optimization',
  },
  {
    id: 'formatter',
    name: 'Format Agent',
    icon: <Clock />,
    color: 'pink',
    description: 'Ensuring consistent formatting and structure',
  },
]

export interface AgentCarouselProps {
  currentAgent: number
  onAgentChange: (index: number) => void
  tasks: Task[]
  device?: 'mobile' | 'desktop'
  className?: string
}

// Helper functions
const getIndicatorState = (index: number, currentAgent: number): 'current' | 'completed' | 'pending' => {
  if (index === currentAgent) return 'current'
  if (index < currentAgent) return 'completed'
  return 'pending'
}

const getAgentStatus = (task?: Task): 'active' | 'completed' | 'error' | 'pending' => {
  return task?.status || 'pending'
}

const getDeviceSize = (device?: 'mobile' | 'desktop'): 'mobile' | 'desktop' => {
  return device || 'desktop'
}

const renderAgentIcon = (agent: Agent, task: Task | undefined, size: 'mobile' | 'desktop') => {
  const status = getAgentStatus(task)
  const iconProps = {
    className: agentIcon({ size, color: agent.color as any, status: status === 'pending' ? 'pending' : undefined }),
  }

  if (status === 'completed') {
    return <CheckCircle className={agentIcon({ size, status: 'completed' })} />
  }

  if (status === 'error') {
    return <div className={agentIcon({ size, status: 'error' })}>❌</div>
  }

  if (status === 'active') {
    return <CircleNotch className={agentIcon({ size, status: 'active' })} />
  }

  // Clone the icon with proper sizing
  return React.cloneElement(agent.icon as React.ReactElement, iconProps)
}

export function AgentCarousel({ currentAgent, onAgentChange, tasks, device, className }: AgentCarouselProps) {
  const agent = agents[currentAgent]
  const task = tasks.find((t) => t.agentId === agent.id)
  const deviceSize = getDeviceSize(device)
  const agentStatus = getAgentStatus(task)

  return (
    <div className={cn('h-full flex flex-col', className)}>
      {/* Agent Indicators */}
      <div className="flex justify-center gap-2 p-4">
        {agents.map((_, index) => (
          <button
            key={index}
            onClick={() => onAgentChange(index)}
            className={agentIndicator({ state: getIndicatorState(index, currentAgent) })}
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
          className={agentContainer({ size: deviceSize })}
        >
          {/* Agent Avatar */}
          <div className={agentAvatar({ status: agentStatus })}>{renderAgentIcon(agent, task, deviceSize)}</div>

          {/* Agent Info */}
          <h3 className={agentTitle({ size: deviceSize })}>{agent.name}</h3>
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
                  className={progressBar({ status: 'active' })}
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
              className={enhancementCard({ theme: 'light' })}
            >
              <p className={enhancementText({ type: 'label' })}>Live Enhancement:</p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className={enhancementText({ type: 'old' })}>Managed team</span>
                  <span className={enhancementText({ type: 'new' })}>→ Led cross-functional team of 12</span>
                </div>
                {task.progress > 60 && (
                  <div className="text-sm">
                    <span className={enhancementText({ type: 'old' })}>Improved system</span>
                    <span className={enhancementText({ type: 'new' })}>→ Optimized system performance by 35%</span>
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
