'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowRight, X, MapPin, DollarSign, Briefcase, Clock } from 'lucide-react'
import { useState } from 'react'

interface JobPreferencesProps {
  title: string
  subtitle?: string
  step: number
  totalSteps: number
  onContinue?: () => void
  className?: string
}

export function JobPreferences({ title, subtitle, step, totalSteps, onContinue, className }: JobPreferencesProps) {
  const [jobTitles, setJobTitles] = useState<string[]>(['Software Engineer'])
  const [newTitle, setNewTitle] = useState('')
  const [location, setLocation] = useState('')
  const [salaryMin, setSalaryMin] = useState('')
  const [workType, setWorkType] = useState('')
  const [remoteWork, setRemoteWork] = useState(false)

  const addJobTitle = () => {
    if (newTitle.trim() && !jobTitles.includes(newTitle.trim())) {
      setJobTitles([...jobTitles, newTitle.trim()])
      setNewTitle('')
    }
  }

  const removeJobTitle = (title: string) => {
    setJobTitles(jobTitles.filter((t) => t !== title))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addJobTitle()
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
        <CardHeader>
          <CardTitle className="text-xl">
            {title} ({step}/{totalSteps})
          </CardTitle>
          {subtitle && <CardDescription>{subtitle}</CardDescription>}
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Job Titles */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Target Job Titles:
            </Label>

            {/* Current titles */}
            <div className="flex flex-wrap gap-2">
              {jobTitles.map((title) => (
                <Badge key={title} variant="outline" className="flex items-center gap-1">
                  {title}
                  <button onClick={() => removeJobTitle(title)} className="ml-1 hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>

            {/* Add new title */}
            <div className="flex gap-2">
              <Input
                placeholder="Add job title..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={addJobTitle} variant="outline">
                Add
              </Button>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Preferred Location:
            </Label>
            <Input
              id="location"
              placeholder="San Francisco, CA"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Remote Work */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remote"
              checked={remoteWork}
              onCheckedChange={(checked) => setRemoteWork(checked as boolean)}
            />
            <Label htmlFor="remote">Open to remote work</Label>
          </div>

          {/* Salary */}
          <div className="space-y-2">
            <Label htmlFor="salary" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Minimum Salary:
            </Label>
            <Input
              id="salary"
              placeholder="$120,000"
              value={salaryMin}
              onChange={(e) => setSalaryMin(e.target.value)}
            />
          </div>

          {/* Work Type */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Employment Type:
            </Label>
            <Select value={workType} onValueChange={setWorkType}>
              <SelectTrigger>
                <SelectValue placeholder="Select employment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Continue Button */}
          <Button onClick={onContinue} className="w-full" size="lg" color="primary">
            {step === totalSteps ? 'Start Automation' : 'Continue'} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

interface QuickJobPreferencesProps {
  onContinue: () => void
  className?: string
}

export function QuickJobPreferences({ onContinue, className }: QuickJobPreferencesProps) {
  return (
    <JobPreferences
      title="Tell AI what to look for"
      step={1}
      totalSteps={2}
      onContinue={onContinue}
      className={className}
    />
  )
}
