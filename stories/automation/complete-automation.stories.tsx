import { ResumeEnhancementDemo } from '@/components/ui/resume-auto-enhancement'
import { JobAutoTailorDemo } from '@/components/ui/job-auto-tailor'
import { BulkApplicationDemo } from '@/components/ui/bulk-job-application'
import { DynamicContentDemo } from '@/components/ui/dynamic-content-displays'
import { ResumeVariantsDemo } from '@/components/ui/resume-variants'
import { MarketIntelligenceDemo } from '@/components/ui/market-intelligence'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Meta } from '@storybook/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'Automation/Complete Automation Journey',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Full_Automation_Journey = {
  name: 'Full Automation Journey',
  render: () => {
    const [currentFlow, setCurrentFlow] = useState<string | null>(null)

    const flowOptions = [
      { id: 'enhance', name: 'Resume Enhancement', component: ResumeEnhancementDemo },
      { id: 'tailor', name: 'Job-Specific Tailoring', component: JobAutoTailorDemo },
      { id: 'apply', name: 'Bulk Job Application', component: BulkApplicationDemo },
      { id: 'content', name: 'Dynamic Content Display', component: DynamicContentDemo },
      { id: 'variants', name: 'Resume Variants', component: ResumeVariantsDemo },
      { id: 'market', name: 'Market Intelligence', component: MarketIntelligenceDemo },
    ]

    const ActiveComponent = currentFlow ? flowOptions.find((option) => option.id === currentFlow)?.component : null

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">AI-Powered Job Search Automation</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Complete automation journey from resume to job application
            </p>
          </div>

          {!currentFlow ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flowOptions.map((option) => (
                <Card
                  key={option.id}
                  className="cursor-pointer hover:shadow-lg transition-all"
                  variant="glass"
                  blur="sm"
                  onClick={() => setCurrentFlow(option.id)}
                >
                  <CardHeader>
                    <CardTitle>{option.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button>View Demo</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <Button variant="outline" onClick={() => setCurrentFlow(null)}>
                ← Back to All Demos
              </Button>

              {ActiveComponent && <ActiveComponent />}
            </div>
          )}
        </div>
      </div>
    )
  },
}
