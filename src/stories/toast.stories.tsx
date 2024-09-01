import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";
import { Toast } from "../components/ui/toast";
import { Toaster } from "../components/ui/toaster";
import { useToast } from "../hooks/use-toast";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  // tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <>
        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Show Toast
        </Button>
        <Toaster />
      </>
    );
  },
};
