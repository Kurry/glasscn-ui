import {
  SalaryIntelligence,
  CompensationIntelligenceDemo
} from '@/components/ui/compensation-intelligence'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Compensation Intelligence',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Salary_Intelligence = {
  name: 'Salary Intelligence',
  render: () => (
    <SalaryIntelligence
      marketValue="$145k-165k"
      profileCount={847}
      categories={[
        {
          id: 'under',
          label: 'Under market',
          count: 12,
          status: 'Deprioritized',
          color: 'red'
        },
        {
          id: 'at',
          label: 'At market',
          count: 45,
          status: 'Active',
          color: 'blue'
        },
        {
          id: 'above',
          label: 'Above market',
          count: 23,
          status: 'Priority focus',
          color: 'green'
        }
      ]}
      bestOpportunity={{
        company: 'Datadog',
        salary: '$175k',
        equity: 'equity',
        match: 94
      }}
      onFocusHighValue={() => console.log('Focusing on high-value roles')}
    />
  )
}

export const Compensation_Demo = {
  name: 'Compensation Intelligence Demo',
  render: () => <CompensationIntelligenceDemo />
}