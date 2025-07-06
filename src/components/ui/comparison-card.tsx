import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowRight, Check, X, Sparkle, Eye } from '@phosphor-icons/react'

interface ComparisonItem {
  before: string
  after: string
}

interface ComparisonCardProps {
  title: string
  subtitle?: string
  comparison: ComparisonItem
  additionalImprovements?: number
  scoreIncrease?: {
    from: number
    to: number
    change: number
  }
  onApplyChanges?: () => void
  onReviewEach?: () => void
  className?: string
}

export function ComparisonCard({
  title,
  subtitle,
  comparison,
  additionalImprovements,
  scoreIncrease,
  onApplyChanges,
  onReviewEach,
  className,
}: ComparisonCardProps) {
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
            <Sparkle className="w-12 h-12 text-primary-600 mx-auto" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          {subtitle && <CardDescription>{subtitle}</CardDescription>}
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Before/After Comparison */}
          <Card variant="solid" className="bg-gray-50 dark:bg-gray-900">
            <CardContent className="p-6">
              <h3 className="font-medium text-center mb-4">Before → After Preview:</h3>

              <div className="space-y-4">
                {/* Before */}
                <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/20">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700 dark:text-red-300">"{comparison.before}"</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowDown className="w-5 h-5 text-gray-400" />
                </div>

                {/* After */}
                <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/20">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-green-700 dark:text-green-300">"{comparison.after}"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="text-center space-y-3">
            {additionalImprovements && (
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                +{additionalImprovements} more improvements available
              </p>
            )}

            {scoreIncrease && (
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Score increase:</span>
                <Badge variant="outline" className="text-lg px-3 py-1">
                  {scoreIncrease.from} → {scoreIncrease.to} (+{scoreIncrease.change}pts)
                </Badge>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="space-y-3">
            {onApplyChanges && (
              <Button onClick={onApplyChanges} className="w-full" size="lg" color="primary">
                Apply All Changes <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
            {onReviewEach && (
              <Button onClick={onReviewEach} variant="outline" className="w-full" size="lg">
                <Eye className="w-4 h-4 mr-2" />
                Review Each
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface AIEnhancementPreviewProps {
  onApplyChanges: () => void
  onReviewEach: () => void
  className?: string
}

export function AIEnhancementPreview({ onApplyChanges, onReviewEach, className }: AIEnhancementPreviewProps) {
  const sampleComparison: ComparisonItem = {
    before: 'Worked on backend systems',
    after: 'Architected microservices handling 2M+ daily requests, reducing latency by 40%',
  }

  return (
    <ComparisonCard
      title="✨ AI Improvements Ready"
      comparison={sampleComparison}
      additionalImprovements={21}
      scoreIncrease={{ from: 68, to: 91, change: 23 }}
      onApplyChanges={onApplyChanges}
      onReviewEach={onReviewEach}
      className={className}
    />
  )
}
