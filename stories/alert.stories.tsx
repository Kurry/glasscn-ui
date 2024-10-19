import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { glassStorybookConfig } from '@/recipes/glass-cva'
import type { Meta, StoryObj } from '@storybook/react'
import { AlertCircle } from 'lucide-react'

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  // tags: ['autodocs'],
  args: {
    color: 'default',
    ...glassStorybookConfig.args,
  },
  argTypes: {
    ...glassStorybookConfig.argTypes,
    color: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>This is an alert description.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} color="destructive">
      <AlertCircle className="w-4 h-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>This is a destructive alert.</AlertDescription>
    </Alert>
  ),
}
