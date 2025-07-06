'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Warning, BookOpen, CheckCircle, FileText, Link, Lightning } from '@phosphor-icons/react'
import { useState } from 'react'

interface LearningResource {
  id: string
  title: string
  duration: string
  description: string
  type: 'course' | 'guide' | 'lab'
  icon?: React.ReactNode
}

interface SkillGapAction {
  id: string
  description: string
  completed?: boolean
}

interface AutoLearningSystemProps {
  skillGap: string
  existingSkill: string
  gapPercentage: number
  resources: LearningResource[]
  aiActions: SkillGapAction[]
  onStartLearning?: () => void
  onSkip?: () => void
  className?: string
}

export function AutoLearningSystem({
  skillGap,
  existingSkill,
  gapPercentage,
  resources,
  aiActions,
  onStartLearning,
  onSkip,
  className,
}: AutoLearningSystemProps) {
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
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-xl">AI Learning Assistant</CardTitle>
              <CardDescription>Helping you close skill gaps in your job search</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Card variant="solid" className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0">
                  <Warning className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-amber-900 dark:text-amber-200 mb-1">
                    Gap detected: {gapPercentage}% of matches need {skillGap}
                  </p>
                  <p className="text-amber-700 dark:text-amber-300">You have: {existingSkill} experience</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <h3 className="font-medium">AI found free resources:</h3>
            <div className="space-y-3">
              {resources.map((resource) => (
                <Card
                  key={resource.id}
                  variant="solid"
                  className="border-gray-200 bg-white/80 dark:border-gray-700 dark:bg-gray-800/80"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="text-primary-600 flex-shrink-0">
                        {resource.icon ||
                          (resource.type === 'course' ? (
                            <BookOpen className="w-5 h-5" />
                          ) : resource.type === 'guide' ? (
                            <FileText className="w-5 h-5" />
                          ) : (
                            <Link className="w-5 h-5" />
                          ))}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{resource.title}</div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs font-normal">
                            {resource.duration}
                          </Badge>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium">Meanwhile, AI is:</h3>
            <div className="space-y-2">
              {aiActions.map((action) => (
                <div key={action.id} className="flex items-start gap-2">
                  {action.completed ? (
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                  ) : (
                    <Lightning className="w-4 h-4 mt-0.5 text-primary-600" />
                  )}
                  <p className="text-gray-700 dark:text-gray-300">{action.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {onStartLearning && (
              <Button onClick={onStartLearning} className="flex-1" color="primary">
                Start Learning
              </Button>
            )}

            {onSkip && (
              <Button onClick={onSkip} variant="outline" className="flex-1">
                Skip for Now
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function SkillsGapDemo() {
  const [started, setStarted] = useState(false)

  const learningResources: LearningResource[] = [
    {
      id: '1',
      title: 'K8s course (3 hrs)',
      description: 'Covers basics',
      duration: '3 hours',
      type: 'course',
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: '2',
      title: 'Docker → K8s transition guide',
      description: 'Perfect for your background',
      duration: '45 min',
      type: 'guide',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: '3',
      title: 'Practice lab access',
      description: 'Hands-on exercises',
      duration: 'Self-paced',
      type: 'lab',
      icon: <Link className="w-5 h-5" />,
    },
  ]

  const aiActions: SkillGapAction[] = [
    {
      id: '1',
      description: 'Adding "K8s (learning)" to resume',
      completed: started,
    },
    {
      id: '2',
      description: 'Emphasizing container experience',
      completed: true,
    },
    {
      id: '3',
      description: 'Targeting Docker-to-K8s transition roles (found 12)',
      completed: true,
    },
  ]

  return (
    <div className="w-full">
      {!started ? (
        <AutoLearningSystem
          skillGap="Kubernetes"
          existingSkill="Docker"
          gapPercentage={73}
          resources={learningResources}
          aiActions={aiActions}
          onStartLearning={() => setStarted(true)}
          onSkip={() => console.log('Skipped for now')}
        />
      ) : (
        <Card className="max-w-lg mx-auto" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Learning Started!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We've enrolled you in the K8s learning path and updated your resume to show you're learning this in-demand
              skill.
            </p>
            <div className="text-left bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
              <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                <span className="font-medium">Pro Tip:</span> Even mentioning you're learning a skill can make you 40%
                more likely to be considered for roles requiring it.
              </p>
            </div>
            <Button onClick={() => setStarted(false)}>Back to Dashboard</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
