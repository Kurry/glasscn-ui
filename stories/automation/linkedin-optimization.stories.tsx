import {
  LinkedInOptimization,
  LinkedInOptimizationDemo
} from '@/components/ui/linkedin-optimization'
import { CheckCircle } from 'lucide-react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/LinkedIn Optimization',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const LinkedIn_Profile_Sync = {
  name: 'LinkedIn Profile Sync',
  render: () => (
    <LinkedInOptimization
      metrics={[
        {
          label: 'Profile Completeness',
          value: '98%',
          change: {
            percentage: 16,
            isPositive: true
          }
        },
        {
          label: 'Keyword Relevance',
          value: 'High',
          change: {
            percentage: 30,
            isPositive: true
          }
        },
        {
          label: 'Network Strength',
          value: '420+ connections'
        }
      ]}
      updates={[
        {
          id: '1',
          title: 'Added new keywords from resume',
          description: 'AI identified 12 missing industry keywords',
          isCompleted: true
        },
        {
          id: '2',
          title: 'Updated headline for SEO',
          description: 'Optimized for better visibility in recruiter searches',
          isCompleted: true
        },
        {
          id: '3',
          title: 'Posted 3 achievement highlights',
          description: 'Added your recent project successes as LinkedIn posts',
          isCompleted: true
        },
        {
          id: '4',
          title: 'Optimized skills (reordered by demand)',
          description: 'Placed in-demand skills like Python and React at the top',
          isCompleted: true
        },
        {
          id: '5',
          title: 'Set "Open to Work" with preferences',
          description: 'Visible only to recruiters with your target roles',
          isCompleted: true
        }
      ]}
      results={{
        profileViews: '+312% this week',
        recruiterInMails: '+44',
        endorsements: '+67'
      }}
      onViewLinkedIn={() => window.open('https://linkedin.com', '_blank')}
      onSyncProfiles={() => console.log('Syncing other profiles')}
    />
  )
}

export const LinkedIn_Optimization_Demo = {
  name: 'LinkedIn Optimization Demo',
  render: () => <LinkedInOptimizationDemo />
}