import { Button } from '@/components/ui/button'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, within } from '@storybook/test'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // bg: { control: 'color' },
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'outline', 'ghost', 'link'],
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'danger', 'warning'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['default', 'sm', 'lg', 'xl', 'icon'] },
    radius: {
      control: 'select',
      options: ['default', 'none', 'sm', 'lg', 'xl', '2xl', '3xl', 'full'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('btn-default')).toBeInTheDocument()
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button data-testid="btn-default" variant="default" {...args}>
        Default
      </Button>
      <Button variant="subtle" {...args}>
        Subtle
      </Button>
      <Button variant="outline" {...args}>
        Outline
      </Button>
      <Button variant="ghost" {...args}>
        Ghost
      </Button>
      <Button variant="link" {...args} asChild>
        <a href="https://localhost:3000">Link</a>
      </Button>
    </div>
  ),
}

export const Primary: Story = {
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button variant="default" color="primary" {...args}>
        Default
      </Button>
      <Button variant="subtle" color="primary" {...args}>
        Subtle
      </Button>
      <Button variant="outline" color="primary" {...args}>
        Outline
      </Button>
      <Button variant="ghost" color="primary" {...args}>
        Ghost
      </Button>
      <Button variant="link" color="primary" {...args}>
        Link
      </Button>
    </div>
  ),
}

export const Secondary: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button variant="default" color="secondary" {...args}>
        Default
      </Button>
      <Button variant="subtle" color="secondary" {...args}>
        Subtle
      </Button>
      <Button variant="outline" color="secondary" {...args}>
        Outline
      </Button>
      <Button variant="ghost" color="secondary" {...args}>
        Ghost
      </Button>
      <Button variant="link" color="secondary" {...args}>
        Link
      </Button>
    </div>
  ),
}

export const Accent: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button variant="default" color="accent" {...args}>
        Default
      </Button>
      <Button variant="subtle" color="accent" {...args}>
        Subtle
      </Button>
      <Button variant="outline" color="accent" {...args}>
        Outline
      </Button>
      <Button variant="ghost" color="accent" {...args}>
        Ghost
      </Button>
      <Button variant="link" color="accent" {...args}>
        Link
      </Button>
    </div>
  ),
}

export const Danger: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button variant="default" color="danger" {...args}>
        Default
      </Button>
      <Button variant="subtle" color="danger" {...args}>
        Subtle
      </Button>
      <Button variant="outline" color="danger" {...args}>
        Outline
      </Button>
      <Button variant="ghost" color="danger" {...args}>
        Ghost
      </Button>
      <Button variant="link" color="danger" {...args}>
        Link
      </Button>
    </div>
  ),
}

export const Warning: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button variant="default" color="warning" {...args}>
        Default
      </Button>
      <Button variant="subtle" color="warning" {...args}>
        Subtle
      </Button>
      <Button variant="outline" color="warning" {...args}>
        Outline
      </Button>
      <Button variant="ghost" color="warning" {...args}>
        Ghost
      </Button>
      <Button variant="link" color="warning" {...args}>
        Link
      </Button>
    </div>
  ),
}
