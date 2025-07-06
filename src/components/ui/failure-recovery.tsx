'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Warning, Clock, CheckCircle, UserCheck } from '@phosphor-icons/react'
import { useState } from 'react'

interface RoadblockAlertProps {
  jobCompany: string
  issueDescription: string
  options: {
    id: string
    label: string
    description: string
    successRate?: number
    icon?: React.ReactNode
    isPrimary?: boolean
  }[]
  activeJobCount?: number
  onSelectOption?: (optionId: string) => void
  className?: string
}

export function RoadblockAlert({
  jobCompany,
  issueDescription,
  options,
  activeJobCount,
  onSelectOption,
  className,
}: RoadblockAlertProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-amber-600 dark:text-amber-500">
              <Warning className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-lg">Agent Needs Quick Help</CardTitle>
              <CardDescription className="text-base">Human decision required</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-3">
              <div className="text-amber-600 dark:text-amber-500 mt-0.5">
                <Warning className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-amber-900 dark:text-amber-200">
                  {jobCompany}'s application has an issue
                </p>
                <p className="text-amber-700 dark:text-amber-300">{issueDescription}</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium">Options:</h3>
            {options.map((option) => (
              <Button
                key={option.id}
                variant={option.isPrimary ? 'default' : 'outline'}
                color={option.isPrimary ? 'primary' : 'default'}
                className="w-full justify-start h-auto py-3 px-4"
                onClick={() => onSelectOption?.(option.id)}
              >
                <div className="flex items-start gap-3 text-left">
                  <div
                    className={cn(
                      'mt-0.5 flex-shrink-0',
                      option.isPrimary ? 'text-white' : 'text-primary-600 dark:text-primary-400',
                    )}
                  >
                    {option.icon}
                  </div>
                  <div>
                    <p className="font-medium">{option.label}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs opacity-90">{option.description}</p>
                      {option.successRate && (
                        <Badge
                          variant="outline"
                          className={cn(
                            'text-xs',
                            option.successRate >= 70
                              ? 'bg-green-50 text-green-700 dark:bg-green-950/20 dark:text-green-400'
                              : 'bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400',
                          )}
                        >
                          {option.successRate}% success
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {activeJobCount && activeJobCount > 0 && (
            <div className="text-center pt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {activeJobCount} other applications continuing...
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface SmartWorkaroundProps {
  jobCompany: string
  issue: string
  suggestedSolutions: {
    name: string
    details: string
  }[]
  onUseSolution?: () => void
  onSkipJob?: () => void
  className?: string
}

export function SmartWorkaround({
  jobCompany,
  issue,
  suggestedSolutions,
  onUseSolution,
  onSkipJob,
  className,
}: SmartWorkaroundProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary-600">
              <CheckCircle className="w-6 h-6" />
            </div>
            <CardTitle className="text-lg">AI Found a Solution</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <p className="font-medium text-blue-900 dark:text-blue-200 mb-2">
              {jobCompany} requires {issue}
            </p>

            <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">AI found from your LinkedIn:</p>

            <div className="space-y-2">
              {suggestedSolutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-2 text-blue-700 dark:text-blue-300">
                  <span className="flex-shrink-0">•</span>
                  <div>
                    <span className="font-medium">{solution.name}</span>
                    <span> - {solution.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {onUseSolution && (
              <Button onClick={onUseSolution} className="flex-1" color="primary">
                Use these references
              </Button>
            )}

            {onSkipJob && (
              <Button onClick={onSkipJob} variant="outline" className="flex-1">
                Skip job
              </Button>
            )}
          </div>

          <div className="text-center pt-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">AI will continue with other applications</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function FailureRecoveryDemo() {
  const [view, setView] = useState<'roadblock' | 'workaround' | 'resolved' | 'skipped'>('roadblock')

  const roadblockOptions = [
    {
      id: 'skip',
      label: 'Skip this job',
      description: 'Resume in 5 sec',
      icon: <Clock className="w-5 h-5" />,
    },
    {
      id: 'template',
      label: 'Use template answer',
      description: '70% success',
      successRate: 70,
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      id: 'manual',
      label: 'Pause all',
      description: 'Handle manually',
      icon: <UserCheck className="w-5 h-5" />,
      isPrimary: true,
    },
  ]

  const handleRoadblockOption = (optionId: string) => {
    if (optionId === 'skip') {
      setView('skipped')
    } else if (optionId === 'template') {
      setView('workaround')
    } else if (optionId === 'manual') {
      setView('workaround') // Just for demo - in real app would show manual interface
    }
  }

  const suggestedReferences = [
    {
      name: 'John D.',
      details: 'Former manager (connected)',
    },
    {
      name: 'Sarah M.',
      details: 'Colleague at Google',
    },
    {
      name: 'Mike R.',
      details: 'Direct report',
    },
  ]

  return (
    <div className="w-full">
      {view === 'roadblock' && (
        <RoadblockAlert
          jobCompany="Apple"
          issueDescription='Custom question: "Draw something that represents your coding philosophy"'
          options={roadblockOptions}
          activeJobCount={12}
          onSelectOption={handleRoadblockOption}
        />
      )}

      {view === 'workaround' && (
        <SmartWorkaround
          jobCompany="Netflix"
          issue="3 references"
          suggestedSolutions={suggestedReferences}
          onUseSolution={() => setView('resolved')}
          onSkipJob={() => setView('skipped')}
        />
      )}

      {view === 'resolved' && (
        <Card className="max-w-lg mx-auto" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Solution Applied!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              AI successfully added the references and continued with the application.
            </p>
            <Button onClick={() => setView('roadblock')}>Reset Demo</Button>
          </CardContent>
        </Card>
      )}

      {view === 'skipped' && (
        <Card className="max-w-lg mx-auto" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Job Skipped</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This job was skipped and AI has moved on to other applications.
            </p>
            <Button onClick={() => setView('roadblock')}>Reset Demo</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
