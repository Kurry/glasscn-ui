import { CompanyResearch, CompanyResearchDemo } from '@/components/ui/company-research'
import { Dog, Briefcase, Building, DollarSign, Users, Globe } from 'lucide-react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Company Research',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Company_Research_Engine = {
  name: 'Company Research Engine',
  render: () => (
    <CompanyResearch
      companyName="Datadog"
      insights={[
        {
          id: '1',
          text: 'Recent $8B valuation',
          icon: <DollarSign className="w-4 h-4" />,
        },
        {
          id: '2',
          text: 'Expanding ML monitoring team',
          icon: <Building className="w-4 h-4" />,
        },
        {
          id: '3',
          text: 'CEO mentioned Python skills shortage',
          icon: <Users className="w-4 h-4" />,
        },
        {
          id: '4',
          text: 'Your ex-colleague is VP there',
          icon: <Briefcase className="w-4 h-4" />,
        },
        {
          id: '5',
          text: 'They use your open-source tool',
          icon: <Globe className="w-4 h-4" />,
        },
      ]}
      cultureFit={[
        {
          aspect: 'Dog-friendly',
          matchesPreference: true,
          description: 'You have a dog',
          icon: <Dog className="w-4 h-4" />,
        },
        {
          aspect: 'Remote-first',
          matchesPreference: true,
          description: 'Matches your preference',
          icon: <Globe className="w-4 h-4" />,
        },
        {
          aspect: 'Focus on monitoring',
          matchesPreference: true,
          description: 'Your passion',
          icon: <Building className="w-4 h-4" />,
        },
      ]}
      applicationStrategy={{
        emphasis: 'Emphasizing Python + monitoring experience',
      }}
      onViewFullReport={() => console.log('Viewing full report')}
    />
  ),
}

export const Company_Research_Demo = {
  name: 'Company Research Demo',
  render: () => <CompanyResearchDemo />,
}
