import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DropdownMenuContent> = {
  title: "UI/DropdownMenu",
  component: DropdownMenuContent,
  // tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "glass"],
    },
    blur: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl"],
    },
    sideOffset: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "glass",
    blur: "lg",
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-row gap-4 items-center">
      <span>Dropdown Menu:</span>
      <DropdownMenu open>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent {...args}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuCheckboxItem checked={true}>
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent {...args}>
                <DropdownMenuItem>
                  <span className="mr-2 h-4 w-4">✉️</span>
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
};
