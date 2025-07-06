'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Bell, ArrowRight, Star, FirstAidKit, MapPin, CurrencyDollar, Clock, CheckCircle } from '@phosphor-icons/react'
import { useState } from 'react'

interface MatchReason {
  icon: React.ReactNode
  text: string
}

interface OpportunityAlertProps {
  company: string
  position: string
  matchScore: number
  matchReasons: MatchReason[]
  appliedAutomatically?: boolean
  onViewDetails?: () => void
  onDismiss?: () => void
  className?: string
}

export function OpportunityAlert({
  company,
  position,
  matchScore,
  matchReasons,
  appliedAutomatically,
  onViewDetails,
  onDismiss,
  className,
}: OpportunityAlertProps) {
  return (
    <div className={cn('max-w-2xl mx-auto', className)}>
      <Card className="w-full" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary-600 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <Badge className="mb-1 bg-green-100 text-green-800 border-green-200">Perfect Match Alert</Badge>
              <CardTitle className="text-lg">
                {company} - {position}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div>
              <p className="text-sm text-blue-700 dark:text-blue-300">Match score</p>
              <p className="font-semibold text-blue-800 dark:text-blue-200">{matchScore}% perfect fit</p>
            </div>
            <div className="w-16 h-16">
              <div className="w-full h-full relative rounded-full">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="3"
                    className="dark:stroke-blue-900"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeDasharray={`${matchScore}, 100`}
                    className="dark:stroke-blue-400"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-blue-800 dark:text-blue-200">
                  {matchScore}%
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Why it's perfect:</h3>
            <div className="space-y-2">
              {matchReasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border"
                >
                  <div className="flex-shrink-0 mt-0.5 text-gray-500 dark:text-gray-400">{reason.icon}</div>
                  <div className="text-gray-700 dark:text-gray-300">{reason.text}</div>
                </div>
              ))}
            </div>
          </div>

          {appliedAutomatically ? (
            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">AI automatically applied for you!</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              {onViewDetails && (
                <Button onClick={onViewDetails} className="flex-1" color="primary">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}

              {onDismiss && (
                <Button onClick={onDismiss} variant="outline" className="flex-1">
                  Dismiss
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface BackgroundMonitorStats {
  newJobsFound: number
  highMatchCount: number
  appliedCount: number
  interviewsScheduled: number
}

interface BackgroundMonitorProps {
  stats: BackgroundMonitorStats
  latestAlerts: {
    company: string
    position: string
    matchScore: number
    timeAgo: string
  }[]
  onViewAll?: () => void
  className?: string
}

export function BackgroundMonitor({ stats, latestAlerts, onViewAll, className }: BackgroundMonitorProps) {
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
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Job Monitoring Active</CardTitle>
              <CardDescription>AI is continuously scanning for perfect matches</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Card variant="solid" className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-800 dark:text-blue-300">{stats.newJobsFound}</div>
                <p className="text-sm text-blue-600 dark:text-blue-400">New jobs found</p>
              </CardContent>
            </Card>

            <Card variant="solid" className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-800 dark:text-green-300">{stats.highMatchCount}</div>
                <p className="text-sm text-green-600 dark:text-green-400">High matches</p>
              </CardContent>
            </Card>

            <Card
              variant="solid"
              className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800"
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-800 dark:text-purple-300">{stats.appliedCount}</div>
                <p className="text-sm text-purple-600 dark:text-purple-400">Auto-applied</p>
              </CardContent>
            </Card>

            <Card variant="solid" className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-amber-800 dark:text-amber-300">{stats.interviewsScheduled}</div>
                <p className="text-sm text-amber-600 dark:text-amber-400">Interviews</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium">Latest alerts:</h3>
              {onViewAll && (
                <Button variant="ghost" size="sm" onClick={onViewAll}>
                  View all
                </Button>
              )}
            </div>

            <div className="space-y-2">
              {latestAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="p-3 border rounded-lg bg-white/50 dark:bg-gray-800/50 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">{alert.matchScore}%</Badge>
                    <div>
                      <div className="font-medium">{alert.company}</div>
                      <div className="text-sm text-gray-500">{alert.position}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{alert.timeAgo}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function OpportunityMonitoringDemo() {
  const [view, setView] = useState<'alert' | 'monitor' | 'dismissed'>('alert')

  const matchReasons: MatchReason[] = [
    {
      icon: <Star className="w-4 h-4" />,
      text: 'Perfectly matches your experience with Python and ML',
    },
    {
      icon: <FirstAidKit className="w-4 h-4" />,
      text: 'Healthcare industry (your preferred sector)',
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Remote position with flexible hours',
    },
    {
      icon: <CurrencyDollar className="w-4 h-4" />,
      text: 'Salary range $150-180k (above your minimum)',
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: 'Posted 1 hour ago (early application advantage)',
    },
  ]

  const monitoringStats: BackgroundMonitorStats = {
    newJobsFound: 128,
    highMatchCount: 12,
    appliedCount: 48,
    interviewsScheduled: 3,
  }

  const latestAlerts = [
    { company: 'OpenAI', position: 'ML Engineer', matchScore: 94, timeAgo: '2h ago' },
    { company: 'Anthropic', position: 'Research Engineer', matchScore: 91, timeAgo: '4h ago' },
    { company: 'Scale AI', position: 'Senior AI Engineer', matchScore: 87, timeAgo: '12h ago' },
  ]

  return (
    <div className="w-full">
      {view === 'alert' && (
        <OpportunityAlert
          company="OpenAI"
          position="ML Engineer"
          matchScore={94}
          matchReasons={matchReasons}
          onViewDetails={() => setView('monitor')}
          onDismiss={() => setView('dismissed')}
        />
      )}

      {view === 'monitor' && (
        <BackgroundMonitor stats={monitoringStats} latestAlerts={latestAlerts} onViewAll={() => setView('alert')} />
      )}

      {view === 'dismissed' && (
        <Card className="max-w-lg mx-auto" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Alert Dismissed</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              No problem! We'll continue monitoring for other perfect matches.
            </p>
            <div className="space-y-3">
              <Button onClick={() => setView('monitor')} color="primary">
                View Monitoring Dashboard
              </Button>
              <Button onClick={() => setView('alert')} variant="outline">
                Show Alert Again
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
