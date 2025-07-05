'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Rocket, Pause, Settings, Clock, Target, Briefcase, Eye, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface JobHuntPreferencesProps {
  title?: string
  jobTitle: string
  locations: string[]
  salary: string
  onActivate?: () => void
  className?: string
}

export function JobHuntActivation({
  title = "Start Automated Job Hunt",
  jobTitle,
  locations,
  salary,
  onActivate,
  className
}: JobHuntPreferencesProps) {
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="font-medium text-gray-700 dark:text-gray-300">Target:</span>
              <span>{jobTitle} roles</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="font-medium text-gray-700 dark:text-gray-300">Location:</span>
              <span>{locations.join(', ')}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="font-medium text-gray-700 dark:text-gray-300">Salary:</span>
              <span>{salary}</span>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-900">
            <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
              AI will:
            </h3>
            <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Apply to 50+ jobs daily</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Tailor resume for each position</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Write custom cover letters</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Track all applications</span>
              </li>
            </ul>
          </div>
          
          <Button 
            onClick={onActivate}
            size="lg"
            color="primary"
            className="w-full py-6 text-lg"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Activate Agents
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

interface Application {
  id: string;
  company: string;
  position: string;
  status: 'completed' | 'in-progress' | 'scheduled';
  time?: string;
  matchScore?: number;
}

interface JobApplicationDashboardProps {
  activeCompany?: string;
  activePosition?: string;
  totalToday: number;
  responses: number;
  applications: Application[];
  onPause?: () => void;
  onViewDetails?: () => void;
  onSettings?: () => void;
  className?: string;
}

export function JobApplicationDashboard({
  activeCompany,
  activePosition,
  totalToday,
  responses,
  applications,
  onPause,
  onViewDetails,
  onSettings,
  className
}: JobApplicationDashboardProps) {
  return (
    <div className={cn("min-h-screen bg-gray-50 dark:bg-gray-900 p-4", className)}>
      <Card className="max-w-4xl mx-auto" variant="glass" blur="lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800 border-green-200 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Live
                </Badge>
                <CardTitle className="text-xl">AI Agents Working</CardTitle>
              </div>
              
              {activeCompany && activePosition && (
                <CardDescription className="text-base mt-2">
                  Now: Applying to {activeCompany} - {activePosition}
                </CardDescription>
              )}
            </div>
            
            <div className="flex gap-2">
              {onPause && (
                <Button variant="outline" size="sm" onClick={onPause}>
                  <Pause className="w-4 h-4 mr-2" />
                  Pause
                </Button>
              )}
              {onSettings && (
                <Button variant="outline" size="sm" onClick={onSettings}>
                  <Settings className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Live Browser Preview */}
          <Card className="bg-white dark:bg-gray-800 border">
            <CardContent className="p-4">
              <div className="bg-gray-100 dark:bg-gray-700 h-6 w-full rounded mb-2 flex items-center px-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <div className="bg-white dark:bg-gray-600 h-4 flex-1 rounded text-xs flex items-center px-2 text-gray-500">
                  {activeCompany ? `careers.${activeCompany.toLowerCase()}.com` : 'careers.company.com'}
                </div>
              </div>
              
              <div className="h-32 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    {activeCompany} Application Form
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    AI is completing the application...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Daily Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card variant="solid" className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                  {totalToday}
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Applied Today
                </p>
              </CardContent>
            </Card>
            
            <Card variant="solid" className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-800 dark:text-green-300">
                  {responses}
                </div>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Responses
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Applications */}
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Recent Applications:
            </h3>
            <div className="space-y-2">
              {applications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      {app.status === 'completed' && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                      {app.status === 'in-progress' && (
                        <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
                      )}
                      {app.status === 'scheduled' && (
                        <Clock className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {app.company} - {app.position}
                      </p>
                      {app.time && (
                        <p className="text-sm text-gray-500">
                          {app.time}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {app.matchScore && (
                      <Badge variant="outline">
                        {app.matchScore}% match
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Actions */}
          {onViewDetails && (
            <div className="text-center pt-2">
              <Button variant="outline" size="lg" onClick={onViewDetails}>
                <Eye className="w-4 h-4 mr-2" />
                View Detailed Report
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export function BulkApplicationDemo() {
  const [stage, setStage] = useState<'activation' | 'dashboard'>('activation')
  
  const handleActivate = () => {
    setStage('dashboard')
  }
  
  const sampleApplications: Application[] = [
    {
      id: '1',
      company: 'Google',
      position: 'Software Engineer',
      status: 'in-progress',
      time: 'Now',
      matchScore: 94
    },
    {
      id: '2',
      company: 'OpenAI',
      position: 'Full Stack Developer',
      status: 'completed',
      time: '5 min ago',
      matchScore: 92
    },
    {
      id: '3',
      company: 'Meta',
      position: 'Senior Developer',
      status: 'completed',
      time: '12 min ago',
      matchScore: 89
    },
    {
      id: '4',
      company: 'Netflix',
      position: 'Backend Engineer',
      status: 'scheduled',
      time: 'In queue',
      matchScore: 87
    },
    {
      id: '5',
      company: 'Stripe',
      position: 'Full Stack Engineer',
      status: 'scheduled',
      time: 'In queue',
      matchScore: 85
    },
  ]
  
  return (
    <div className="w-full">
      {stage === 'activation' && (
        <JobHuntActivation
          jobTitle="Software Engineer"
          locations={['Remote', 'SF', 'NYC']}
          salary="$120k-180k"
          onActivate={handleActivate}
        />
      )}
      
      {stage === 'dashboard' && (
        <JobApplicationDashboard 
          activeCompany="Google"
          activePosition="Software Engineer"
          totalToday={23}
          responses={4}
          applications={sampleApplications}
          onPause={() => setStage('activation')}
          onViewDetails={() => console.log('View details')}
          onSettings={() => console.log('Settings')}
        />
      )}
    </div>
  )
}