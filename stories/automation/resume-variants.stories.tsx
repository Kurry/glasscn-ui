import { IntelligentResumeVariants, ResumeVariantsDemo } from '@/components/ui/resume-variants'
import { Briefcase, CaretUp, Globe, Users } from '@phosphor-icons/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Resume Variants',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Strategic_Variants = {
  name: 'Strategic Resume Variants',
  render: () => (
    <IntelligentResumeVariants
      variants={[
        {
          id: 'big-tech',
          name: '"Big Tech" Version',
          description: 'Emphasizes scale & algorithms',
          emphasis:
            'Optimized for FAANG and large tech companies. Emphasizes your experience with large-scale systems, algorithmic efficiency, and enterprise architecture.',
          icon: <Briefcase className="w-5 h-5" />,
        },
        {
          id: 'startup',
          name: '"Startup" Version',
          description: 'Highlights adaptability & ownership',
          emphasis:
            'Perfect for startups and growth-stage companies. Focuses on your versatility, ownership mentality, and ability to work across the stack with limited resources.',
          icon: <CaretUp className="w-5 h-5" />,
        },
        {
          id: 'remote',
          name: '"Remote-First" Version',
          description: 'Shows async communication skills',
          emphasis:
            'Tailored for fully-remote positions. Highlights your experience with asynchronous communication, self-management, and independent work styles.',
          icon: <Globe className="w-5 h-5" />,
        },
        {
          id: 'leadership',
          name: '"Leadership" Version',
          description: 'Focuses on mentorship & impact',
          emphasis:
            'Designed for team lead and managerial roles. Emphasizes your experience mentoring others, making strategic decisions, and driving team success.',
          icon: <Users className="w-5 h-5" />,
        },
      ]}
      onPreviewVariant={(id) => console.log(`Preview variant: ${id}`)}
      onDownloadAll={() => console.log('Download all variants')}
    />
  ),
}

export const Resume_Variants_Demo = {
  name: 'Resume Variants Demo',
  render: () => <ResumeVariantsDemo />,
}
