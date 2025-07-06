import { RoadblockAlert, SmartWorkaround, FailureRecoveryDemo } from '@/components/ui/failure-recovery'
import { Clock, CheckCircle, UserCheck } from '@phosphor-icons/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Failure Recovery',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Agent_Roadblock = {
  name: 'Agent Hits Roadblock',
  render: () => (
    <RoadblockAlert
      jobCompany="Apple"
      issueDescription='Custom question: "Draw something that represents your coding philosophy"'
      options={[
        {
          id: 'skip',
          label: 'Skip this job',
          description: 'Resume in 5 sec',
          icon: <Clock className="w-5 h-5" />,
        },
        {
          id: 'template',
          label: 'Use template answer',
          description: '70% success',
          successRate: 70,
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          id: 'manual',
          label: 'Pause all',
          description: 'Handle manually',
          icon: <UserCheck className="w-5 h-5" />,
          isPrimary: true,
        },
      ]}
      activeJobCount={12}
      onSelectOption={(id) => console.log(`Selected option: ${id}`)}
    />
  ),
}

export const Smart_Workaround = {
  name: 'Smart Workaround Solution',
  render: () => (
    <SmartWorkaround
      jobCompany="Netflix"
      issue="3 references"
      suggestedSolutions={[
        {
          name: 'John D.',
          details: 'Former manager (connected)',
        },
        {
          name: 'Sarah M.',
          details: 'Colleague at Google',
        },
        {
          name: 'Mike R.',
          details: 'Direct report',
        },
      ]}
      onUseSolution={() => console.log('Using suggested solution')}
      onSkipJob={() => console.log('Skipping job')}
    />
  ),
}

export const Complete_Recovery_Flow = {
  name: 'Complete Recovery Flow',
  render: () => <FailureRecoveryDemo />,
}
