'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { ArrowUpRight, CheckCircle, Edit, MessageSquare, Settings, Share2, TrendingUp, Users } from 'lucide-react'
import { useState } from 'react'

interface ProfileMetric {
  label: string
  value: string
  change?: {
    percentage: number
    isPositive: boolean
  }
}

interface UpdateAction {
  id: string
  title: string
  description: string
  isCompleted?: boolean
}

interface LinkedInOptimizationProps {
  metrics: ProfileMetric[]
  updates: UpdateAction[]
  results?: {
    profileViews?: string
    recruiterInMails?: string
    endorsements?: string
  }
  onViewLinkedIn?: () => void
  onSyncProfiles?: () => void
  className?: string
}

export function LinkedInOptimization({
  metrics,
  updates,
  results,
  onViewLinkedIn,
  onSyncProfiles,
  className
}: LinkedInOptimizationProps) {
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-blue-600 dark:text-blue-500 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-xl">LinkedIn-Resume Sync</CardTitle>
                <CardDescription>
                  AI keeping profiles consistent
                </CardDescription>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Active
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Updates section */}
          <div>
            <h3 className="font-medium mb-3">Updates made:</h3>
            <div className="space-y-2">
              {updates.map((update) => (
                <div 
                  key={update.id}
                  className={cn(
                    "p-3 rounded-lg border",
                    update.isCompleted 
                      ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800" 
                      : "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {update.isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                      )}
                    </div>
                    <div>
                      <h4 className={cn(
                        "font-medium",
                        update.isCompleted ? "text-green-800 dark:text-green-300" : "text-blue-800 dark:text-blue-300"
                      )}>
                        {update.title}
                      </h4>
                      <p className={cn(
                        "text-sm",
                        update.isCompleted ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"
                      )}>
                        {update.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Results section */}
          {results && (
            <Card variant="solid" className="border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/20">
              <CardContent className="p-4">
                <h3 className="font-medium text-indigo-800 dark:text-indigo-300 mb-3">
                  Results:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {results.profileViews && (
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-indigo-800 dark:text-indigo-300">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-bold">{results.profileViews}</span>
                      </div>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">
                        Profile views
                      </p>
                    </div>
                  )}
                  
                  {results.recruiterInMails && (
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-indigo-800 dark:text-indigo-300">
                        <MessageSquare className="w-4 h-4" />
                        <span className="font-bold">{results.recruiterInMails}</span>
                      </div>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">
                        Recruiter InMails
                      </p>
                    </div>
                  )}
                  
                  {results.endorsements && (
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-indigo-800 dark:text-indigo-300">
                        <Users className="w-4 h-4" />
                        <span className="font-bold">{results.endorsements}</span>
                      </div>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">
                        Skill endorsements
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {onViewLinkedIn && (
              <Button
                onClick={onViewLinkedIn}
                className="flex-1"
                color="primary"
              >
                View LinkedIn
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            )}
            
            {onSyncProfiles && (
              <Button
                onClick={onSyncProfiles}
                variant="outline"
                className="flex-1"
              >
                Sync Other Profiles
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function LinkedInOptimizationDemo() {
  const [completed, setCompleted] = useState(false)
  
  const metrics: ProfileMetric[] = [
    {
      label: 'Profile Completeness',
      value: completed ? '98%' : '82%',
      change: {
        percentage: 16,
        isPositive: true
      }
    },
    {
      label: 'Keyword Relevance',
      value: completed ? 'High' : 'Medium',
      change: {
        percentage: 30,
        isPositive: true
      }
    },
    {
      label: 'Network Strength',
      value: '420+ connections',
    }
  ]
  
  const updates: UpdateAction[] = [
    {
      id: '1',
      title: 'Added new keywords from resume',
      description: 'AI identified 12 missing industry keywords',
      isCompleted: completed || Math.random() > 0.5
    },
    {
      id: '2',
      title: 'Updated headline for SEO',
      description: 'Optimized for better visibility in recruiter searches',
      isCompleted: completed || Math.random() > 0.5
    },
    {
      id: '3',
      title: 'Posted 3 achievement highlights',
      description: 'Added your recent project successes as LinkedIn posts',
      isCompleted: completed
    },
    {
      id: '4',
      title: 'Optimized skills (reordered by demand)',
      description: 'Placed in-demand skills like Python and React at the top',
      isCompleted: completed
    },
    {
      id: '5',
      title: 'Set "Open to Work" with preferences',
      description: 'Visible only to recruiters with your target roles',
      isCompleted: completed
    }
  ]
  
  setTimeout(() => {
    if (!completed) setCompleted(true)
  }, 3000)
  
  return (
    <LinkedInOptimization
      metrics={metrics}
      updates={updates}
      results={completed ? {
        profileViews: '+312% this week',
        recruiterInMails: '+44',
        endorsements: '+67'
      } : undefined}
      onViewLinkedIn={() => window.open('https://linkedin.com', '_blank')}
      onSyncProfiles={() => console.log('Syncing other profiles')}
    />
  )
}