'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

interface SurveyOption {
  value: string
  emoji: string
  label: string
  description?: string
}

interface WelcomeSurveyProps {
  onComplete?: (responses: Record<string, string>) => void
  className?: string
}

export function WelcomeSurvey({ onComplete, className }: WelcomeSurveyProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [responses, setResponses] = useState<Record<string, string>>({})

  const surveys = [
    {
      id: 'situation',
      title: 'Welcome! Let\'s personalize your experience',
      subtitle: 'What\'s your current situation? (1 of 3)',
      options: [
        { value: 'laid-off', emoji: '😔', label: 'Recently laid off' },
        { value: 'employed', emoji: '👔', label: 'Employed, but looking' },
        { value: 'graduate', emoji: '🎓', label: 'New graduate' },
        { value: 'returning', emoji: '🔄', label: 'Returning to workforce' },
      ]
    },
    {
      id: 'need',
      title: 'What do you need most right now?',
      subtitle: 'Select your top priority (2 of 3)',
      options: [
        { value: 'resume', emoji: '📄', label: 'Build/fix my resume' },
        { value: 'apply', emoji: '⚡', label: 'Apply to many jobs quickly' },
        { value: 'recruiter', emoji: '📞', label: 'Handle recruiter outreach' },
        { value: 'all', emoji: '🎯', label: 'All of the above' },
      ]
    },
    {
      id: 'timeline',
      title: 'How soon do you need a job?',
      subtitle: 'This helps us prioritize features (3 of 3)',
      options: [
        { value: 'asap', emoji: '🚨', label: 'ASAP - I need income now' },
        { value: '1-2-months', emoji: '📅', label: '1-2 months' },
        { value: '3-months', emoji: '🗓️', label: '3+ months' },
        { value: 'exploring', emoji: '🔍', label: 'Just exploring' },
      ]
    }
  ]

  const currentSurvey = surveys[currentStep - 1]

  const handleValueChange = (value: string) => {
    setResponses(prev => ({ ...prev, [currentSurvey.id]: value }))
  }

  const handleContinue = () => {
    if (currentStep < surveys.length) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete?.(responses)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canContinue = responses[currentSurvey.id]

  return (
    <div className={cn(
      "min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4",
      className
    )}>
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{currentSurvey.title}</CardTitle>
          <CardDescription className="text-base">{currentSurvey.subtitle}</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <RadioGroup 
            value={responses[currentSurvey.id]} 
            onValueChange={handleValueChange}
            className="space-y-3"
          >
            {currentSurvey.options.map((option) => (
              <Card 
                key={option.value}
                className={cn(
                  "cursor-pointer transition-all hover:shadow-md",
                  responses[currentSurvey.id] === option.value && "ring-2 ring-primary-500 bg-primary-50 dark:bg-primary-950/20"
                )}
                variant="solid"
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label 
                      htmlFor={option.value} 
                      className="flex-1 cursor-pointer flex items-center gap-3"
                    >
                      <span className="text-2xl">{option.emoji}</span>
                      <div>
                        <div className="font-medium">{option.label}</div>
                        {option.description && (
                          <div className="text-sm text-gray-500">{option.description}</div>
                        )}
                      </div>
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>

          {/* Navigation */}
          <div className="flex justify-between">
            {currentStep > 1 ? (
              <Button onClick={handleBack} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            ) : (
              <Button variant="ghost" disabled>
                Skip
              </Button>
            )}
            
            <Button 
              onClick={handleContinue} 
              disabled={!canContinue}
              color="primary"
            >
              {currentStep === surveys.length ? 'Get Started' : 'Continue'} 
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}