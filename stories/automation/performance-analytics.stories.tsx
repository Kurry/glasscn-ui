import { WeeklyIntelligenceReport, PerformanceAnalyticsDemo } from '@/components/ui/performance-analytics'
import { Calendar, ChevronUp, CheckCircle } from 'lucide-react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Performance Analytics',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Weekly_Intelligence_Report = {
  name: 'Weekly Intelligence Report',
  render: () => (
    <WeeklyIntelligenceReport
      week={3}
      stats={[
        {
          label: 'Applications',
          value: '342',
          previousPeriod: '+67% vs Week 2',
          change: { value: '67%', isPositive: true },
        },
        {
          label: 'Responses',
          value: '41',
          previousPeriod: '12% rate ↑3%',
          change: { value: '3%', isPositive: true },
        },
        {
          label: 'Interviews',
          value: '8',
          previousPeriod: 'scheduled',
          change: { value: '5', isPositive: true },
        },
        {
          label: 'Offers',
          value: '2',
          previousPeriod: 'pending',
        },
      ]}
      insights={[
        {
          id: '1',
          description: 'Tuesday morning applies',
          impact: '+5% response',
          icon: <Calendar className="w-4 h-4" />,
        },
        {
          id: '2',
          description: 'Shorter resume',
          impact: '+3% response',
          icon: <ChevronUp className="w-4 h-4" />,
        },
        {
          id: '3',
          description: 'Referral mentions',
          impact: '+8% response',
          icon: <CheckCircle className="w-4 h-4" />,
        },
      ]}
      strategyAdjustments={[
        {
          id: '1',
          description: 'More Tuesday applications',
        },
        {
          id: '2',
          description: 'Condensing all resumes',
        },
        {
          id: '3',
          description: 'Finding more referral paths',
        },
      ]}
      projectedOffers="4-6"
      onImplementInsights={() => console.log('Implementing insights')}
    />
  ),
}

export const Performance_Analytics_Demo = {
  name: 'Performance Analytics Demo',
  render: () => <PerformanceAnalyticsDemo />,
}
