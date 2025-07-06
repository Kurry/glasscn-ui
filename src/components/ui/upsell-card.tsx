import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { TrendingUp, Crown, Zap, Target, Star, ArrowRight, X } from 'lucide-react'

interface UpsellFeature {
  name: string
  description: string
  icon?: React.ReactNode
}

interface UpsellCardProps {
  title: string
  subtitle?: string
  currentPerformance?: string
  averagePerformance?: string
  features: UpsellFeature[]
  ctaText: string
  ctaSubtext?: string
  onUpgrade?: () => void
  onDismiss?: () => void
  urgency?: 'low' | 'medium' | 'high'
  className?: string
}

export function UpsellCard({
  title,
  subtitle,
  currentPerformance,
  averagePerformance,
  features,
  ctaText,
  ctaSubtext,
  onUpgrade,
  onDismiss,
  urgency = 'medium',
  className,
}: UpsellCardProps) {
  const getUrgencyColors = () => {
    switch (urgency) {
      case 'high':
        return 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20'
      case 'medium':
        return 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/20'
      case 'low':
        return 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20'
    }
  }

  return (
    <Card className={cn(getUrgencyColors(), className)} variant="solid">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <TrendingUp className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              {subtitle && <CardDescription className="text-base">{subtitle}</CardDescription>}
            </div>
          </div>
          {onDismiss && (
            <button onClick={onDismiss} className="text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Performance Comparison */}
        {currentPerformance && averagePerformance && (
          <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Performance Gap:</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Your rate</p>
                <p className="text-lg font-bold text-red-600">{currentPerformance}</p>
              </div>
              <div className="text-gray-400">vs</div>
              <div>
                <p className="text-sm text-gray-500">Average</p>
                <p className="text-lg font-bold text-green-600">{averagePerformance}</p>
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Premium features that help:</h4>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 text-primary-600 mt-0.5">
                  {feature.icon || <Star className="w-4 h-4" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{feature.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Button onClick={onUpgrade} size="lg" color="primary" className="w-full">
            <Crown className="w-4 h-4 mr-2" />
            {ctaText}
          </Button>
          {ctaSubtext && <p className="text-xs text-gray-500 text-center mt-2">{ctaSubtext}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

interface OptimizeStrategyProps {
  onTryPremium: () => void
  onDismiss: () => void
  className?: string
}

export function OptimizeStrategy({ onTryPremium, onDismiss, className }: OptimizeStrategyProps) {
  const features: UpsellFeature[] = [
    {
      name: 'A/B test resumes',
      description: 'Test different versions to see what works best',
      icon: <Target className="w-4 h-4" />,
    },
    {
      name: 'Priority applications',
      description: 'Get your applications seen first',
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: 'Direct recruiter outreach',
      description: 'Connect directly with hiring managers',
      icon: <Star className="w-4 h-4" />,
    },
  ]

  return (
    <UpsellCard
      title="🎯 Optimize Your Strategy"
      subtitle="Your applications aren't converting as well as they could"
      currentPerformance="4%"
      averagePerformance="8%"
      features={features}
      ctaText="Try Premium Free →"
      ctaSubtext="No card required for 7 days"
      onUpgrade={onTryPremium}
      onDismiss={onDismiss}
      urgency="medium"
      className={className}
    />
  )
}

interface VoiceAgentSuccessProps {
  onUpgradeAgent: () => void
  className?: string
}

export function VoiceAgentSuccess({ onUpgradeAgent, className }: VoiceAgentSuccessProps) {
  const weeklyStats = [
    { label: 'Handled screening calls', value: '8' },
    { label: 'Scheduled interviews', value: '3' },
    { label: 'Saved you', value: '4.5 hours' },
  ]

  const newFeatures: UpsellFeature[] = [
    {
      name: 'LinkedIn voice messages',
      description: 'Respond to recruiters instantly',
      icon: <Zap className="w-4 h-4" />,
    },
    {
      name: 'Technical screenings',
      description: 'Handle basic technical questions',
      icon: <Target className="w-4 h-4" />,
    },
    {
      name: 'Salary negotiations',
      description: 'Get the best offers automatically',
      icon: <TrendingUp className="w-4 h-4" />,
    },
  ]

  return (
    <Card
      className={cn('border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20', className)}
      variant="solid"
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="text-6xl">🎉</div>
          <div>
            <CardTitle className="text-xl text-green-800 dark:text-green-200">
              Your voice agent is crushing it!
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-green-800 dark:text-green-200 mb-3">This week:</h4>
          <div className="space-y-2">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-green-600">•</span>
                <span className="text-green-700 dark:text-green-300">
                  {stat.label}: <strong>{stat.value}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-green-800 dark:text-green-200 mb-3">Want to handle more?</h4>
          <div className="space-y-2 mb-4">
            {newFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-green-600 mt-0.5">{feature.icon}</div>
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">{feature.name}</p>
                  <p className="text-sm text-green-600 dark:text-green-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={onUpgradeAgent} size="lg" color="primary" className="w-full">
            Upgrade Voice Agent <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
