import { CheckCircle, Circle, CircleNotch } from '@phosphor-icons/react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export interface Task {
  id: string
  agentId: string
  name: string
  status: 'pending' | 'active' | 'completed' | 'error'
  progress: number
  improvements?: number
}

// CVA patterns for status-based styling
const taskListContainer = cva('p-4 md:p-6', {
  variants: {
    device: {
      mobile: 'max-h-[200px] overflow-y-auto',
      desktop: 'max-h-[180px] overflow-y-auto',
    },
  },
  defaultVariants: {
    device: 'desktop',
  },
})

const taskItem = cva('flex items-center gap-3 p-2 rounded-lg transition-all', {
  variants: {
    status: {
      pending: 'bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700',
      active: 'bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800',
      completed: 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800',
      error: 'bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800',
    },
  },
})

const taskIcon = cva('w-5 h-5', {
  variants: {
    status: {
      pending: 'text-gray-400',
      active: 'text-blue-600 animate-spin',
      completed: 'text-green-600',
      error: 'text-red-600',
    },
  },
})

const taskProgressBar = cva('w-full h-1.5 rounded-full mt-1 overflow-hidden', {
  variants: {
    status: {
      active: 'bg-gray-200 dark:bg-gray-700',
      pending: 'bg-gray-200 dark:bg-gray-700',
      completed: 'bg-gray-200 dark:bg-gray-700',
      error: 'bg-gray-200 dark:bg-gray-700',
    },
  },
})

const taskProgressFill = cva('h-full rounded-full', {
  variants: {
    status: {
      active: 'bg-blue-600 dark:bg-blue-500',
      pending: 'bg-gray-400 dark:bg-gray-600',
      completed: 'bg-green-600 dark:bg-green-500',
      error: 'bg-red-600 dark:bg-red-500',
    },
  },
})

const taskImprovementsText = cva('text-xs', {
  variants: {
    status: {
      completed: 'text-green-600 dark:text-green-400',
      pending: 'text-gray-500 dark:text-gray-400',
      active: 'text-blue-600 dark:text-blue-400',
      error: 'text-red-600 dark:text-red-400',
    },
  },
})

const taskTitleText = cva('font-medium text-sm md:text-base truncate', {
  variants: {
    status: {
      pending: 'text-gray-700 dark:text-gray-300',
      active: 'text-blue-900 dark:text-blue-100',
      completed: 'text-green-900 dark:text-green-100',
      error: 'text-red-900 dark:text-red-100',
    },
  },
})

export interface TaskListProps {
  tasks: Task[]
  currentAgent?: number
  device?: 'mobile' | 'desktop'
  className?: string
}

// Helper function to render status icon
const renderStatusIcon = (status: Task['status']) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className={taskIcon({ status })} />
    case 'active':
      return <CircleNotch className={taskIcon({ status })} />
    case 'error':
      return <div className={taskIcon({ status })}>❌</div>
    default:
      return <Circle className={taskIcon({ status })} />
  }
}

export function TaskList({ tasks, device = 'desktop', className }: TaskListProps) {
  return (
    <div className={cn(taskListContainer({ device }), className)}>
      <h3 className="font-semibold mb-3 text-sm md:text-base">Enhancement Progress</h3>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className={taskItem({ status: task.status })}>
            {/* Status Icon */}
            <div className="flex-shrink-0">{renderStatusIcon(task.status)}</div>

            {/* Task Info */}
            <div className="flex-1 min-w-0">
              <p className={taskTitleText({ status: task.status })}>{task.name}</p>

              {/* Progress for active tasks */}
              {task.status === 'active' && (
                <div className={taskProgressBar({ status: task.status })}>
                  <div className={taskProgressFill({ status: task.status })} style={{ width: `${task.progress}%` }} />
                </div>
              )}

              {/* Improvements count for completed tasks */}
              {task.status === 'completed' && task.improvements && (
                <p className={taskImprovementsText({ status: task.status })}>{task.improvements} improvements</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
