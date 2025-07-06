import type { Meta } from '@storybook/react'
import {
  DailySummary,
  WeeklyReport,
  InactiveUser,
  ReEngagementEmail,
  FeatureReminder,
  VoiceAgentSuccess,
  OptimizeStrategy,
  FirstInterview,
  JobOffer,
} from '@/index'

const meta: Meta = {
  title: 'Flows/Complete Engagement Journey',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

// Email Flow
export const EmailEngagementFlow = {
  name: 'Email Engagement Flow',
  render: () => (
    <div className="space-y-8 p-8 bg-gray-100 min-h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Daily Summary Email</h2>
        <DailySummary onOpenDashboard={() => console.log('Open dashboard')} />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Weekly Progress Report</h2>
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

      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Re-engagement Email</h2>
        <InactiveUser
          newJobs={47}
          perfectFitJobs={3}
          averageSalary="$115k"
          onResumeAutoApply={() => console.log('Resume auto-apply')}
          onUnsubscribe={() => console.log('Unsubscribe')}
        />
      </div>
    </div>
  ),
}

// Upsell Flow
export const UpsellFlow = {
  name: 'Progressive Upsell Flow',
  render: () => (
    <div className="space-y-8 p-8 bg-gray-100 min-h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Strategy Optimization (After 50 Applications)</h2>
        <OptimizeStrategy onTryPremium={() => console.log('Try premium')} onDismiss={() => console.log('Dismiss')} />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Voice Agent Success Upsell</h2>
        <VoiceAgentSuccess onUpgradeAgent={() => console.log('Upgrade agent')} />
      </div>
    </div>
  ),
}

// Milestone Flow
export const MilestoneFlow = {
  name: 'Success Milestone Flow',
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">First Interview Scheduled</h2>
        <FirstInterview
          company="Google"
          position="Software Engineer"
          date="Tuesday"
          time="2:00 PM PST"
          onViewPrep={() => console.log('View prep')}
        />
      </div>

      <div className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Job Offer Received</h2>
        <JobOffer
          onDownloadAll={() => console.log('Download all')}
          onExportNotes={() => console.log('Export notes')}
          onSaveRecordings={() => console.log('Save recordings')}
          onContinue={() => console.log('Continue')}
        />
      </div>
    </div>
  ),
}

// Re-engagement Flow
export const ReEngagementFlow = {
  name: 'Re-engagement Flow',
  render: () => (
    <div className="space-y-8 p-8 bg-gray-100 min-h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Feature Reminder (Day 3 Inactive)</h2>
        <ReEngagementEmail subject="You're missing out on interviews" recipientName="John">
          <FeatureReminder featureName="voice agent" onSetupFeature={() => console.log('Setup feature')} />
        </ReEngagementEmail>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Inactive User Email (Day 7)</h2>
        <InactiveUser
          newJobs={47}
          perfectFitJobs={3}
          averageSalary="$115k"
          onResumeAutoApply={() => console.log('Resume auto-apply')}
          onUnsubscribe={() => console.log('Unsubscribe')}
        />
      </div>
    </div>
  ),
}

// Complete User Journey
export const CompleteUserJourney = {
  name: 'Complete User Journey Timeline',
  render: () => (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete User Journey</h1>
        <p className="text-xl text-gray-600">From onboarding to job offer</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
              Day 1
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Daily Summary</h3>
              <div className="bg-white rounded-lg shadow-sm border p-4">
                <DailySummary onOpenDashboard={() => console.log('Open dashboard')} />
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              Week 1
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Weekly Report</h3>
              <div className="bg-white rounded-lg shadow-sm border p-4">
                <WeeklyReport
                  week={1}
                  applications={168}
                  responseRate={7.1}
                  interviews={3}
                  topResume="Software Engineer v3"
                  suggestions={[{ text: 'Add Python to skills', impact: '+15% match rate' }]}
                  onImplementSuggestions={() => console.log('Implement suggestions')}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
              50+
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Strategy Optimization</h3>
              <div className="bg-white rounded-lg shadow-sm border p-4">
                <OptimizeStrategy
                  onTryPremium={() => console.log('Try premium')}
                  onDismiss={() => console.log('Dismiss')}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              🎉
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">First Interview!</h3>
              <div className="bg-white rounded-lg shadow-sm border p-4">
                <div className="max-w-md">
                  <FirstInterview
                    company="Google"
                    position="Software Engineer"
                    date="Tuesday"
                    time="2:00 PM PST"
                    onViewPrep={() => console.log('View prep')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
