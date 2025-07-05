'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Check, Globe, Plus, Settings, X } from 'lucide-react'
import { useState } from 'react'

interface Platform {
  name: string
  applied: number
  status: 'complete' | 'in-progress' | 'pending' | 'error'
  responseRate?: number
}

interface CrossPlatformStatusProps {
  platforms: Platform[]
  duplicatesPrevented: number
  totalApplications: number
  bestPlatform?: {
    name: string
    responseRate: number
  }
  onAddPlatform?: () => void
  onPauseLowPerformers?: () => void
  className?: string
}

export function CrossPlatformStatus({
  platforms,
  duplicatesPrevented,
  totalApplications,
  bestPlatform,
  onAddPlatform,
  onPauseLowPerformers,
  className
}: CrossPlatformStatusProps) {
  const getStatusIcon = (status: Platform['status']) => {
    switch (status) {
      case 'complete': return <Check className="w-4 h-4 text-green-600" />
      case 'in-progress': return <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      case 'pending': return <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
      case 'error': return <X className="w-4 h-4 text-red-600" />
    }
  }
  
  const getStatusText = (status: Platform['status']) => {
    switch (status) {
      case 'complete': return 'Completed'
      case 'in-progress': return 'In progress'
      case 'pending': return 'Pending'
      case 'error': return 'Error'
    }
  }
  
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary-600 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Applications Across All Platforms</CardTitle>
              <CardDescription>
                AI managing your job applications everywhere
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Platform List */}
          <div className="space-y-3">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{platform.name}:</span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {platform.applied} applied
                    </div>
                  </div>
                </div>
                
                {platform.responseRate && (
                  <Badge className="mr-2 bg-green-100 text-green-800 border-green-200">
                    {platform.responseRate}%
                  </Badge>
                )}
                
                <div className="flex items-center gap-1.5">
                  {getStatusIcon(platform.status)}
                  <span className="text-sm hidden sm:inline">
                    {getStatusText(platform.status)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card variant="solid" className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Duplicates prevented
                  </p>
                  <p className="text-xl font-bold text-blue-800 dark:text-blue-200">
                    {duplicatesPrevented}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card variant="solid" className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Total unique applications
                  </p>
                  <p className="text-xl font-bold text-green-800 dark:text-green-200">
                    {totalApplications}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Best Platform */}
          {bestPlatform && (
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h3 className="font-medium text-green-800 dark:text-green-300 mb-1">
                Best performing platform:
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-green-700 dark:text-green-400">
                  {bestPlatform.name}
                </span>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  {bestPlatform.responseRate}% response rate
                </Badge>
              </div>
            </div>
          )}
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {onAddPlatform && (
              <Button
                onClick={onAddPlatform}
                variant="outline"
                className="flex-1 gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Platform
              </Button>
            )}
            
            {onPauseLowPerformers && (
              <Button
                onClick={onPauseLowPerformers}
                variant="outline"
                className="flex-1 gap-2"
              >
                <Settings className="w-4 h-4" />
                Pause Low Performers
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function MultiPlatformDemo() {
  const [platformsState, setPlatformsState] = useState<'initial' | 'optimized'>('initial')
  
  const initialPlatforms: Platform[] = [
    {
      name: 'LinkedIn',
      applied: 45,
      status: 'complete',
      responseRate: 8
    },
    {
      name: 'Indeed',
      applied: 67,
      status: 'complete',
      responseRate: 6
    },
    {
      name: 'AngelList',
      applied: 23,
      status: 'complete',
      responseRate: 18
    },
    {
      name: 'Company Sites',
      applied: 89,
      status: 'in-progress',
      responseRate: 12
    },
    {
      name: 'Hired.com',
      applied: 0,
      status: 'pending'
    },
    {
      name: 'Dice',
      applied: 31,
      status: 'complete',
      responseRate: 4
    }
  ]
  
  const optimizedPlatforms: Platform[] = [
    {
      name: 'LinkedIn',
      applied: 45,
      status: 'complete',
      responseRate: 8
    },
    {
      name: 'Indeed',
      applied: 67,
      status: 'complete',
      responseRate: 6
    },
    {
      name: 'AngelList',
      applied: 35, // Increased focus
      status: 'in-progress',
      responseRate: 18
    },
    {
      name: 'Company Sites',
      applied: 89,
      status: 'complete',
      responseRate: 12
    },
    {
      name: 'Hired.com',
      applied: 15, // Now active
      status: 'in-progress',
      responseRate: 16
    },
    {
      name: 'Dice',
      applied: 31,
      status: 'error', // Paused due to low performance
      responseRate: 4
    }
  ]
  
  const platforms = platformsState === 'initial' ? initialPlatforms : optimizedPlatforms
  
  return (
    <CrossPlatformStatus
      platforms={platforms}
      duplicatesPrevented={47}
      totalApplications={234}
      bestPlatform={{
        name: 'AngelList',
        responseRate: 18
      }}
      onAddPlatform={() => console.log('Adding platform')}
      onPauseLowPerformers={() => setPlatformsState('optimized')}
    />
  )
}