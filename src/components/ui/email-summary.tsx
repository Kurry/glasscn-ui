import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail, ArrowRight, Target, Calendar, TrendingUp } from 'lucide-react'

interface EmailStat {
  label: string
  value: string | number
  trend?: 'up' | 'down' | 'neutral'
  icon?: React.ReactNode
}

interface ActionItem {
  id: string
  company: string
  action: string
  urgency: 'high' | 'medium' | 'low'
}

interface EmailSummaryProps {
  recipientName: string
  period: string
  stats: EmailStat[]
  actionItems: ActionItem[]
  onOpenDashboard?: () => void
  className?: string
}

export function EmailSummary({
  recipientName,
  period,
  stats,
  actionItems,
  onOpenDashboard,
  className,
}: EmailSummaryProps) {
  const getUrgencyColor = (urgency: ActionItem['urgency']) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200'
    }
  }

  return (
    <div className={cn('max-w-2xl mx-auto bg-white', className)}>
      {/* Email Header */}
      <div className="bg-primary-600 text-white p-6 rounded-t-lg">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold">📧 Your Daily Job Search Update</h1>
            <p className="text-primary-100">{period}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Greeting */}
        <div>
          <p className="text-gray-800 text-lg">Hi {recipientName},</p>
        </div>

        {/* Results Summary */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Yesterday's Results:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex items-center gap-2 mb-1">
                  {stat.icon && <div className="text-primary-600">{stat.icon}</div>}
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Items */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Action Needed:</h2>
          <div className="space-y-3">
            {actionItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                <div>
                  <p className="font-medium text-gray-900">• {item.company}</p>
                  <p className="text-sm text-gray-600">{item.action}</p>
                </div>
                <Badge className={getUrgencyColor(item.urgency)}>{item.urgency}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-4">
          <Button onClick={onOpenDashboard} size="lg" color="primary" className="text-lg px-8">
            Open Dashboard <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <div className="border-t pt-4 text-center text-sm text-gray-500">
          <p>Keep up the great work! Your next opportunity is just around the corner.</p>
        </div>
      </div>
    </div>
  )
}

interface DailySummaryProps {
  onOpenDashboard: () => void
  className?: string
}

export function DailySummary({ onOpenDashboard, className }: DailySummaryProps) {
  const stats: EmailStat[] = [
    { label: 'applications sent', value: 24, icon: <Target className="w-4 h-4" /> },
    { label: 'recruiter responses', value: 5, icon: <Mail className="w-4 h-4" /> },
    { label: 'interview requests', value: 2, icon: <Calendar className="w-4 h-4" /> },
  ]

  const actionItems: ActionItem[] = [
    { id: '1', company: 'Google', action: 'wants to schedule a call', urgency: 'high' },
    { id: '2', company: 'Meta', action: 'requested code sample', urgency: 'medium' },
  ]

  return (
    <EmailSummary
      recipientName="John"
      period="March 15, 2024"
      stats={stats}
      actionItems={actionItems}
      onOpenDashboard={onOpenDashboard}
      className={className}
    />
  )
}

interface WeeklyReportProps {
  week: number
  applications: number
  responseRate: number
  interviews: number
  topResume: string
  suggestions: Array<{ text: string; impact: string }>
  onImplementSuggestions: () => void
  className?: string
}

export function WeeklyReport({
  week,
  applications,
  responseRate,
  interviews,
  topResume,
  suggestions,
  onImplementSuggestions,
  className,
}: WeeklyReportProps) {
  return (
    <div className={cn('max-w-2xl mx-auto bg-white', className)}>
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-t-lg">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold">📊 Week {week} Progress Report</h1>
            <p className="text-primary-100">Your job search analytics</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-600 mb-1">Applications</p>
            <p className="text-2xl font-bold text-blue-900">{applications}</p>
            <p className="text-xs text-blue-700">(+∞%)</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-sm text-green-600 mb-1">Response Rate</p>
            <p className="text-2xl font-bold text-green-900">{responseRate}%</p>
            <p className="text-xs text-green-700">(7.1% rate)</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="text-sm text-purple-600 mb-1">Interviews</p>
            <p className="text-2xl font-bold text-purple-900">{interviews}</p>
            <p className="text-xs text-purple-700">scheduled</p>
          </div>
        </div>

        {/* Top Performing Resume */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Top Performing Resume:</h3>
          <p className="text-gray-700">"{topResume}" - 9.2% response rate</p>
        </div>

        {/* Suggestions */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Suggestions:</h3>
          <div className="space-y-2 mb-4">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <span className="text-yellow-600 mt-0.5">💡</span>
                <div>
                  <p className="text-sm text-gray-700">{suggestion.text}</p>
                  <p className="text-xs text-yellow-700">{suggestion.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={onImplementSuggestions} color="primary" className="w-full">
            Implement Suggestions <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
