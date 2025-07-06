'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ChartLine, TrendUp, CaretUp, Calendar, CheckCircle } from '@phosphor-icons/react'
import { useState } from 'react'

interface PerformanceStat {
  label: string
  value: string | number
  previousPeriod?: string
  change?: {
    value: string
    isPositive: boolean
  }
}

interface PerformanceInsight {
  id: string
  description: string
  impact: string
  icon?: React.ReactNode
}

interface StrategyAdjustment {
  id: string
  description: string
}

interface WeeklyIntelligenceProps {
  week: number
  stats: PerformanceStat[]
  insights: PerformanceInsight[]
  strategyAdjustments: StrategyAdjustment[]
  projectedOffers?: string
  onImplementInsights?: () => void
  className?: string
}

export function WeeklyIntelligenceReport({
  week,
  stats,
  insights,
  strategyAdjustments,
  projectedOffers,
  onImplementInsights,
  className,
}: WeeklyIntelligenceProps) {
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
              <CardTitle className="text-lg">Week {week} Performance Report</CardTitle>
              <CardDescription>AI analysis of your job search performance</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                variant="solid"
                className="bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    {stat.change && (
                      <div className={cn('text-xs', stat.change.isPositive ? 'text-green-600' : 'text-red-600')}>
                        {stat.change.isPositive ? '↑' : '↓'} {stat.change.value}
                      </div>
                    )}
                  </div>
                  {stat.previousPeriod && <p className="text-xs text-gray-500 mt-1">{stat.previousPeriod}</p>}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What Worked */}
          <div>
            <h3 className="font-medium mb-3">What worked:</h3>
            <div className="space-y-2">
              {insights.map((insight) => (
                <div
                  key={insight.id}
                  className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800"
                >
                  <div className="text-green-600 dark:text-green-500 mt-0.5">
                    {insight.icon || <TrendUp className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-green-800 dark:text-green-300">{insight.description}</p>
                      <Badge className="bg-green-100 text-green-800 border-green-200">{insight.impact}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Adjusting Strategy */}
          <Card variant="solid" className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4">
              <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-3">AI adjusting strategy:</h3>
              <div className="space-y-2">
                {strategyAdjustments.map((adjustment) => (
                  <div key={adjustment.id} className="flex items-start gap-2">
                    <div className="text-blue-600 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <p className="text-blue-700 dark:text-blue-400">{adjustment.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projected Offers */}
          {projectedOffers && (
            <div className="p-4 rounded-lg border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-950/20 text-center">
              <p className="font-medium text-primary-800 dark:text-primary-300">
                Projected offers by month end: {projectedOffers}
              </p>
            </div>
          )}

          {onImplementInsights && (
            <Button onClick={onImplementInsights} color="primary" className="w-full">
              Implement Insights
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export function PerformanceAnalyticsDemo() {
  const [implementedInsights, setImplementedInsights] = useState(false)

  const stats: PerformanceStat[] = [
    {
      label: 'Applications',
      value: implementedInsights ? '342' : '205',
      previousPeriod: implementedInsights ? '+67% vs Week 2' : '-',
      change: implementedInsights ? { value: '67%', isPositive: true } : undefined,
    },
    {
      label: 'Responses',
      value: implementedInsights ? '41' : '18',
      previousPeriod: implementedInsights ? '12% rate ↑3%' : '9% rate',
      change: implementedInsights ? { value: '3%', isPositive: true } : undefined,
    },
    {
      label: 'Interviews',
      value: implementedInsights ? '8' : '3',
      previousPeriod: 'scheduled',
      change: implementedInsights ? { value: '5', isPositive: true } : undefined,
    },
    {
      label: 'Offers',
      value: implementedInsights ? '2' : '0',
      previousPeriod: implementedInsights ? 'pending' : '-',
    },
  ]

  const insights: PerformanceInsight[] = [
    {
      id: '1',
      description: 'Tuesday morning applies',
      impact: '+5% response',
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      id: '2',
      description: 'Shorter resume',
      impact: '+3% response',
      icon: <CaretUp className="w-4 h-4" />,
    },
    {
      id: '3',
      description: 'Referral mentions',
      impact: '+8% response',
      icon: <CheckCircle className="w-4 h-4" />,
    },
  ]

  const strategyAdjustments: StrategyAdjustment[] = [
    {
      id: '1',
      description: 'More Tuesday applications',
    },
    {
      id: '2',
      description: 'Condensing all resumes',
    },
    {
      id: '3',
      description: 'Finding more referral paths',
    },
  ]

  return (
    <div className="w-full">
      {implementedInsights ? (
        <WeeklyIntelligenceReport
          week={3}
          stats={stats}
          insights={insights}
          strategyAdjustments={strategyAdjustments}
          projectedOffers="4-6"
          onImplementInsights={() => setImplementedInsights(false)}
        />
      ) : (
        <WeeklyIntelligenceReport
          week={2}
          stats={stats}
          insights={insights}
          strategyAdjustments={strategyAdjustments}
          onImplementInsights={() => setImplementedInsights(true)}
        />
      )}
    </div>
  )
}
