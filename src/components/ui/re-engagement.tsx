import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Play, Pause, ExternalLink, ArrowRight, Briefcase, TrendingUp, Clock } from 'lucide-react'

interface ReEngagementProps {
  type: 'inactive' | 'feature-reminder' | 'new-jobs'
  title: string
  message: string
  stats?: Array<{
    label: string
    value: string | number
    highlight?: boolean
  }>
  onMainAction?: () => void
  onSecondaryAction?: () => void
  actionText?: string
  secondaryText?: string
  className?: string
}

export function ReEngagement({
  type,
  title,
  message,
  stats,
  onMainAction,
  onSecondaryAction,
  actionText,
  secondaryText,
  className,
}: ReEngagementProps) {
  const getTypeIcon = () => {
    switch (type) {
      case 'inactive': return <Pause className="w-6 h-6" />
      case 'feature-reminder': return <TrendingUp className="w-6 h-6" />
      case 'new-jobs': return <Briefcase className="w-6 h-6" />
    }
  }

  const getTypeColors = () => {
    switch (type) {
      case 'inactive': return 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/20'
      case 'feature-reminder': return 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20'
      case 'new-jobs': return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20'
    }
  }

  return (
    <div className={cn("max-w-2xl mx-auto", className)}>
      <Card className={getTypeColors()} variant="solid">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="text-primary-600 mt-1">
              {getTypeIcon()}
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{title}</CardTitle>
              <CardDescription className="text-base text-gray-700 dark:text-gray-300">
                {message}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        {stats && (
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className={cn(
                    "text-lg font-bold",
                    stat.highlight ? "text-primary-600" : "text-gray-900 dark:text-white"
                  )}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              {onMainAction && actionText && (
                <Button onClick={onMainAction} size="lg" color="primary" className="w-full">
                  {actionText} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
              {onSecondaryAction && secondaryText && (
                <Button onClick={onSecondaryAction} variant="ghost" className="w-full">
                  {secondaryText}
                </Button>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

interface InactiveUserProps {
  newJobs: number
  perfectFitJobs: number
  averageSalary: string
  onResumeAutoApply: () => void
  onUnsubscribe: () => void
  className?: string
}

export function InactiveUser({ 
  newJobs, 
  perfectFitJobs, 
  averageSalary, 
  onResumeAutoApply, 
  onUnsubscribe, 
  className 
}: InactiveUserProps) {
  const stats = [
    { label: 'New matching jobs', value: newJobs, highlight: true },
    { label: 'Perfect fit companies', value: perfectFitJobs, highlight: true },
    { label: 'Average salary', value: averageSalary, highlight: false },
  ]

  return (
    <div className={cn("max-w-2xl mx-auto bg-white", className)}>
      {/* Email Header */}
      <div className="bg-primary-600 text-white p-4 rounded-t-lg">
        <p className="font-bold text-lg">📧 Subject: {newJobs} new jobs match your profile</p>
      </div>
      
      <div className="p-6">
        <p className="text-gray-800 mb-4">Hi John,</p>
        
        <ReEngagement
          type="inactive"
          title="Your AI agent is paused. Meanwhile:"
          message="Don't miss out on these opportunities while you're away"
          stats={stats}
          onMainAction={onResumeAutoApply}
          onSecondaryAction={onUnsubscribe}
          actionText="Resume Auto-Apply →"
          secondaryText="Or unsubscribe from these alerts"
        />
      </div>
    </div>
  )
}

interface FeatureReminderProps {
  featureName: string
  benefits: string[]
  onSetupFeature: () => void
  className?: string
}

export function FeatureReminder({ 
  featureName, 
  benefits, 
  onSetupFeature, 
  className 
}: FeatureReminderProps) {
  return (
    <ReEngagement
      type="feature-reminder"
      title="💡 You're missing out"
      message={`You haven't set up your ${featureName}`}
      onMainAction={onSetupFeature}
      actionText="Set Up in 10 Minutes →"
      className={cn("my-6", className)}
    />
  )
}

// Email template component for re-engagement
interface ReEngagementEmailProps {
  subject: string
  recipientName: string
  children: React.ReactNode
  className?: string
}

export function ReEngagementEmail({ 
  subject, 
  recipientName, 
  children, 
  className 
}: ReEngagementEmailProps) {
  return (
    <div className={cn("max-w-2xl mx-auto bg-white shadow-lg", className)}>
      {/* Email Header */}
      <div className="bg-gray-100 p-4 border-b">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>📧</span>
          <span className="font-medium">Subject:</span>
          <span>{subject}</span>
        </div>
      </div>
      
      {/* Email Content */}
      <div className="p-6">
        <p className="text-gray-800 text-lg mb-6">Hi {recipientName},</p>
        {children}
      </div>
      
      {/* Email Footer */}
      <div className="bg-gray-50 p-4 border-t text-center text-sm text-gray-500">
        <p>You're receiving this because you have an active job search account.</p>
        <p>Update preferences | Unsubscribe</p>
      </div>
    </div>
  )
}