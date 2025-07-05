import {
  CrossPlatformStatus,
  MultiPlatformDemo
} from '@/components/ui/multi-platform-orchestration'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Multi-Platform',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Multi_Platform_Status = {
  name: 'Cross-Platform Status',
  render: () => (
    <CrossPlatformStatus
      platforms={[
        {
          name: 'LinkedIn',
          applied: 45,
          status: 'complete',
          responseRate: 8
        },
        {
          name: 'Indeed',
          applied: 67,
          status: 'complete',
          responseRate: 6
        },
        {
          name: 'AngelList',
          applied: 23,
          status: 'complete',
          responseRate: 18
        },
        {
          name: 'Company Sites',
          applied: 89,
          status: 'in-progress',
          responseRate: 12
        },
        {
          name: 'Hired.com',
          applied: 0,
          status: 'pending'
        },
        {
          name: 'Dice',
          applied: 31,
          status: 'complete',
          responseRate: 4
        }
      ]}
      duplicatesPrevented={47}
      totalApplications={234}
      bestPlatform={{
        name: 'AngelList',
        responseRate: 18
      }}
      onAddPlatform={() => console.log('Adding platform')}
      onPauseLowPerformers={() => console.log('Pausing low performers')}
    />
  )
}

export const Multi_Platform_Demo = {
  name: 'Multi-Platform Demo',
  render: () => <MultiPlatformDemo />
}