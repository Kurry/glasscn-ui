'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SurveyOption {
  value: string
  label: string
  emoji?: string
  description?: string
}

interface SurveyStepProps {
  title: string
  subtitle?: string
  step: number
  totalSteps: number
  options: SurveyOption[]
  value?: string
  onValueChange?: (value: string) => void
  onContinue?: () => void
  className?: string
}

export function SurveyStep({
  title,
  subtitle,
  step,
  totalSteps,
  options,
  value,
  onValueChange,
  onContinue,
  className,
}: SurveyStepProps) {
  const progress = (step / totalSteps) * 100

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            {title} ({step}/{totalSteps})
          </CardTitle>
          {subtitle && <p className="text-base text-gray-600 dark:text-gray-400 mt-2">{subtitle}</p>}
        </CardHeader>

        <CardContent className="space-y-6">
          <RadioGroup value={value} onValueChange={onValueChange} className="space-y-3">
            {options.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="flex-1 cursor-pointer flex items-center gap-2">
                  {option.emoji && <span className="text-lg">{option.emoji}</span>}
                  <div>
                    <div className="font-medium">{option.label}</div>
                    {option.description && <div className="text-sm text-gray-500">{option.description}</div>}
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>

          <Button onClick={onContinue} className="w-full" size="lg" color="primary" disabled={!value}>
            {step === totalSteps ? 'Get Started' : 'Continue'} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-2 h-2 rounded-full transition-colors',
                  i < step ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600',
                )}
              />
            ))}
          </div>

          <Progress value={progress} className="h-1" />
        </CardContent>
      </Card>
    </div>
  )
}
