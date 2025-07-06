import { ContinuousABTesting, MicroOptimizations, ResumeEvolutionDemo } from '@/components/ui/resume-evolution'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Resume Evolution',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const AB_Testing = {
  name: 'Continuous A/B Testing',
  render: () => (
    <ContinuousABTesting
      resumes={[
        {
          id: 'backend-v3',
          name: '"Backend Focus v3"',
          responseRate: 12,
        },
        {
          id: 'fullstack-v2',
          name: '"Full-Stack v2"',
          responseRate: 8,
        },
        {
          id: 'original',
          name: '"Original"',
          responseRate: 5,
        },
        {
          id: 'backend-ai-ml-v1',
          name: '"Backend + AI/ML v1"',
          responseRate: 0,
          isTesting: true,
        },
      ]}
      autoOptimizationEnabled={true}
      onToggleOptimization={(enabled) => console.log(`Auto-optimization: ${enabled ? 'ON' : 'OFF'}`)}
      onViewDetails={(id) => console.log(`Viewing details for: ${id}`)}
    />
  ),
}

export const Micro_Optimizations = {
  name: 'Micro-Optimizations',
  render: () => (
    <MicroOptimizations
      patterns={[
        {
          id: 'verb-1',
          before: '"Led"',
          after: '"Spearheaded"',
          impact: '+3%',
        },
        {
          id: 'cert-1',
          before: 'No AWS cert',
          after: 'Adding AWS cert',
          impact: '+5%',
        },
        {
          id: 'bullets-1',
          before: 'Long bullets',
          after: 'Shorter bullets',
          impact: '+2%',
        },
        {
          id: 'results-1',
          before: 'Vague results',
          after: 'Quantified results',
          impact: '+7%',
        },
      ]}
      expectedLift="+18%"
      onApplyAll={() => console.log('Applying all optimizations')}
    />
  ),
}

export const Evolution_Flow = {
  name: 'Complete Evolution Flow',
  render: () => <ResumeEvolutionDemo />,
}
