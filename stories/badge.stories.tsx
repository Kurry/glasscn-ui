import { Badge } from '@/components/ui/badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => <Badge>Default</Badge>,
};

export const Secondary: Story = {
  render: () => <Badge variant="secondary">Secondary</Badge>,
};

export const Destructive: Story = {
  render: () => <Badge variant="destructive">Destructive</Badge>,
};

export const Outline: Story = {
  render: () => <Badge variant="outline">Outline</Badge>,
};
