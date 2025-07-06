'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import {
  FileText,
  Upload,
  Plus,
  Download,
  PencilSimple,
  ArrowsClockwise,
  Check,
  Warning,
  CheckCircle,
} from '@phosphor-icons/react'
import { useState, useEffect, useRef } from 'react'

interface InitialDashboardProps {
  userName: string
  onProfileAnalyzed?: () => void
  className?: string
}

export function InitialDashboardGeneration({ userName, onProfileAnalyzed, className }: InitialDashboardProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newValue = prev + Math.random() * 15
        if (newValue >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onProfileAnalyzed?.()
          }, 500)
          return 100
        }
        return newValue
      })
    }, 800)

    return () => clearInterval(interval)
  }, [onProfileAnalyzed])

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 p-4',
        className,
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">{userName}</div>
        </div>

        <Card className="w-full" variant="glass" blur="lg">
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <p className="text-xl font-medium text-gray-900 dark:text-white">
                Welcome {userName}! I'm analyzing your profile...
              </p>

              <div className="max-w-md mx-auto space-y-4">
                <Progress value={progress} className="h-2" />
                <p className="text-gray-600 dark:text-gray-400">Generating your personalized dashboard...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface EmptyDashboardProps {
  userName: string
  jobTitle?: string
  onResumeUpload?: (file: File) => void
  onStartFresh?: () => void
  className?: string
}

export function EmptyDashboardPersonalized({
  userName,
  jobTitle = 'Software Engineer',
  onResumeUpload,
  onStartFresh,
  className,
}: EmptyDashboardProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files.length > 0 && onResumeUpload) {
      onResumeUpload(e.dataTransfer.files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length && onResumeUpload) {
      onResumeUpload(e.target.files[0])
    }
  }

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 p-4',
        className,
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">{userName}</div>
        </div>

        <Card className="w-full mb-6" variant="glass" blur="lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Let's land your next role as {jobTitle} 🚀
              </h2>
            </div>

            <div className="max-w-xl mx-auto">
              <div
                className={cn(
                  'border-3 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer',
                  isDragging
                    ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-950/20'
                    : 'border-gray-300 dark:border-gray-700 hover:border-primary-400',
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">📄 Drop your resume here</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">or start fresh</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={(e) => {
                      e.stopPropagation()
                      fileInputRef.current?.click()
                    }}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Drop File
                  </Button>
                  {onStartFresh && (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={(e) => {
                        e.stopPropagation()
                        onStartFresh()
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Start Fresh
                    </Button>
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".pdf,.docx,.doc,.txt"
                  onChange={handleFileInput}
                />
              </div>

              <div className="mt-8">
                <h3 className="text-center font-medium text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Once you have a resume, I'll:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
                    <p className="font-medium text-gray-800 dark:text-gray-200">Find matching jobs automatically</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
                    <p className="font-medium text-gray-800 dark:text-gray-200">Apply while you sleep</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
                    <p className="font-medium text-gray-800 dark:text-gray-200">Track everything for you</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface ResumeAnalysisProps {
  findings: Array<{
    label: string
    isPositive: boolean
    text: string
  }>
  progress: number
  onAnalysisComplete?: () => void
  className?: string
}

export function DynamicResumeAnalysis({ findings, progress, onAnalysisComplete, className }: ResumeAnalysisProps) {
  useEffect(() => {
    if (progress >= 100 && onAnalysisComplete) {
      const timer = setTimeout(() => {
        onAnalysisComplete()
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [progress, onAnalysisComplete])

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 p-4',
        className,
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">John Smith</div>
        </div>

        <Card className="w-full mb-6" variant="glass" blur="lg">
          <CardContent className="p-8">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">🔍 Analyzing your resume...</h2>
              </div>

              <Card className="mb-6" variant="solid">
                <CardContent className="p-4 space-y-3">
                  {findings.map((finding, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {finding.isPositive ? (
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      ) : (
                        <Warning className="w-5 h-5 text-amber-500 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium">{finding.label}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{finding.text}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="text-center space-y-3">
                <p className="text-gray-600 dark:text-gray-400">Generating your custom dashboard...</p>
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface ResumeHubProps {
  userName: string
  resumeScore: number
  resumeData: {
    title: string
    experience: string
    lastUpdated: string
  }
  missingSkills: string[]
  weakAreas: string[]
  onExportPdf?: () => void
  onPencilSimpleResume?: () => void
  onRefreshResume?: () => void
  onAddSkill?: (skill: string) => void
  onFindJobs?: (url?: string) => void
  onAutoFindJobs?: () => void
  className?: string
}

export function ResumeHub({
  userName,
  resumeScore,
  resumeData,
  missingSkills,
  weakAreas,
  onExportPdf,
  onPencilSimpleResume,
  onRefreshResume,
  onAddSkill,
  onFindJobs,
  onAutoFindJobs,
  className,
}: ResumeHubProps) {
  const [jobUrl, setJobUrl] = useState('')

  const handleJobUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (jobUrl.trim() && onFindJobs) {
      onFindJobs(jobUrl.trim())
      setJobUrl('')
    }
  }

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 p-4',
        className,
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">{userName}</div>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <p className="font-medium text-lg">Resume Score: {resumeScore}/100</p>
          </div>
          <Button color="primary" onClick={() => {}}>
            Enhance with AI
          </Button>
        </div>

        <Card className="w-full mb-6" variant="glass" blur="lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">📄 Master Resume</h3>
                  <div className="space-y-1">
                    <p className="font-medium">{resumeData.title}</p>
                    <p className="text-gray-600 dark:text-gray-400">{resumeData.experience}</p>
                    <p className="text-sm text-gray-500">Last updated: {resumeData.lastUpdated}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Warning className="w-4 h-4 text-amber-500" />
                    <p className="font-medium text-amber-600 dark:text-amber-400">Missing: </p>
                    <div className="flex flex-wrap gap-2">
                      {missingSkills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="cursor-pointer hover:bg-amber-100 hover:text-amber-800"
                          onClick={() => onAddSkill && onAddSkill(skill)}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Warning className="w-4 h-4 text-amber-500" />
                    <p className="font-medium text-amber-600 dark:text-amber-400">Weak: </p>
                    <div className="flex flex-wrap gap-1">
                      {weakAreas.map((area, i) => (
                        <span key={i} className="text-gray-600 dark:text-gray-400">
                          {area}
                          {i < weakAreas.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-lg font-medium mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" onClick={onExportPdf}>
                    <Download className="w-4 h-4 mr-2" />
                    Export PDF
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={onPencilSimpleResume}>
                    <PencilSimple className="w-4 h-4 mr-2" />
                    PencilSimple
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={onRefreshResume}>
                    <ArrowsClockwise className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>

                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    AI can add missing skills and improve weak areas from context
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mb-6" variant="glass" blur="lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">🎯 Ready to find jobs?</h2>

              <form onSubmit={handleJobUrlSubmit}>
                <div className="flex gap-2">
                  <Input
                    placeholder="Paste job URLs or let AI search"
                    value={jobUrl}
                    onChange={(e) => setJobUrl(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit">Find</Button>
                </div>
              </form>

              <div className="text-center">
                <p className="mb-3 text-gray-600 dark:text-gray-400">Or</p>
                <Button color="primary" className="mx-auto" onClick={onAutoFindJobs}>
                  🔍 Auto-Find Jobs Matching My Resume
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface JobMatch {
  id: string
  company: string
  position: string
  matchPercentage: number
  salary?: string
  location?: string
  isResumeReady: boolean
  isCoverLetterReady: boolean
}

interface JobMatchesProps {
  userName: string
  matches: JobMatch[]
  onApplyToAll?: () => void
  onApply?: (jobId: string) => void
  onPreview?: (jobId: string) => void
  onLoadMore?: () => void
  onAutoApplyTop?: (count: number) => void
  className?: string
}

export function JobMatchesInterface({
  userName,
  matches,
  onApplyToAll,
  onApply,
  onPreview,
  onLoadMore,
  onAutoApplyTop,
  className,
}: JobMatchesProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 p-4',
        className,
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">{userName}</div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">🎯 {matches.length} Perfect Matches Found</h2>
          {onApplyToAll && (
            <Button color="primary" onClick={onApplyToAll}>
              ▶️ Apply to All
            </Button>
          )}
        </div>

        <div className="space-y-4 mb-6">
          {matches.map((match) => (
            <Card key={match.id} variant="glass" blur="sm">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold">
                      {match.company} - {match.position}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {match.salary && <Badge variant="outline">{match.salary}</Badge>}
                      {match.location && <Badge variant="outline">{match.location}</Badge>}
                      <Badge
                        className={cn(
                          'ml-auto',
                          match.matchPercentage >= 90
                            ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400',
                        )}
                      >
                        🎯 {match.matchPercentage}% Match
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex-1">
                      📄 Resume tailored {match.isResumeReady ? '✓' : '...'} | Cover letter ready{' '}
                      {match.isCoverLetterReady ? '✓' : '...'}
                    </div>
                    <div className="flex gap-2">
                      {onApply && (
                        <Button
                          size="sm"
                          onClick={() => onApply(match.id)}
                          color={match.isResumeReady && match.isCoverLetterReady ? 'primary' : 'default'}
                          disabled={!match.isResumeReady || !match.isCoverLetterReady}
                        >
                          ▶️ Apply
                        </Button>
                      )}
                      {onPreview && (
                        <Button size="sm" variant="outline" onClick={() => onPreview(match.id)}>
                          👁️ Preview
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {onLoadMore && (
            <Button variant="outline" onClick={onLoadMore}>
              Load More
            </Button>
          )}
          {onAutoApplyTop && (
            <Button color="primary" onClick={() => onAutoApplyTop(10)}>
              Auto-Apply to Top 10
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

interface ActiveApplication {
  id: string
  company: string
  position: string
  progress: number
  currentStep: string
  timeline: {
    step: string
    duration: string
    isCompleted: boolean
    isActive?: boolean
  }[]
}

interface CompletedApplication {
  id: string
  company: string
  position: string
  completedAt: string
  status: string
  nextStep?: string
}

interface LiveApplicationProps {
  userName: string
  activeApplications: ActiveApplication[]
  completedApplications: CompletedApplication[]
  onPause?: (applicationId: string) => void
  onWatch?: (applicationId: string) => void
  onSkip?: (applicationId: string) => void
  onViewRecording?: (applicationId: string) => void
  className?: string
}

export function LiveApplicationView({
  userName,
  activeApplications,
  completedApplications,
  onPause,
  onWatch,
  onSkip,
  onViewRecording,
  className,
}: LiveApplicationProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 p-4',
        className,
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">{userName}</div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-bold">
              🤖 AI Agents Active |{activeApplications.length} Applying |{completedApplications.length} Complete |
              {activeApplications.length + completedApplications.length} Total
            </h2>
          </div>
        </div>

        {/* Active Applications */}
        <div className="space-y-6 mb-8">
          {activeApplications.map((app) => (
            <Card key={app.id} variant="glass" blur="lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-100 text-red-800 border-red-200">🔴 LIVE</Badge>
                    <h3 className="text-lg font-bold">
                      {app.company} - {app.position}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {onPause && (
                      <Button size="sm" variant="outline" onClick={() => onPause(app.id)}>
                        ⏸️ Pause
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Step{' '}
                      {app.timeline.filter((t) => t.isCompleted).length +
                        (app.timeline.some((t) => t.isActive) ? 1 : 0)}
                      /{app.timeline.length} - {app.currentStep}
                    </div>
                    <div className="text-sm">{app.progress}%</div>
                  </div>
                  <Progress value={app.progress} className="h-2" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Timeline:</h4>
                  <div className="space-y-2">
                    {app.timeline.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {step.isCompleted ? (
                          <Check className="w-4 h-4 text-green-600 mt-0.5" />
                        ) : step.isActive ? (
                          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mt-0.5"></div>
                        ) : (
                          <div className="w-4 h-4 border border-gray-300 dark:border-gray-600 rounded-full mt-0.5"></div>
                        )}
                        <div className="flex-1">
                          <div
                            className={cn(
                              step.isCompleted
                                ? 'text-green-600 dark:text-green-400'
                                : step.isActive
                                  ? 'text-blue-600 dark:text-blue-400'
                                  : 'text-gray-500',
                            )}
                          >
                            {step.step}
                          </div>
                          {step.duration && <div className="text-xs text-gray-500">{step.duration}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  {onWatch && (
                    <Button size="sm" variant="outline" onClick={() => onWatch(app.id)}>
                      👁️ Watch Live
                    </Button>
                  )}
                  {onSkip && (
                    <Button size="sm" variant="outline" onClick={() => onSkip(app.id)}>
                      ⏭️ Skip
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Completed Applications */}
        {completedApplications.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Recently Completed:</h3>
            <div className="space-y-2">
              {completedApplications.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">
                        {app.company} - {app.position}
                      </div>
                      <div className="text-sm text-gray-500">Applied {app.completedAt}</div>
                    </div>
                  </div>
                  {onViewRecording && (
                    <Button size="sm" variant="ghost" onClick={() => onViewRecording(app.id)}>
                      View Recording
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface DashboardStat {
  label: string
  value: string | number
  change?: string
}

interface ResumeVariant {
  id: string
  name: string
  score: number
  responseRate?: string
  isDefault?: boolean
}

interface CompleteDashboardProps {
  userName: string
  stats: DashboardStat[]
  resumeVariants: ResumeVariant[]
  activeApplications: ActiveApplication[]
  recentSuccess?: {
    company: string
    position: string
    result: string
    date: string
  }
  completedApplications?: CompletedApplication[]
  onViewDetails?: () => void
  className?: string
}

export function CompleteDashboard({
  userName,
  stats,
  resumeVariants,
  activeApplications,
  recentSuccess,
  completedApplications = [],
  onViewDetails,
  className,
}: CompleteDashboardProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 p-4',
        className,
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">{userName}</div>
        </div>

        <div className="mb-6">
          <Card variant="glass" blur="lg" className="border-l-4 border-l-primary-500">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <h2 className="font-medium">🤖 Agents: Active</h2>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">📊 Your Progress</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <Card key={i} variant="glass" blur="sm">
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{stat.label}</h3>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  {stat.change && <div className="text-sm text-gray-600 dark:text-gray-400">{stat.change}</div>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resume Variants */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">📄 Resume Variants (Auto-Generated)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {resumeVariants.map((variant) => (
              <Card
                key={variant.id}
                variant="glass"
                blur="sm"
                className={cn('cursor-pointer hover:shadow-md', variant.isDefault && 'ring-1 ring-primary-500')}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium mb-1">{variant.name}</h3>
                  <div className="text-sm">Score: {variant.score}</div>
                  {variant.responseRate && (
                    <div className="text-sm text-gray-600 dark:text-gray-400">{variant.responseRate} resp</div>
                  )}
                  {variant.isDefault && (
                    <Badge className="mt-2 bg-green-100 text-green-800 border-green-200">Default</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Applications */}
        {activeApplications.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">🎯 Active Applications</h2>
            <div className="space-y-3">
              {activeApplications.map((app) => (
                <Card key={app.id} variant="glass" blur="sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium flex items-center gap-2">
                        {app.company} - {app.position}
                        <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">Applying</Badge>
                      </h3>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600 dark:text-gray-400">{app.currentStep}</div>
                        <div className="text-sm">{app.progress}%</div>
                      </div>
                      <Progress value={app.progress} className="h-1.5" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Recent Success */}
        {recentSuccess && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">✅ Recent Success</h2>
            <Card variant="solid" className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-800 dark:text-green-300">
                      {recentSuccess.company} - {recentSuccess.position}
                    </h3>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      {recentSuccess.result} - {recentSuccess.date}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Completed Applications */}
        {completedApplications.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">Recent Applications</h2>
              {onViewDetails && (
                <Button variant="ghost" size="sm" onClick={onViewDetails}>
                  View All
                </Button>
              )}
            </div>
            <Card variant="glass" blur="sm">
              <CardContent className="p-4">
                <div className="space-y-3">
                  {completedApplications.map((app) => (
                    <div
                      key={app.id}
                      className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0"
                    >
                      <div>
                        <div className="font-medium">
                          {app.company} - {app.position}
                        </div>
                        {app.nextStep && (
                          <div className="text-sm text-gray-600 dark:text-gray-400">Next: {app.nextStep}</div>
                        )}
                      </div>
                      <Badge
                        className={cn(
                          app.status === 'applied' && 'bg-blue-100 text-blue-800 border-blue-200',
                          app.status === 'interview' && 'bg-green-100 text-green-800 border-green-200',
                          app.status === 'rejected' && 'bg-red-100 text-red-800 border-red-200',
                        )}
                      >
                        {app.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

// Demo component that showcases all dashboard states
export function GenerativeDashboardDemo() {
  const [currentState, setCurrentState] = useState<
    'initial' | 'empty' | 'analyzing' | 'resumeHub' | 'jobMatches' | 'liveApplications' | 'complete'
  >('initial')

  const [progress, setProgress] = useState(0)
  const [findings, setFindings] = useState<Array<{ label: string; isPositive: boolean; text: string }>>([])

  useEffect(() => {
    if (currentState === 'analyzing') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 10
        })

        // Add findings as analysis progresses
        if (progress === 0) {
          setFindings((prev) => [
            ...prev,
            {
              label: 'Found: 5 years experience at Google',
              isPositive: true,
              text: 'Senior position detected',
            },
          ])
        } else if (progress === 20) {
          setFindings((prev) => [
            ...prev,
            {
              label: 'Strong Python background',
              isPositive: true,
              text: 'Multiple projects identified',
            },
          ])
        } else if (progress === 40) {
          setFindings((prev) => [
            ...prev,
            {
              label: 'Leadership experience',
              isPositive: true,
              text: 'Team management highlighted',
            },
          ])
        } else if (progress === 60) {
          setFindings((prev) => [
            ...prev,
            {
              label: 'Missing quantified achievements',
              isPositive: false,
              text: 'No metrics or percentages found',
            },
          ])
        } else if (progress === 80) {
          setFindings((prev) => [
            ...prev,
            {
              label: 'Keywords need updating',
              isPositive: false,
              text: 'Missing trending tech terms',
            },
          ])
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [currentState, progress])

  // Navigation between states
  const handleStageChange = (stage: typeof currentState) => {
    setProgress(0)
    setFindings([])
    setCurrentState(stage)
  }

  // Samples
  const sampleJobMatches: JobMatch[] = [
    {
      id: '1',
      company: 'Google',
      position: 'Senior Software Engineer',
      matchPercentage: 94,
      salary: '$180k-220k',
      location: 'Mountain View',
      isResumeReady: true,
      isCoverLetterReady: true,
    },
    {
      id: '2',
      company: 'Stripe',
      position: 'Backend Engineer',
      matchPercentage: 91,
      salary: '$170k-200k',
      location: 'Remote',
      isResumeReady: true,
      isCoverLetterReady: true,
    },
  ]

  const sampleActiveApplication: ActiveApplication = {
    id: '1',
    company: 'Google',
    position: 'Senior Software Engineer',
    progress: 67,
    currentStep: 'Filling application form',
    timeline: [
      { step: 'Tailored resume to job', duration: '12s', isCompleted: true },
      { step: 'Generated cover letter', duration: '8s', isCompleted: true },
      { step: 'Navigated to application', duration: '3s', isCompleted: true },
      { step: 'Filling application form...', duration: '', isActive: true, isCompleted: false },
      { step: 'Upload documents', duration: '', isCompleted: false },
      { step: 'Submit application', duration: '', isCompleted: false },
    ],
  }

  const sampleCompletedApplications: CompletedApplication[] = [
    {
      id: '2',
      company: 'Meta',
      position: 'Applied 2 min ago',
      completedAt: '2 min ago',
      status: 'applied',
    },
    {
      id: '3',
      company: 'Airbnb',
      position: 'Full Stack Developer',
      completedAt: '5 min ago',
      status: 'applied',
    },
  ]

  const sampleStats: DashboardStat[] = [
    { label: 'Applied', value: 127, change: '↑ 23 today' },
    { label: 'Responses', value: 18, change: '14% rate' },
    { label: 'Interviews', value: 5, change: 'This week' },
    { label: 'Offers', value: 1, change: 'Pending' },
  ]

  const sampleResumeVariants: ResumeVariant[] = [
    { id: 'master', name: 'Master', score: 89, isDefault: true },
    { id: 'bigtech', name: 'Big Tech', score: 92, responseRate: '12% resp' },
    { id: 'startup', name: 'Startup', score: 87, responseRate: '18% resp' },
    { id: 'remote', name: 'Remote', score: 90, responseRate: '15% resp' },
  ]

  const sampleActiveApplications: ActiveApplication[] = [
    {
      id: '1',
      company: 'Google',
      position: 'Senior SWE',
      progress: 67,
      currentStep: 'Uploading resume',
      timeline: [
        { step: 'Tailored resume to job', duration: '12s', isCompleted: true },
        { step: 'Generated cover letter', duration: '8s', isCompleted: true },
        { step: 'Navigated to application', duration: '3s', isCompleted: true },
        { step: 'Filling application form...', duration: '', isActive: true, isCompleted: false },
        { step: 'Upload documents', duration: '', isCompleted: false },
        { step: 'Submit application', duration: '', isCompleted: false },
      ],
    },
  ]

  const sampleCompleted: CompletedApplication[] = [
    {
      id: '1',
      company: 'Stripe',
      position: 'Senior Developer',
      completedAt: '1 day ago',
      status: 'interview',
      nextStep: 'Technical round Monday',
    },
    {
      id: '2',
      company: 'Netflix',
      position: 'Frontend Developer',
      completedAt: '2 days ago',
      status: 'applied',
      nextStep: 'Awaiting review',
    },
    {
      id: '3',
      company: 'Facebook',
      position: 'Software Engineer',
      completedAt: '3 days ago',
      status: 'rejected',
    },
  ]

  return (
    <div>
      {/* Controls to navigate between states */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={currentState === 'initial' ? 'default' : 'outline'}
            onClick={() => handleStageChange('initial')}
          >
            Initial Loading
          </Button>
          <Button
            size="sm"
            variant={currentState === 'empty' ? 'default' : 'outline'}
            onClick={() => handleStageChange('empty')}
          >
            Empty State
          </Button>
          <Button
            size="sm"
            variant={currentState === 'analyzing' ? 'default' : 'outline'}
            onClick={() => handleStageChange('analyzing')}
          >
            Analyzing Resume
          </Button>
          <Button
            size="sm"
            variant={currentState === 'resumeHub' ? 'default' : 'outline'}
            onClick={() => handleStageChange('resumeHub')}
          >
            Resume Hub
          </Button>
          <Button
            size="sm"
            variant={currentState === 'jobMatches' ? 'default' : 'outline'}
            onClick={() => handleStageChange('jobMatches')}
          >
            Job Matches
          </Button>
          <Button
            size="sm"
            variant={currentState === 'liveApplications' ? 'default' : 'outline'}
            onClick={() => handleStageChange('liveApplications')}
          >
            Live Applications
          </Button>
          <Button
            size="sm"
            variant={currentState === 'complete' ? 'default' : 'outline'}
            onClick={() => handleStageChange('complete')}
          >
            Complete Dashboard
          </Button>
        </div>
      </div>

      {/* Current state display */}
      <div className="p-4">
        {currentState === 'initial' && (
          <InitialDashboardGeneration userName="John Smith" onProfileAnalyzed={() => handleStageChange('empty')} />
        )}

        {currentState === 'empty' && (
          <EmptyDashboardPersonalized
            userName="John Smith"
            onResumeUpload={() => handleStageChange('analyzing')}
            onStartFresh={() => handleStageChange('resumeHub')}
          />
        )}

        {currentState === 'analyzing' && (
          <DynamicResumeAnalysis
            findings={findings}
            progress={progress}
            onAnalysisComplete={() => handleStageChange('resumeHub')}
          />
        )}

        {currentState === 'resumeHub' && (
          <ResumeHub
            userName="John Smith"
            resumeScore={72}
            resumeData={{
              title: 'Software Engineer',
              experience: '5 years @ Google',
              lastUpdated: 'Just now',
            }}
            missingSkills={['AWS', 'Kubernetes']}
            weakAreas={['Quantified results', 'Action verbs']}
            onFindJobs={() => handleStageChange('jobMatches')}
            onAutoFindJobs={() => handleStageChange('jobMatches')}
          />
        )}

        {currentState === 'jobMatches' && (
          <JobMatchesInterface
            userName="John Smith"
            matches={sampleJobMatches}
            onApply={() => handleStageChange('liveApplications')}
            onApplyToAll={() => handleStageChange('liveApplications')}
          />
        )}

        {currentState === 'liveApplications' && (
          <LiveApplicationView
            userName="John Smith"
            activeApplications={[sampleActiveApplication]}
            completedApplications={sampleCompletedApplications}
            onPause={() => handleStageChange('complete')}
          />
        )}

        {currentState === 'complete' && (
          <CompleteDashboard
            userName="John Smith"
            stats={sampleStats}
            resumeVariants={sampleResumeVariants}
            activeApplications={sampleActiveApplications}
            recentSuccess={{
              company: 'Stripe',
              position: 'Senior Developer',
              result: 'Interview scheduled',
              date: 'Monday 2pm',
            }}
            completedApplications={sampleCompleted}
          />
        )}
      </div>
    </div>
  )
}
