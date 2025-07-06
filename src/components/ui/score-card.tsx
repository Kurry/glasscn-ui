import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CircularProgress } from '@/components/ui-extras/circular-progress'
import { cn } from '@/lib/utils'
import { X, Check, Warning, RocketLaunch, Eye } from '@phosphor-icons/react'

interface ScoreIssue {
  type: 'error' | 'warning' | 'success'
  message: string
}

interface ScoreCardProps {
  score: number
  maxScore?: number
  issues: ScoreIssue[]
  onFixWithAI?: () => void
  onViewDetails?: () => void
  className?: string
}

function getScoreLevel(score: number, maxScore: number = 100) {
  const percentage = (score / maxScore) * 100
  if (percentage >= 85) return { label: '🎉 Excellent', color: 'success' }
  if (percentage >= 70) return { label: '😊 Good', color: 'primary' }
  if (percentage >= 50) return { label: '😐 Average', color: 'warning' }
  return { label: '😟 Below Average', color: 'danger' }
}

export function ScoreCard({ score, maxScore = 100, issues, onFixWithAI, onViewDetails, className }: ScoreCardProps) {
  const scoreLevel = getScoreLevel(score, maxScore)
  const percentage = (score / maxScore) * 100

  const errorIssues = issues.filter((issue) => issue.type === 'error')
  const warningIssues = issues.filter((issue) => issue.type === 'warning')
  const successItems = issues.filter((issue) => issue.type === 'success')

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl flex items-center justify-center gap-2">
            Your Resume Score: {score}/{maxScore} 📊
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Score Circle */}
          <div className="flex justify-center">
            <CircularProgress.Root size="lg">
              <CircularProgress.Vector value={percentage} />
              <CircularProgress.Label value={score} suffix={`/${maxScore}`} />
            </CircularProgress.Root>
          </div>

          {/* Score Level */}
          <div className="text-center">
            <Badge
              variant="outline"
              className={cn(
                'text-lg px-4 py-2',
                scoreLevel.color === 'success' && 'border-green-500 text-green-700',
                scoreLevel.color === 'primary' && 'border-primary-500 text-primary-700',
                scoreLevel.color === 'warning' && 'border-yellow-500 text-yellow-700',
                scoreLevel.color === 'danger' && 'border-red-500 text-red-700',
              )}
            >
              {scoreLevel.label}
            </Badge>
          </div>

          {/* Issues and Successes */}
          <Card variant="solid" className="bg-gray-50 dark:bg-gray-900">
            <CardContent className="p-4 space-y-4">
              {/* Errors */}
              {errorIssues.length > 0 && (
                <div>
                  <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">Issues Found:</h4>
                  <div className="space-y-1">
                    {errorIssues.map((issue, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                        <X className="w-4 h-4 flex-shrink-0" />
                        <span>{issue.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Warnings */}
              {warningIssues.length > 0 && (
                <div>
                  <div className="space-y-1">
                    {warningIssues.map((issue, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-400">
                        <Warning className="w-4 h-4 flex-shrink-0" />
                        <span>{issue.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Successes */}
              {successItems.length > 0 && (
                <div>
                  <h4 className="font-medium text-green-700 dark:text-green-400 mb-2">Good News:</h4>
                  <div className="space-y-1">
                    {successItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                        <Check className="w-4 h-4 flex-shrink-0" />
                        <span>{item.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            {onFixWithAI && (
              <Button onClick={onFixWithAI} className="w-full" size="lg" color="primary">
                <RocketLaunch className="w-4 h-4 mr-2" />
                🚀 Fix with AI (2 min)
              </Button>
            )}
            {onViewDetails && (
              <Button onClick={onViewDetails} variant="outline" className="w-full" size="lg">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface ResumeAnalysisResultsProps {
  onFixWithAI: () => void
  onViewDetails: () => void
  className?: string
}

export function ResumeAnalysisResults({ onFixWithAI, onViewDetails, className }: ResumeAnalysisResultsProps) {
  const sampleIssues: ScoreIssue[] = [
    { type: 'error', message: 'Missing keywords (12)' },
    { type: 'error', message: 'Weak action verbs' },
    { type: 'error', message: 'No metrics/results' },
    { type: 'warning', message: 'ATS formatting issues' },
    { type: 'success', message: 'Complete contact info' },
    { type: 'success', message: 'Clear structure' },
  ]

  return (
    <ScoreCard
      score={68}
      issues={sampleIssues}
      onFixWithAI={onFixWithAI}
      onViewDetails={onViewDetails}
      className={className}
    />
  )
}
