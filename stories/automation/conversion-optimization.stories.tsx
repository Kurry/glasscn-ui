import {
  ApplicationToInterviewFunnel,
  ConversionOptimization,
  ConversionOptimizationDemo,
} from '@/components/ui/conversion-optimization'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Conversion Optimization',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Application_Funnel = {
  name: 'Application to Interview Funnel',
  render: () => (
    <ApplicationToInterviewFunnel
      steps={[
        {
          id: 'applications',
          name: 'Applications',
          count: 320,
        },
        {
          id: 'resume-views',
          name: 'Resume Views',
          count: 160,
          conversionRate: 50,
        },
        {
          id: 'initial-screening',
          name: 'Initial Screening',
          count: 48,
          conversionRate: 30,
        },
        {
          id: 'interviews',
          name: 'Interviews',
          count: 16,
          conversionRate: 33,
        },
        {
          id: 'offers',
          name: 'Offers',
          count: 4,
          conversionRate: 25,
        },
      ]}
      dropOffPoint="resume-views"
      onOptimize={() => console.log('Optimizing funnel')}
    />
  ),
}

export const Conversion_Strategies = {
  name: 'Conversion Optimization Strategies',
  render: () => (
    <ConversionOptimization
      strategies={[
        {
          id: '1',
          title: 'Redesign resume header',
          description: 'Prominently feature most relevant skills and achievements at the top',
          impact: '+12% views',
        },
        {
          id: '2',
          title: 'Add company-specific keywords',
          description: 'Dynamically insert 3-5 company-specific keywords for each application',
          impact: '+20% screenings',
        },
        {
          id: '3',
          title: 'Add portfolio visualizations',
          description: 'Include visual representations of projects and outcomes',
          impact: '+15% interviews',
        },
        {
          id: '4',
          title: 'Include ROI metrics',
          description: 'Quantify your impact in terms of revenue, cost savings, or efficiency gains',
          impact: '+18% offers',
        },
      ]}
      targetPoint="resume-to-interview conversion"
      projectedImprovement="+175% more offers"
      onImplement={() => console.log('Implementing strategies')}
    />
  ),
}

export const Conversion_Demo = {
  name: 'Conversion Optimization Demo',
  render: () => <ConversionOptimizationDemo />,
}
