import {
  InitialDashboardGeneration,
  EmptyDashboardPersonalized,
  DynamicResumeAnalysis,
  ResumeHub,
  JobMatchesInterface,
  LiveApplicationView,
  CompleteDashboard,
  GenerativeDashboardDemo
} from '@/components/ui/generative-dashboard'
import { Check, AlertTriangle } from 'lucide-react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Generative Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Initial_Loading = {
  name: 'Initial Dashboard Loading',
  render: () => (
    <InitialDashboardGeneration
      userName="John Smith"
      onProfileAnalyzed={() => console.log('Profile analyzed')}
    />
  )
}

export const Empty_State = {
  name: 'Empty Personalized Dashboard',
  render: () => (
    <EmptyDashboardPersonalized
      userName="John Smith"
      jobTitle="Software Engineer"
      onResumeUpload={(file) => console.log(`Uploaded: ${file.name}`)}
      onStartFresh={() => console.log('Starting fresh')}
    />
  )
}

export const Resume_Analysis = {
  name: 'Dynamic Resume Analysis',
  render: () => (
    <DynamicResumeAnalysis
      findings={[
        {
          label: 'Found: 5 years experience at Google',
          isPositive: true,
          text: 'Senior position detected'
        },
        {
          label: 'Strong Python background',
          isPositive: true,
          text: 'Multiple projects identified'
        },
        {
          label: 'Leadership experience',
          isPositive: true,
          text: 'Team management highlighted'
        },
        {
          label: 'Missing quantified achievements',
          isPositive: false,
          text: 'No metrics or percentages found'
        }
      ]}
      progress={70}
      onAnalysisComplete={() => console.log('Analysis complete')}
    />
  )
}

export const Resume_Ready = {
  name: 'Resume Hub Dashboard',
  render: () => (
    <ResumeHub
      userName="John Smith"
      resumeScore={72}
      resumeData={{
        title: 'Software Engineer',
        experience: '5 years @ Google',
        lastUpdated: 'Just now'
      }}
      missingSkills={['AWS', 'Kubernetes']}
      weakAreas={['Quantified results', 'Action verbs']}
      onExportPdf={() => console.log('Exporting PDF')}
      onEditResume={() => console.log('Editing resume')}
      onRefreshResume={() => console.log('Refreshing resume')}
      onAddSkill={(skill) => console.log(`Adding skill: ${skill}`)}
      onFindJobs={(url) => console.log(`Finding jobs with URL: ${url}`)}
      onAutoFindJobs={() => console.log('Auto-finding jobs')}
    />
  )
}

export const Job_Matches = {
  name: 'Job Matches Interface',
  render: () => (
    <JobMatchesInterface
      userName="John Smith"
      matches={[
        {
          id: '1',
          company: 'Google',
          position: 'Senior Software Engineer',
          matchPercentage: 94,
          salary: '$180k-220k',
          location: 'Mountain View',
          isResumeReady: true,
          isCoverLetterReady: true
        },
        {
          id: '2',
          company: 'Stripe',
          position: 'Backend Engineer',
          matchPercentage: 91,
          salary: '$170k-200k',
          location: 'Remote',
          isResumeReady: true,
          isCoverLetterReady: true
        }
      ]}
      onApply={(id) => console.log(`Applying to job: ${id}`)}
      onPreview={(id) => console.log(`Previewing job: ${id}`)}
      onApplyToAll={() => console.log('Applying to all')}
      onLoadMore={() => console.log('Loading more jobs')}
      onAutoApplyTop={(count) => console.log(`Auto-applying to top ${count} jobs`)}
    />
  )
}

export const Live_Applications = {
  name: 'Live Application View',
  render: () => (
    <LiveApplicationView
      userName="John Smith"
      activeApplications={[
        {
          id: '1',
          company: 'Google',
          position: 'Senior Software Engineer',
          progress: 67,
          currentStep: 'Filling application form',
          timeline: [
            { step: 'Tailored resume to job', duration: '12s', isCompleted: true },
            { step: 'Generated cover letter', duration: '8s', isCompleted: true },
            { step: 'Navigated to application', duration: '3s', isCompleted: true },
            { step: 'Filling application form...', duration: '', isActive: true },
            { step: 'Upload documents', duration: '', isCompleted: false },
            { step: 'Submit application', duration: '', isCompleted: false }
          ]
        }
      ]}
      completedApplications={[
        {
          id: '2',
          company: 'Meta',
          position: 'Applied 2 min ago',
          completedAt: '2 min ago'
        },
        {
          id: '3',
          company: 'Airbnb',
          position: 'Full Stack Developer',
          completedAt: '5 min ago'
        }
      ]}
      onPause={(id) => console.log(`Pausing application: ${id}`)}
      onWatch={(id) => console.log(`Watching application: ${id}`)}
      onSkip={(id) => console.log(`Skipping application: ${id}`)}
      onViewRecording={(id) => console.log(`Viewing recording: ${id}`)}
    />
  )
}

export const Complete_Dashboard = {
  name: 'Complete Dashboard',
  render: () => (
    <CompleteDashboard
      userName="John Smith"
      stats={[
        { label: 'Applied', value: 127, change: '↑ 23 today' },
        { label: 'Responses', value: 18, change: '14% rate' },
        { label: 'Interviews', value: 5, change: 'This week' },
        { label: 'Offers', value: 1, change: 'Pending' }
      ]}
      resumeVariants={[
        { id: 'master', name: 'Master', score: 89, isDefault: true },
        { id: 'bigtech', name: 'Big Tech', score: 92, responseRate: '12% resp' },
        { id: 'startup', name: 'Startup', score: 87, responseRate: '18% resp' },
        { id: 'remote', name: 'Remote', score: 90, responseRate: '15% resp' }
      ]}
      activeApplications={[
        {
          id: '1',
          company: 'Google',
          position: 'Senior SWE',
          progress: 67,
          currentStep: 'Uploading resume'
        }
      ]}
      recentSuccess={{
        company: 'Stripe',
        position: 'Senior Developer',
        result: 'Interview scheduled',
        date: 'Monday 2pm'
      }}
      completedApplications={[
        {
          id: '1',
          company: 'Stripe',
          position: 'Senior Developer',
          status: 'interview',
          nextStep: 'Technical round Monday'
        },
        {
          id: '2',
          company: 'Netflix',
          position: 'Frontend Developer',
          status: 'applied',
          nextStep: 'Awaiting review'
        },
        {
          id: '3',
          company: 'Facebook',
          position: 'Software Engineer',
          status: 'rejected'
        }
      ]}
      onViewDetails={() => console.log('Viewing details')}
    />
  )
}

export const Interactive_Demo = {
  name: 'Interactive Dashboard Demo',
  render: () => <GenerativeDashboardDemo />
}