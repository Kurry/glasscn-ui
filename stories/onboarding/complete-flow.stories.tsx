import { WelcomeDashboard } from '@/components/ui/empty-state'
import { FileUpload } from '@/components/ui/file-upload'
import { AnalyzingResume } from '@/components/ui/progress-indicator'
import { ResumeAnalysisResults } from '@/components/ui/score-card'
import { ResumeBuilder, ExperienceBuilder } from '@/components/ui/form-builder'
import { AIEnhancementPreview } from '@/components/ui/comparison-card'
import { ResumeComplete } from '@/components/ui/automation-pitch'
import { QuickJobPreferences } from '@/components/ui/job-preferences'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Onboarding/Complete Flow',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const WelcomeDashboardStory = {
  name: 'Welcome Dashboard',
  render: () => (
    <WelcomeDashboard
      userName="John Smith"
      onCreateResume={() => console.log('Create resume')}
      onImportResume={() => console.log('Import resume')}
    />
  ),
}

export const FileUploadStory = {
  name: 'File Upload',
  render: () => (
    <FileUpload
      onFileSelect={(file) => console.log('File selected:', file.name)}
      onStartFromScratch={() => console.log('Start from scratch')}
    />
  ),
}

export const AnalyzingResumeStory = {
  name: 'Analyzing Resume',
  render: () => <AnalyzingResume />,
}

export const ResumeAnalysisStory = {
  name: 'Resume Analysis Results',
  render: () => (
    <ResumeAnalysisResults
      onFixWithAI={() => console.log('Fix with AI')}
      onViewDetails={() => console.log('View details')}
    />
  ),
}

export const ResumeBuilderStory = {
  name: 'Resume Builder - Basic Info',
  render: () => <ResumeBuilder onContinue={() => console.log('Continue to experience')} />,
}

export const ExperienceBuilderStory = {
  name: 'Resume Builder - Experience',
  render: () => (
    <ExperienceBuilder
      onContinue={() => console.log('Continue to next step')}
      onAddAnother={() => console.log('Add another experience')}
    />
  ),
}

export const AIEnhancementStory = {
  name: 'AI Enhancement Preview',
  render: () => (
    <AIEnhancementPreview
      onApplyChanges={() => console.log('Apply all changes')}
      onReviewEach={() => console.log('Review each change')}
    />
  ),
}

export const ResumeCompleteStory = {
  name: 'Resume Complete - Automation Pitch',
  render: () => (
    <ResumeComplete
      onSetupAutomation={() => console.log('Setup automation')}
      onMaybeLater={() => console.log('Maybe later')}
    />
  ),
}

export const JobPreferencesStory = {
  name: 'Job Preferences Setup',
  render: () => <QuickJobPreferences onContinue={() => console.log('Continue with automation')} />,
}
