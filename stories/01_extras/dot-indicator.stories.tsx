import { DotIndicator } from "@/components/ui-extras/dot-indicator";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DotIndicator> = {
  title: "UI (New)/Dot Indicator",
  // id: "ui-submit-button",
  component: DotIndicator,
  // tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="items-center inline-block">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DotIndicator>;

export const Default: Story = {
  render: () => <DotIndicator>6</DotIndicator>,
};

export const Absolute: Story = {
  render: () => (
    <>
      Notifications
      <DotIndicator absolute className="bg-red-600">
        6
      </DotIndicator>
    </>
  ),
};
