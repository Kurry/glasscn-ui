'use client'

import { SurveyStep } from '@/components/ui/survey-step'
import { useState } from 'react'

interface ContextSurveyProps {
  onComplete?: (responses: Record<string, string>) => void
  className?: string
}

export function ContextSurvey({ onComplete, className }: ContextSurveyProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [responses, setResponses] = useState<Record<string, string>>({})

  const steps = [
    {
      id: 'situation',
      title: "Let's personalize your experience",
      subtitle: 'What best describes you?',
      options: [
        { value: 'laid-off', label: 'Recently laid off', emoji: '😔' },
        { value: 'employed-looking', label: 'Employed but looking', emoji: '🔍' },
        { value: 'graduate', label: 'Recent graduate', emoji: '🎓' },
        { value: 'career-change', label: 'Career changer', emoji: '🔄' },
      ],
    },
    {
      id: 'priority',
      title: "What's your #1 priority?",
      options: [
        { value: 'fix-resume', label: 'Fix my outdated resume', emoji: '📄' },
        { value: 'apply-quickly', label: 'Apply to lots of jobs quickly', emoji: '⚡' },
        { value: 'stop-missing-calls', label: 'Stop missing recruiter calls', emoji: '📞' },
        { value: 'avoid-scams', label: 'Avoid job scams', emoji: '🛡️' },
      ],
    },
    {
      id: 'urgency',
      title: 'How urgent is your search?',
      options: [
        { value: 'asap', label: 'ASAP - I need income', emoji: '🚨' },
        { value: 'selective', label: '1-2 months - Being selective', emoji: '🎯' },
        { value: 'exploring', label: 'Just exploring options', emoji: '🔍' },
      ],
    },
  ]

  const currentStepData = steps[currentStep - 1]

  const handleValueChange = (value: string) => {
    setResponses((prev) => ({ ...prev, [currentStepData.id]: value }))
  }

  const handleContinue = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete?.(responses)
    }
  }

  return (
    <SurveyStep
      title={currentStepData.title}
      subtitle={currentStepData.subtitle}
      step={currentStep}
      totalSteps={steps.length}
      options={currentStepData.options}
      value={responses[currentStepData.id]}
      onValueChange={handleValueChange}
      onContinue={handleContinue}
      className={className}
    />
  )
}
