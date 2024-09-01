import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>This is an alert description.</AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>This is a destructive alert.</AlertDescription>
    </Alert>
  ),
};
