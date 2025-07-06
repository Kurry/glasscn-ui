'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowRight, ChartLine, Funnel, Lightning } from '@phosphor-icons/react'
import { useState } from 'react'

interface FunnelStep {
  id: string
  name: string
  count: number
  conversionRate?: number
}

interface ApplicationFunnelProps {
  steps: FunnelStep[]
  dropOffPoint?: string
  onOptimize?: () => void
  className?: string
}

export function ApplicationToInterviewFunnel({ steps, dropOffPoint, onOptimize, className }: ApplicationFunnelProps) {
  // Find the step with the highest count to calculate relative percentages
  const maxCount = Math.max(...steps.map((step) => step.count))

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary-600 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
              <Funnel className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Optimizing Your Funnel</CardTitle>
              <CardDescription>Application to interview conversion analytics</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            {steps.map((step, index) => {
              const nextStep = index < steps.length - 1 ? steps[index + 1] : null
              const conversionRate = nextStep ? Math.round((nextStep.count / step.count) * 100) : null
              const isDropOffPoint = dropOffPoint === step.id

              return (
                <div key={step.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{step.name}</div>
                    <div className="text-sm">
                      <span className="font-medium">{step.count}</span>
                      {step.conversionRate && <span className="text-gray-500 ml-2">({step.conversionRate}%)</span>}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden w-full">
                      <div
                        className={cn('h-full', isDropOffPoint ? 'bg-amber-500' : 'bg-blue-500')}
                        style={{ width: `${(step.count / maxCount) * 100}%` }}
                      ></div>
                    </div>

                    {conversionRate !== null && (
                      <div className="absolute -right-1 bottom-full mb-1">
                        <div
                          className={cn(
                            'text-xs px-1.5 py-0.5 rounded',
                            conversionRate < 30
                              ? 'bg-red-100 text-red-800'
                              : conversionRate < 50
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-green-100 text-green-800',
                          )}
                        >
                          {conversionRate}%
                        </div>
                      </div>
                    )}

                    {isDropOffPoint && (
                      <div className="absolute right-0 top-full mt-1 flex items-center">
                        <Badge className="text-xs bg-amber-100 text-amber-800 border-amber-200">
                          Main drop-off point
                        </Badge>
                      </div>
                    )}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-1">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {onOptimize && (
            <Button onClick={onOptimize} color="primary" className="w-full">
              <Lightning className="w-4 h-4 mr-2" />
              Optimize Conversion Rates
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface ConversionStrategy {
  id: string
  title: string
  description: string
  impact: string
}

interface ConversionOptimizationProps {
  strategies: ConversionStrategy[]
  targetPoint: string
  projectedImprovement: string
  onImplement?: () => void
  className?: string
}

export function ConversionOptimization({
  strategies,
  targetPoint,
  projectedImprovement,
  onImplement,
  className,
}: ConversionOptimizationProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary-600 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
              <ChartLine className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Conversion Optimization Strategy</CardTitle>
              <CardDescription>AI-recommended improvements for {targetPoint}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            {strategies.map((strategy) => (
              <Card
                key={strategy.id}
                variant="solid"
                className="bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-primary-600 mt-0.5">
                      <Lightning className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white">{strategy.title}</h4>
                        <Badge className="bg-green-100 text-green-800 border-green-200">{strategy.impact}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{strategy.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between">
              <p className="font-medium text-blue-800 dark:text-blue-300">Projected improvement:</p>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">{projectedImprovement}</Badge>
            </div>
          </div>

          {onImplement && (
            <Button onClick={onImplement} color="primary" className="w-full">
              Implement All Strategies
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export function ConversionOptimizationDemo() {
  const [view, setView] = useState<'funnel' | 'strategy' | 'implemented'>('funnel')

  const funnelSteps: FunnelStep[] = [
    {
      id: 'applications',
      name: 'Applications',
      count: 320,
    },
    {
      id: 'resume-views',
      name: 'Resume Views',
      count: 160,
      conversionRate: 50,
    },
    {
      id: 'initial-screening',
      name: 'Initial Screening',
      count: 48,
      conversionRate: 30,
    },
    {
      id: 'interviews',
      name: 'Interviews',
      count: 16,
      conversionRate: 33,
    },
    {
      id: 'offers',
      name: 'Offers',
      count: 4,
      conversionRate: 25,
    },
  ]

  const optimizedFunnelSteps: FunnelStep[] = [
    {
      id: 'applications',
      name: 'Applications',
      count: 320,
    },
    {
      id: 'resume-views',
      name: 'Resume Views',
      count: 224, // Improved from 160
      conversionRate: 70, // Improved from 50%
    },
    {
      id: 'initial-screening',
      name: 'Initial Screening',
      count: 90, // Improved from 48
      conversionRate: 40, // Improved from 30%
    },
    {
      id: 'interviews',
      name: 'Interviews',
      count: 36, // Improved from 16
      conversionRate: 40, // Improved from 33%
    },
    {
      id: 'offers',
      name: 'Offers',
      count: 11, // Improved from 4
      conversionRate: 30, // Improved from 25%
    },
  ]

  const strategies: ConversionStrategy[] = [
    {
      id: '1',
      title: 'Redesign resume header',
      description: 'Prominently feature most relevant skills and achievements at the top',
      impact: '+12% views',
    },
    {
      id: '2',
      title: 'Add company-specific keywords',
      description: 'Dynamically insert 3-5 company-specific keywords for each application',
      impact: '+20% screenings',
    },
    {
      id: '3',
      title: 'Add portfolio visualizations',
      description: 'Include visual representations of projects and outcomes',
      impact: '+15% interviews',
    },
    {
      id: '4',
      title: 'Include ROI metrics',
      description: 'Quantify your impact in terms of revenue, cost savings, or efficiency gains',
      impact: '+18% offers',
    },
  ]

  return (
    <div className="w-full">
      {view === 'funnel' && (
        <ApplicationToInterviewFunnel
          steps={funnelSteps}
          dropOffPoint="resume-views"
          onOptimize={() => setView('strategy')}
        />
      )}

      {view === 'strategy' && (
        <ConversionOptimization
          strategies={strategies}
          targetPoint="resume-to-interview conversion"
          projectedImprovement="+175% more offers"
          onImplement={() => setView('implemented')}
        />
      )}

      {view === 'implemented' && (
        <ApplicationToInterviewFunnel steps={optimizedFunnelSteps} onOptimize={() => setView('funnel')} />
      )}
    </div>
  )
}
