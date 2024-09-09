import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { glassStorybookConfig } from '@/recipes/glass-cva';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DrawerContent> = {
  title: 'UI/Drawer',
  // component: DrawerContent,
  // tags: ['autodocs'],
  ...glassStorybookConfig
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent {...args}>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  ),
};
