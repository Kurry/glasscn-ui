import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Target, Briefcase, Phone } from '@phosphor-icons/react'

interface Stat {
  label: string
  value: string | number
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
  color?: 'default' | 'success' | 'warning' | 'danger'
}

interface Activity {
  id: string
  company: string
  position: string
  status: 'applied' | 'interview' | 'response' | 'rejected'
  date: string
}

interface DashboardStatsProps {
  userName: string
  stats: Stat[]
  activities: Activity[]
  aiStatus?: {
    isActive: boolean
    lastActive?: string
  }
  onViewAll?: () => void
  className?: string
}

export function DashboardStats({ userName, stats, activities, aiStatus, onViewAll, className }: DashboardStatsProps) {
  const getStatusIcon = (status: Activity['status']) => {
    switch (status) {
      case 'applied':
        return '✓'
      case 'interview':
        return '📞'
      case 'response':
        return '📧'
      case 'rejected':
        return '❌'
      default:
        return '•'
    }
  }

  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'applied':
        return 'text-blue-600'
      case 'interview':
        return 'text-green-600'
      case 'response':
        return 'text-purple-600'
      case 'rejected':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className={cn('max-w-6xl mx-auto p-6 space-y-6', className)}>
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <div className="flex items-center justify-between">
          <p className="text-xl text-gray-600 dark:text-gray-400">Welcome back, {userName}!</p>
          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-500">👤 {userName}</div>
          </div>
        </div>
      </div>

      {/* AI Status */}
      {aiStatus && (
        <Card variant="glass" blur="sm" className="border-l-4 border-l-primary-500">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div
                  className={cn(
                    'w-3 h-3 rounded-full',
                    aiStatus.isActive ? 'bg-green-500 animate-pulse' : 'bg-gray-400',
                  )}
                ></div>
              </div>
              <div>
                <p className="font-medium text-primary-700 dark:text-primary-300">
                  {aiStatus.isActive ? '🎯 AI is applying to jobs' : '⏸️ AI automation paused'}
                </p>
                {aiStatus.lastActive && <p className="text-sm text-gray-500">Last active: {aiStatus.lastActive}</p>}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} variant="glass" blur="sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
                {stat.icon && <div className="text-primary-600 opacity-80">{stat.icon}</div>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card variant="glass" blur="sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Recent Applications</CardTitle>
          {onViewAll && (
            <Button variant="outline" size="sm" onClick={onViewAll}>
              View All
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-3">
          {activities.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No applications yet. Start applying to jobs!</div>
          ) : (
            activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className={cn('text-lg', getStatusColor(activity.status))}>
                    {getStatusIcon(activity.status)}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {activity.company} - {activity.position}
                    </p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                </div>
                <Badge variant="outline" className={getStatusColor(activity.status)}>
                  {activity.status}
                </Badge>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface ActiveDashboardProps {
  userName: string
  onViewAll?: () => void
  className?: string
}

export function ActiveDashboard({ userName, onViewAll, className }: ActiveDashboardProps) {
  const stats: Stat[] = [
    { label: 'Applications', value: 47, icon: <Target className="w-6 h-6" /> },
    { label: 'Interviews', value: 3, icon: <Phone className="w-6 h-6" /> },
    { label: 'Active Resumes', value: 2, icon: <Briefcase className="w-6 h-6" /> },
  ]

  const activities: Activity[] = [
    { id: '1', company: 'Google', position: 'Software Engineer', status: 'applied', date: '2 hours ago' },
    { id: '2', company: 'Meta', position: 'Senior Developer', status: 'response', date: '5 hours ago' },
    { id: '3', company: 'Apple', position: 'iOS Engineer', status: 'interview', date: '1 day ago' },
    { id: '4', company: 'Netflix', position: 'Full Stack Engineer', status: 'applied', date: '1 day ago' },
    { id: '5', company: 'Stripe', position: 'Backend Engineer', status: 'applied', date: '2 days ago' },
  ]

  return (
    <DashboardStats
      userName={userName}
      stats={stats}
      activities={activities}
      aiStatus={{ isActive: true, lastActive: '5 minutes ago' }}
      onViewAll={onViewAll}
      className={className}
    />
  )
}
