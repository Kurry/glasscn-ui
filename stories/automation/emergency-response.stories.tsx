import { UrgentOpportunityHandling, EmergencyResponseDemo } from '@/components/ui/emergency-response'
import { CheckCircle, Star, Users, User } from '@phosphor-icons/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Emergency Response',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Urgent_Opportunity_Handler = {
  name: 'Urgent Opportunity Handler',
  render: () => (
    <UrgentOpportunityHandling
      company="SpaceX"
      position="Your exact role!"
      timeLeft="2 hours"
      actions={[
        {
          id: '1',
          description: 'Stopped all other applications',
          isCompleted: true,
          icon: <CheckCircle className="w-4 h-4" />,
        },
        {
          id: '2',
          description: 'Created custom resume (98% match)',
          isCompleted: true,
          icon: <Star className="w-4 h-4" />,
        },
        {
          id: '3',
          description: 'Found 3 SpaceX employees in network',
          isCompleted: true,
          icon: <Users className="w-4 h-4" />,
        },
        {
          id: '4',
          description: 'Drafted referral requests',
          isCompleted: true,
          icon: <User className="w-4 h-4" />,
        },
        {
          id: '5',
          description: 'Prepared perfect cover letter',
          isCompleted: true,
          icon: <CheckCircle className="w-4 h-4" />,
        },
        {
          id: '6',
          description: 'Found hiring manager on Twitter',
          isCompleted: true,
          icon: <User className="w-4 h-4" />,
        },
      ]}
      onLaunch={() => console.log('Launching application')}
    />
  ),
}

export const Emergency_Response_Demo = {
  name: 'Emergency Response Demo',
  render: () => <EmergencyResponseDemo />,
}
