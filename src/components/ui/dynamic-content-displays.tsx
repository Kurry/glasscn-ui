'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { useState } from 'react'

interface TechSkill {
  name: string
  size: 'sm' | 'md' | 'lg' | 'xl'
  isNew?: boolean
}

interface TechStackCloudProps {
  skills: TechSkill[]
  missingSkills: string[]
  onAddSkill?: (skill: string) => void
  className?: string
}

export function TechStackCloud({ skills, missingSkills, onAddSkill, className }: TechStackCloudProps) {
  const getSizeClass = (size: TechSkill['size']) => {
    switch (size) {
      case 'sm':
        return 'text-sm'
      case 'md':
        return 'text-base'
      case 'lg':
        return 'text-lg'
      case 'xl':
        return 'text-xl'
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
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Your Tech Stack Cloud</CardTitle>
          <CardDescription className="text-base">AI-detected skills from your resume and GitHub</CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Tech Stack Cloud */}
          <div className="flex flex-wrap justify-center gap-3 p-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className={cn(
                  'px-3 py-1.5 bg-primary-100 hover:bg-primary-200 text-primary-800 border-primary-200',
                  'dark:bg-primary-900/30 dark:text-primary-300 dark:border-primary-800',
                  getSizeClass(skill.size),
                  skill.isNew && 'ring-2 ring-green-400 dark:ring-green-500',
                )}
              >
                {skill.name}
                {skill.isNew && <span className="ml-1 text-green-600 dark:text-green-400 text-xs">✨</span>}
              </Badge>
            ))}
          </div>

          {/* Missing Skills */}
          {missingSkills.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-medium text-center">Missing for target roles:</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {missingSkills.map((skill, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => onAddSkill?.(skill)}
                    className="flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    {skill}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-center text-gray-500">Click to add with context</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface RevenueMetric {
  year: string
  amount: string
  percentage: number
}

interface RevenueTimelineProps {
  metrics: RevenueMetric[]
  source: string
  className?: string
}

export function RevenueTimeline({ metrics, source, className }: RevenueTimelineProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Revenue Impact Timeline</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-3">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{metric.year}:</span>
                  <span className="font-bold">{metric.amount}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-6 rounded-sm overflow-hidden">
                  <div
                    className="h-full bg-green-600 dark:bg-green-500"
                    style={{ width: `${metric.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-600 dark:text-gray-400 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <p>AI found these metrics from your {source}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function DynamicContentDemo() {
  const [addedSkills, setAddedSkills] = useState<string[]>([])

  const initialSkills: TechSkill[] = [
    { name: 'Python', size: 'xl' },
    { name: 'React', size: 'lg' },
    { name: 'Node.js', size: 'lg' },
    { name: 'AWS', size: 'lg' },
    { name: 'Docker', size: 'md' },
    { name: 'Kubernetes', size: 'md' },
    { name: 'SQL', size: 'lg' },
    { name: 'Git', size: 'md' },
    { name: 'TensorFlow', size: 'sm' },
    { name: 'Redis', size: 'sm' },
  ]

  const missingSkillsInitial = ['Go', 'Rust', 'GraphQL', 'TypeScript']
  const missingSkills = missingSkillsInitial.filter((skill) => !addedSkills.includes(skill))

  const skills = [
    ...initialSkills,
    ...addedSkills.map((skill) => ({
      name: skill,
      size: 'md' as const,
      isNew: true,
    })),
  ]

  const handleAddSkill = (skill: string) => {
    setAddedSkills((prev) => [...prev, skill])
  }

  const revenueMetrics: RevenueMetric[] = [
    { year: '2023', amount: '$2.3M', percentage: 100 },
    { year: '2022', amount: '$1.8M', percentage: 78 },
    { year: '2021', amount: '$1.2M', percentage: 52 },
  ]

  return (
    <div className="space-y-8">
      <TechStackCloud skills={skills} missingSkills={missingSkills} onAddSkill={handleAddSkill} />

      <div className="h-8"></div>

      <RevenueTimeline metrics={revenueMetrics} source="LinkedIn posts and email signatures" />
    </div>
  )
}
