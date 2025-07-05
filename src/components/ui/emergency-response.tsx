'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { AlertTriangle, CheckCircle, Clock, Rocket, Star, User, Users } from 'lucide-react'
import { useState } from 'react'

interface EmergencyAction {
  id: string
  description: string
  isCompleted: boolean
  icon?: React.ReactNode
}

interface UrgentOpportunityHandlingProps {
  company: string
  position: string
  timeLeft: string
  actions: EmergencyAction[]
  readyInSeconds?: number
  onLaunch?: () => void
  className?: string
}

export function UrgentOpportunityHandling({
  company,
  position,
  timeLeft,
  actions,
  readyInSeconds,
  onLaunch,
  className
}: UrgentOpportunityHandlingProps) {
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-red-600 bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <Badge className="mb-1 bg-red-100 text-red-800 border-red-200">
                URGENT: Dream Job Alert
              </Badge>
              <CardTitle className="text-lg">
                {company} - {position}
              </CardTitle>
              <CardDescription>
                Closes in: {timeLeft}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <Card variant="solid" className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
            <CardContent className="p-4">
              <h3 className="font-medium text-red-800 dark:text-red-300 mb-3">
                AI Emergency Protocol:
              </h3>
              <div className="space-y-2">
                {actions.map((action) => (
                  <div key={action.id} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {action.isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <div className="w-4 h-4 border-2 border-t-transparent border-red-500 rounded-full animate-spin" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-red-700 dark:text-red-400">
                        {action.icon}
                      </div>
                      <p className="text-red-800 dark:text-red-300">
                        {action.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {readyInSeconds !== undefined && (
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Ready to submit in {readyInSeconds} seconds
              </p>
              <Progress value={(45 - readyInSeconds) / 45 * 100} className="h-2" />
            </div>
          )}
          
          {onLaunch && (
            <Button
              onClick={onLaunch}
              color="primary"
              size="lg"
              className="w-full"
              disabled={readyInSeconds !== undefined && readyInSeconds > 0}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Launch Application
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export function EmergencyResponseDemo() {
  const [secondsLeft, setSecondsLeft] = useState(45)
  const [launched, setLaunched] = useState(false)
  
  React.useEffect(() => {
    if (secondsLeft > 0 && !launched) {
      const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 30)
      return () => clearTimeout(timer)
    }
  }, [secondsLeft, launched])
  
  const actions: EmergencyAction[] = [
    {
      id: '1',
      description: 'Stopped all other applications',
      isCompleted: true,
      icon: <CheckCircle className="w-4 h-4" />
    },
    {
      id: '2',
      description: 'Created custom resume (98% match)',
      isCompleted: secondsLeft < 38,
      icon: <Star className="w-4 h-4" />
    },
    {
      id: '3',
      description: 'Found 3 SpaceX employees in network',
      isCompleted: secondsLeft < 30,
      icon: <Users className="w-4 h-4" />
    },
    {
      id: '4',
      description: 'Drafted referral requests',
      isCompleted: secondsLeft < 25,
      icon: <User className="w-4 h-4" />
    },
    {
      id: '5',
      description: 'Prepared perfect cover letter',
      isCompleted: secondsLeft < 15,
      icon: <CheckCircle className="w-4 h-4" />
    },
    {
      id: '6',
      description: 'Found hiring manager on Twitter',
      isCompleted: secondsLeft < 5,
      icon: <User className="w-4 h-4" />
    }
  ]
  
  if (launched) {
    return (
      <Card className="max-w-lg mx-auto" variant="glass" blur="lg">
        <CardContent className="p-8 text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-4">
            <Rocket className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Application Launched!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Your application to SpaceX has been submitted with perfect timing and maximum impact.
          </p>
          <div className="space-y-3">
            <p className="text-green-600 font-medium">Additional actions completed:</p>
            <ul className="text-left space-y-1 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Referral requests sent to 3 connections</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Hiring manager followed on Twitter</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Job saved to priority tracking</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <UrgentOpportunityHandling
      company="SpaceX"
      position="Your exact role!"
      timeLeft="2 hours"
      actions={actions}
      readyInSeconds={secondsLeft > 0 ? secondsLeft : 0}
      onLaunch={() => secondsLeft <= 0 && setLaunched(true)}
    />
  )
}