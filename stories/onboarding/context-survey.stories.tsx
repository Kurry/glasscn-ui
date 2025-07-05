import { ContextSurvey } from '@/components/onboarding/context-survey'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ContextSurvey> = {
  title: 'Onboarding/Context Survey',
  component: ContextSurvey,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof ContextSurvey>

export const Default: Story = {
  render: () => (
    <ContextSurvey 
      onComplete={(responses) => console.log('Survey completed:', responses)}
    />
  )
}