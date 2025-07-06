import { EnhanceButton, EnhanceModal } from '@/components/ui/one-click-enhance'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EnhanceButton> = {
  title: 'One-Click Enhance/Demo',
  component: EnhanceButton,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof EnhanceButton>

// Demo component that shows the full flow
function OneClickEnhanceDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [resumeId] = useState('sample-resume-123')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">One-Click Resume Enhancement</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Transform your resume with AI-powered enhancements in seconds
          </p>
        </div>

        <EnhanceButton onClick={() => setIsModalOpen(true)} size="lg" credits={1} />

        <EnhanceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          resumeId={resumeId}
          onComplete={(enhancedResumeId) => {
            console.log('Resume enhanced:', enhancedResumeId)
            setIsModalOpen(false)
          }}
        />
      </div>
    </div>
  )
}

export const FullDemo: Story = {
  render: () => <OneClickEnhanceDemo />,
}

export const SimpleUsage: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <div className="p-8 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Enhance Your Resume</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">One click to improve your resume with AI</p>
          <EnhanceButton onClick={() => setIsOpen(true)} credits={1} />
        </div>

        <EnhanceModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          resumeId="sample-resume-456"
          onComplete={(id) => {
            console.log(`Enhanced resume ID: ${id}`)
            setIsOpen(false)
          }}
        />
      </>
    )
  },
}

export const CustomizedButton: Story = {
  render: () => (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Custom Enhancement Button</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">Custom styled enhancement button with different text</p>
      <EnhanceButton
        onClick={() => console.log('Enhance clicked')}
        variant="outline"
        size="lg"
        fullWidth
        className="border-purple-500 text-purple-500 hover:bg-purple-50"
      >
        🧠 Boost Resume with AI
      </EnhanceButton>
    </div>
  ),
}

export const VariationShowcase: Story = {
  render: () => (
    <div className="p-8 max-w-lg mx-auto space-y-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Button Variations</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Primary (Default)</h3>
          <EnhanceButton onClick={() => console.log('Enhanced')} credits={1} />
        </div>

        <div>
          <h3 className="font-medium mb-2">Outline</h3>
          <EnhanceButton onClick={() => console.log('Enhanced')} variant="outline" credits={2} />
        </div>

        <div>
          <h3 className="font-medium mb-2">Small</h3>
          <EnhanceButton onClick={() => console.log('Enhanced')} size="sm" credits={1} />
        </div>

        <div>
          <h3 className="font-medium mb-2">Large Full Width</h3>
          <EnhanceButton onClick={() => console.log('Enhanced')} size="lg" fullWidth credits={3} />
        </div>

        <div>
          <h3 className="font-medium mb-2">Custom Button Text</h3>
          <EnhanceButton onClick={() => console.log('Enhanced')} credits={0}>
            🚀 Supercharge Resume
          </EnhanceButton>
        </div>

        <div>
          <h3 className="font-medium mb-2">Disabled State</h3>
          <EnhanceButton onClick={() => console.log('Enhanced')} disabled credits={0}>
            No Credits Available
          </EnhanceButton>
        </div>
      </div>
    </div>
  ),
}
