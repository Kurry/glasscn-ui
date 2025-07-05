'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowRight, Mic, Lightbulb, Plus } from 'lucide-react'
import { useState } from 'react'

interface FormField {
  id: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea'
  placeholder?: string
  required?: boolean
  value?: string
}

interface AISuggestion {
  text: string
  type: 'bullet' | 'improvement'
}

interface FormBuilderProps {
  title: string
  subtitle?: string
  tip?: string
  step: number
  totalSteps: number
  fields: FormField[]
  aiSuggestions?: AISuggestion[]
  onFieldChange?: (fieldId: string, value: string) => void
  onVoiceInput?: () => void
  onUseSuggestions?: () => void
  onContinue?: () => void
  onAddAnother?: () => void
  className?: string
}

export function FormBuilder({
  title,
  subtitle,
  tip,
  step,
  totalSteps,
  fields,
  aiSuggestions,
  onFieldChange,
  onVoiceInput,
  onUseSuggestions,
  onContinue,
  onAddAnother,
  className,
}: FormBuilderProps) {
  const progress = (step / totalSteps) * 100

  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader>
          <CardTitle className="text-xl">
            {title} (Step {step}/{totalSteps})
          </CardTitle>
          {subtitle && <CardDescription className="text-base">{subtitle}</CardDescription>}
          {tip && (
            <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-700 dark:text-blue-300">{tip}</p>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Form Fields */}
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id}>
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </Label>
                {field.type === 'textarea' ? (
                  <Textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    value={field.value || ''}
                    onChange={(e) => onFieldChange?.(field.id, e.target.value)}
                    className="min-h-[100px]"
                  />
                ) : (
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value || ''}
                    onChange={(e) => onFieldChange?.(field.id, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Voice Input Option */}
          {onVoiceInput && (
            <div className="flex justify-center">
              <Button 
                onClick={onVoiceInput} 
                variant="outline" 
                size="lg"
                className="flex items-center gap-2"
              >
                <Mic className="w-4 h-4" />
                🎙️ Describe with Voice
              </Button>
            </div>
          )}

          {/* AI Suggestions */}
          {aiSuggestions && aiSuggestions.length > 0 && (
            <Card variant="solid" className="bg-primary-50 dark:bg-primary-950/20 border-primary-200 dark:border-primary-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    AI is suggesting:
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  {aiSuggestions.map((suggestion, index) => (
                    <div key={index} className="text-sm text-primary-700 dark:text-primary-300">
                      • {suggestion.text}
                    </div>
                  ))}
                </div>
                {onUseSuggestions && (
                  <Button 
                    onClick={onUseSuggestions} 
                    size="sm" 
                    color="primary"
                    className="w-full"
                  >
                    Use these <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {onAddAnother && (
              <Button onClick={onAddAnother} variant="outline" size="lg">
                <Plus className="w-4 h-4 mr-2" />
                Add Another
              </Button>
            )}
            {onContinue && (
              <Button onClick={onContinue} size="lg" color="primary" className="flex-1">
                {step === totalSteps ? 'Complete' : 'Continue'} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>

          <Progress value={progress} className="h-1" />
        </CardContent>
      </Card>
    </div>
  )
}

interface ResumeBuilderProps {
  onContinue: () => void
  className?: string
}

export function ResumeBuilder({ onContinue, className }: ResumeBuilderProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const basicInfoFields: FormField[] = [
    { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Smith', required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: true },
    { id: 'phone', label: 'Phone', type: 'tel', placeholder: '(555) 123-4567', required: true },
    { id: 'location', label: 'Location', type: 'text', placeholder: 'San Francisco, CA' },
  ]

  const handleFieldChange = (fieldId: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
  }

  return (
    <FormBuilder
      title="Let's build your resume"
      subtitle="Basic Information"
      step={1}
      totalSteps={5}
      fields={basicInfoFields.map(field => ({ ...field, value: formData[field.id] }))}
      onFieldChange={handleFieldChange}
      onContinue={onContinue}
      className={className}
    />
  )
}

interface ExperienceBuilderProps {
  onContinue: () => void
  onAddAnother: () => void
  className?: string
}

export function ExperienceBuilder({ onContinue, onAddAnother, className }: ExperienceBuilderProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const experienceFields: FormField[] = [
    { id: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'Software Engineer', required: true },
    { id: 'company', label: 'Company', type: 'text', placeholder: 'Tech Corp', required: true },
    { id: 'description', label: 'What you did:', type: 'textarea', placeholder: 'I was responsible for...' },
  ]

  const aiSuggestions: AISuggestion[] = [
    { text: 'Led development of...', type: 'bullet' },
    { text: 'Increased performance by...', type: 'bullet' },
    { text: 'Collaborated with...', type: 'bullet' },
  ]

  const handleFieldChange = (fieldId: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
  }

  return (
    <FormBuilder
      title="Add Your Experience"
      tip="💡 Tip: Start with your current/recent job"
      step={2}
      totalSteps={5}
      fields={experienceFields.map(field => ({ ...field, value: formData[field.id] }))}
      aiSuggestions={aiSuggestions}
      onFieldChange={handleFieldChange}
      onVoiceInput={() => console.log('Voice input')}
      onUseSuggestions={() => console.log('Use suggestions')}
      onContinue={onContinue}
      onAddAnother={onAddAnother}
      className={className}
    />
  )
}