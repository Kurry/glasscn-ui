import { MultiAgentDashboard, MultiAgentDashboardDemo } from '@/components/ui/multi-agent-dashboard'
import { ChartLine, Star, CheckCircle, Users, Download } from '@phosphor-icons/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Multi-Agent Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Dashboard_Overview = {
  name: 'Multi-Agent Dashboard',
  render: () => (
    <MultiAgentDashboard
      agents={[
        {
          id: 'scout',
          name: 'Scout Agent',
          icon: <Star className="w-5 h-5" />,
          status: 'active',
          progress: 78,
          currentTask: 'Scanning LinkedIn for Senior ML Engineer roles',
          lastActivity: '2 minutes ago',
        },
        {
          id: 'tailor',
          name: 'Resume Tailor',
          icon: <Download className="w-5 h-5" />,
          status: 'active',
          progress: 45,
          currentTask: 'Optimizing resume for OpenAI application',
          lastActivity: '5 minutes ago',
        },
        {
          id: 'apply',
          name: 'Application Agent',
          icon: <CheckCircle className="w-5 h-5" />,
          status: 'paused',
          progress: 30,
          lastActivity: '15 minutes ago',
        },
        {
          id: 'interview',
          name: 'Interview Scheduler',
          icon: <Users className="w-5 h-5" />,
          status: 'waiting',
          progress: 0,
          lastActivity: '1 hour ago',
        },
      ]}
      metrics={[
        {
          label: 'Total Applications',
          value: 156,
          change: {
            value: '12% this week',
            isPositive: true,
          },
          icon: <ChartLine className="w-5 h-5" />,
        },
        {
          label: 'Response Rate',
          value: '9.3%',
          change: {
            value: '2.1% vs avg',
            isPositive: true,
          },
          icon: <Star className="w-5 h-5" />,
        },
        {
          label: 'Interviews',
          value: 5,
          change: {
            value: '3 pending',
            isPositive: true,
          },
          icon: <Users className="w-5 h-5" />,
        },
        {
          label: 'New Matches',
          value: 27,
          change: {
            value: 'Last 24h',
            isPositive: true,
          },
          icon: <CheckCircle className="w-5 h-5" />,
        },
      ]}
      onAgentSettings={(id) => console.log(`Settings for agent: ${id}`)}
      onViewAgentDetails={(id) => console.log(`View details for agent: ${id}`)}
      onResumeAgent={(id) => console.log(`Resume agent: ${id}`)}
      onPauseAgent={(id) => console.log(`Pause agent: ${id}`)}
      onViewReports={() => console.log('View reports')}
    />
  ),
}

export const Dashboard_Demo = {
  name: 'Dashboard Demo',
  render: () => <MultiAgentDashboardDemo />,
}
