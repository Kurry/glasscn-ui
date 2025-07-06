import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Calendar, Download, FileText, Confetti, Briefcase, ArrowRight } from '@phosphor-icons/react'
import { cva } from 'class-variance-authority'

// CVA patterns for milestone card type-based styling
const milestoneCardVariants = cva('border-2', {
  variants: {
    type: {
      interview: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20',
      offer: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20',
      completion: 'border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/20',
    },
  },
  defaultVariants: {
    type: 'interview',
  },
})

const milestoneIconVariants = cva('w-8 h-8', {
  variants: {
    type: {
      interview: 'text-blue-600',
      offer: 'text-green-600',
      completion: 'text-purple-600',
    },
  },
  defaultVariants: {
    type: 'interview',
  },
})

interface MilestoneCardProps {
  type: 'interview' | 'offer' | 'completion'
  title: string
  subtitle?: string
  details?: Record<string, string>
  preparations?: Array<{
    name: string
    description: string
    icon?: React.ReactNode
  }>
  actions?: {
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
  tip?: string
  className?: string
}

export function MilestoneCard({
  type,
  title,
  subtitle,
  details,
  preparations,
  actions,
  tip,
  className,
}: MilestoneCardProps) {
  const getTypeIcon = () => {
    switch (type) {
      case 'interview':
        return <Calendar className={milestoneIconVariants({ type })} />
      case 'offer':
        return <Confetti className={milestoneIconVariants({ type })} />
      case 'completion':
        return <Briefcase className={milestoneIconVariants({ type })} />
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
        <CardHeader className="text-center pb-4">
          <div className="mb-4 flex justify-center">{getTypeIcon()}</div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          {subtitle && <CardDescription className="text-lg">{subtitle}</CardDescription>}
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Details */}
          {details && (
            <Card variant="solid" className={milestoneCardVariants({ type })}>
              <CardContent className="p-4">
                {Object.entries(details).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-1">
                    <span className="font-medium capitalize">{key}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Preparations */}
          {preparations && preparations.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">We've prepared:</h3>
              <div className="space-y-3">
                {preparations.map((prep, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-primary-600 mt-0.5">{prep.icon || <FileText className="w-4 h-4" />}</div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{prep.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{prep.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          {actions && (
            <div className="space-y-3">
              {actions.primary && (
                <Button onClick={actions.primary.onClick} size="lg" color="primary" className="w-full">
                  {actions.primary.icon && actions.primary.icon}
                  {actions.primary.label}
                </Button>
              )}
              {actions.secondary && (
                <Button onClick={actions.secondary.onClick} variant="outline" size="lg" className="w-full">
                  {actions.secondary.icon && actions.secondary.icon}
                  {actions.secondary.label}
                </Button>
              )}
            </div>
          )}

          {/* Tip */}
          {tip && (
            <Card variant="solid" className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4 text-center">
                <p className="text-blue-700 dark:text-blue-300 text-sm">💡 {tip}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface FirstInterviewProps {
  company: string
  position: string
  date: string
  time: string
  onViewPrep: () => void
  className?: string
}

export function FirstInterview({ company, position, date, time, onViewPrep, className }: FirstInterviewProps) {
  const preparations = [
    {
      name: 'Company research doc',
      description: 'Key insights about the company and role',
      icon: <FileText className="w-4 h-4" />,
    },
    {
      name: 'Likely questions',
      description: 'Common questions for this position',
      icon: <FileText className="w-4 h-4" />,
    },
    {
      name: 'Your talking points',
      description: 'Personalized responses based on your experience',
      icon: <FileText className="w-4 h-4" />,
    },
  ]

  return (
    <MilestoneCard
      type="interview"
      title="🎉 First Interview Booked!"
      details={{
        company: `${company} - ${position}`,
        date: date,
        time: time,
      }}
      preparations={preparations}
      actions={{
        primary: {
          label: 'View Interview Prep →',
          onClick: onViewPrep,
          icon: <ArrowRight className="w-4 h-4 ml-2" />,
        },
      }}
      tip="Users who use our prep are 2x more likely to advance"
      className={className}
    />
  )
}

interface JobOfferProps {
  onDownloadAll: () => void
  onExportNotes: () => void
  onSaveRecordings: () => void
  onContinue: () => void
  className?: string
}

export function JobOffer({ onDownloadAll, onExportNotes, onSaveRecordings, onContinue, className }: JobOfferProps) {
  return (
    <Card className={cn('w-full max-w-2xl mx-auto', className)} variant="glass" blur="lg">
      <CardHeader className="text-center pb-4">
        <div className="mb-4 text-6xl">🎊</div>
        <CardTitle className="text-3xl text-green-700 dark:text-green-300">Congratulations!</CardTitle>
        <CardDescription className="text-lg">
          You got an offer! We're thrilled to be part of your journey.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Before you go:</h3>
          <div className="space-y-2">
            <Button onClick={onDownloadAll} variant="outline" className="w-full justify-start">
              <Download className="w-4 h-4 mr-3" />
              Download all applications
            </Button>
            <Button onClick={onExportNotes} variant="outline" className="w-full justify-start">
              <FileText className="w-4 h-4 mr-3" />
              Export interview notes
            </Button>
            <Button onClick={onSaveRecordings} variant="outline" className="w-full justify-start">
              <Calendar className="w-4 h-4 mr-3" />
              Save voice recordings
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Keep your account?</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <input type="radio" name="account" value="pause" className="text-primary-600" />
              <div>
                <p className="font-medium">Pause (free, resume anytime)</p>
                <p className="text-sm text-gray-500">Keep your data safe for future job searches</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <input type="radio" name="account" value="delete" className="text-primary-600" />
              <div>
                <p className="font-medium">Delete everything</p>
                <p className="text-sm text-gray-500">Permanently remove all data</p>
              </div>
            </label>
          </div>
        </div>

        <Button onClick={onContinue} size="lg" color="primary" className="w-full">
          Continue <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  )
}
