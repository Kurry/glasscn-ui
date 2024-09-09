import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AlertDialogContent> = {
  title: 'UI/AlertDialog',
  component: AlertDialogContent,
  // tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "glass"],
    },
    blur: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl"],
    }
  },
  args: {
    variant: "glass",
    blur: "md"
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialogContent>;

export const Default: Story = {
  render: (args) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button color="primary">Open Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent variant="glass" blur="lg" {...args}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
