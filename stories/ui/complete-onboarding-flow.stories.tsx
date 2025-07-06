import {
  SurveyStep,
  EmptyState,
  WelcomeDashboard,
  FileUpload,
  AnalyzingResume,
  ResumeAnalysisResults,
  ResumeBuilder,
  ExperienceBuilder,
  AIEnhancementPreview,
  ResumeComplete,
  QuickJobPreferences,
  ActiveDashboard,
  CreationPathSelector,
  StepFlow,
  ResumeCompleteSuccess,
} from '@/index'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'UI/Complete Onboarding Flow',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

// Survey Components
export const SurveyStepStory = {
  name: 'Survey Step',
  render: () => (
    <SurveyStep
      title="What's your current situation?"
      step={1}
      totalSteps={3}
      options={[
        { value: 'laid-off', label: 'Recently laid off', emoji: '😔' },
        { value: 'employed', label: 'Employed but looking', emoji: '🔍' },
        { value: 'graduate', label: 'Recent graduate', emoji: '🎓' },
        { value: 'career-change', label: 'Career changer', emoji: '🔄' },
      ]}
      onValueChange={(value) => console.log('Selected:', value)}
      onContinue={() => console.log('Continue')}
    />
  ),
}

// Empty States
export const EmptyStateStory = {
  name: 'Empty State',
  render: () => (
    <EmptyState
      icon={<div className="text-6xl">📄</div>}
      title="No resumes yet"
      description="Let's create your first resume to unlock all features"
      primaryAction={{
        label: 'Create Resume',
        onClick: () => console.log('Create resume'),
      }}
      secondaryAction={{
        label: 'Import Existing',
        onClick: () => console.log('Import resume'),
      }}
      lockedFeatures={['AI Job Applications', 'Voice Agent', 'Recruiter Auto-Reply']}
    />
  ),
}

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

// File Upload Flow
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

export const ResumeAnalysisResultsStory = {
  name: 'Resume Analysis Results',
  render: () => (
    <ResumeAnalysisResults
      onFixWithAI={() => console.log('Fix with AI')}
      onViewDetails={() => console.log('View details')}
    />
  ),
}

// Form Builders
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

// AI Enhancement
export const AIEnhancementPreviewStory = {
  name: 'AI Enhancement Preview',
  render: () => (
    <AIEnhancementPreview
      onApplyChanges={() => console.log('Apply all changes')}
      onReviewEach={() => console.log('Review each change')}
    />
  ),
}

// Success & Automation
export const ResumeCompleteStory = {
  name: 'Resume Complete - Automation Pitch',
  render: () => (
    <ResumeComplete
      onSetupAutomation={() => console.log('Setup automation')}
      onMaybeLater={() => console.log('Maybe later')}
    />
  ),
}

export const ResumeCompleteSuccessStory = {
  name: 'Resume Complete Success',
  render: () => (
    <ResumeCompleteSuccess
      onSetupAutomation={() => console.log('Setup automation')}
      onDownloadResume={() => console.log('Download resume')}
    />
  ),
}

// Job Preferences
export const JobPreferencesStory = {
  name: 'Job Preferences Setup',
  render: () => <QuickJobPreferences onContinue={() => console.log('Continue with automation')} />,
}

// Dashboard
export const ActiveDashboardStory = {
  name: 'Active Dashboard',
  render: () => <ActiveDashboard userName="John Smith" onViewAll={() => console.log('View all applications')} />,
}

// Path Selection
export const CreationPathSelectorStory = {
  name: 'Creation Path Selector',
  render: () => <CreationPathSelector onPathSelect={(pathId) => console.log('Path selected:', pathId)} />,
}

// Step Flow Example
export const StepFlowStory = {
  name: 'Step Flow Example',
  render: () => {
    const steps = [
      {
        id: 'survey',
        title: 'Tell us about yourself',
        description: 'Help us personalize your experience',
        component: (
          <SurveyStep
            title="What's your current situation?"
            step={1}
            totalSteps={3}
            options={[
              { value: 'laid-off', label: 'Recently laid off', emoji: '😔' },
              { value: 'employed', label: 'Employed but looking', emoji: '🔍' },
            ]}
            onValueChange={() => {}}
            onContinue={() => {}}
          />
        ),
      },
      {
        id: 'resume',
        title: 'Create your resume',
        description: 'Build a professional resume',
        component: (
          <div className="text-center p-8">
            <h2 className="text-xl font-bold mb-4">Resume Creation Step</h2>
            <p>This would contain the resume creation flow</p>
          </div>
        ),
      },
    ]

    return (
      <StepFlow
        steps={steps}
        currentStep={0}
        onStepChange={(step) => console.log('Step changed to:', step)}
        onComplete={() => console.log('Flow completed')}
        allowSkip={true}
      />
    )
  },
}
