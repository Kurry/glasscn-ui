'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Code, GitBranch, Check, Lightning, Image } from '@phosphor-icons/react'
import { useState } from 'react'

interface GitHubMetric {
  label: string
  value: string
}

interface GitHubFeature {
  label: string
  description?: string
  isAdded?: boolean
}

interface GitHubIntegrationProps {
  metrics: GitHubMetric[]
  features: GitHubFeature[]
  matchingCompanies?: number
  onViewCompanies?: () => void
  className?: string
}

export function GitHubIntegration({
  metrics,
  features,
  matchingCompanies,
  onViewCompanies,
  className,
}: GitHubIntegrationProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-black dark:text-white bg-gray-200 dark:bg-gray-700 rounded-full p-2">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">GitHub Integration Active</CardTitle>
              <CardDescription>AI is enhancing your profile with GitHub data</CardDescription>
            </div>
            <Badge className="ml-auto animate-pulse bg-green-100 text-green-800 border-green-200">Live</Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <Card key={index} variant="solid" className="bg-white/50 dark:bg-gray-800/50">
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                  <p className="font-medium text-gray-900 dark:text-white">{metric.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card variant="solid" className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4">
              <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-3">Auto-adding to resume:</h3>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="text-blue-600 dark:text-blue-400 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-blue-800 dark:text-blue-300">{feature.label}</p>
                      {feature.description && (
                        <p className="text-xs text-blue-600 dark:text-blue-400">{feature.description}</p>
                      )}
                      {feature.isAdded && (
                        <Badge className="mt-1 bg-green-100 text-green-800 border-green-200 text-xs">Added</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {matchingCompanies && matchingCompanies > 0 && (
            <div className="p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-green-800 dark:text-green-300">
                    Also applying to companies that starred your repos!
                  </h3>
                  <p className="text-sm text-green-600 dark:text-green-400">Found: {matchingCompanies}</p>
                </div>

                {onViewCompanies && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={onViewCompanies}
                    className="border-green-300 dark:border-green-700"
                  >
                    View
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface DesignProject {
  id: string
  thumbnail: string
  title: string
  platform: string
  metrics?: string
}

interface PortfolioSyncProps {
  platforms: string[]
  projectsFound: number
  selectedCount: number
  projects: DesignProject[]
  caseStudies: string[]
  targetRole: string
  onManageProjects?: () => void
  className?: string
}

export function PortfolioSync({
  platforms,
  projectsFound,
  selectedCount,
  projects,
  caseStudies,
  targetRole,
  onManageProjects,
  className,
}: PortfolioSyncProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary-600 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
              <Image className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Portfolio Sync Active</CardTitle>
              <CardDescription>AI is updating your resume with portfolio projects</CardDescription>
            </div>
            <Badge className="ml-auto animate-pulse bg-green-100 text-green-800 border-green-200">Live</Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h3 className="font-medium mb-2">Scanning {platforms.join(', ')}:</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Found {projectsFound} projects → Best {selectedCount} selected
            </p>

            <div className="grid grid-cols-4 gap-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative aspect-square bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden"
                >
                  {/* Placeholder for project thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    <Image className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium">AI creating case studies for:</h3>
            <div className="space-y-2">
              {caseStudies.map((study, index) => (
                <div key={index} className="p-3 bg-white/50 dark:bg-gray-800/50 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-primary-600">
                      <Lightning className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{study}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2">
              <div className="text-green-600 dark:text-green-400">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-green-800 dark:text-green-200">
                Targeting: <span className="font-medium">{targetRole}</span> roles
              </p>
            </div>
          </div>

          {onManageProjects && (
            <div className="text-center">
              <Button variant="outline" onClick={onManageProjects}>
                Manage Projects
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export function IndustrySpecificDemo() {
  const [view, setView] = useState<'engineer' | 'designer'>('engineer')

  const gitHubMetrics: GitHubMetric[] = [
    {
      label: 'Commits analyzed',
      value: '1,247 across 12 repos',
    },
    {
      label: 'Top languages',
      value: 'Python, JS, Go',
    },
    {
      label: 'Contribution graph',
      value: 'Very active',
    },
  ]

  const gitHubFeatures: GitHubFeature[] = [
    {
      label: 'Open source contributor - 2k stars',
      isAdded: true,
    },
    {
      label: 'Implemented CI/CD pipeline',
      description: 'Based on your GitHub Actions workflows',
      isAdded: true,
    },
    {
      label: 'Core maintainer of DevTools',
      isAdded: false,
    },
  ]

  const designProjects: DesignProject[] = [
    { id: '1', thumbnail: '', title: 'Banking App', platform: 'Dribbble', metrics: '2M users' },
    { id: '2', thumbnail: '', title: 'E-commerce', platform: 'Behance', metrics: '40% lift' },
    { id: '3', thumbnail: '', title: 'Design System', platform: 'Figma', metrics: '500 components' },
    { id: '4', thumbnail: '', title: 'Food Delivery', platform: 'Dribbble', metrics: '15% conversion' },
    { id: '5', thumbnail: '', title: 'Fitness App', platform: 'Figma', metrics: '100k users' },
    { id: '6', thumbnail: '', title: 'Travel Booking', platform: 'Behance', metrics: '30% time saved' },
    { id: '7', thumbnail: '', title: 'Productivity Tool', platform: 'Figma', metrics: '25% efficiency' },
    { id: '8', thumbnail: '', title: 'Social Media', platform: 'Dribbble', metrics: '1.5M users' },
  ]

  const caseStudies = ['Banking app - 2M users', 'E-commerce redesign - 40% lift', 'Design system - 500 components']

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4">
        <Button variant={view === 'engineer' ? 'default' : 'outline'} onClick={() => setView('engineer')}>
          <Code className="w-4 h-4 mr-2" />
          Software Engineer View
        </Button>
        <Button variant={view === 'designer' ? 'default' : 'outline'} onClick={() => setView('designer')}>
          <Image className="w-4 h-4 mr-2" />
          Designer View
        </Button>
      </div>

      {view === 'engineer' ? (
        <GitHubIntegration
          metrics={gitHubMetrics}
          features={gitHubFeatures}
          matchingCompanies={8}
          onViewCompanies={() => console.log('Viewing companies')}
        />
      ) : (
        <PortfolioSync
          platforms={['Dribbble', 'Behance', 'Figma']}
          projectsFound={47}
          selectedCount={8}
          projects={designProjects}
          caseStudies={caseStudies}
          targetRole="Product Designer"
          onManageProjects={() => console.log('Managing projects')}
        />
      )}
    </div>
  )
}
