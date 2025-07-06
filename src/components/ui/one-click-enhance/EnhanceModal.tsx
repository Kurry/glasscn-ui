import { useState, useEffect } from 'react';
import { X, Check, Download } from '@phosphor-icons/react';
import { AgentCarousel } from './AgentCarousel';
import { TaskList, type Task } from './TaskList';
import { cva } from 'class-variance-authority';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const modalOverlay = cva(
  'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm',
  {
    variants: {
      device: {
        mobile: 'items-end p-0',
        desktop: 'items-center p-4',
      }
    },
    defaultVariants: {
      device: 'desktop'
    }
  }
);

const modalContent = cva(
  'bg-white dark:bg-gray-900 w-full max-w-4xl overflow-hidden shadow-2xl',
  {
    variants: {
      device: {
        mobile: 'rounded-t-3xl max-h-[90vh]',
        desktop: 'rounded-2xl max-h-[85vh]',
      }
    },
    defaultVariants: {
      device: 'desktop'
    }
  }
);

export interface EnhanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeId: string;
  onComplete?: (enhancedResumeId: string) => void;
  className?: string;
}

export function EnhanceModal({ 
  isOpen, 
  onClose, 
  resumeId, 
  onComplete,
  className 
}: EnhanceModalProps) {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('desktop');
  const [currentAgent, setCurrentAgent] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [enhancementSummary, setEnhancementSummary] = useState({
    score: { before: 65, after: 92 },
    improvements: 47,
    duration: '43 seconds'
  });

  // Detect device type
  useEffect(() => {
    const checkDevice = () => {
      setDevice(window.innerWidth < 768 ? 'mobile' : 'desktop');
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Initialize tasks
  useEffect(() => {
    if (isOpen) {
      const initialTasks: Task[] = [
        {
          id: '1',
          agentId: 'parser',
          name: 'Extracting resume content',
          status: 'active',
          progress: 10
        },
        {
          id: '2',
          agentId: 'grammar',
          name: 'Checking grammar and style',
          status: 'pending',
          progress: 0
        },
        {
          id: '3',
          agentId: 'optimizer',
          name: 'Enhancing achievements',
          status: 'pending',
          progress: 0
        },
        {
          id: '4',
          agentId: 'keyword',
          name: 'Adding industry keywords',
          status: 'pending',
          progress: 0
        },
        {
          id: '5',
          agentId: 'formatter',
          name: 'Improving format and structure',
          status: 'pending',
          progress: 0
        }
      ];
      setTasks(initialTasks);
      setCurrentAgent(0);
      setIsComplete(false);

      // Simulate task progression
      const startSimulation = () => {
        let currentTaskIndex = 0;

        const updateTask = () => {
          if (currentTaskIndex >= initialTasks.length) {
            setIsComplete(true);
            return;
          }

          const taskId = initialTasks[currentTaskIndex].id;
          const agentId = initialTasks[currentTaskIndex].agentId;

          // Progress the current task
          setTasks(prev => {
            return prev.map(task => {
              if (task.id === taskId) {
                const newProgress = task.progress + 10;
                
                if (newProgress >= 100) {
                  // Task completed, move to next
                  setCurrentAgent(currentTaskIndex + 1 < initialTasks.length ? currentTaskIndex + 1 : currentTaskIndex);
                  currentTaskIndex++;
                  
                  return {
                    ...task,
                    status: 'completed',
                    progress: 100,
                    improvements: Math.floor(Math.random() * 12) + 5 // Random number of improvements
                  };
                }
                
                return {
                  ...task,
                  progress: newProgress,
                  status: 'active'
                };
              } else if (currentTaskIndex + 1 < initialTasks.length && 
                        task.id === initialTasks[currentTaskIndex + 1].id) {
                // Prepare the next task
                return {
                  ...task,
                  status: task.progress >= 100 ? 'completed' : 'pending'
                };
              }
              
              return task;
            });
          });
          
          // Continue updating if not complete
          if (currentTaskIndex < initialTasks.length) {
            setTimeout(updateTask, Math.random() * 300 + 200);
          }
        };

        // Start updating tasks
        setTimeout(updateTask, 500);
      };

      startSimulation();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={cn(modalOverlay({ device }), className)}>
      <div className={cn(modalContent({ device }))}>
        {isComplete ? (
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Enhancement Complete!</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Your resume has been optimized in {enhancementSummary.duration}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-8">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
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
              
              <div className="space-y-3 w-full max-w-sm">
                <Button 
                  size="lg" 
                  className="w-full" 
                  onClick={() => onComplete?.(resumeId + '-enhanced')}
                >
                  View Enhanced Resume
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={onClose}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download as PDF
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">AI Enhancement in Progress</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Multiple AI agents are improving your resume</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col h-[calc(100%-80px)]">
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
              <div className="border-t bg-gray-50 dark:bg-gray-800/50">
                <TaskList 
                  tasks={tasks}
                  device={device}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}