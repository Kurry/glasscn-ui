import { 
  AgentProgressViewer,
  MobileAgentProgress,
  AgentInitializing
} from '@/components/ui/agent-progress-viewer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'UI/Agent Progress States',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

const baseTaskSteps = [
  { id: '1', name: 'Navigate to job posting', status: 'completed' as const, duration: 15 },
  { id: '2', name: 'Click "Apply Now"', status: 'completed' as const, duration: 8 },
  { id: '3', name: 'Login with saved credentials', status: 'completed' as const, duration: 12 },
  { id: '4', name: 'Fill application form', status: 'active' as const, duration: 107 },
  { id: '5', name: 'Upload resume', status: 'pending' as const },
  { id: '6', name: 'Answer screening questions', status: 'pending' as const },
  { id: '7', name: 'Submit application', status: 'pending' as const },
]

// Individual state demonstrations
export const State_Initializing = {
  name: 'State: Initializing',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Agent Initializing</h2>
        <p className="text-gray-600">Setting up browser environment and preparing for automation</p>
      </div>
      <AgentInitializing />
    </div>
  )
}

export const State_Active = {
  name: 'State: Active',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Agent Active</h2>
        <p className="text-gray-600">AI agent is actively working on the job application</p>
      </div>
      <div className="max-w-4xl mx-auto">
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
          taskSteps={baseTaskSteps}
          livePreviewUrl="careers.google.com"
          isMinimized={false}
        />
      </div>
    </div>
  )
}

export const State_Paused = {
  name: 'State: Paused',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Agent Paused</h2>
        <p className="text-gray-600">User has paused the automation process</p>
      </div>
      <div className="max-w-4xl mx-auto">
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
          taskSteps={baseTaskSteps}
          livePreviewUrl="careers.google.com"
          isMinimized={false}
        />
      </div>
    </div>
  )
}

export const State_Error = {
  name: 'State: Error',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Agent Error</h2>
        <p className="text-gray-600">An error occurred during automation that requires attention</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <AgentProgressViewer
          jobTitle="Software Engineer"
          company="Google"
          agentState={{
            status: 'error',
            currentStep: 4,
            totalSteps: 7,
            timeElapsed: 142,
            error: 'Network connection lost while submitting form. Please check your internet connection and try again.',
          }}
          taskSteps={baseTaskSteps.map(step => 
            step.id === '4' ? { ...step, status: 'error' as const } : step
          )}
          livePreviewUrl="careers.google.com"
          isMinimized={false}
        />
      </div>
    </div>
  )
}

export const State_Intervention_Needed = {
  name: 'State: Intervention Needed',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Intervention Needed</h2>
        <p className="text-gray-600">Agent needs human help to continue (e.g., CAPTCHA)</p>
      </div>
      <div className="max-w-4xl mx-auto">
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
          taskSteps={baseTaskSteps}
          livePreviewUrl="careers.google.com"
          isMinimized={false}
        />
      </div>
    </div>
  )
}

export const State_Completed = {
  name: 'State: Completed',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Application Completed</h2>
        <p className="text-gray-600">Job application successfully submitted</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <AgentProgressViewer
          jobTitle="Software Engineer"
          company="Google"
          agentState={{
            status: 'completed',
            currentStep: 7,
            totalSteps: 7,
            timeElapsed: 222,
          }}
          taskSteps={baseTaskSteps.map(step => ({ ...step, status: 'completed' as const }))}
          livePreviewUrl="careers.google.com"
          isMinimized={false}
        />
      </div>
    </div>
  )
}

export const State_Minimized_Widget = {
  name: 'State: Minimized Widget',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen relative">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Minimized Progress Widget</h2>
        <p className="text-gray-600">Compact corner widget for ongoing monitoring</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard View</CardTitle>
          </CardHeader>
          <CardContent className="h-96 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-center text-gray-500 pt-32">
              <p>Your dashboard content...</p>
              <p className="text-sm mt-2">Agent running in background (see bottom right)</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Minimized widget positioned absolutely */}
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
        taskSteps={baseTaskSteps}
        isMinimized={true}
        onToggleMinimize={() => console.log('Toggle minimize')}
      />
    </div>
  )
}

// Mobile states
export const Mobile_States = {
  name: 'Mobile States',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Mobile Agent Progress</h2>
        <p className="text-gray-600">Optimized for mobile devices</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-lg font-semibold mb-4">Active State</h3>
          <div className="max-w-sm mx-auto border rounded-lg overflow-hidden">
            <MobileAgentProgress
              jobTitle="Software Engineer"
              company="Google"
              agentState={{
                status: 'active',
                currentStep: 4,
                totalSteps: 7,
                timeElapsed: 142,
                timeRemaining: 78,
              }}
              taskSteps={baseTaskSteps}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Paused State</h3>
          <div className="max-w-sm mx-auto border rounded-lg overflow-hidden">
            <MobileAgentProgress
              jobTitle="Software Engineer"
              company="Google"
              agentState={{
                status: 'paused',
                currentStep: 4,
                totalSteps: 7,
                timeElapsed: 142,
              }}
              taskSteps={baseTaskSteps}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Completed State</h3>
          <div className="max-w-sm mx-auto border rounded-lg overflow-hidden">
            <MobileAgentProgress
              jobTitle="Software Engineer"
              company="Google"
              agentState={{
                status: 'completed',
                currentStep: 7,
                totalSteps: 7,
                timeElapsed: 222,
              }}
              taskSteps={baseTaskSteps.map(step => ({ ...step, status: 'completed' as const }))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Comparison view
export const Desktop_vs_Mobile = {
  name: 'Desktop vs Mobile Comparison',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Desktop vs Mobile Views</h2>
        <p className="text-gray-600">Same agent progress shown on different devices</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Desktop</Badge>
            <h3 className="text-lg font-semibold">Full Feature View</h3>
          </div>
          <div className="border rounded-lg overflow-hidden h-96">
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
              taskSteps={baseTaskSteps}
              livePreviewUrl="careers.google.com"
              isMinimized={false}
            />
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Mobile</Badge>
            <h3 className="text-lg font-semibold">Compact View</h3>
          </div>
          <div className="max-w-sm border rounded-lg overflow-hidden h-96">
            <MobileAgentProgress
              jobTitle="Software Engineer"
              company="Google"
              agentState={{
                status: 'active',
                currentStep: 4,
                totalSteps: 7,
                timeElapsed: 142,
                timeRemaining: 78,
              }}
              taskSteps={baseTaskSteps}
            />
          </div>
        </div>
      </div>
    </div>
  )
}