'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import {
  Warning,
  Briefcase,
  Buildings,
  CheckCircle,
  Handshake,
  CurrencyDollar,
  ChatCircle,
} from '@phosphor-icons/react'
import { useState, useMemo } from 'react'
import { cva } from 'class-variance-authority'

interface OfferPrediction {
  company: string
  probability: number
  strengths: string[]
  statusNote?: string
}

// CVA patterns for probability-based styling
const probabilityCard = cva('overflow-hidden', {
  variants: {
    probability: {
      high: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800',
      medium: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
      low: 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800',
    },
  },
})

const probabilityBadge = cva('', {
  variants: {
    probability: {
      high: 'bg-green-100 text-green-800 border-green-200',
      medium: 'bg-blue-100 text-blue-800 border-blue-200',
      low: 'bg-amber-100 text-amber-800 border-amber-200',
    },
  },
})

const probabilityProgress = cva('h-2.5', {
  variants: {
    probability: {
      high: 'bg-green-100 [&>div]:bg-green-500',
      medium: 'bg-blue-100 [&>div]:bg-blue-500',
      low: 'bg-amber-100 [&>div]:bg-amber-500',
    },
  },
})

const probabilityIcon = cva('w-4 h-4', {
  variants: {
    probability: {
      high: 'text-green-600',
      medium: 'text-blue-600',
      low: 'text-amber-600',
    },
  },
})

const probabilityText = cva('', {
  variants: {
    probability: {
      high: 'text-green-700 dark:text-green-300',
      medium: 'text-blue-700 dark:text-blue-300',
      low: 'text-amber-700 dark:text-amber-300',
    },
  },
})

// Helper function to determine probability level
const getProbabilityLevel = (probability: number): 'high' | 'medium' | 'low' => {
  if (probability >= 80) return 'high'
  if (probability >= 50) return 'medium'
  return 'low'
}

interface OfferProbabilityCalculatorProps {
  predictions: OfferPrediction[]
  onPrepareNegotiations?: () => void
  className?: string
}

export function OfferProbabilityCalculator({
  predictions,
  onPrepareNegotiations,
  className,
}: OfferProbabilityCalculatorProps) {
  // Memoize probability level calculations to avoid repeated computations
  const predictionLevels = useMemo(
    () =>
      predictions.map((prediction) => ({
        ...prediction,
        level: getProbabilityLevel(prediction.probability),
      })),
    [predictions],
  )

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary-600 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
              <Buildings className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Offer Predictions This Week</CardTitle>
              <CardDescription>Based on interview performance</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-5">
            {predictionLevels.map((prediction) => (
              <Card
                key={prediction.company}
                variant="solid"
                className={probabilityCard({ probability: prediction.level })}
              >
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{prediction.company}:</h3>
                        <Badge className={probabilityBadge({ probability: prediction.level })}>
                          {prediction.probability}% likely
                        </Badge>
                      </div>
                      {prediction.statusNote && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{prediction.statusNote}</p>
                      )}
                    </div>
                    <div className="w-full sm:w-36">
                      <Progress
                        value={prediction.probability}
                        className={probabilityProgress({ probability: prediction.level })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    {prediction.strengths.map((strength, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle className={probabilityIcon({ probability: prediction.level })} />
                        </div>
                        <span className={probabilityText({ probability: prediction.level })}>{strength}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {onPrepareNegotiations && (
            <Button onClick={onPrepareNegotiations} color="primary" className="w-full">
              Prepare for Negotiations
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface NegotiationLeverage {
  icon: React.ReactNode
  text: string
}

interface NegotiationPreparationProps {
  company: string
  likelyOffer: string
  suggestedAsk: string
  leveragePoints: NegotiationLeverage[]
  successProbability: number
  preparedScripts: string[]
  onViewScripts?: (scriptType: string) => void
  className?: string
}

export function NegotiationPreparation({
  company,
  likelyOffer,
  suggestedAsk,
  leveragePoints,
  successProbability,
  preparedScripts,
  onViewScripts,
  className,
}: NegotiationPreparationProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary-600 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
              <Handshake className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-xl">AI Negotiation Assistant</CardTitle>
              <CardDescription>Data-driven salary negotiation strategy</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex justify-between items-center mb-3">
              <div className="font-medium text-blue-800 dark:text-blue-300">{company} likely offer:</div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">{likelyOffer}</Badge>
            </div>

            <div className="flex justify-between items-center">
              <div className="font-medium text-green-800 dark:text-green-300">AI suggests asking:</div>
              <Badge className="bg-green-100 text-green-800 border-green-200">{suggestedAsk}</Badge>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium">Your leverage:</h3>
            <div className="space-y-2">
              {leveragePoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border"
                >
                  <div className="flex-shrink-0 mt-0.5 text-primary-600">{point.icon}</div>
                  <div className="text-gray-700 dark:text-gray-300">{point.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between mb-3">
              <div className="font-medium text-green-800 dark:text-green-300">Success probability:</div>
              <Badge className="bg-green-100 text-green-800 border-green-200">{successProbability}%</Badge>
            </div>

            <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${successProbability}%` }}></div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Scripts prepared for:</h3>
            <div className="grid grid-cols-2 gap-2">
              {preparedScripts.map((script, index) => (
                <Button key={index} variant="outline" onClick={() => onViewScripts?.(script)} className="justify-start">
                  <ChatCircle className="w-4 h-4 mr-2" />
                  {script}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function PredictiveOfferDemo() {
  const [stage, setStage] = useState<'calculator' | 'negotiation'>('calculator')

  // Memoize static data to prevent unnecessary re-computations

  const predictions: OfferPrediction[] = useMemo(
    () => [
      {
        company: 'Stripe',
        probability: 87,
        strengths: ['Strong technical round', 'Culture fit confirmed', 'Similar candidates: 9/10 got offers'],
      },
      {
        company: 'Airbnb',
        probability: 65,
        strengths: ['Good system design', 'Competing with 3 others'],
      },
      {
        company: 'Meta',
        probability: 34,
        strengths: ['Tough feedback on coding'],
        statusNote: 'Consider other opportunities',
      },
    ],
    [],
  )

  const leveragePoints: NegotiationLeverage[] = useMemo(
    () => [
      {
        icon: <Briefcase className="w-4 h-4" />,
        text: '2 other final rounds pending',
      },
      {
        icon: <CurrencyDollar className="w-4 h-4" />,
        text: 'Market rate: $155k-180k',
      },
      {
        icon: <Warning className="w-4 h-4" />,
        text: 'Their urgency: High (Q4 hiring)',
      },
      {
        icon: <Buildings className="w-4 h-4" />,
        text: 'Your unique value: Payment exp',
      },
    ],
    [],
  )

  return (
    <div className="w-full">
      {stage === 'calculator' ? (
        <OfferProbabilityCalculator predictions={predictions} onPrepareNegotiations={() => setStage('negotiation')} />
      ) : (
        <NegotiationPreparation
          company="Stripe"
          likelyOffer="$165k"
          suggestedAsk="$178k + 10% bonus"
          leveragePoints={leveragePoints}
          successProbability={73}
          preparedScripts={['If they say yes', 'If they counter', 'If they say no', 'If they stall']}
          onViewScripts={(scriptType) => console.log(`Viewing script: ${scriptType}`)}
        />
      )}
    </div>
  )
}
