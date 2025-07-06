'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import {
  ArrowLeft,
  Play,
  Pause,
  Eye,
  EyeSlash,
  FloppyDisk,
  SkipForward,
  Warning,
  CheckCircle,
  X,
  Gear,
  ArrowsOut,
  ArrowsIn,
} from '@phosphor-icons/react'
import { useState } from 'react'

interface TaskStep {
  id: string
  name: string
  status: 'pending' | 'active' | 'completed' | 'error'
  duration?: number
  estimatedDuration?: number
}

interface AgentState {
  status: 'initializing' | 'active' | 'paused' | 'error' | 'completed' | 'intervention-needed'
  currentAction?: string
  currentStep?: number
  totalSteps?: number
  timeElapsed?: number
  timeRemaining?: number
  error?: string
  interventionMessage?: string
}

interface AgentProgressViewerProps {
  jobTitle: string
  company: string
  agentState: AgentState
  taskSteps: TaskStep[]
  livePreviewUrl?: string
  onPause?: () => void
  onResume?: () => void
  onStop?: () => void
  onTakeControl?: () => void
  onSkipStep?: () => void
  onFloppyDiskRecording?: () => void
  onBack?: () => void
  isMinimized?: boolean
  onToggleMinimize?: () => void
  className?: string
}

export function AgentProgressViewer({
  jobTitle,
  company,
  agentState,
  taskSteps,
  livePreviewUrl,
  onPause,
  onResume,
  onStop,
  onTakeControl,
  onSkipStep,
  onFloppyDiskRecording,
  onBack,
  isMinimized = false,
  onToggleMinimize,
  className,
}: AgentProgressViewerProps) {
  const [showDetails, setShowDetails] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const progress =
    agentState.currentStep && agentState.totalSteps ? (agentState.currentStep / agentState.totalSteps) * 100 : 0

  const getStatusColor = () => {
    switch (agentState.status) {
      case 'active':
        return 'text-green-500'
      case 'paused':
        return 'text-yellow-500'
      case 'error':
        return 'text-red-500'
      case 'completed':
        return 'text-green-500'
      case 'intervention-needed':
        return 'text-orange-500'
      default:
        return 'text-blue-500'
    }
  }

  const getStatusIcon = () => {
    switch (agentState.status) {
      case 'active':
        return <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      case 'paused':
        return <Pause className="w-4 h-4 text-yellow-500" />
      case 'error':
        return <X className="w-4 h-4 text-red-500" />
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'intervention-needed':
        return <Warning className="w-4 h-4 text-orange-500" />
      default:
        return <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
    }
  }

  if (isMinimized) {
    return (
      <Card className={cn('fixed bottom-4 right-4 w-80 z-50', className)} variant="glass" blur="lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className={getStatusColor()}>{getStatusIcon()}</div>
              <span className="font-medium text-sm">🤖 Applying to {company}</span>
            </div>
            <Button size="sm" variant="ghost" onClick={onToggleMinimize}>
              <ArrowsOut className="w-3 h-3" />
            </Button>
          </div>
          <Progress value={progress} className="h-2 mb-2" />
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setShowDetails(!showDetails)}>
              View
            </Button>
            <Button size="sm" variant="outline" onClick={agentState.status === 'active' ? onPause : onResume}>
              {agentState.status === 'active' ? 'Pause' : 'Resume'}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900', className)}>
      {/* Header */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onBack && (
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">AI Agent</span>
            {onToggleMinimize && (
              <Button variant="ghost" size="sm" onClick={onToggleMinimize}>
                <ArrowsIn className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Agent Status */}
        <div className="flex items-center gap-3">
          <div className={getStatusColor()}>{getStatusIcon()}</div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              🤖 AI Agent: Applying to {jobTitle} @ {company}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {agentState.timeElapsed && `Started ${Math.floor(agentState.timeElapsed / 60)} min ago`}
              {agentState.timeRemaining && ` • Est. ${Math.floor(agentState.timeRemaining / 60)} min remaining`}
            </p>
          </div>
        </div>

        {/* Live View */}
        <AgentLiveView
          url={livePreviewUrl}
          status={agentState.status}
          isFullscreen={isFullscreen}
          onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
          timeElapsed={agentState.timeElapsed || 0}
          timeRemaining={agentState.timeRemaining || 0}
        />

        {/* Current Action */}
        <AgentCurrentAction action={agentState.currentAction} />

        {/* Task Progress */}
        <AgentTaskProgress
          steps={taskSteps}
          currentStep={agentState.currentStep}
          showDetails={showDetails}
          onToggleDetails={() => setShowDetails(!showDetails)}
        />

        {/* Controls */}
        <AgentControls
          status={agentState.status}
          onPause={onPause}
          onResume={onResume}
          onStop={onStop}
          onTakeControl={onTakeControl}
          onSkipStep={onSkipStep}
          onFloppyDiskRecording={onFloppyDiskRecording}
          showDetails={showDetails}
          onToggleDetails={() => setShowDetails(!showDetails)}
        />

        {/* Error/Intervention States */}
        {agentState.status === 'error' && agentState.error && (
          <AgentErrorState error={agentState.error} onRetry={onResume} onStop={onStop} />
        )}

        {agentState.status === 'intervention-needed' && agentState.interventionMessage && (
          <AgentInterventionState
            message={agentState.interventionMessage}
            onTakeControl={onTakeControl}
            onSkip={onSkipStep}
          />
        )}

        {agentState.status === 'completed' && (
          <AgentCompletedState
            jobTitle={jobTitle}
            company={company}
            timeElapsed={agentState.timeElapsed || 0}
            onFloppyDiskRecording={onFloppyDiskRecording}
            onBack={onBack}
          />
        )}
      </div>
    </div>
  )
}

interface AgentLiveViewProps {
  url?: string
  status: string
  isFullscreen: boolean
  onToggleFullscreen: () => void
  timeElapsed: number
  timeRemaining: number
}

function AgentLiveView({ url, isFullscreen, onToggleFullscreen, timeElapsed, timeRemaining }: AgentLiveViewProps) {
  return (
    <Card variant="glass" blur="sm">
      <CardHeader>
        <CardTitle className="text-lg">Live View</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Browser Window Mock */}
          <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
            <div className="bg-gray-100 dark:bg-gray-800 p-2 border-b border-gray-300 dark:border-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-900 rounded px-3 py-1 text-sm text-gray-600">
                  {url || 'careers.google.com'}
                </div>
              </div>
            </div>

            <div className={cn('bg-white dark:bg-gray-900 p-6', isFullscreen ? 'h-96' : 'h-64')}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Google Careers</h2>
                <h3 className="text-lg text-gray-700 dark:text-gray-300">Software Engineer - Mountain View</h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name:</label>
                    <div className="flex-1 border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-blue-50 dark:bg-blue-950/20">
                      <span className="text-sm">John Smith</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email:</label>
                    <div className="flex-1 border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-blue-50 dark:bg-blue-950/20">
                      <span className="text-sm">john.smith@email.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone:</label>
                    <div className="flex-1 border border-gray-300 dark:border-gray-600 rounded px-3 py-1">
                      <span className="text-sm text-gray-500">(555) 123-4567</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-sm text-green-600">📎</span>
                    <span className="text-sm text-green-600">Resume: software_engineer_v3.pdf ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost">
                <Play className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Pause className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <SkipForward className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Progress value={70} className="w-32 h-1" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, '0')} /{' '}
                {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">
                🔴 Live
              </Badge>
              <Button size="sm" variant="ghost" onClick={onToggleFullscreen}>
                <ArrowsOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface AgentCurrentActionProps {
  action?: string
}

function AgentCurrentAction({ action }: AgentCurrentActionProps) {
  if (!action) return null

  return (
    <Card variant="glass" blur="sm">
      <CardHeader>
        <CardTitle className="text-lg">Current Action</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Gear className="w-5 h-5 text-blue-600 animate-spin" />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">📝 Filling application form</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">"{action}"</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface AgentTaskProgressProps {
  steps: TaskStep[]
  currentStep?: number
  showDetails: boolean
  onToggleDetails: () => void
}

function AgentTaskProgress({ steps, showDetails, onToggleDetails }: AgentTaskProgressProps) {
  const completedSteps = steps.filter((step) => step.status === 'completed').length

  return (
    <Card variant="glass" blur="sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            Task Progress ({completedSteps}/{steps.length})
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onToggleDetails}>
            {showDetails ? 'Collapse' : 'Expand'} {showDetails ? '↑' : '↓'}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showDetails ? (
          <div className="space-y-3">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {step.status === 'completed' && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {step.status === 'active' && (
                      <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    )}
                    {step.status === 'error' && <X className="w-5 h-5 text-red-500" />}
                    {step.status === 'pending' && <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />}
                  </div>
                  <div>
                    <p
                      className={cn(
                        'font-medium',
                        step.status === 'completed' && 'text-green-700 dark:text-green-400',
                        step.status === 'active' && 'text-blue-700 dark:text-blue-400',
                        step.status === 'error' && 'text-red-700 dark:text-red-400',
                        step.status === 'pending' && 'text-gray-500',
                      )}
                    >
                      {step.name}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {step.duration
                    ? `${Math.floor(step.duration / 60)}:${(step.duration % 60).toString().padStart(2, '0')}`
                    : '--'}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Progress value={(completedSteps / steps.length) * 100} className="h-2" />
        )}
      </CardContent>
    </Card>
  )
}

interface AgentControlsProps {
  status: string
  onPause?: () => void
  onResume?: () => void
  onStop?: () => void
  onTakeControl?: () => void
  onSkipStep?: () => void
  onFloppyDiskRecording?: () => void
  showDetails: boolean
  onToggleDetails: () => void
}

function AgentControls({
  status,
  onPause,
  onResume,
  onStop,
  onTakeControl,
  onSkipStep,
  onFloppyDiskRecording,
  showDetails,
  onToggleDetails,
}: AgentControlsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {status === 'active' && onPause && (
        <Button onClick={onPause} variant="outline">
          <Pause className="w-4 h-4 mr-2" />
          Pause Agent
        </Button>
      )}
      {status === 'paused' && onResume && (
        <Button onClick={onResume} color="primary">
          <Play className="w-4 h-4 mr-2" />
          Resume Agent
        </Button>
      )}
      {onTakeControl && (
        <Button onClick={onTakeControl} variant="outline">
          Take Control
        </Button>
      )}
      {onSkipStep && (
        <Button onClick={onSkipStep} variant="outline">
          <SkipForward className="w-4 h-4 mr-2" />
          Skip Step
        </Button>
      )}
      <Button onClick={onToggleDetails} variant="outline">
        {showDetails ? <EyeSlash className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
        {showDetails ? 'Hide' : 'Show'} Details
      </Button>
      {onFloppyDiskRecording && (
        <Button onClick={onFloppyDiskRecording} variant="outline">
          <FloppyDisk className="w-4 h-4 mr-2" />
          💾 FloppyDisk Recording
        </Button>
      )}
      {onStop && (
        <Button onClick={onStop} color="danger" variant="outline">
          <X className="w-4 h-4 mr-2" />
          Stop Agent
        </Button>
      )}
    </div>
  )
}

interface AgentErrorStateProps {
  error: string
  onRetry?: () => void
  onStop?: () => void
}

function AgentErrorState({ error, onRetry, onStop }: AgentErrorStateProps) {
  return (
    <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20" variant="solid">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Warning className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">⚠️ Agent Error</h3>
            <p className="text-red-700 dark:text-red-300 mb-4">{error}</p>
            <div className="flex gap-3">
              {onRetry && (
                <Button onClick={onRetry} size="sm" color="primary">
                  <Play className="w-4 h-4 mr-2" />
                  Retry
                </Button>
              )}
              {onStop && (
                <Button onClick={onStop} size="sm" variant="outline">
                  Stop Agent
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface AgentInterventionStateProps {
  message: string
  onTakeControl?: () => void
  onSkip?: () => void
}

function AgentInterventionState({ message, onTakeControl, onSkip }: AgentInterventionStateProps) {
  return (
    <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20" variant="solid">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Warning className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">⚠️ Agent Needs Help</h3>
            <p className="text-orange-700 dark:text-orange-300 mb-4">{message}</p>
            <div className="flex gap-3">
              {onTakeControl && (
                <Button onClick={onTakeControl} size="sm" color="primary">
                  Solve Manually
                </Button>
              )}
              {onSkip && (
                <Button onClick={onSkip} size="sm" variant="outline">
                  Skip Application
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface AgentCompletedStateProps {
  jobTitle: string
  company: string
  timeElapsed: number
  onFloppyDiskRecording?: () => void
  onBack?: () => void
}

function AgentCompletedState({ jobTitle, company, timeElapsed, onFloppyDiskRecording, onBack }: AgentCompletedStateProps) {
  return (
    <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20" variant="solid">
      <CardContent className="p-6 text-center">
        <div className="mb-4">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-200 mb-2">
            ✅ Application Submitted Successfully
          </h3>
          <div className="space-y-1 text-green-700 dark:text-green-300">
            <p>
              Applied to: {company} - {jobTitle}
            </p>
            <p>
              Time taken: {Math.floor(timeElapsed / 60)} min {timeElapsed % 60} sec
            </p>
            <p>
              Reference #: {company.slice(0, 3).toUpperCase()}-2024-{Math.floor(Math.random() * 9999)}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {onFloppyDiskRecording && (
            <Button onClick={onFloppyDiskRecording} variant="outline">
              <FloppyDisk className="w-4 h-4 mr-2" />
              View Recording
            </Button>
          )}
          {onBack && (
            <Button onClick={onBack} color="primary">
              Next Application
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Mobile version
interface MobileAgentProgressProps {
  jobTitle: string
  company: string
  agentState: AgentState
  taskSteps: TaskStep[]
  onPause?: () => void
  onResume?: () => void
  onFloppyDiskRecording?: () => void
  className?: string
}

export function MobileAgentProgress({
  jobTitle,
  company,
  agentState,
  taskSteps,
  onPause,
  onResume,
  onFloppyDiskRecording,
  className,
}: MobileAgentProgressProps) {
  const [showTaskList, setShowTaskList] = useState(false)

  const progress =
    agentState.currentStep && agentState.totalSteps ? (agentState.currentStep / agentState.totalSteps) * 100 : 0

  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900 p-4', className)}>
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <Button size="sm" variant="ghost">
            <ArrowLeft className="w-4 h-4 mr-2" />
            AI Agent
          </Button>
          <div className="text-xs text-gray-500">🔋 █ █ █</div>
        </div>

        <div className="text-center">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">🤖 Applying to Jobs</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {company} - {jobTitle}
          </p>
        </div>
      </div>

      {/* Live View */}
      <Card className="mb-4" variant="glass" blur="sm">
        <CardContent className="p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg border p-4 mb-3">
            <div className="text-center space-y-2">
              <div className="text-xs text-gray-500">careers.google.com</div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Application Form</div>
                <div className="text-xs text-gray-600">Name: John Smith</div>
                <div className="text-xs text-gray-600">Email: john@...</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex gap-1">
              <Button size="sm" variant="ghost" className="p-1">
                <Play className="w-3 h-3" />
              </Button>
              <Button size="sm" variant="ghost" className="p-1">
                <Pause className="w-3 h-3" />
              </Button>
              <Button size="sm" variant="ghost" className="p-1">
                <SkipForward className="w-3 h-3" />
              </Button>
            </div>
            <Badge variant="outline" className="bg-red-100 text-red-700 text-xs">
              🔴 Live
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Current Action */}
      <Card className="mb-4" variant="glass" blur="sm">
        <CardContent className="p-4">
          <div className="text-center">
            <div className="font-medium text-sm mb-1">Current Action</div>
            <div className="text-xs text-gray-600">📝 Filling form</div>
            <div className="text-xs text-gray-500">"Adding experience"</div>
          </div>
        </CardContent>
      </Card>

      {/* Progress */}
      <Card className="mb-4" variant="glass" blur="sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              Progress: {agentState.currentStep} of {agentState.totalSteps}
            </span>
            <Button size="sm" variant="ghost" onClick={() => setShowTaskList(!showTaskList)} className="text-xs">
              {showTaskList ? '▲' : '▼'}
            </Button>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="text-xs text-gray-500 mt-1">{Math.round(progress)}%</div>
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <Button size="sm" variant="outline" onClick={agentState.status === 'active' ? onPause : onResume}>
          {agentState.status === 'active' ? 'Pause' : 'Resume'}
        </Button>
        <Button size="sm" variant="outline" onClick={onFloppyDiskRecording}>
          FloppyDisk
        </Button>
        <Button size="sm" variant="outline" onClick={() => setShowTaskList(!showTaskList)}>
          Details
        </Button>
      </div>

      {/* Expandable Task List */}
      {showTaskList && (
        <Card variant="glass" blur="sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Task Progress</CardTitle>
              <Button size="sm" variant="ghost" onClick={() => setShowTaskList(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {taskSteps.map((step) => (
              <div key={step.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {step.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-500" />}
                  {step.status === 'active' && (
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  )}
                  {step.status === 'pending' && <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />}
                  <div>
                    <div className="text-sm font-medium">{step.name}</div>
                    {step.duration ? (
                      <div className="text-xs text-gray-500">
                        {Math.floor(step.duration / 60)}:{(step.duration % 60).toString().padStart(2, '0')}
                      </div>
                    ) : (
                      <div className="text-xs text-gray-500">Pending</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// State-specific components for easy use
export function AgentInitializing() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🤖 Preparing AI Agent...</h2>
          <Progress value={25} className="h-2 mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Setting up browser environment...</p>
        </CardContent>
      </Card>
    </div>
  )
}
