import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuPortal, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '@/components/ui/context-menu';
import { glassStorybookConfig } from '@/recipes/glass-cva';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContextMenuContent> = {
  title: 'UI/ContextMenu',
  component: ContextMenu,
  // tags: ['autodocs'],
  ...glassStorybookConfig
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: (args) => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] bg-background/50 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent {...args}>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
        <ContextMenuCheckboxItem checked={true}>
          Activity Bar
        </ContextMenuCheckboxItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <span>Invite users</span>
          </ContextMenuSubTrigger>
          <ContextMenuPortal>
            <ContextMenuSubContent {...args}>
              <ContextMenuItem>
                <span className="mr-2 h-4 w-4">✉️</span>
                <span>Email</span>
              </ContextMenuItem>
              <ContextMenuItem>
                <span>Message</span>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <span>More...</span>
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuPortal>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
