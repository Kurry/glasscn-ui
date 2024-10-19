import { Input } from '@/components/ui/input'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  // tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => <Input placeholder="Enter text here" />,
}

export const Disabled: Story = {
  render: () => <Input disabled placeholder="Disabled input" />,
}
