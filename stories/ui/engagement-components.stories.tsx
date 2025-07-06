import {
  NotificationCard,
  VoiceAgentPrompt,
  SecurityAlert,
  DailySummary,
  WeeklyReport,
  OptimizeStrategy,
  VoiceAgentSuccess,
  FirstInterview,
  JobOffer,
  InactiveUser,
  FeatureReminder,
  ReEngagementEmail,
} from '@/index'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'UI/Engagement Components',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

// Notification Components
export const NotificationCardStory = {
  name: 'Notification Card - Info',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <NotificationCard
        type="info"
        title="New Feature Available"
        message="Voice agent is now available to handle your recruiter calls automatically."
        actions={{
          primary: { label: 'Try It Now', onClick: () => console.log('Try now') },
          secondary: { label: 'Learn More', onClick: () => console.log('Learn more') },
        }}
        onDismiss={() => console.log('Dismissed')}
      />
    </div>
  ),
}

export const VoiceAgentPromptStory = {
  name: 'Voice Agent Prompt',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <VoiceAgentPrompt
        missedCalls={3}
        onSetupNow={() => console.log('Setup now')}
        onLater={() => console.log('Later')}
      />
    </div>
  ),
}

export const SecurityAlertStory = {
  name: 'Security Alert',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <SecurityAlert
        senderEmail="jobs@quick-hire.tk"
        subject="Immediate hire, $200k, no interview"
        redFlags={['Suspicious domain', 'Too good to be true', 'Asking for bank info']}
        onViewAnalysis={() => console.log('View analysis')}
        onBlockSender={() => console.log('Block sender')}
      />
    </div>
  ),
}

// Email Components
export const DailySummaryStory = {
  name: 'Daily Summary Email',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <DailySummary onOpenDashboard={() => console.log('Open dashboard')} />
    </div>
  ),
}

export const WeeklyReportStory = {
  name: 'Weekly Report Email',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <WeeklyReport
        week={1}
        applications={168}
        responseRate={7.1}
        interviews={3}
        topResume="Software Engineer v3"
        suggestions={[
          { text: 'Add Python to skills', impact: '+15% match rate' },
          { text: 'Target startups', impact: '+22% response rate' },
        ]}
        onImplementSuggestions={() => console.log('Implement suggestions')}
      />
    </div>
  ),
}

// Upsell Components
export const OptimizeStrategyStory = {
  name: 'Optimize Strategy Upsell',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <OptimizeStrategy onTryPremium={() => console.log('Try premium')} onDismiss={() => console.log('Dismiss')} />
    </div>
  ),
}

export const VoiceAgentSuccessStory = {
  name: 'Voice Agent Success Upsell',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <VoiceAgentSuccess onUpgradeAgent={() => console.log('Upgrade agent')} />
    </div>
  ),
}

// Milestone Components
export const FirstInterviewStory = {
  name: 'First Interview Milestone',
  render: () => (
    <FirstInterview
      company="Google"
      position="Software Engineer"
      date="Tuesday"
      time="2:00 PM PST"
      onViewPrep={() => console.log('View prep')}
    />
  ),
}

export const JobOfferStory = {
  name: 'Job Offer Milestone',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <JobOffer
        onDownloadAll={() => console.log('Download all')}
        onExportNotes={() => console.log('Export notes')}
        onSaveRecordings={() => console.log('Save recordings')}
        onContinue={() => console.log('Continue')}
      />
    </div>
  ),
}

// Re-engagement Components
export const InactiveUserStory = {
  name: 'Inactive User Email',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <InactiveUser
        newJobs={47}
        perfectFitJobs={3}
        averageSalary="$115k"
        onResumeAutoApply={() => console.log('Resume auto-apply')}
        onUnsubscribe={() => console.log('Unsubscribe')}
      />
    </div>
  ),
}

export const FeatureReminderStory = {
  name: 'Feature Reminder',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen">
      <ReEngagementEmail subject="You're missing out on interviews" recipientName="John">
        <FeatureReminder featureName="voice agent" onSetupFeature={() => console.log('Setup feature')} />
      </ReEngagementEmail>
    </div>
  ),
}

// Complete Flow Stories
export const CompleteNotificationFlow = {
  name: 'Complete Notification Flow',
  render: () => (
    <div className="p-8 bg-gray-100 min-h-screen space-y-6">
      <VoiceAgentPrompt
        missedCalls={3}
        onSetupNow={() => console.log('Setup now')}
        onLater={() => console.log('Later')}
      />

      <SecurityAlert
        senderEmail="jobs@scam-site.com"
        subject="Easy $300k job, start tomorrow!"
        redFlags={['Suspicious domain', 'Unrealistic salary', 'No interview process']}
        onViewAnalysis={() => console.log('View analysis')}
        onBlockSender={() => console.log('Block sender')}
      />

      <OptimizeStrategy onTryPremium={() => console.log('Try premium')} onDismiss={() => console.log('Dismiss')} />
    </div>
  ),
}
