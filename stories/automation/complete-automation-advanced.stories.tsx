import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MultiAgentDemo } from '@/components/ui/multi-agent-system'
import { FailureRecoveryDemo } from '@/components/ui/failure-recovery'
import { ResumeEvolutionDemo } from '@/components/ui/resume-evolution'
import { IndustrySpecificDemo } from '@/components/ui/industry-specific-automation'
import { SmartSchedulingDemo } from '@/components/ui/smart-scheduling'
import { CompensationIntelligenceDemo } from '@/components/ui/compensation-intelligence'
import { OpportunityMonitoringDemo } from '@/components/ui/opportunity-monitoring'
import { MultiAgentDashboardDemo } from '@/components/ui/multi-agent-dashboard'
import type { Meta } from '@storybook/react'
import { useState } from 'react'

const meta: Meta = {
  title: 'Automation/Advanced Automation',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const All_Advanced_Flows = {
  name: 'All Advanced Automation Flows',
  render: () => {
    const [currentDemo, setCurrentDemo] = useState<string | null>(null)
    
    const demoOptions = [
      { id: 'multi-agent', name: 'Multi-Agent System', component: MultiAgentDemo },
      { id: 'failure', name: 'Intelligent Failure Recovery', component: FailureRecoveryDemo },
      { id: 'evolution', name: 'Resume Evolution Engine', component: ResumeEvolutionDemo },
      { id: 'industry', name: 'Industry-Specific Automation', component: IndustrySpecificDemo },
      { id: 'scheduling', name: 'Smart Scheduling', component: SmartSchedulingDemo },
      { id: 'compensation', name: 'Compensation Intelligence', component: CompensationIntelligenceDemo },
      { id: 'opportunity', name: 'Opportunity Monitoring', component: OpportunityMonitoringDemo },
      { id: 'dashboard', name: 'Multi-Agent Dashboard', component: MultiAgentDashboardDemo },
    ]
    
    const ActiveComponent = currentDemo 
      ? demoOptions.find(demo => demo.id === currentDemo)?.component
      : null
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced AI Automation Flows
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Multi-agent systems and intelligent job search automation
            </p>
          </div>
          
          {!currentDemo ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              <Button 
                variant="outline"
                onClick={() => setCurrentDemo(null)}
              >
                ← Back to All Demos
              </Button>
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {demoOptions.find(demo => demo.id === currentDemo)?.name}
                </h2>
                <div className="h-1 w-24 bg-primary-500 rounded-full"></div>
              </div>
              
              {ActiveComponent && <ActiveComponent />}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export const Integrated_Automation_Platform = {
  name: 'Integrated Automation Platform',
  render: () => {
    // This would be a more complex integration showing all components working together
    // For now, we'll just show the multi-agent dashboard as an example
    return <MultiAgentDashboardDemo />;
  }
}