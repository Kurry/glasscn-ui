import { OpportunityAlert, BackgroundMonitor, OpportunityMonitoringDemo } from '@/components/ui/opportunity-monitoring'
import { Star, BriefcaseMedical, MapPin, DollarSign, Clock } from 'lucide-react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Opportunity Monitoring',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Perfect_Match_Alert = {
  name: 'Perfect Match Alert',
  render: () => (
    <OpportunityAlert
      company="OpenAI"
      position="ML Engineer"
      matchScore={94}
      matchReasons={[
        {
          icon: <Star className="w-4 h-4" />,
          text: 'Perfectly matches your experience with Python and ML',
        },
        {
          icon: <BriefcaseMedical className="w-4 h-4" />,
          text: 'Healthcare industry (your preferred sector)',
        },
        {
          icon: <MapPin className="w-4 h-4" />,
          text: 'Remote position with flexible hours',
        },
        {
          icon: <DollarSign className="w-4 h-4" />,
          text: 'Salary range $150-180k (above your minimum)',
        },
        {
          icon: <Clock className="w-4 h-4" />,
          text: 'Posted 1 hour ago (early application advantage)',
        },
      ]}
      onViewDetails={() => console.log('Viewing details')}
      onDismiss={() => console.log('Dismissing alert')}
    />
  ),
}

export const Auto_Applied = {
  name: 'Automatically Applied',
  render: () => (
    <OpportunityAlert
      company="OpenAI"
      position="ML Engineer"
      matchScore={94}
      matchReasons={[
        {
          icon: <Star className="w-4 h-4" />,
          text: 'Perfectly matches your experience with Python and ML',
        },
        {
          icon: <BriefcaseMedical className="w-4 h-4" />,
          text: 'Healthcare industry (your preferred sector)',
        },
        {
          icon: <MapPin className="w-4 h-4" />,
          text: 'Remote position with flexible hours',
        },
      ]}
      appliedAutomatically={true}
    />
  ),
}

export const Monitoring_Dashboard = {
  name: 'Monitoring Dashboard',
  render: () => (
    <BackgroundMonitor
      stats={{
        newJobsFound: 128,
        highMatchCount: 12,
        appliedCount: 48,
        interviewsScheduled: 3,
      }}
      latestAlerts={[
        { company: 'OpenAI', position: 'ML Engineer', matchScore: 94, timeAgo: '2h ago' },
        { company: 'Anthropic', position: 'Research Engineer', matchScore: 91, timeAgo: '4h ago' },
        { company: 'Scale AI', position: 'Senior AI Engineer', matchScore: 87, timeAgo: '12h ago' },
      ]}
      onViewAll={() => console.log('Viewing all alerts')}
    />
  ),
}

export const Complete_Monitoring = {
  name: 'Complete Monitoring Flow',
  render: () => <OpportunityMonitoringDemo />,
}
