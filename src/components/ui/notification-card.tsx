import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { X, Bell, Warning, CheckCircle, Info, ShieldCheck } from '@phosphor-icons/react'
import { cva } from 'class-variance-authority'

// CVA patterns for notification card type-based styling
const notificationCardVariants = cva('border-2', {
  variants: {
    type: {
      info: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20',
      warning: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/20',
      success: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20',
      error: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20',
      feature: 'border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/20',
    },
  },
  defaultVariants: {
    type: 'info',
  },
})

const notificationIconVariants = cva('flex-shrink-0 mt-0.5', {
  variants: {
    type: {
      info: 'text-blue-600 dark:text-blue-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      success: 'text-green-600 dark:text-green-400',
      error: 'text-red-600 dark:text-red-400',
      feature: 'text-purple-600 dark:text-purple-400',
    },
  },
  defaultVariants: {
    type: 'info',
  },
})

interface NotificationCardProps {
  type: 'info' | 'warning' | 'success' | 'error' | 'feature'
  title: string
  message: string
  icon?: React.ReactNode
  badge?: {
    text: string
    variant?: 'default' | 'destructive' | 'outline' | 'secondary'
  }
  actions?: {
    primary?: {
      label: string
      onClick: () => void
    }
    secondary?: {
      label: string
      onClick: () => void
    }
  }
  onDismiss?: () => void
  className?: string
}

export function NotificationCard({
  type,
  title,
  message,
  icon,
  badge,
  actions,
  onDismiss,
  className,
}: NotificationCardProps) {
  const getTypeIcon = () => {
    if (icon) return icon

    switch (type) {
      case 'info':
        return <Info className="w-5 h-5" />
      case 'warning':
        return <Warning className="w-5 h-5" />
      case 'success':
        return <CheckCircle className="w-5 h-5" />
      case 'error':
        return <X className="w-5 h-5" />
      case 'feature':
        return <Bell className="w-5 h-5" />
      default:
        return <Info className="w-5 h-5" />
    }
  }

  return (
    <Card className={cn(notificationCardVariants({ type }), className)} variant="solid">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={notificationIconVariants({ type })}>{getTypeIcon()}</div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
              {badge && (
                <Badge variant={badge.variant || 'outline'} className="text-xs">
                  {badge.text}
                </Badge>
              )}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{message}</p>

            {actions && (
              <div className="flex flex-col sm:flex-row gap-2">
                {actions.primary && (
                  <Button onClick={actions.primary.onClick} size="sm" color="primary">
                    {actions.primary.label}
                  </Button>
                )}
                {actions.secondary && (
                  <Button onClick={actions.secondary.onClick} variant="outline" size="sm">
                    {actions.secondary.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {onDismiss && (
            <button
              onClick={onDismiss}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

interface VoiceAgentPromptProps {
  missedCalls: number
  onSetupNow: () => void
  onLater: () => void
  className?: string
}

export function VoiceAgentPrompt({ missedCalls, onSetupNow, onLater, className }: VoiceAgentPromptProps) {
  return (
    <NotificationCard
      type="feature"
      title={`🔔 You missed ${missedCalls} recruiter calls`}
      message="Set up your AI voice agent to handle calls when you're busy"
      badge={{ text: 'New Feature', variant: 'outline' }}
      actions={{
        primary: { label: 'Set Up Now →', onClick: onSetupNow },
        secondary: { label: 'Later', onClick: onLater },
      }}
      className={className}
    />
  )
}

interface SecurityAlertProps {
  senderEmail: string
  subject: string
  redFlags: string[]
  onViewAnalysis: () => void
  onBlockSender: () => void
  className?: string
}

export function SecurityAlert({
  senderEmail,
  subject,
  redFlags,
  onViewAnalysis,
  onBlockSender,
  className,
}: SecurityAlertProps) {
  return (
    <Card className={cn(notificationCardVariants({ type: 'error' }), className)} variant="solid">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className={cn('w-5 h-5', notificationIconVariants({ type: 'error' }))} />

          <div className="flex-1">
            <h4 className="font-medium text-red-900 dark:text-red-200 mb-1">⚠️ Suspicious Job Email Detected</h4>

            <div className="space-y-2 mb-3">
              <p className="text-sm text-red-700 dark:text-red-300">
                <strong>From:</strong> {senderEmail}
              </p>
              <p className="text-sm text-red-700 dark:text-red-300">"{subject}"</p>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">🚩 Red flags found:</p>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                {redFlags.map((flag, index) => (
                  <li key={index}>• {flag}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <Button onClick={onViewAnalysis} size="sm" variant="outline">
                View Analysis
              </Button>
              <Button onClick={onBlockSender} size="sm" color="danger">
                Block Sender
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
