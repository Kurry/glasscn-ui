import { LandingPage } from '@/components/onboarding/landing-page'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LandingPage> = {
  title: 'Onboarding/Landing Page',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof LandingPage>

export const Default: Story = {}
