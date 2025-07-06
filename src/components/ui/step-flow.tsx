'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

interface Step {
  id: string
  title: string
  description?: string
  component: React.ReactNode
  optional?: boolean
}

interface StepFlowProps {
  steps: Step[]
  currentStep?: number
  onStepChange?: (step: number) => void
  onComplete?: () => void
  allowSkip?: boolean
  showProgress?: boolean
  className?: string
}

export function StepFlow({
  steps,
  currentStep = 0,
  onStepChange,
  onComplete,
  allowSkip = false,
  showProgress = true,
  className,
}: StepFlowProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  const current = Math.max(0, Math.min(currentStep, steps.length - 1))
  const currentStepData = steps[current]
  const progress = ((current + 1) / steps.length) * 100
  const isLastStep = current === steps.length - 1
  const isFirstStep = current === 0

  const handleNext = () => {
    const newCompletedSteps = new Set(completedSteps)
    newCompletedSteps.add(current)
    setCompletedSteps(newCompletedSteps)

    if (isLastStep) {
      onComplete?.()
    } else {
      onStepChange?.(current + 1)
    }
  }

  const handlePrevious = () => {
    if (!isFirstStep) {
      onStepChange?.(current - 1)
    }
  }

  const handleSkip = () => {
    if (allowSkip) {
      handleNext()
    }
  }

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900',
        className,
      )}
    >
      {/* Progress Header */}
      {showProgress && (
        <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{currentStepData.title}</h2>
              <Badge variant="outline">
                Step {current + 1} of {steps.length}
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      )}

      {/* Step Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Step Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{currentStepData.title}</h1>
            {currentStepData.description && (
              <p className="text-gray-600 dark:text-gray-400">{currentStepData.description}</p>
            )}
          </div>

          {/* Step Component */}
          <div className="mb-8">{currentStepData.component}</div>

          {/* Navigation */}
          <Card variant="glass" blur="sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {!isFirstStep && (
                    <Button onClick={handlePrevious} variant="outline" size="lg">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {allowSkip && currentStepData.optional && (
                    <Button onClick={handleSkip} variant="ghost" size="lg">
                      Skip
                    </Button>
                  )}

                  <Button onClick={handleNext} size="lg" color="primary">
                    {isLastStep ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Complete
                      </>
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step Indicators */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-2">
                  <div
                    className={cn(
                      'w-3 h-3 rounded-full transition-colors',
                      index < current
                        ? 'bg-green-500'
                        : index === current
                          ? 'bg-primary-500'
                          : 'bg-gray-300 dark:bg-gray-600',
                    )}
                  />
                  {index < steps.length - 1 && <div className="w-8 h-px bg-gray-300 dark:bg-gray-600" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
