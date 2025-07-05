import { OneClickEnhance, OneClickEnhanceDemo } from '@/components/ui/one-click-enhance';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof OneClickEnhance> = {
  title: 'One-Click Enhance/Demo',
  component: OneClickEnhanceDemo,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof OneClickEnhanceDemo>;

export const FullDemo: Story = {};

export const SimpleUsage: Story = {
  render: () => (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Enhance Your Resume</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        One click to improve your resume with AI
      </p>
      <OneClickEnhance
        resumeId="sample-resume-456"
        onEnhanceComplete={(id) => console.log(`Enhanced resume ID: ${id}`)}
      />
    </div>
  ),
};

export const CustomizedButton: Story = {
  render: () => (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Custom Enhancement Button</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Custom styled enhancement button with different text
      </p>
      <OneClickEnhance
        resumeId="sample-resume-456"
        variant="outline"
        size="lg"
        fullWidth
        buttonText={<>🧠 Boost Resume with AI</>}
        className="border-purple-500 text-purple-500 hover:bg-purple-50"
        onEnhanceComplete={(id) => console.log(`Enhanced resume ID: ${id}`)}
      />
    </div>
  ),
};

export const VariationShowcase: Story = {
  render: () => (
    <div className="p-8 max-w-lg mx-auto space-y-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Button Variations</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Primary (Default)</h3>
          <OneClickEnhance
            resumeId="sample-resume-1"
            onEnhanceComplete={(id) => console.log(`Enhanced: ${id}`)}
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Outline</h3>
          <OneClickEnhance
            resumeId="sample-resume-2"
            variant="outline"
            onEnhanceComplete={(id) => console.log(`Enhanced: ${id}`)}
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Small</h3>
          <OneClickEnhance
            resumeId="sample-resume-3"
            size="sm"
            onEnhanceComplete={(id) => console.log(`Enhanced: ${id}`)}
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Large Full Width</h3>
          <OneClickEnhance
            resumeId="sample-resume-4"
            size="lg"
            fullWidth
            onEnhanceComplete={(id) => console.log(`Enhanced: ${id}`)}
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Custom Button Text</h3>
          <OneClickEnhance
            resumeId="sample-resume-5"
            buttonText={<span>🚀 Supercharge Resume</span>}
            onEnhanceComplete={(id) => console.log(`Enhanced: ${id}`)}
          />
        </div>
      </div>
    </div>
  ),
};