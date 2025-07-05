import { 
  ResumeDropZone,
  ResumeAnalysisProgress,
  EnhancedProfile,
  ResumeEnhancementDemo
} from '@/components/ui/resume-auto-enhancement'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Resume Auto Enhancement',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

// Individual Steps
export const Step1_DropZone = {
  name: 'Step 1: Resume Drop Zone',
  render: () => (
    <ResumeDropZone
      onUpload={(file) => console.log(`Uploaded: ${file.name}`)}
    />
  )
}

export const Step2_Analysis = {
  name: 'Step 2: Analysis Progress',
  render: () => (
    <ResumeAnalysisProgress
      progress={70}
      currentTask="Calculating market position"
      completedTasks={[
        "Extracting content",
        "Finding your LinkedIn",
        "Scanning your GitHub",
        "Analyzing portfolio site"
      ]}
      onComplete={() => console.log('Analysis complete')}
    />
  )
}

export const Step3_Enhanced_Profile = {
  name: 'Step 3: Enhanced Profile',
  render: () => (
    <EnhancedProfile
      originalScore={68}
      newScore={94}
      enhancements={[
        { 
          type: 'skills', 
          description: 'Added missing skills from GitHub', 
          count: 15,
          source: 'GitHub repositories'
        },
        { 
          type: 'achievements', 
          description: 'Quantified achievements', 
          count: 8,
          source: 'LinkedIn & resume context'
        },
        { 
          type: 'projects', 
          description: 'Imported projects from portfolio', 
          count: 3,
          source: 'Personal website'
        },
        { 
          type: 'keywords', 
          description: 'Updated with current market keywords', 
          count: 25,
          source: 'Job market analysis'
        },
        { 
          type: 'variants', 
          description: 'Created resume variants', 
          count: 5,
          source: 'Industry best practices'
        },
      ]}
      onAcceptAll={() => console.log('Accept all')}
      onReviewChanges={() => console.log('Review changes')}
      onExport={() => console.log('Export resume')}
    />
  )
}

// Complete Flow Demo
export const Complete_Flow = {
  name: 'Complete Auto Enhancement Flow',
  render: () => <ResumeEnhancementDemo />
}