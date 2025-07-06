'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { cn } from '@/lib/utils'
import { Warning, TrendUp, Check } from '@phosphor-icons/react'
import { useState } from 'react'

interface MarketTrendAlertProps {
  trend: string
  percentage: number
  currentSkill: string
  suggestedAddition: string
  onAutoAdd?: () => void
  onDismiss?: () => void
  className?: string
}

export function MarketTrendAlert({
  trend,
  percentage,
  currentSkill,
  suggestedAddition,
  onAutoAdd,
  onDismiss,
  className,
}: MarketTrendAlertProps) {
  return (
    <div className={cn('max-w-2xl mx-auto', className)}>
      <Card className="w-full" variant="solid">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full text-blue-600">
              <TrendUp className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">Market Intelligence Alert</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
            <Warning className="w-4 h-4 text-amber-600" />
            <AlertTitle className="text-amber-800 dark:text-amber-300 mb-1">New trend detected</AlertTitle>
            <AlertDescription className="text-amber-700 dark:text-amber-400">
              <strong>{percentage}%</strong> of {trend} jobs now require <strong>Kubernetes</strong> experience
            </AlertDescription>
          </Alert>

          <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-300 mb-2">
              You have <strong>{currentSkill}</strong> experience. AI can infer and add Kubernetes context:
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-mono text-sm">"{suggestedAddition}"</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {onAutoAdd && (
              <Button onClick={onAutoAdd} className="sm:flex-1" color="primary">
                <Check className="w-4 h-4 mr-2" />
                Auto-add to resume
              </Button>
            )}

            {onDismiss && (
              <Button onClick={onDismiss} variant="outline" className="sm:flex-1">
                Dismiss
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function MarketIntelligenceDemo() {
  const [dismissed, setDismissed] = useState(false)
  const [added, setAdded] = useState(false)

  if (dismissed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Alert dismissed. We'll notify you about other important trends.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (added) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                  <Check className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Resume Updated!</h3>
              <p className="text-gray-600 dark:text-gray-400">Kubernetes context added to your Docker experience</p>
              <Badge className="mx-auto mt-2" color="primary">
                Resume Score: 92 (+3pts)
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <MarketTrendAlert
      trend="SWE"
      percentage={73}
      currentSkill="Docker"
      suggestedAddition="Containerized microservices using Docker and orchestrated with Kubernetes"
      onAutoAdd={() => setAdded(true)}
      onDismiss={() => setDismissed(true)}
    />
  )
}
