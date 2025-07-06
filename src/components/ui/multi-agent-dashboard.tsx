'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { ChartLine, FirstAidKit, CheckCircle, Download, Eye, ArrowsClockwise, Gear, Star, Users } from '@phosphor-icons/react'

interface Agent {
  id: string
  name: string
  icon: React.ReactNode
  status: 'active' | 'paused' | 'error' | 'waiting'
  progress: number
  currentTask?: string
  lastActivity?: string
}

interface Metric {
  label: string
  value: string | number
  change?: {
    value: string
    isPositive: boolean
  }
  icon?: React.ReactNode
}

interface MultiAgentDashboardProps {
  agents: Agent[]
  metrics: Metric[]
  onAgentGear?: (agentId: string) => void
  onViewAgentDetails?: (agentId: string) => void
  onResumeAgent?: (agentId: string) => void
  onPauseAgent?: (agentId: string) => void
  onViewReports?: () => void
  className?: string
}

export function MultiAgentDashboard({
  agents,
  metrics,
  onAgentGear,
  onViewAgentDetails,
  onResumeAgent,
  onPauseAgent,
  onViewReports,
  className,
}: MultiAgentDashboardProps) {
  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-600'
      case 'paused':
        return 'text-amber-600'
      case 'error':
        return 'text-red-600'
      case 'waiting':
        return 'text-gray-600'
    }
  }

  const getStatusIcon = (status: Agent['status']) => {
    switch (status) {
      case 'active':
        return <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      case 'paused':
        return <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
      case 'error':
        return <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      case 'waiting':
        return <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
    }
  }

  const getActionButton = (agent: Agent) => {
    if (agent.status === 'active' && onPauseAgent) {
      return (
        <Button variant="outline" size="sm" onClick={() => onPauseAgent(agent.id)}>
          Pause
        </Button>
      )
    } else if ((agent.status === 'paused' || agent.status === 'error') && onResumeAgent) {
      return (
        <Button variant="outline" size="sm" onClick={() => onResumeAgent(agent.id)}>
          Resume
        </Button>
      )
    }
    return null
  }

  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900 p-6', className)}>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Agent Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Multi-agent system working on your job search</p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <ArrowsClockwise className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Gear className="w-4 h-4 mr-2" />
              Gear
            </Button>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} variant="glass" blur="sm">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">{metric.label}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    {metric.change && (
                      <p
                        className={cn(
                          'text-xs flex items-center gap-1',
                          metric.change.isPositive ? 'text-green-600' : 'text-red-600',
                        )}
                      >
                        {metric.change.isPositive ? '▲' : '▼'} {metric.change.value}
                      </p>
                    )}
                  </div>
                  {metric.icon && (
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-600">
                      {metric.icon}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Agents */}
        <Card variant="glass" blur="sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Agent Team</CardTitle>
              {onViewReports && (
                <Button variant="outline" size="sm" onClick={onViewReports}>
                  <Eye className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-5">
            {agents.map((agent) => (
              <Card key={agent.id} variant="solid" className="overflow-hidden">
                <div className="flex items-start p-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">{agent.icon}</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{agent.name}</h3>
                      <Badge className="flex items-center gap-1">
                        {getStatusIcon(agent.status)}
                        <span className={cn('ml-1', getStatusColor(agent.status))}>
                          {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
                        </span>
                      </Badge>
                    </div>

                    {agent.currentTask && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{agent.currentTask}</p>
                    )}

                    {agent.status === 'active' && (
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Progress</span>
                          <span>{agent.progress}%</span>
                        </div>
                        <Progress value={agent.progress} className="h-1.5" />
                      </div>
                    )}

                    {agent.lastActivity && (
                      <p className="text-xs text-gray-500 mt-2">Last activity: {agent.lastActivity}</p>
                    )}
                  </div>

                  <div className="ml-4 flex flex-col gap-2">
                    {onAgentGear && (
                      <Button variant="ghost" size="sm" onClick={() => onAgentGear(agent.id)}>
                        <Gear className="w-4 h-4" />
                      </Button>
                    )}

                    {onViewAgentDetails && (
                      <Button variant="ghost" size="sm" onClick={() => onViewAgentDetails(agent.id)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    )}

                    {getActionButton(agent)}
                  </div>
                </div>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function MultiAgentDashboardDemo() {
  const agents: Agent[] = [
    {
      id: 'scout',
      name: 'Scout Agent',
      icon: <Star className="w-5 h-5" />,
      status: 'active',
      progress: 78,
      currentTask: 'Scanning LinkedIn for Senior ML Engineer roles',
      lastActivity: '2 minutes ago',
    },
    {
      id: 'tailor',
      name: 'Resume Tailor',
      icon: <Download className="w-5 h-5" />,
      status: 'active',
      progress: 45,
      currentTask: 'Optimizing resume for OpenAI application',
      lastActivity: '5 minutes ago',
    },
    {
      id: 'apply',
      name: 'Application Agent',
      icon: <CheckCircle className="w-5 h-5" />,
      status: 'paused',
      progress: 30,
      lastActivity: '15 minutes ago',
    },
    {
      id: 'interview',
      name: 'Interview Scheduler',
      icon: <Users className="w-5 h-5" />,
      status: 'waiting',
      progress: 0,
      lastActivity: '1 hour ago',
    },
  ]

  const metrics: Metric[] = [
    {
      label: 'Total Applications',
      value: 156,
      change: {
        value: '12% this week',
        isPositive: true,
      },
      icon: <ChartLine className="w-5 h-5" />,
    },
    {
      label: 'Response Rate',
      value: '9.3%',
      change: {
        value: '2.1% vs avg',
        isPositive: true,
      },
      icon: <FirstAidKit className="w-5 h-5" />,
    },
    {
      label: 'Interviews',
      value: 5,
      change: {
        value: '3 pending',
        isPositive: true,
      },
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: 'New Matches',
      value: 27,
      change: {
        value: 'Last 24h',
        isPositive: true,
      },
      icon: <Star className="w-5 h-5" />,
    },
  ]

  return (
    <MultiAgentDashboard
      agents={agents}
      metrics={metrics}
      onAgentGear={(id) => console.log(`Gear for agent: ${id}`)}
      onViewAgentDetails={(id) => console.log(`View details for agent: ${id}`)}
      onResumeAgent={(id) => console.log(`Resume agent: ${id}`)}
      onPauseAgent={(id) => console.log(`Pause agent: ${id}`)}
      onViewReports={() => console.log('View reports')}
    />
  )
}
