import { JobHuntActivation, JobApplicationDashboard, BulkApplicationDemo } from '@/components/ui/bulk-job-application'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Bulk Job Application',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

// Individual Steps
export const Step1_Job_Hunt_Activation = {
  name: 'Step 1: Job Hunt Activation',
  render: () => (
    <JobHuntActivation
      jobTitle="Software Engineer"
      locations={['Remote', 'SF', 'NYC']}
      salary="$120k-180k"
      onActivate={() => console.log('Activated')}
    />
  ),
}

export const Step2_Application_Dashboard = {
  name: 'Step 2: Application Dashboard',
  render: () => (
    <JobApplicationDashboard
      activeCompany="Google"
      activePosition="Software Engineer"
      totalToday={23}
      responses={4}
      applications={[
        {
          id: '1',
          company: 'Google',
          position: 'Software Engineer',
          status: 'in-progress',
          time: 'Now',
          matchScore: 94,
        },
        {
          id: '2',
          company: 'OpenAI',
          position: 'Full Stack Developer',
          status: 'completed',
          time: '5 min ago',
          matchScore: 92,
        },
        {
          id: '3',
          company: 'Meta',
          position: 'Senior Developer',
          status: 'completed',
          time: '12 min ago',
          matchScore: 89,
        },
        {
          id: '4',
          company: 'Netflix',
          position: 'Backend Engineer',
          status: 'scheduled',
          time: 'In queue',
          matchScore: 87,
        },
      ]}
      onPause={() => console.log('Paused')}
      onViewDetails={() => console.log('View details')}
      onGear={() => console.log('Settings')}
    />
  ),
}

// Complete Flow Demo
export const Complete_Flow = {
  name: 'Complete Bulk Application Flow',
  render: () => <BulkApplicationDemo />,
}
