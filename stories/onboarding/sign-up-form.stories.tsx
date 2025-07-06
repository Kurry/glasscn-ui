import { SignUpForm } from '@/components/onboarding/sign-up-form'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SignUpForm> = {
  title: 'Onboarding/Sign Up Form',
  component: SignUpForm,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof SignUpForm>

export const Default: Story = {}
