'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Warning, Check, CheckCircle, ShieldCheck, Sparkle } from '@phosphor-icons/react'
import { useState } from 'react'

interface PotentialIssue {
  id: string
  severity: 'high' | 'medium' | 'low'
  issue: string
  solution: string
}

interface ApplicationQualityControlProps {
  companyName: string
  potentialIssues: PotentialIssue[]
  isPassed?: boolean
  onSubmitApplication?: () => void
  onReviewChanges?: () => void
  className?: string
}

export function ApplicationQualityControl({
  companyName,
  potentialIssues,
  isPassed = false,
  onSubmitApplication,
  onReviewChanges,
  className,
}: ApplicationQualityControlProps) {
  const getSeverityColor = (severity: PotentialIssue['severity']) => {
    switch (severity) {
      case 'high':
        return 'text-red-600'
      case 'medium':
        return 'text-amber-600'
      case 'low':
        return 'text-blue-600'
    }
  }

  const getSeverityBadge = (severity: PotentialIssue['severity']) => {
    switch (severity) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800 border-red-200">High</Badge>
      case 'medium':
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Medium</Badge>
      case 'low':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Low</Badge>
    }
  }

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
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">AI Caught Potential Issues</CardTitle>
              <CardDescription>Before submitting to {companyName}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            {potentialIssues.map((issue) => (
              <Card
                key={issue.id}
                variant="solid"
                className="bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={cn('mt-0.5', getSeverityColor(issue.severity))}>
                      <Warning className="w-5 h-5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white">{issue.issue}</h4>
                        <div>{getSeverityBadge(issue.severity)}</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="text-green-600 mt-0.5">
                          <Sparkle className="w-4 h-4" />
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-400">{issue.solution}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card
            variant="solid"
            className={cn(
              'bg-opacity-50 dark:bg-opacity-20',
              isPassed
                ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800'
                : 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800',
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <h3
                  className={cn(
                    'font-medium',
                    isPassed ? 'text-green-800 dark:text-green-300' : 'text-amber-800 dark:text-amber-300',
                  )}
                >
                  Quality check:
                </h3>
                {isPassed ? (
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <Check className="w-3 h-3 mr-1" />
                    Passed
                  </Badge>
                ) : (
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                    <Warning className="w-3 h-3 mr-1" />
                    Issues found
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-3">
            {isPassed && onSubmitApplication && (
              <Button onClick={onSubmitApplication} color="primary" className="flex-1">
                Submit Application
              </Button>
            )}

            {onReviewChanges && (
              <Button onClick={onReviewChanges} variant="outline" className="flex-1">
                Review Changes
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function FailurePreventionDemo() {
  const [state, setState] = useState<'issues' | 'fixed' | 'submitted'>('issues')

  const initialIssues: PotentialIssue[] = [
    {
      id: '1',
      severity: 'high',
      issue: 'Resume has "Googler" in bio',
      solution: 'AI removed competitive reference',
    },
    {
      id: '2',
      severity: 'medium',
      issue: 'GitHub has Android projects',
      solution: 'AI emphasizing iOS work instead',
    },
    {
      id: '3',
      severity: 'low',
      issue: 'Cover letter mentions Windows',
      solution: 'AI rewrote for Apple ecosystem',
    },
  ]

  return (
    <div className="w-full">
      {state === 'issues' && (
        <ApplicationQualityControl
          companyName="Apple"
          potentialIssues={initialIssues}
          isPassed={false}
          onReviewChanges={() => setState('fixed')}
        />
      )}

      {state === 'fixed' && (
        <ApplicationQualityControl
          companyName="Apple"
          potentialIssues={[]}
          isPassed={true}
          onSubmitApplication={() => setState('submitted')}
          onReviewChanges={() => setState('issues')}
        />
      )}

      {state === 'submitted' && (
        <Card className="max-w-lg mx-auto" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Application Submitted!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your optimized application has been submitted to Apple.
            </p>
            <div className="flex flex-col gap-3">
              <Button onClick={() => setState('issues')} color="primary">
                Start New Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
