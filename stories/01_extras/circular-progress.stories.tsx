import { CircularProgress } from '@/components/ui-extras/circular-progress'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CircularProgress.Label> = {
  title: 'UI/Circular Progress',
  component: CircularProgress.Label,
  // tags: ['autodocs'],
  args: {
    value: 33.33,
  },
  argTypes: {
    value: {
      control: 'number',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  } as any,
}

export default meta
type Story = StoryObj<typeof CircularProgress.Label>

export const Default: Story = {
  render: (args: any) => (
    <CircularProgress.Root size={args.size}>
      <CircularProgress.Vector value={args.value} />
      <CircularProgress.Label {...args} />
    </CircularProgress.Root>
  ),
}
