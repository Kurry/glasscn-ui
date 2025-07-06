import { EnhanceButton } from '@/components/ui/one-click-enhance'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EnhanceButton> = {
  title: 'One-Click Enhance/EnhanceButton',
  component: EnhanceButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: 'boolean',
    },
    credits: {
      control: { type: 'number', min: 0, max: 10 },
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    credits: 1,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof EnhanceButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
}

export const NoCredits: Story = {
  args: {
    credits: 0,
  },
}

export const MultipleCredits: Story = {
  args: {
    credits: 3,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const CustomText: Story = {
  args: {
    children: 'Optimize with AI',
  },
}
