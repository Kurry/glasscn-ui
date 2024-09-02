import { HeadingTitle as TheComponent } from "@/components/ui-extras/heading-title";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TheComponent> = {
  title: "UI (New)/Heading Title",
  // id: "ui-submit-button",
  component: TheComponent,
  // tags: ['autodocs'],
  args: {
    size: '5xl',
    variant: 'gradient'
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "gradient"],
    },
    color: {
      control: { type: "select" },
      options: ["default", "primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
      ],
    },
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "span"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TheComponent>;

export const Default: Story = {
  render: (args) => <TheComponent {...args}>Welcome to this project</TheComponent>,
};

export const PrimaryColor: Story = {
  args: {
    color: "primary",
  },
  render: (args) => <TheComponent {...args}>Welcome to this project</TheComponent>,
};

export const SecondaryColor: Story = {
  args: {
    color: "secondary",
  },
  render: (args) => <TheComponent {...args}>Welcome to this project</TheComponent>,
};
