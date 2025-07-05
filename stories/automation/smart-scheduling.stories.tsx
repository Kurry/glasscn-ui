import {
  InterviewCoordination,
  SmartSchedulingDemo
} from '@/components/ui/smart-scheduling'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Smart Scheduling',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Interview_Coordination = {
  name: 'Interview Coordination',
  render: () => (
    <InterviewCoordination
      slots={[
        {
          id: '1',
          company: 'Google',
          timeOptions: ['Tue 2pm', 'Thu 3pm'],
          constraints: 'Tue 2pm or Thu 3pm?',
          scheduled: 'Tue 2pm'
        },
        {
          id: '2',
          company: 'Meta',
          timeOptions: ['Mon', 'Tue', 'Wed'],
          constraints: 'Mon-Wed, anytime',
          scheduled: 'Wed 10am'
        },
        {
          id: '3',
          company: 'Stripe',
          timeOptions: ['Fri morning'],
          constraints: 'Fri morning only',
          scheduled: 'Fri 9am'
        }
      ]}
      calendar={[
        // Monday
        [
          { dayIndex: 0, halfDay: 'morning', isConflict: true },
          { dayIndex: 0, halfDay: 'afternoon', isConflict: true },
        ],
        // Tuesday
        [
          { dayIndex: 1, halfDay: 'morning', isConflict: false },
          { dayIndex: 1, halfDay: 'afternoon', isConflict: false, isScheduled: true },
        ],
        // Wednesday
        [
          { dayIndex: 2, halfDay: 'morning', isConflict: false, isScheduled: true },
          { dayIndex: 2, halfDay: 'afternoon', isConflict: true },
        ],
        // Thursday
        [
          { dayIndex: 3, halfDay: 'morning', isConflict: false },
          { dayIndex: 3, halfDay: 'afternoon', isConflict: true },
        ],
        // Friday
        [
          { dayIndex: 4, halfDay: 'morning', isConflict: false, isScheduled: true },
          { dayIndex: 4, halfDay: 'afternoon', isConflict: true },
        ],
      ]}
      onConfirmAll={() => console.log('Confirm all')}
      onAdjust={() => console.log('Adjust')}
    />
  )
}

export const Scheduling_Demo = {
  name: 'Smart Scheduling Demo',
  render: () => <SmartSchedulingDemo />
}