import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CircularProgress } from '@/components/ui-extras/circular-progress'
import { cn } from '@/lib/utils'
import { Confetti, Download, RocketLaunch, Star, TrendUp } from '@phosphor-icons/react'

interface Achievement {
  icon: React.ReactNode
  label: string
  description?: string
}

interface SuccessCelebrationProps {
  title: string
  subtitle?: string
  score?: number
  maxScore?: number
  achievements?: Achievement[]
  nextSteps?: {
    primary?: {
      label: string
      onClick: () => void
      icon?: React.ReactNode
    }
    secondary?: {
      label: string
      onClick: () => void
      icon?: React.ReactNode
    }
  }
  testimonial?: {
    text: string
    source: string
  }
  className?: string
}

export function SuccessCelebration({
  title,
  subtitle,
  score,
  maxScore = 100,
  achievements,
  nextSteps,
  testimonial,
  className,
}: SuccessCelebrationProps) {
  const percentage = score ? (score / maxScore) * 100 : 0

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="text-center pb-4">
          <div className="mb-6">
            <Confetti className="w-16 h-16 text-primary-600 mx-auto animate-bounce" />
          </div>
          <CardTitle className="text-3xl mb-2">{title}</CardTitle>
          {subtitle && <CardDescription className="text-lg">{subtitle}</CardDescription>}
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Score Display */}
          {score && (
            <div className="flex justify-center">
              <CircularProgress.Root size="lg">
                <CircularProgress.Vector value={percentage} />
                <CircularProgress.Label value={score} suffix={`/${maxScore}`} />
              </CircularProgress.Root>
            </div>
          )}

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
                What you've accomplished:
              </h3>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    variant="solid"
                    className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="text-green-600 dark:text-green-400">{achievement.icon}</div>
                        <div>
                          <p className="font-medium text-green-700 dark:text-green-300">{achievement.label}</p>
                          {achievement.description && (
                            <p className="text-sm text-green-600 dark:text-green-400">{achievement.description}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Next Steps */}
          {nextSteps && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
                Ready to put it to work?
              </h3>
              <div className="space-y-3">
                {nextSteps.primary && (
                  <Button onClick={nextSteps.primary.onClick} size="lg" color="primary" className="w-full text-lg py-6">
                    {nextSteps.primary.icon && nextSteps.primary.icon}
                    {nextSteps.primary.label}
                  </Button>
                )}
                {nextSteps.secondary && (
                  <Button onClick={nextSteps.secondary.onClick} variant="outline" size="lg" className="w-full">
                    {nextSteps.secondary.icon && nextSteps.secondary.icon}
                    {nextSteps.secondary.label}
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {testimonial && (
            <Card variant="solid" className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6 text-center">
                <div className="mb-3">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-blue-700 dark:text-blue-300 italic mb-3">"{testimonial.text}"</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">- {testimonial.source}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface ResumeCompleteSuccessProps {
  onSetupAutomation: () => void
  onDownloadResume: () => void
  className?: string
}

export function ResumeCompleteSuccess({ onSetupAutomation, onDownloadResume, className }: ResumeCompleteSuccessProps) {
  const achievements: Achievement[] = [
    {
      icon: <Star className="w-5 h-5" />,
      label: 'Professional resume created',
      description: 'ATS-optimized and recruiter-approved',
    },
    {
      icon: <TrendUp className="w-5 h-5" />,
      label: 'Score improved by 23 points',
      description: 'From 68 to 91 out of 100',
    },
    {
      icon: <RocketLaunch className="w-5 h-5" />,
      label: 'Ready for job applications',
      description: 'AI-enhanced and keyword optimized',
    },
  ]

  return (
    <SuccessCelebration
      title="🎉 Resume Complete!"
      score={91}
      achievements={achievements}
      nextSteps={{
        primary: {
          label: '🚀 Setup Auto-Apply',
          onClick: onSetupAutomation,
          icon: <RocketLaunch className="w-4 h-4 mr-2" />,
        },
        secondary: {
          label: '📥 Download Resume',
          onClick: onDownloadResume,
          icon: <Download className="w-4 h-4 mr-2" />,
        },
      }}
      testimonial={{
        text: 'Auto-apply users get 3x more interviews',
        source: 'Indeed Study',
      }}
      className={className}
    />
  )
}
