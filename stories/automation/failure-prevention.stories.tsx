import {
  ApplicationQualityControl,
  FailurePreventionDemo
} from '@/components/ui/failure-prevention'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Failure Prevention',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Quality_Control = {
  name: 'Application Quality Control',
  render: () => (
    <ApplicationQualityControl
      companyName="Apple"
      potentialIssues={[
        {
          id: '1',
          severity: 'high',
          issue: 'Resume has "Googler" in bio',
          solution: 'AI removed competitive reference'
        },
        {
          id: '2',
          severity: 'medium',
          issue: 'GitHub has Android projects',
          solution: 'AI emphasizing iOS work instead'
        },
        {
          id: '3',
          severity: 'low',
          issue: 'Cover letter mentions Windows',
          solution: 'AI rewrote for Apple ecosystem'
        }
      ]}
      isPassed={false}
      onReviewChanges={() => console.log('Reviewing changes')}
    />
  )
}

export const Quality_Check_Passed = {
  name: 'Quality Check Passed',
  render: () => (
    <ApplicationQualityControl
      companyName="Apple"
      potentialIssues={[]}
      isPassed={true}
      onSubmitApplication={() => console.log('Submitting application')}
      onReviewChanges={() => console.log('Reviewing changes')}
    />
  )
}

export const Failure_Prevention_Demo = {
  name: 'Failure Prevention Demo',
  render: () => <FailurePreventionDemo />
}