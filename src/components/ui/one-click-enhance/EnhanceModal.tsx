import { useState, useEffect, useMemo, useCallback } from 'react'
import { X, Check, Download } from '@phosphor-icons/react'
import { AgentCarousel } from './AgentCarousel'
import { TaskList, type Task } from './TaskList'
import { cva } from 'class-variance-authority'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Enhanced modal overlay with compound variants
const modalOverlay = cva('fixed inset-0 z-50 flex bg-black/50 backdrop-blur-sm', {
  variants: {
    device: {
      mobile: 'items-end p-0',
      desktop: 'items-center justify-center p-4',
    },
    state: {
      processing: 'items-center justify-center',
      complete: 'items-center justify-center',
    },
  },
  compoundVariants: [
    {
      device: 'mobile',
      state: 'processing',
      className: 'items-end p-0',
    },
    {
      device: 'mobile',
      state: 'complete',
      className: 'items-center justify-center p-4',
    },
    {
      device: 'desktop',
      state: ['processing', 'complete'],
      className: 'items-center justify-center p-4',
    },
  ],
  defaultVariants: {
    device: 'desktop',
    state: 'processing',
  },
})

// Enhanced modal content with compound variants
const modalContent = cva('bg-white dark:bg-gray-900 w-full overflow-hidden shadow-2xl', {
  variants: {
    device: {
      mobile: 'rounded-t-3xl max-h-[90vh]',
      desktop: 'rounded-2xl max-h-[85vh] max-w-4xl',
    },
    state: {
      processing: '',
      complete: '',
    },
  },
  compoundVariants: [
    {
      device: 'mobile',
      state: 'complete',
      className: 'rounded-2xl max-h-[80vh] mx-4',
    },
    {
      device: 'desktop',
      state: 'complete',
      className: 'max-w-2xl',
    },
  ],
  defaultVariants: {
    device: 'desktop',
    state: 'processing',
  },
})

// Modal header styling
const modalHeader = cva('flex items-center justify-between border-b', {
  variants: {
    device: {
      mobile: 'p-4',
      desktop: 'p-6',
    },
    state: {
      processing: '',
      complete: 'border-b-0 mb-6',
    },
  },
  compoundVariants: [
    {
      device: 'mobile',
      state: 'complete',
      className: 'p-4 border-b-0 mb-4',
    },
    {
      device: 'desktop',
      state: 'complete',
      className: 'p-6 border-b-0 mb-6',
    },
  ],
  defaultVariants: {
    device: 'desktop',
    state: 'processing',
  },
})

// Modal title styling
const modalTitle = cva('font-bold', {
  variants: {
    device: {
      mobile: 'text-xl',
      desktop: 'text-2xl',
    },
    state: {
      processing: '',
      complete: 'text-2xl',
    },
  },
  compoundVariants: [
    {
      device: 'mobile',
      state: 'processing',
      className: 'text-xl',
    },
    {
      device: 'desktop',
      state: 'processing',
      className: 'text-2xl',
    },
  ],
  defaultVariants: {
    device: 'desktop',
    state: 'processing',
  },
})

// Close button styling
const closeButton = cva('p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800', {
  variants: {
    state: {
      processing: 'rounded-lg',
      complete: 'rounded-full',
    },
  },
  defaultVariants: {
    state: 'processing',
  },
})

// Complete state container
const completeContainer = cva('flex flex-col', {
  variants: {
    device: {
      mobile: 'p-4 h-full',
      desktop: 'p-6 h-full',
    },
  },
  defaultVariants: {
    device: 'desktop',
  },
})

// Complete state content
const completeContent = cva('flex-1 flex flex-col items-center justify-center text-center space-y-8', {
  variants: {
    device: {
      mobile: 'p-4',
      desktop: 'p-8',
    },
  },
  defaultVariants: {
    device: 'desktop',
  },
})

// Success icon container
const successIcon = cva('w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center', {
  variants: {
    device: {
      mobile: 'w-20 h-20',
      desktop: 'w-24 h-24',
    },
  },
  defaultVariants: {
    device: 'desktop',
  },
})

// Action buttons container
const actionButtons = cva('space-y-3 w-full', {
  variants: {
    device: {
      mobile: 'max-w-full',
      desktop: 'max-w-sm',
    },
  },
  defaultVariants: {
    device: 'desktop',
  },
})

// Main content container (processing state)
const mainContent = cva('flex flex-col', {
  variants: {
    device: {
      mobile: 'h-[calc(100%-72px)]',
      desktop: 'h-[calc(100%-80px)]',
    },
  },
  defaultVariants: {
    device: 'desktop',
  },
})

// Task list container
const taskListContainer = cva('border-t bg-gray-50 dark:bg-gray-800/50', {
  variants: {
    device: {
      mobile: '',
      desktop: '',
    },
  },
  defaultVariants: {
    device: 'desktop',
  },
})

export interface EnhanceModalProps {
  isOpen: boolean
  onClose: () => void
  resumeId: string
  onComplete?: (enhancedResumeId: string) => void
  className?: string
}

export function EnhanceModal({ isOpen, onClose, resumeId, onComplete, className }: EnhanceModalProps) {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('desktop')
  const [currentAgent, setCurrentAgent] = useState(0)
  const [tasks, setTasks] = useState<Task[]>([])
  const [isComplete, setIsComplete] = useState(false)

  // Memoize static enhancement summary
  const enhancementSummary = useMemo(
    () => ({
      score: { before: 65, after: 92 },
      improvements: 47,
      duration: '43 seconds',
    }),
    [],
  )

  // Memoize modal state calculation
  const modalState = useMemo(() => (isComplete ? 'complete' : 'processing'), [isComplete])

  // Detect device type
  useEffect(() => {
    const checkDevice = () => {
      setDevice(window.innerWidth < 768 ? 'mobile' : 'desktop')
    }
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Memoize initial tasks to prevent recreation on every render
  const initialTasks = useMemo(
    (): Task[] => [
      {
        id: '1',
        agentId: 'parser',
        name: 'Extracting resume content',
        status: 'active',
        progress: 10,
      },
      {
        id: '2',
        agentId: 'grammar',
        name: 'Checking grammar and style',
        status: 'pending',
        progress: 0,
      },
      {
        id: '3',
        agentId: 'optimizer',
        name: 'Enhancing achievements',
        status: 'pending',
        progress: 0,
      },
      {
        id: '4',
        agentId: 'keyword',
        name: 'Adding industry keywords',
        status: 'pending',
        progress: 0,
      },
      {
        id: '5',
        agentId: 'formatter',
        name: 'Improving format and structure',
        status: 'pending',
        progress: 0,
      },
    ],
    [],
  )

  // Memoize the complete handler to prevent unnecessary re-renders
  const handleComplete = useCallback(() => {
    onComplete?.(resumeId + '-enhanced')
  }, [onComplete, resumeId])

  // Initialize tasks
  useEffect(() => {
    if (isOpen) {
      setTasks([...initialTasks])
      setCurrentAgent(0)
      setIsComplete(false)

      // Simulate task progression
      const startSimulation = () => {
        let currentTaskIndex = 0

        const updateTask = () => {
          if (currentTaskIndex >= initialTasks.length) {
            setIsComplete(true)
            return
          }

          const taskId = initialTasks[currentTaskIndex].id

          // Progress the current task
          setTasks((prev) => {
            return prev.map((task) => {
              if (task.id === taskId) {
                const newProgress = task.progress + 10

                if (newProgress >= 100) {
                  // Task completed, move to next
                  setCurrentAgent(currentTaskIndex + 1 < initialTasks.length ? currentTaskIndex + 1 : currentTaskIndex)
                  currentTaskIndex++

                  return {
                    ...task,
                    status: 'completed',
                    progress: 100,
                    improvements: Math.floor(Math.random() * 12) + 5, // Random number of improvements
                  }
                }

                return {
                  ...task,
                  progress: newProgress,
                  status: 'active',
                }
              } else if (
                currentTaskIndex + 1 < initialTasks.length &&
                task.id === initialTasks[currentTaskIndex + 1].id
              ) {
                // Prepare the next task
                return {
                  ...task,
                  status: task.progress >= 100 ? 'completed' : 'pending',
                }
              }

              return task
            })
          })

          // Continue updating if not complete
          if (currentTaskIndex < initialTasks.length) {
            setTimeout(updateTask, Math.random() * 300 + 200)
          }
        }

        // Start updating tasks
        setTimeout(updateTask, 500)
      }

      startSimulation()
    }
  }, [isOpen, initialTasks])

  if (!isOpen) return null

  return (
    <div className={cn(modalOverlay({ device, state: modalState }), className)}>
      <div className={cn(modalContent({ device, state: modalState }))}>
        {isComplete ? (
          <div className={cn(completeContainer({ device }))}>
            <div className={cn(modalHeader({ device, state: modalState }))}>
              <div>
                <h2 className={cn(modalTitle({ device, state: modalState }))}>Enhancement Complete!</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Your resume has been optimized in {enhancementSummary.duration}
                </p>
              </div>
              <button onClick={onClose} className={cn(closeButton({ state: modalState }))} aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={cn(completeContent({ device }))}>
              <div className={cn(successIcon({ device }))}>
                <Check className="w-12 h-12 text-green-600" />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Resume Score Improved</h3>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-gray-500 line-through">{enhancementSummary.score.before}</span>
                  <span className="text-xl">→</span>
                  <span className="text-2xl font-bold text-green-600">{enhancementSummary.score.after}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {enhancementSummary.improvements} improvements made across your resume
                </p>
              </div>

              <div className={cn(actionButtons({ device }))}>
                <Button size="lg" className="w-full" onClick={handleComplete}>
                  View Enhanced Resume
                </Button>

                <Button variant="outline" size="lg" className="w-full" onClick={onClose}>
                  <Download className="w-4 h-4 mr-2" />
                  Download as PDF
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className={cn(modalHeader({ device, state: modalState }))}>
              <div>
                <h2 className={cn(modalTitle({ device, state: modalState }))}>AI Enhancement in Progress</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Multiple AI agents are improving your resume
                </p>
              </div>
              <button onClick={onClose} className={cn(closeButton({ state: modalState }))} aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content */}
            <div className={cn(mainContent({ device }))}>
              {/* Agent Carousel */}
              <div className="flex-1 overflow-hidden">
                <AgentCarousel
                  currentAgent={currentAgent}
                  onAgentChange={setCurrentAgent}
                  tasks={tasks}
                  device={device}
                />
              </div>

              {/* Task List */}
              <div className={cn(taskListContainer({ device }))}>
                <TaskList tasks={tasks} device={device} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
