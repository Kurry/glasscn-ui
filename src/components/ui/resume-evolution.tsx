'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { ChartLine, ArrowUp, Microscope, Check, Flask } from '@phosphor-icons/react'
import { useState } from 'react'

interface ResumePerformanceData {
  id: string
  name: string
  responseRate: number
  isTesting?: boolean
}

interface ContinuousABTestingProps {
  resumes: ResumePerformanceData[]
  autoOptimizationEnabled: boolean
  onToggleOptimization?: (enabled: boolean) => void
  onViewDetails?: (resumeId: string) => void
  className?: string
}

export function ContinuousABTesting({
  resumes,
  autoOptimizationEnabled,
  onToggleOptimization,
  onViewDetails,
  className,
}: ContinuousABTestingProps) {
  // Sort resumes by response rate
  const sortedResumes = [...resumes].sort((a, b) => b.responseRate - a.responseRate)

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
              <CardTitle className="text-lg">Resume Performance Data</CardTitle>
              <CardDescription>AI is continuously testing and optimizing</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">Your resumes ranked by response rate:</h3>

            <div className="space-y-4">
              {sortedResumes.map((resume, index) => (
                <div
                  key={resume.id}
                  className={cn(
                    'p-3 border rounded-lg',
                    index === 0
                      ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20'
                      : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900',
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-200 dark:bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center font-medium text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium">{resume.name}</h4>
                          {resume.isTesting && (
                            <Badge className="ml-2 bg-purple-100 text-purple-800 border-purple-200">Testing</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{resume.responseRate}% response</p>
                      </div>
                    </div>

                    {onViewDetails && (
                      <Button size="sm" variant="ghost" onClick={() => onViewDetails(resume.id)}>
                        View
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testing Information */}
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <div className="text-blue-600 mt-0.5">
                <Flask className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">🧪 AI is testing new variant:</h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">"Backend + AI/ML v1" with 10 companies</p>
              </div>
            </div>
          </div>

          {/* Auto-optimization Toggle */}
          <div className="flex items-center justify-between border-t pt-4">
            <div className="space-y-0.5">
              <h4 className="font-medium">Auto-optimization</h4>
              <p className="text-xs text-gray-500">Best performer becomes default</p>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="auto-optimization" checked={autoOptimizationEnabled} onCheckedChange={onToggleOptimization} />
              <Label htmlFor="auto-optimization">{autoOptimizationEnabled ? 'ON' : 'OFF'}</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface OptimizationPattern {
  id: string
  before: string
  after: string
  impact: string
}

interface MicroOptimizationsProps {
  patterns: OptimizationPattern[]
  expectedLift: string
  onApplyAll?: () => void
  className?: string
}

export function MicroOptimizations({ patterns, expectedLift, onApplyAll, className }: MicroOptimizationsProps) {
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
              <Microscope className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">AI Discovered Winning Patterns</CardTitle>
              <CardDescription>Small changes with big impact</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            {patterns.map((pattern) => (
              <Card
                key={pattern.id}
                variant="solid"
                className="border-gray-200 bg-white/80 dark:border-gray-700 dark:bg-gray-800/80"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="font-medium">
                        <span className="line-through text-gray-500">{pattern.before}</span>
                        <span className="mx-1">→</span>
                        <span className="text-green-600 dark:text-green-400">{pattern.after}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300">
                        {pattern.impact} response
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {onApplyAll && (
            <div>
              <Button onClick={onApplyAll} className="w-full mb-2" color="primary">
                Apply all optimizations
              </Button>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Expected lift: {expectedLift} response rate
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export function ResumeEvolutionDemo() {
  const [view, setView] = useState<'testing' | 'patterns' | 'applied'>('testing')
  const [autoOptimization, setAutoOptimization] = useState(true)

  const resumePerformanceData: ResumePerformanceData[] = [
    {
      id: 'backend-v3',
      name: '"Backend Focus v3"',
      responseRate: 12,
    },
    {
      id: 'fullstack-v2',
      name: '"Full-Stack v2"',
      responseRate: 8,
    },
    {
      id: 'original',
      name: '"Original"',
      responseRate: 5,
    },
    {
      id: 'backend-ai-ml-v1',
      name: '"Backend + AI/ML v1"',
      responseRate: 0,
      isTesting: true,
    },
  ]

  const optimizationPatterns: OptimizationPattern[] = [
    {
      id: 'verb-1',
      before: '"Led"',
      after: '"Spearheaded"',
      impact: '+3%',
    },
    {
      id: 'cert-1',
      before: 'No AWS cert',
      after: 'Adding AWS cert',
      impact: '+5%',
    },
    {
      id: 'bullets-1',
      before: 'Long bullets',
      after: 'Shorter bullets',
      impact: '+2%',
    },
    {
      id: 'results-1',
      before: 'Vague results',
      after: 'Quantified results',
      impact: '+7%',
    },
  ]

  return (
    <div className="w-full">
      {view === 'testing' && (
        <ContinuousABTesting
          resumes={resumePerformanceData}
          autoOptimizationEnabled={autoOptimization}
          onToggleOptimization={(enabled) => setAutoOptimization(enabled)}
          onViewDetails={() => setView('patterns')}
        />
      )}

      {view === 'patterns' && (
        <MicroOptimizations patterns={optimizationPatterns} expectedLift="+18%" onApplyAll={() => setView('applied')} />
      )}

      {view === 'applied' && (
        <Card className="max-w-lg mx-auto" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Optimizations Applied!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              All winning patterns have been applied to your resumes.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <ArrowUp className="w-4 h-4 text-green-600" />
              <p className="text-green-600 font-medium">Expected response rate now 23%</p>
            </div>
            <Button onClick={() => setView('testing')}>Return to Dashboard</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
