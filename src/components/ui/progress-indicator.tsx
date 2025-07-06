'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Check, Clock, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ProgressStep {
  id: string
  label: string
  status: 'pending' | 'processing' | 'completed'
}

interface ProgressIndicatorProps {
  title: string
  subtitle?: string
  steps: ProgressStep[]
  progress: number
  className?: string
}

export function ProgressIndicator({ title, subtitle, steps, progress, className }: ProgressIndicatorProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <div className="mb-4">
            <Zap className="w-12 h-12 text-primary-600 mx-auto" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          {subtitle && <p className="text-gray-600 dark:text-gray-400 mt-2">{subtitle}</p>}
        </CardHeader>

        <CardContent className="space-y-6">
          <Progress value={progress} className="h-2" />

          <div className="space-y-3">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {step.status === 'completed' && (
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                  {step.status === 'processing' && (
                    <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                      <Clock className="w-3 h-3 text-white animate-pulse" />
                    </div>
                  )}
                  {step.status === 'pending' && <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600" />}
                </div>
                <span
                  className={cn(
                    'text-sm',
                    step.status === 'completed' && 'text-green-600',
                    step.status === 'processing' && 'text-primary-600',
                    step.status === 'pending' && 'text-gray-500',
                  )}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface AnalyzingResumeProps {
  className?: string
}

export function AnalyzingResume({ className }: AnalyzingResumeProps) {
  const [progress, setProgress] = useState(0)

  const steps: ProgressStep[] = [
    { id: 'reading', label: 'Reading document', status: 'completed' },
    { id: 'extracting', label: 'Extracting information', status: 'completed' },
    { id: 'analyzing', label: 'Checking ATS compatibility...', status: 'processing' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 2
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <ProgressIndicator
      title="⚡ Analyzing your resume..."
      steps={steps}
      progress={Math.min(progress, 70)}
      className={className}
    />
  )
}
