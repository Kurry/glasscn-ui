import { AgentProgressViewer, MobileAgentProgress, AgentInitializing } from '@/components/ui/agent-progress-viewer'
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AgentProgressViewer> = {
  title: 'UI/Agent Progress Viewer',
  component: AgentProgressViewer,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof AgentProgressViewer>

const sampleTaskSteps = [
  { id: '1', name: 'Navigate to job posting', status: 'completed' as const, duration: 15 },
  { id: '2', name: 'Click "Apply Now"', status: 'completed' as const, duration: 8 },
  { id: '3', name: 'Login with saved credentials', status: 'completed' as const, duration: 12 },
  { id: '4', name: 'Fill application form', status: 'active' as const, duration: 107 },
  { id: '5', name: 'Upload resume', status: 'pending' as const },
  { id: '6', name: 'Answer screening questions', status: 'pending' as const },
  { id: '7', name: 'Submit application', status: 'pending' as const },
]

export const Desktop_Active: Story = {
  name: 'Desktop - Active State',
  args: {
    jobTitle: 'Software Engineer',
    company: 'Google',
    agentState: {
      status: 'active',
      currentAction: 'Entering work experience from resume...',
      currentStep: 4,
      totalSteps: 7,
      timeElapsed: 142,
      timeRemaining: 78,
    },
    taskSteps: sampleTaskSteps,
    livePreviewUrl: 'careers.google.com',
    onPause: () => console.log('Paused'),
    onResume: () => console.log('Resumed'),
    onStop: () => console.log('Stopped'),
    onTakeControl: () => console.log('Take control'),
    onSkipStep: () => console.log('Skip step'),
    onFloppyDiskRecording: () => console.log('Save recording'),
    onBack: () => console.log('Back to dashboard'),
  },
}

export const Desktop_Paused: Story = {
  name: 'Desktop - Paused State',
  args: {
    ...Desktop_Active.args,
    agentState: {
      status: 'paused',
      currentAction: 'Paused by user at step 4 of 7',
      currentStep: 4,
      totalSteps: 7,
      timeElapsed: 142,
    },
  },
}

export const Desktop_Error: Story = {
  name: 'Desktop - Error State',
  args: {
    ...Desktop_Active.args,
    agentState: {
      status: 'error',
      currentStep: 4,
      totalSteps: 7,
      timeElapsed: 142,
      error: 'Network connection lost while submitting form. Please check your internet connection and try again.',
    },
  },
}

export const Desktop_Intervention: Story = {
  name: 'Desktop - Intervention Needed',
  args: {
    ...Desktop_Active.args,
    agentState: {
      status: 'intervention-needed',
      currentStep: 4,
      totalSteps: 7,
      timeElapsed: 142,
      interventionMessage: 'CAPTCHA detected - please solve to continue with the application',
    },
  },
}

export const Desktop_Completed: Story = {
  name: 'Desktop - Completed State',
  args: {
    ...Desktop_Active.args,
    agentState: {
      status: 'completed',
      currentStep: 7,
      totalSteps: 7,
      timeElapsed: 222,
    },
    taskSteps: sampleTaskSteps.map((step) => ({ ...step, status: 'completed' as const })),
  },
}

export const Desktop_Minimized: Story = {
  name: 'Desktop - Minimized Widget',
  args: {
    ...Desktop_Active.args,
    isMinimized: true,
  },
}

export const Mobile_Active: Story = {
  name: 'Mobile - Active State',
  render: () => (
    <MobileAgentProgress
      jobTitle="Software Engineer"
      company="Google"
      agentState={{
        status: 'active',
        currentAction: 'Adding experience',
        currentStep: 4,
        totalSteps: 7,
        timeElapsed: 142,
        timeRemaining: 78,
      }}
      taskSteps={sampleTaskSteps}
      onPause={() => console.log('Paused')}
      onResume={() => console.log('Resumed')}
      onFloppyDiskRecording={() => console.log('Save recording')}
    />
  ),
}

export const Initializing_State: Story = {
  name: 'Initializing State',
  render: () => <AgentInitializing />,
}

// Complete flow demonstration
export const Complete_Agent_Flow: Story = {
  name: 'Complete Agent Flow',
  render: () => {
    return (
      <div className="space-y-8 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">AI Agent Progress Viewer</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Complete flow demonstration showing all states</p>
        </div>

        <div className="grid gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">1. Initializing State</h2>
            <div className="border rounded-lg overflow-hidden">
              <AgentInitializing />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">2. Active State (Desktop)</h2>
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
                taskSteps={sampleTaskSteps}
                livePreviewUrl="careers.google.com"
                onPause={() => console.log('Paused')}
                onResume={() => console.log('Resumed')}
                onStop={() => console.log('Stopped')}
                onTakeControl={() => console.log('Take control')}
                onSkipStep={() => console.log('Skip step')}
                onFloppyDiskRecording={() => console.log('Save recording')}
                onBack={() => console.log('Back to dashboard')}
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">3. Mobile Active State</h2>
            <div className="max-w-sm border rounded-lg overflow-hidden">
              <MobileAgentProgress
                jobTitle="Software Engineer"
                company="Google"
                agentState={{
                  status: 'active',
                  currentAction: 'Adding experience',
                  currentStep: 4,
                  totalSteps: 7,
                  timeElapsed: 142,
                  timeRemaining: 78,
                }}
                taskSteps={sampleTaskSteps}
                onPause={() => console.log('Paused')}
                onResume={() => console.log('Resumed')}
                onFloppyDiskRecording={() => console.log('Save recording')}
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
}

// Real-time simulation
export const Live_Simulation: Story = {
  name: 'Live Simulation',
  render: () => {
    const [currentStep, setCurrentStep] = React.useState(1)
    const [timeElapsed, setTimeElapsed] = React.useState(0)

    React.useEffect(() => {
      const timer = setInterval(() => {
        setTimeElapsed((prev) => prev + 1)

        // Simulate step progression
        if (timeElapsed > 0 && timeElapsed % 30 === 0 && currentStep < 7) {
          setCurrentStep((prev) => prev + 1)
        }
      }, 1000)

      return () => clearInterval(timer)
    }, [timeElapsed, currentStep])

    const dynamicSteps = sampleTaskSteps.map((step, index) => ({
      ...step,
      status:
        index < currentStep
          ? ('completed' as const)
          : index === currentStep
            ? ('active' as const)
            : ('pending' as const),
    }))

    return (
      <AgentProgressViewer
        jobTitle="Software Engineer"
        company="Google"
        agentState={{
          status: currentStep >= 7 ? 'completed' : 'active',
          currentAction:
            currentStep < 7 ? `Working on ${sampleTaskSteps[currentStep]?.name}...` : 'Application completed!',
          currentStep: currentStep,
          totalSteps: 7,
          timeElapsed: timeElapsed,
          timeRemaining: Math.max(0, 180 - timeElapsed),
        }}
        taskSteps={dynamicSteps}
        livePreviewUrl="careers.google.com"
        onPause={() => console.log('Paused')}
        onResume={() => console.log('Resumed')}
        onStop={() => console.log('Stopped')}
        onTakeControl={() => console.log('Take control')}
        onSkipStep={() => console.log('Skip step')}
        onFloppyDiskRecording={() => console.log('Save recording')}
        onBack={() => console.log('Back to dashboard')}
      />
    )
  },
}
