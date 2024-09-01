import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../components/ui/hover-card';
import { Button } from '../components/ui/button';

const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  ),
};
