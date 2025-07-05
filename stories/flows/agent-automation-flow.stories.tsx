import { 
  AgentProgressViewer,
  MobileAgentProgress,
  AgentInitializing
} from '@/components/ui/agent-progress-viewer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Meta } from '@storybook/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'Flows/Agent Automation Journey',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

// Complete automation flow
export const Complete_Automation_Flow = {
  name: 'Complete Agent Automation Flow',
  render: () => {
    const [currentState, setCurrentState] = useState('dashboard')
    
    const states = {
      dashboard: 'Dashboard',
      initializing: 'Initializing Agent',
      active: 'Agent Working',
      paused: 'Agent Paused',
      intervention: 'Needs Help',
      completed: 'Completed'
    }
    
    const sampleSteps = [
      { id: '1', name: 'Navigate to job posting', status: 'completed' as const, duration: 15 },
      { id: '2', name: 'Click "Apply Now"', status: 'completed' as const, duration: 8 },
      { id: '3', name: 'Login with saved credentials', status: 'completed' as const, duration: 12 },
      { id: '4', name: 'Fill application form', status: 'active' as const, duration: 107 },
      { id: '5', name: 'Upload resume', status: 'pending' as const },
      { id: '6', name: 'Answer screening questions', status: 'pending' as const },
      { id: '7', name: 'Submit application', status: 'pending' as const },
    ]
    
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">AI Agent Automation Flow</h1>
            <div className="flex flex-wrap gap-2">
              {Object.entries(states).map(([key, label]) => (
                <Button
                  key={key}
                  size="sm"
                  variant={currentState === key ? "default" : "outline"}
                  onClick={() => setCurrentState(key)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {currentState === 'dashboard' && (
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Job Search Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">47</div>
                      <div className="text-sm text-gray-600">Applications</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">8</div>
                      <div className="text-sm text-gray-600">Responses</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">3</div>
                      <div className="text-sm text-gray-600">Interviews</div>
                    </div>
                  </div>
                  
                  <div className="text-center py-8">
                    <Button 
                      size="lg" 
                      color="primary"
                      onClick={() => setCurrentState('initializing')}
                    >
                      🤖 Start AI Auto-Apply
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Apply to 50+ jobs automatically while you sleep
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {currentState === 'initializing' && (
            <div className="max-w-4xl mx-auto">
              <AgentInitializing />
              <div className="text-center mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentState('active')}
                >
                  Simulate Complete Initialization
                </Button>
              </div>
            </div>
          )}
          
          {currentState === 'active' && (
            <div className="max-w-7xl mx-auto">
              <AgentProgressViewer
                jobTitle="Software Engineer"
                company="Google"
                agentState={{
                  status: 'active',
                  currentAction: 'Entering work experience from resume...',
                  currentStep: 4,
                  totalSteps: 7,
                  timeElapsed: 142,
                  timeRemaining: 78,
                }}
                taskSteps={sampleSteps}
                livePreviewUrl="careers.google.com"
                onPause={() => setCurrentState('paused')}
                onStop={() => setCurrentState('dashboard')}
                onBack={() => setCurrentState('dashboard')}
              />
            </div>
          )}
          
          {currentState === 'paused' && (
            <div className="max-w-7xl mx-auto">
              <AgentProgressViewer
                jobTitle="Software Engineer"
                company="Google"
                agentState={{
                  status: 'paused',
                  currentAction: 'Paused by user at step 4 of 7',
                  currentStep: 4,
                  totalSteps: 7,
                  timeElapsed: 142,
                }}
                taskSteps={sampleSteps}
                onResume={() => setCurrentState('active')}
                onStop={() => setCurrentState('dashboard')}
                onBack={() => setCurrentState('dashboard')}
              />
            </div>
          )}
          
          {currentState === 'intervention' && (
            <div className="max-w-7xl mx-auto">
              <AgentProgressViewer
                jobTitle="Software Engineer"
                company="Google"
                agentState={{
                  status: 'intervention-needed',
                  currentStep: 4,
                  totalSteps: 7,
                  timeElapsed: 142,
                  interventionMessage: 'CAPTCHA detected - please solve to continue with the application',
                }}
                taskSteps={sampleSteps}
                onTakeControl={() => setCurrentState('active')}
                onBack={() => setCurrentState('dashboard')}
              />
            </div>
          )}
          
          {currentState === 'completed' && (
            <div className="max-w-7xl mx-auto">
              <AgentProgressViewer
                jobTitle="Software Engineer"
                company="Google"
                agentState={{
                  status: 'completed',
                  currentStep: 7,
                  totalSteps: 7,
                  timeElapsed: 222,
                }}
                taskSteps={sampleSteps.map(step => ({ ...step, status: 'completed' as const }))}
                onBack={() => setCurrentState('dashboard')}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

// Real-time live simulation
export const Live_Agent_Simulation = {
  name: 'Live Agent Simulation',
  render: () => {
    const [isRunning, setIsRunning] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [agentStatus, setAgentStatus] = useState<'initializing' | 'active' | 'completed'>('initializing')
    
    const steps = [
      'Navigate to job posting',
      'Click "Apply Now"',
      'Login with saved credentials',
      'Fill application form',
      'Upload resume',
      'Answer screening questions',
      'Submit application'
    ]
    
    React.useEffect(() => {
      if (!isRunning) return
      
      const timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
        
        // Simulate initialization
        if (agentStatus === 'initializing' && timeElapsed >= 3) {
          setAgentStatus('active')
          setCurrentStep(1)
        }
        
        // Simulate step progression
        if (agentStatus === 'active' && timeElapsed > 5 && timeElapsed % 10 === 0 && currentStep < steps.length) {
          setCurrentStep(prev => {
            const next = prev + 1
            if (next >= steps.length) {
              setAgentStatus('completed')
              setIsRunning(false)
            }
            return next
          })
        }
      }, 1000)
      
      return () => clearInterval(timer)
    }, [isRunning, timeElapsed, currentStep, agentStatus, steps.length])
    
    const taskSteps = steps.map((step, index) => ({
      id: String(index + 1),
      name: step,
      status: index < currentStep ? 'completed' as const 
             : index === currentStep ? 'active' as const 
             : 'pending' as const,
      duration: index < currentStep ? Math.floor(Math.random() * 30) + 10 : undefined
    }))
    
    const handleStart = () => {
      setIsRunning(true)
      setCurrentStep(0)
      setTimeElapsed(0)
      setAgentStatus('initializing')
    }
    
    const handleReset = () => {
      setIsRunning(false)
      setCurrentStep(0)
      setTimeElapsed(0)
      setAgentStatus('initializing')
    }
    
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Live Agent Simulation</h1>
            <div className="flex gap-2">
              <Button onClick={handleStart} disabled={isRunning} color="primary">
                Start Agent
              </Button>
              <Button onClick={handleReset} variant="outline">
                Reset
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {agentStatus === 'initializing' && <AgentInitializing />}
          
          {agentStatus !== 'initializing' && (
            <AgentProgressViewer
              jobTitle="Software Engineer"
              company="Google"
              agentState={{
                status: agentStatus,
                currentAction: currentStep < steps.length ? `Working on: ${steps[currentStep]}` : 'Application completed!',
                currentStep: currentStep,
                totalSteps: steps.length,
                timeElapsed: timeElapsed,
                timeRemaining: Math.max(0, 90 - timeElapsed),
              }}
              taskSteps={taskSteps}
              livePreviewUrl="careers.google.com"
              onPause={() => setIsRunning(false)}
              onResume={() => setIsRunning(true)}
              onStop={handleReset}
            />
          )}
        </div>
      </div>
    )
  }
}

// Multi-agent simulation
export const Multi_Agent_Dashboard = {
  name: 'Multi-Agent Dashboard',
  render: () => {
    const agents = [
      {
        id: '1',
        company: 'Google',
        jobTitle: 'Software Engineer',
        status: 'active' as const,
        progress: 65,
        timeElapsed: 120
      },
      {
        id: '2',
        company: 'Meta',
        jobTitle: 'Frontend Developer',
        status: 'completed' as const,
        progress: 100,
        timeElapsed: 180
      },
      {
        id: '3',
        company: 'Apple',
        jobTitle: 'iOS Engineer',
        status: 'paused' as const,
        progress: 45,
        timeElapsed: 90
      },
      {
        id: '4',
        company: 'Netflix',
        jobTitle: 'Backend Engineer',
        status: 'error' as const,
        progress: 30,
        timeElapsed: 60
      }
    ]
    
    const getStatusColor = (status: string) => {
      switch (status) {
        case 'active': return 'bg-green-100 text-green-700 border-green-300'
        case 'completed': return 'bg-blue-100 text-blue-700 border-blue-300'
        case 'paused': return 'bg-yellow-100 text-yellow-700 border-yellow-300'
        case 'error': return 'bg-red-100 text-red-700 border-red-300'
        default: return 'bg-gray-100 text-gray-700 border-gray-300'
      }
    }
    
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Agent Dashboard</h1>
            <p className="text-gray-600">Monitor multiple job application agents</p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Active Agents</h2>
              <div className="grid gap-4">
                {agents.map((agent) => (
                  <div key={agent.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          🤖
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {agent.company} - {agent.jobTitle}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Running for {Math.floor(agent.timeElapsed / 60)}m {agent.timeElapsed % 60}s
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{agent.progress}%</div>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full transition-all"
                            style={{ width: `${agent.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      <Badge className={getStatusColor(agent.status)}>
                        {agent.status}
                      </Badge>
                      
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Applications Sent</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">In Progress</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completed</span>
                      <span className="font-medium">21</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Errors</span>
                      <span className="font-medium text-red-600">2</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
                    <p className="text-gray-600">Applications completed successfully</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Average Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">3.2m</div>
                    <p className="text-gray-600">Per application</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}