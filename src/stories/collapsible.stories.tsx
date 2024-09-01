import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'UI/Collapsible',
  component: Collapsible,
  // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4 mt-2 rounded-md bg-background">
          Content that can be collapsed
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
