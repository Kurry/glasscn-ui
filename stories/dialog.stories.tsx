import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { glassStorybookConfig } from '@/recipes/glass-cva';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DialogContent> = {
  title: 'UI/Dialog',
  component: Dialog,
  // tags: ['autodocs'],
  ...glassStorybookConfig
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};
