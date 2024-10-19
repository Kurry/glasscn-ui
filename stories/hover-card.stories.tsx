import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { glassStorybookConfig } from '@/recipes/glass-cva'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof HoverCardContent> = {
  title: 'UI/HoverCard',
  component: HoverCardContent,
  // tags: ['autodocs'],
  ...glassStorybookConfig,
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent {...args}>The React Framework - created and maintained by @vercel.</HoverCardContent>
    </HoverCard>
  ),
}
