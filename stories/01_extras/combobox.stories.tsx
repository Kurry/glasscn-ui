import {
  type ComboBoxProps,
  ComboBox as TheComponent,
} from "@/components/ui-extras/combobox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TheComponent> = {
  title: "UI (New)/ComboBox",
  // id: "ui-submit-button",
  component: TheComponent,
  // tags: ['autodocs'],
  argTypes: {
    options: {
      table: {
        disable: true
      }
    },
    onSelect: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    triggerClassName: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof TheComponent>;

export const Default: Story = {
  render: ({ options, ...args }) => {
    const combinedArgs: ComboBoxProps = {
      deselectable: true,
      options: [
        {
          value: "apples",
          label: "🍏 Apples",
          keywords: "apples fruit",
        },
        {
          value: "oranges",
          label: "🍊 Oranges",
          keywords: "oranges fruit",
        },
        {
          value: "eggplants",
          label: "🍆 Eggplants",
          keywords: "eggplants veggie",
        },
      ],
      ...args,
    };
    return <TheComponent {...combinedArgs} />;
  },
};
