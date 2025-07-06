import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Lock, Plus, Upload } from '@phosphor-icons/react'

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
  primaryAction?: {
    label: string
    onClick: () => void
    icon?: React.ReactNode
  }
  secondaryAction?: {
    label: string
    onClick: () => void
    icon?: React.ReactNode
  }
  lockedFeatures?: string[]
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  primaryAction,
  secondaryAction,
  lockedFeatures,
  className,
}: EmptyStateProps) {
  return (
    <Card className={cn('text-center', className)} variant="glass" blur="sm">
      <CardHeader>
        {icon && <div className="mx-auto mb-4 p-3 w-fit rounded-full bg-gray-100 dark:bg-gray-800">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {primaryAction && (
              <Button onClick={primaryAction.onClick} size="lg" color="primary">
                {primaryAction.icon && primaryAction.icon}
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant="outline" size="lg">
                {secondaryAction.icon && secondaryAction.icon}
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}

        {lockedFeatures && lockedFeatures.length > 0 && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <Lock className="w-4 h-4" />
              <span>Locked Features (need resume):</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {lockedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

interface WelcomeDashboardProps {
  userName: string
  onCreateResume: () => void
  onImportResume: () => void
  className?: string
}

export function WelcomeDashboard({ userName, onCreateResume, onImportResume, className }: WelcomeDashboardProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 p-4',
        className,
      )}
    >
      <div className="max-w-4xl mx-auto pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome, {userName}! 👋</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Your Job Search Command Center</p>
        </div>

        <EmptyState
          icon={<div className="text-6xl">📄</div>}
          title="No resumes yet"
          description="Let's create your first resume to unlock all features"
          primaryAction={{
            label: 'Create Resume',
            onClick: onCreateResume,
            icon: <Plus className="w-4 h-4 mr-2" />,
          }}
          secondaryAction={{
            label: 'Import Existing',
            onClick: onImportResume,
            icon: <Upload className="w-4 h-4 mr-2" />,
          }}
          lockedFeatures={['AI Job Applications', 'Voice Agent', 'Recruiter Auto-Reply']}
          className="max-w-2xl mx-auto"
        />
      </div>
    </div>
  )
}
