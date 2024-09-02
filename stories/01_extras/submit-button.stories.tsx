import { SubmitButton } from "@/components/ui-extras/submit-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SubmitButton> = {
  title: "UI (New)/Submit Button",
  // id: "ui-submit-button",
  component: SubmitButton,
  // tags: ['autodocs'],
  decorators: [
    (Story) => (
      <form
        className="flex flex-col gap-4 items-start"
        action={async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }}
      >
        <Story />
        <p className="text-black/70 dark:text-white/80 text-sm italic">
          This button uses a new React 19 hook: <code>useFormStatus</code>.
          Click to see it in action.
        </p>
      </form>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  render: () => <SubmitButton pendingChildren={"Saving..."}>Save</SubmitButton>,
};

export const Disabled: Story = {
  render: () => (
    <SubmitButton pendingChildren={"Saving..."} disabled>
      Save
    </SubmitButton>
  ),
};
