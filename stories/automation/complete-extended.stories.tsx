import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LinkedInOptimizationDemo } from '@/components/ui/linkedin-optimization'
import { PredictiveOfferDemo } from '@/components/ui/predictive-offer'
import { MultiPlatformDemo } from '@/components/ui/multi-platform-orchestration'
import { SkillsGapDemo } from '@/components/ui/skills-gap-automation'
import { CompanyResearchDemo } from '@/components/ui/company-research'
import { FailurePreventionDemo } from '@/components/ui/failure-prevention'
import { PerformanceAnalyticsDemo } from '@/components/ui/performance-analytics'
import { EmergencyResponseDemo } from '@/components/ui/emergency-response'
import { ConversionOptimizationDemo } from '@/components/ui/conversion-optimization'
import type { Meta } from '@storybook/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'Automation/Complete Extended Flows',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Extended_Automation_Suite = {
  name: 'Extended Automation Suite',
  render: () => {
    const [currentDemo, setCurrentDemo] = useState<string | null>(null)

    const demoOptions = [
      { id: 'linkedin', name: 'LinkedIn Profile Optimization', component: LinkedInOptimizationDemo },
      { id: 'offer', name: 'Predictive Offer Intelligence', component: PredictiveOfferDemo },
      { id: 'platform', name: 'Multi-Platform Orchestration', component: MultiPlatformDemo },
      { id: 'skills', name: 'Skills Gap Automation', component: SkillsGapDemo },
      { id: 'company', name: 'Company Research Engine', component: CompanyResearchDemo },
      { id: 'prevention', name: 'Failure Prevention System', component: FailurePreventionDemo },
      { id: 'analytics', name: 'Performance Analytics', component: PerformanceAnalyticsDemo },
      { id: 'emergency', name: 'Emergency Response System', component: EmergencyResponseDemo },
      { id: 'conversion', name: 'Conversion Optimization', component: ConversionOptimizationDemo },
    ]

    const ActiveComponent = currentDemo ? demoOptions.find((demo) => demo.id === currentDemo)?.component : null

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Extended AI Automation Suite</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Advanced automation tools for the complete job search lifecycle
            </p>
          </div>

          {!currentDemo ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoOptions.map((demo) => (
                <Card
                  key={demo.id}
                  className="cursor-pointer hover:shadow-lg transition-all"
                  variant="glass"
                  blur="sm"
                  onClick={() => setCurrentDemo(demo.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{demo.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button color="primary">View Demo</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <Button variant="outline" onClick={() => setCurrentDemo(null)}>
                ← Back to All Demos
              </Button>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {demoOptions.find((demo) => demo.id === currentDemo)?.name}
                </h2>
                <div className="h-1 w-24 bg-primary-500 rounded-full"></div>
              </div>

              {ActiveComponent && <ActiveComponent />}
            </div>
          )}
        </div>
      </div>
    )
  },
}

export const Comprehensive_Job_Search_Platform = {
  name: 'Comprehensive Job Search Platform',
  render: () => {
    // This would be a more complex integration showing multiple components working together
    // For now, we'll just return a landing page that could lead to the individual components
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 p-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI-Powered Job Search Platform</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The ultimate AI assistant for your entire job search journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="glass" blur="lg">
              <CardHeader>
                <CardTitle>Automated Job Discovery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">• AI continuously scans all job sites</p>
                <p className="text-gray-600 dark:text-gray-400">• Applies automatically to perfect matches</p>
                <p className="text-gray-600 dark:text-gray-400">• Handles multiple job boards seamlessly</p>
              </CardContent>
            </Card>

            <Card variant="glass" blur="lg">
              <CardHeader>
                <CardTitle>Profile Optimization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">• LinkedIn and resume kept in perfect sync</p>
                <p className="text-gray-600 dark:text-gray-400">• Auto-detection and filling of skill gaps</p>
                <p className="text-gray-600 dark:text-gray-400">• Continuous A/B testing of different approaches</p>
              </CardContent>
            </Card>

            <Card variant="glass" blur="lg">
              <CardHeader>
                <CardTitle>Intelligent Response</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">• Emergency alerts for perfect matches</p>
                <p className="text-gray-600 dark:text-gray-400">• Smart scheduling for all interviews</p>
                <p className="text-gray-600 dark:text-gray-400">• Preparation materials generated automatically</p>
              </CardContent>
            </Card>

            <Card variant="glass" blur="lg">
              <CardHeader>
                <CardTitle>Offer Optimization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">• Prediction of offer likelihood</p>
                <p className="text-gray-600 dark:text-gray-400">• Data-driven negotiation assistance</p>
                <p className="text-gray-600 dark:text-gray-400">• Comparison with market rates</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" color="primary">
              Start Full Demo
            </Button>
          </div>
        </div>
      </div>
    )
  },
}
