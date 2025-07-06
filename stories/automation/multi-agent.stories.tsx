import { AgentTeamOverview, LiveAgentCollaboration, MultiAgentDemo } from '@/components/ui/multi-agent-system'
import { Gear, FileArrowDown, Play, Pause } from '@phosphor-icons/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Multi-Agent System',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Agent_Team_Overview = {
  name: 'Agent Team Overview',
  render: () => (
    <AgentTeamOverview
      agents={[
        {
          id: 'scout',
          name: '🔍 Scout Agent',
          role: 'Job Finder',
          description: 'Finding new jobs across 15 sites',
          status: 'active',
          stats: 'Today: 247 jobs found, 89 match',
          icon: <Gear className="w-5 h-5" />,
        },
        {
          id: 'tailor',
          name: '✍️ Tailor Agent',
          role: 'Resume Customizer',
          description: 'Creating custom resumes',
          status: 'active',
          stats: 'Today: 89 resumes generated',
          icon: <FileArrowDown className="w-5 h-5" />,
        },
        {
          id: 'apply',
          name: '📝 Apply Agent',
          role: 'Application Submitter',
          description: 'Submitting applications',
          status: 'active',
          stats: 'Today: 67 applied, 22 pending',
          icon: <Play className="w-5 h-5" />,
        },
        {
          id: 'response',
          name: '📞 Response Agent',
          role: 'Response Handler',
          description: 'Will activate when responses arrive',
          status: 'waiting',
          icon: <Pause className="w-5 h-5" />,
        },
      ]}
      onViewLiveFeed={() => console.log('View live feed')}
      onAdjustStrategy={() => console.log('Adjust strategy')}
    />
  ),
}

export const Live_Agent_Collaboration = {
  name: 'Live Agent Collaboration',
  render: () => (
    <LiveAgentCollaboration
      steps={[
        {
          id: '1',
          agent: 'Scout found',
          action: 'Stripe - Senior SWE',
          duration: '2 sec',
          isCompleted: true,
        },
        {
          id: '2',
          agent: 'Tailor',
          action: 'Emphasizing payments experience',
          duration: '5 sec',
          isCompleted: true,
        },
        {
          id: '3',
          agent: 'Apply',
          action: 'Filling Greenhouse form',
          duration: '45 sec',
          isActive: true,
        },
        {
          id: '4',
          agent: 'Apply',
          action: 'Submit application',
          duration: 'Pending',
        },
      ]}
      stats={{
        speed: '52 seconds per application',
        successRate: 94,
      }}
      onPause={() => console.log('Paused')}
    />
  ),
}

export const Multi_Agent_Demo = {
  name: 'Multi-Agent System Demo',
  render: () => <MultiAgentDemo />,
}
