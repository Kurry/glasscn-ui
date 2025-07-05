import { CheckCircle, Circle, Loader2 } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export interface Task {
  id: string;
  agentId: string;
  name: string;
  status: 'pending' | 'active' | 'completed' | 'error';
  progress: number;
  improvements?: number;
}

const taskListContainer = cva(
  'p-4 md:p-6',
  {
    variants: {
      device: {
        mobile: 'max-h-[200px] overflow-y-auto',
        desktop: 'max-h-[180px] overflow-y-auto',
      }
    },
    defaultVariants: {
      device: 'desktop'
    }
  }
);

export interface TaskListProps {
  tasks: Task[];
  currentAgent: number;
  device?: 'mobile' | 'desktop';
  className?: string;
}

export function TaskList({ 
  tasks, 
  currentAgent, 
  device = 'desktop',
  className 
}: TaskListProps) {
  return (
    <div className={cn(taskListContainer({ device }), className)}>
      <h3 className="font-semibold mb-3 text-sm md:text-base">Enhancement Progress</h3>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              "flex items-center gap-3 p-2 rounded-lg transition-all",
              task.status === 'active' 
                ? "bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800" 
                : task.status === 'completed'
                  ? "bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800"
                  : task.status === 'error'
                    ? "bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800"
                    : "bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            )}
          >
            {/* Status Icon */}
            <div className="flex-shrink-0">
              {task.status === 'completed' ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : task.status === 'active' ? (
                <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
              ) : task.status === 'error' ? (
                <div className="w-5 h-5 text-red-600">❌</div>
              ) : (
                <Circle className="w-5 h-5 text-gray-400" />
              )}
            </div>

            {/* Task Info */}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm md:text-base truncate">{task.name}</p>
              
              {/* Progress for active tasks */}
              {task.status === 'active' && (
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              )}
              
              {/* Improvements count for completed tasks */}
              {task.status === 'completed' && task.improvements && (
                <p className="text-xs text-green-600 dark:text-green-400">
                  {task.improvements} improvements
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}