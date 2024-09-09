import { AspectRatio } from '@/components/ui/aspect-ratio';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AspectRatio> = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <div className="max-w-lg mx-auto">
      <AspectRatio ratio={16 / 9} className="bg-slate-50 dark:bg-slate-800 rounded-md overflow-hidden">
        <img
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=800&auto=format&fit=cover"
        alt="by Simon Berger"
        className="object-cover h-full w-full"
        />
      </AspectRatio>
    </div>
  ),
};
