import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
