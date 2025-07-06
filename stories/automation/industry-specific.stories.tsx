import { GitHubIntegration, PortfolioSync, IndustrySpecificDemo } from '@/components/ui/industry-specific-automation'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Industry-Specific',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const GitHub_Integration = {
  name: 'GitHub Integration (Engineers)',
  render: () => (
    <GitHubIntegration
      metrics={[
        {
          label: 'Commits analyzed',
          value: '1,247 across 12 repos',
        },
        {
          label: 'Top languages',
          value: 'Python, JS, Go',
        },
        {
          label: 'Contribution graph',
          value: 'Very active',
        },
      ]}
      features={[
        {
          label: 'Open source contributor - 2k stars',
          isAdded: true,
        },
        {
          label: 'Implemented CI/CD pipeline',
          description: 'Based on your GitHub Actions workflows',
          isAdded: true,
        },
        {
          label: 'Core maintainer of DevTools',
          isAdded: false,
        },
      ]}
      matchingCompanies={8}
      onViewCompanies={() => console.log('Viewing companies')}
    />
  ),
}

export const Designer_Portfolio = {
  name: 'Portfolio Sync (Designers)',
  render: () => (
    <PortfolioSync
      platforms={['Dribbble', 'Behance', 'Figma']}
      projectsFound={47}
      selectedCount={8}
      projects={[
        { id: '1', thumbnail: '', title: 'Banking App', platform: 'Dribbble', metrics: '2M users' },
        { id: '2', thumbnail: '', title: 'E-commerce', platform: 'Behance', metrics: '40% lift' },
        { id: '3', thumbnail: '', title: 'Design System', platform: 'Figma', metrics: '500 components' },
        { id: '4', thumbnail: '', title: 'Food Delivery', platform: 'Dribbble', metrics: '15% conversion' },
        { id: '5', thumbnail: '', title: 'Fitness App', platform: 'Figma', metrics: '100k users' },
        { id: '6', thumbnail: '', title: 'Travel Booking', platform: 'Behance', metrics: '30% time saved' },
        { id: '7', thumbnail: '', title: 'Productivity Tool', platform: 'Figma', metrics: '25% efficiency' },
        { id: '8', thumbnail: '', title: 'Social Media', platform: 'Dribbble', metrics: '1.5M users' },
      ]}
      caseStudies={['Banking app - 2M users', 'E-commerce redesign - 40% lift', 'Design system - 500 components']}
      targetRole="Product Designer"
      onManageProjects={() => console.log('Managing projects')}
    />
  ),
}

export const Industry_Demo = {
  name: 'Industry-Specific Demo',
  render: () => <IndustrySpecificDemo />,
}
