import { TechStackCloud, RevenueTimeline, DynamicContentDemo } from '@/components/ui/dynamic-content-displays'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Dynamic Content',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

// Individual Components
export const Tech_Stack_Cloud = {
  name: 'Tech Stack Cloud (Engineer)',
  render: () => (
    <TechStackCloud
      skills={[
        { name: 'Python', size: 'xl' },
        { name: 'React', size: 'lg' },
        { name: 'Node.js', size: 'lg' },
        { name: 'AWS', size: 'lg' },
        { name: 'Docker', size: 'md' },
        { name: 'Kubernetes', size: 'md', isNew: true },
        { name: 'SQL', size: 'lg' },
        { name: 'Git', size: 'md' },
        { name: 'TensorFlow', size: 'sm' },
        { name: 'Redis', size: 'sm' },
      ]}
      missingSkills={['Go', 'Rust', 'GraphQL', 'TypeScript']}
      onAddSkill={(skill) => console.log(`Adding skill: ${skill}`)}
    />
  ),
}

export const Revenue_Timeline = {
  name: 'Revenue Timeline (Sales)',
  render: () => (
    <RevenueTimeline
      metrics={[
        { year: '2023', amount: '$2.3M', percentage: 100 },
        { year: '2022', amount: '$1.8M', percentage: 78 },
        { year: '2021', amount: '$1.2M', percentage: 52 },
      ]}
      source="LinkedIn posts and email signatures"
    />
  ),
}

// Complete Demo
export const Complete_Demo = {
  name: 'Combined Dynamic Content Demo',
  render: () => <DynamicContentDemo />,
}
