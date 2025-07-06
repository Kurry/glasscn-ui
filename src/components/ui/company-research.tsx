'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { CheckCircle, Dog, Briefcase, Users, MagnifyingGlass, Buildings, CurrencyDollar, Globe } from '@phosphor-icons/react'
import { useState } from 'react'

interface CompanyInsight {
  id: string
  text: string
  icon: React.ReactNode
}

interface CultureFitItem {
  aspect: string
  matchesPreference: boolean
  description: string
  icon: React.ReactNode
}

interface CompanyResearchProps {
  companyName: string
  insights: CompanyInsight[]
  cultureFit: CultureFitItem[]
  applicationStrategy?: {
    emphasis: string
  }
  onViewFullReport?: () => void
  className?: string
}

export function CompanyResearch({
  companyName,
  insights,
  cultureFit,
  applicationStrategy,
  onViewFullReport,
  className,
}: CompanyResearchProps) {
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
              <MagnifyingGlass className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Researching: {companyName}</CardTitle>
              <CardDescription>AI-powered company intelligence</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">AI discovered:</h3>
            <div className="space-y-2">
              {insights.map((insight) => (
                <div
                  key={insight.id}
                  className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border"
                >
                  <div className="flex-shrink-0 mt-0.5 text-primary-600">{insight.icon}</div>
                  <p className="text-gray-700 dark:text-gray-300">{insight.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Card variant="solid" className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4">
              <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-3">Cultural fit:</h3>
              <div className="space-y-2">
                {cultureFit.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-0.5">
                      {item.matchesPreference ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-amber-500"></div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="text-blue-700 dark:text-blue-400 flex-shrink-0">{item.icon}</div>
                        <p className="text-blue-800 dark:text-blue-300">{item.aspect}</p>
                        {item.matchesPreference && (
                          <Badge className="text-xs bg-green-100 text-green-800 border-green-200">match ✓</Badge>
                        )}
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {applicationStrategy && (
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h3 className="font-medium text-green-800 dark:text-green-300 mb-1">Application strategy adjusted:</h3>
              <p className="text-green-700 dark:text-green-400">{applicationStrategy.emphasis}</p>
            </div>
          )}

          {onViewFullReport && (
            <Button onClick={onViewFullReport} variant="outline" className="w-full">
              View Full Company Report
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export function CompanyResearchDemo() {
  const [loading, setLoading] = useState(false)

  setTimeout(() => {
    if (loading) setLoading(false)
  }, 2000)

  const insights: CompanyInsight[] = [
    {
      id: '1',
      text: 'Recent $8B valuation',
      icon: <CurrencyDollar className="w-4 h-4" />,
    },
    {
      id: '2',
      text: 'Expanding ML monitoring team',
      icon: <Buildings className="w-4 h-4" />,
    },
    {
      id: '3',
      text: 'CEO mentioned Python skills shortage',
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: '4',
      text: 'Your ex-colleague is VP there',
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: '5',
      text: 'They use your open-source tool',
      icon: <Globe className="w-4 h-4" />,
    },
  ]

  const cultureFit: CultureFitItem[] = [
    {
      aspect: 'Dog-friendly',
      matchesPreference: true,
      description: 'You have a dog',
      icon: <Dog className="w-4 h-4" />,
    },
    {
      aspect: 'Remote-first',
      matchesPreference: true,
      description: 'Matches your preference',
      icon: <Globe className="w-4 h-4" />,
    },
    {
      aspect: 'Focus on monitoring',
      matchesPreference: true,
      description: 'Your passion',
      icon: <Buildings className="w-4 h-4" />,
    },
  ]

  return (
    <div className="w-full">
      {loading ? (
        <Card className="max-w-lg mx-auto" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <h2 className="text-xl font-semibold mb-2">Researching Datadog</h2>
            <p className="text-gray-600 dark:text-gray-400">
              AI is analyzing company information, employee reviews, news, and finding your connections...
            </p>
          </CardContent>
        </Card>
      ) : (
        <CompanyResearch
          companyName="Datadog"
          insights={insights}
          cultureFit={cultureFit}
          applicationStrategy={{
            emphasis: 'Emphasizing Python + monitoring experience',
          }}
          onViewFullReport={() => setLoading(true)}
        />
      )}
    </div>
  )
}
