'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { DollarSign, CheckCircle, Target } from 'lucide-react'
import { useState } from 'react'

interface SalaryCategory {
  id: string
  label: string
  count: number
  status: string
  color: 'red' | 'green' | 'blue' | 'amber'
}

interface BestOpportunity {
  company: string
  salary: string
  equity?: string
  match: number
}

interface SalaryIntelligenceProps {
  marketValue: string
  profileCount: number
  categories: SalaryCategory[]
  bestOpportunity: BestOpportunity
  onFocusHighValue?: () => void
  className?: string
}

export function SalaryIntelligence({
  marketValue,
  profileCount,
  categories,
  bestOpportunity,
  onFocusHighValue,
  className,
}: SalaryIntelligenceProps) {
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
            <div className="text-green-600 bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Salary Intelligence Report</CardTitle>
              <CardDescription>AI-powered compensation analysis</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Card variant="solid" className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Market Value Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Based on {profileCount} similar profiles</p>
                <Badge className="bg-green-100 text-green-800 border-green-200 font-normal">{marketValue}</Badge>
              </div>

              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full relative">
                <div className="absolute top-0 left-1/4 bottom-0 w-1/2 bg-green-500 rounded-full"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-medium bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 rounded">
                    Your Value
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <div>$120k</div>
                <div>$190k</div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <h3 className="font-medium">Your applications by salary:</h3>

            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center gap-4">
                  <div className="w-28 text-sm">{category.label}:</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Progress
                        value={category.count}
                        className={cn(
                          'h-2.5',
                          category.color === 'red' && 'bg-red-100 [&>div]:bg-red-500',
                          category.color === 'green' && 'bg-green-100 [&>div]:bg-green-500',
                          category.color === 'blue' && 'bg-blue-100 [&>div]:bg-blue-500',
                          category.color === 'amber' && 'bg-amber-100 [&>div]:bg-amber-500',
                        )}
                      />
                      <span className="text-sm font-medium min-w-[40px]">{category.count}</span>
                    </div>
                  </div>
                  <div className="w-24 text-sm text-right">{category.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Best opportunity */}
          <Card variant="solid" className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="text-blue-600 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300">🎯 Best opportunity:</h4>
                  <div className="flex items-center justify-between">
                    <p className="text-blue-700 dark:text-blue-400">{bestOpportunity.company}</p>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {bestOpportunity.salary} {bestOpportunity.equity && `+ ${bestOpportunity.equity}`}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-blue-700 dark:text-blue-400">Your match:</span>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">{bestOpportunity.match}%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action */}
          {onFocusHighValue && (
            <Button onClick={onFocusHighValue} className="w-full" color="primary">
              Focus on high-value roles
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export function CompensationIntelligenceDemo() {
  const [focused, setFocused] = useState(false)

  const salaryCategories: SalaryCategory[] = !focused
    ? [
        {
          id: 'under',
          label: 'Under market',
          count: 12,
          status: 'Deprioritized',
          color: 'red',
        },
        {
          id: 'at',
          label: 'At market',
          count: 45,
          status: 'Active',
          color: 'blue',
        },
        {
          id: 'above',
          label: 'Above market',
          count: 23,
          status: 'Priority focus',
          color: 'green',
        },
      ]
    : [
        {
          id: 'under',
          label: 'Under market',
          count: 5,
          status: 'Minimal',
          color: 'amber',
        },
        {
          id: 'at',
          label: 'At market',
          count: 25,
          status: 'Secondary',
          color: 'blue',
        },
        {
          id: 'above',
          label: 'Above market',
          count: 50,
          status: 'Prioritized ✓',
          color: 'green',
        },
      ]

  return (
    <div className="w-full">
      {!focused ? (
        <SalaryIntelligence
          marketValue="$145k-165k"
          profileCount={847}
          categories={salaryCategories}
          bestOpportunity={{
            company: 'Datadog',
            salary: '$175k',
            equity: 'equity',
            match: 94,
          }}
          onFocusHighValue={() => setFocused(true)}
        />
      ) : (
        <Card className="max-w-lg mx-auto" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Strategy Updated!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              AI has reconfigured your job search to prioritize higher-paying opportunities.
            </p>
            <div className="space-y-3 text-left bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mb-6">
              <p className="font-medium text-blue-800 dark:text-blue-300">Changes made:</p>
              <div className="space-y-1 text-blue-700 dark:text-blue-400 text-sm">
                <p>• Deprioritized 7 under-market positions</p>
                <p>• Added 27 new high-compensation roles</p>
                <p>• Enhanced resume to emphasize high-value skills</p>
              </div>
            </div>
            <Button onClick={() => setFocused(false)} color="primary">
              View Updated Strategy
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
