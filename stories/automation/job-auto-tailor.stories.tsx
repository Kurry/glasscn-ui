import { JobUrlInput, TailoredResumes, JobAutoTailorDemo } from '@/components/ui/job-auto-tailor'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Job Auto Tailor',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

// Individual Steps
export const Step1_Job_URL_Input = {
  name: 'Step 1: Job URL Input',
  render: () => <JobUrlInput onSubmit={(url) => console.log(`Submitted URL: ${url}`)} />,
}

export const Step2_Tailored_Resumes = {
  name: 'Step 2: Tailored Resume Variants',
  render: () => (
    <TailoredResumes
      variants={[
        {
          id: 'backend',
          company: 'Google',
          position: 'SWE',
          focus: 'Backend',
          matchPercentage: 94,
          isRecommended: true,
        },
        {
          id: 'fullstack',
          company: 'Google',
          position: 'SWE',
          focus: 'Full-Stack',
          matchPercentage: 87,
        },
        {
          id: 'ml',
          company: 'Google',
          position: 'SWE',
          focus: 'ML Eng',
          matchPercentage: 82,
        },
      ]}
      onSelectVariant={(id) => console.log(`Selected variant: ${id}`)}
      onMergeBest={() => console.log('Merging best features')}
    />
  ),
}

// Complete Flow Demo
export const Complete_Flow = {
  name: 'Complete Job Auto Tailor Flow',
  render: () => <JobAutoTailorDemo />,
}
