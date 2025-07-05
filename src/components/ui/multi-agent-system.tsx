'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Settings, FileDown, Play, Pause, ChevronRight } from 'lucide-react'
import { useState } from 'react'

type AgentStatus = 'active' | 'paused' | 'waiting' | 'error'

interface Agent {
  id: string
  name: string
  role: string
  description: string
  status: AgentStatus
  stats?: string
  icon?: React.ReactNode
}

interface AgentTeamOverviewProps {
  agents: Agent[]
  onViewLiveFeed?: () => void
  onAdjustStrategy?: () => void
  className?: string
}

export function AgentTeamOverview({
  agents,
  onViewLiveFeed,
  onAdjustStrategy,
  className
}: AgentTeamOverviewProps) {
  const getStatusIcon = (status: AgentStatus) => {
    switch (status) {
      case 'active': return <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      case 'paused': return <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
      case 'waiting': return <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      case 'error': return <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      default: return null
    }
  }
  
  const getStatusText = (status: AgentStatus) => {
    switch (status) {
      case 'active': return '⚡ Active'
      case 'paused': return '⏸️ Paused'
      case 'waiting': return '💤 Waiting'
      case 'error': return '❌ Error'
      default: return ''
    }
  }
  
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Your AI Agent Team</CardTitle>
          <CardDescription className="text-base">
            Multiple specialized agents working together
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {agents.map((agent) => (
              <Card 
                key={agent.id}
                className="overflow-hidden"
                variant="solid"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-lg text-primary-600">
                      {agent.icon || <div className="w-6 h-6">{agent.name[0]}</div>}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                          {agent.name}
                          <Badge className="ml-2 font-normal flex items-center gap-1">
                            {getStatusIcon(agent.status)}
                            <span className="ml-1">{getStatusText(agent.status)}</span>
                          </Badge>
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400">
                        {agent.description}
                      </p>
                      
                      {agent.stats && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {agent.stats}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {onViewLiveFeed && (
              <Button
                onClick={onViewLiveFeed}
                className="flex-1"
                color="primary"
              >
                View Live Feed
              </Button>
            )}
            
            {onAdjustStrategy && (
              <Button
                onClick={onAdjustStrategy}
                variant="outline"
                className="flex-1"
              >
                Adjust Strategy
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface ActivityStep {
  id: string
  agent: string
  action: string
  duration: string
  isActive?: boolean
  isCompleted?: boolean
}

interface LiveAgentCollaborationProps {
  activeJobTitle: string
  activeCompany: string
  steps: ActivityStep[]
  stats: {
    speed: string
    successRate: number
  }
  onPause?: () => void
  className?: string
}

export function LiveAgentCollaboration({
  activeJobTitle,
  activeCompany,
  steps,
  stats,
  onPause,
  className
}: LiveAgentCollaborationProps) {
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200 gap-1 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Live
              </Badge>
              Agents Working Together
            </CardTitle>
            
            {onPause && (
              <Button size="sm" variant="outline" onClick={onPause}>
                <Pause className="w-4 h-4 mr-2" />
                Pause
              </Button>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
            <div className="font-medium">Scout → Tailor → Apply</div>
          </div>
          
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={cn(
                  "p-3 border-l-2 relative",
                  step.isActive ? "border-primary-500" : 
                  step.isCompleted ? "border-green-500" : 
                  "border-gray-200 dark:border-gray-700"
                )}
              >
                {/* Timeline dot */}
                <div 
                  className={cn(
                    "absolute w-3 h-3 rounded-full -left-[6.5px] top-4",
                    step.isActive ? "bg-primary-500 animate-pulse" :
                    step.isCompleted ? "bg-green-500" :
                    "bg-gray-300 dark:bg-gray-600"
                  )}
                ></div>
                
                <div 
                  className={cn(
                    "ml-4 p-3 rounded-lg",
                    step.isActive ? "bg-blue-50 dark:bg-blue-950/20" :
                    step.isCompleted ? "bg-green-50 dark:bg-green-950/20" :
                    "bg-gray-50 dark:bg-gray-800/50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      [{step.agent}]
                    </div>
                    <div className="text-xs text-gray-500">
                      {step.duration}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {step.action}
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="absolute left-[6.5px] top-7 bottom-0 -ml-px w-[1px] bg-gray-200 dark:bg-gray-700"></div>
                )}
              </div>
            ))}
          </div>
          
          <Card variant="solid" className="bg-gray-50 dark:bg-gray-800">
            <CardContent className="p-4 text-center">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Speed</p>
                  <p className="font-semibold">{stats.speed}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Success rate</p>
                  <p className="font-semibold">{stats.successRate}%</p>
                  <p className="text-xs text-gray-500">({100 - stats.successRate}% need human help)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export function MultiAgentDemo() {
  const [view, setView] = useState<'overview' | 'live'>('overview')
  
  const agents: Agent[] = [
    {
      id: 'scout',
      name: '🔍 Scout Agent',
      role: 'Job Finder',
      description: 'Finding new jobs across 15 sites',
      status: 'active',
      stats: 'Today: 247 jobs found, 89 match',
      icon: <Settings className="w-5 h-5" />
    },
    {
      id: 'tailor',
      name: '✍️ Tailor Agent',
      role: 'Resume Customizer',
      description: 'Creating custom resumes',
      status: 'active',
      stats: 'Today: 89 resumes generated',
      icon: <FileDown className="w-5 h-5" />
    },
    {
      id: 'apply',
      name: '📝 Apply Agent',
      role: 'Application Submitter',
      description: 'Submitting applications',
      status: 'active',
      stats: 'Today: 67 applied, 22 pending',
      icon: <Play className="w-5 h-5" />
    },
    {
      id: 'response',
      name: '📞 Response Agent',
      role: 'Response Handler',
      description: 'Will activate when responses arrive',
      status: 'waiting',
      icon: <Pause className="w-5 h-5" />
    }
  ]
  
  const activitySteps: ActivityStep[] = [
    {
      id: '1',
      agent: 'Scout found',
      action: 'Stripe - Senior SWE',
      duration: '2 sec',
      isCompleted: true
    },
    {
      id: '2',
      agent: 'Tailor',
      action: 'Emphasizing payments experience',
      duration: '5 sec',
      isCompleted: true
    },
    {
      id: '3',
      agent: 'Apply',
      action: 'Filling Greenhouse form',
      duration: '45 sec',
      isActive: true
    },
    {
      id: '4',
      agent: 'Apply',
      action: 'Submit application',
      duration: 'Pending'
    }
  ]
  
  return (
    <div className="w-full">
      {view === 'overview' ? (
        <AgentTeamOverview 
          agents={agents}
          onViewLiveFeed={() => setView('live')}
          onAdjustStrategy={() => console.log('Adjust strategy')}
        />
      ) : (
        <LiveAgentCollaboration
          activeJobTitle="Senior SWE"
          activeCompany="Stripe"
          steps={activitySteps}
          stats={{
            speed: '52 seconds per application',
            successRate: 94
          }}
          onPause={() => setView('overview')}
        />
      )}
    </div>
  )
}