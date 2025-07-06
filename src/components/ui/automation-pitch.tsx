import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Confetti, Clock, Target, TrendUp, RocketLaunch, Timer } from '@phosphor-icons/react'

interface StatItem {
  icon: React.ReactNode
  label: string
  value: string
}

interface AutomationPitchProps {
  title: string
  subtitle?: string
  manualStats: StatItem[]
  automatedStats: StatItem[]
  testimonial?: {
    text: string
    source: string
  }
  onSetupAutomation?: () => void
  onMaybeLater?: () => void
  className?: string
}

export function AutomationPitch({
  title,
  subtitle,
  manualStats,
  automatedStats,
  testimonial,
  onSetupAutomation,
  onMaybeLater,
  className,
}: AutomationPitchProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <div className="mb-4">
            <PartyPopper className="w-12 h-12 text-primary-600 mx-auto" />
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          {subtitle && <CardDescription className="text-lg">{subtitle}</CardDescription>}
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Manual */}
            <Card variant="solid" className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-lg text-center text-red-700 dark:text-red-400">
                  Manual job hunting:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {manualStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3 text-red-600 dark:text-red-400">
                    <div className="flex-shrink-0">{stat.icon}</div>
                    <div>
                      <div className="font-medium">{stat.value}</div>
                      <div className="text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Automated */}
            <Card variant="solid" className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-lg text-center text-green-700 dark:text-green-400">
                  With AI automation:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {automatedStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3 text-green-600 dark:text-green-400">
                    <div className="flex-shrink-0">{stat.icon}</div>
                    <div>
                      <div className="font-medium">{stat.value}</div>
                      <div className="text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            {onSetupAutomation && (
              <Button onClick={onSetupAutomation} className="w-full" size="lg" color="primary">
                <RocketLaunch className="w-4 h-4 mr-2" />
                🚀 Setup Auto-Apply (2 min)
              </Button>
            )}
            {onMaybeLater && (
              <Button onClick={onMaybeLater} variant="ghost" className="w-full">
                Maybe later
              </Button>
            )}
          </div>

          {/* Testimonial */}
          {testimonial && (
            <Card variant="solid" className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4 text-center">
                <p className="text-blue-700 dark:text-blue-300 italic">"{testimonial.text}"</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">- {testimonial.source}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface ResumeCompleteProps {
  onSetupAutomation: () => void
  onMaybeLater: () => void
  className?: string
}

export function ResumeComplete({ onSetupAutomation, onMaybeLater, className }: ResumeCompleteProps) {
  const manualStats: StatItem[] = [
    { icon: <Clock className="w-5 h-5" />, label: '2-4 hours/day searching', value: '⏰' },
    { icon: <Target className="w-5 h-5" />, label: '10-20 applications/week', value: '📝' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Miss 67% of new postings', value: '😔' },
  ]

  const automatedStats: StatItem[] = [
    { icon: <Timer className="w-5 h-5" />, label: 'Apply 24/7 while you sleep', value: '🌙' },
    { icon: <Target className="w-5 h-5" />, label: '200+ applications/week', value: '🚀' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Never miss matching jobs', value: '🎯' },
  ]

  return (
    <AutomationPitch
      title="🎉 Resume Complete!"
      subtitle="Now let's put it to work"
      manualStats={manualStats}
      automatedStats={automatedStats}
      testimonial={{
        text: 'Users with automation get interviews 3x faster',
        source: 'Indeed Study',
      }}
      onSetupAutomation={onSetupAutomation}
      onMaybeLater={onMaybeLater}
      className={className}
    />
  )
}
