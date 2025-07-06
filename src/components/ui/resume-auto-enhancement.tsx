'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Upload, CheckCircle, GitBranch, Award, Download, FileText } from 'lucide-react'
import { useState } from 'react'

interface ResumeDropZoneProps {
  onUpload?: (file: File) => void
  className?: string
}

export function ResumeDropZone({ onUpload, className }: ResumeDropZoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [fileInputRef, setFileInputRef] = useState<HTMLInputElement | null>(null)

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

    if (e.dataTransfer.files.length > 0 && onUpload) {
      onUpload(e.dataTransfer.files[0])
    }
  }

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <div className="mb-6">
            <Upload className="w-16 h-16 text-primary-600 mx-auto" />
          </div>
          <CardTitle className="text-2xl">Drop Your Resume</CardTitle>
          <CardDescription className="text-lg">AI will handle everything else</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
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
            onClick={() => fileInputRef?.click()}
          >
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">📄 Drop or Browse</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">PDF, DOCX, DOC, or TXT</p>
            <Button variant="outline" size="lg">
              Select File
            </Button>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.docx,.doc,.txt"
              onChange={(e) => {
                if (e.target.files?.length && onUpload) {
                  onUpload(e.target.files[0])
                }
              }}
              ref={(el) => setFileInputRef(el)}
            />
          </div>

          <p className="text-center text-gray-500">AI will automatically extract, enhance, and optimize your resume</p>
        </CardContent>
      </Card>
    </div>
  )
}

interface ResumeAnalysisProgressProps {
  progress: number
  currentTask: string
  completedTasks: string[]
  onComplete?: () => void
  className?: string
}

export function ResumeAnalysisProgress({
  progress,
  currentTask,
  completedTasks,
  onComplete,
  className,
}: ResumeAnalysisProgressProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">🔍 AI Analyzing Your Resume</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-center text-gray-500">{progress}% Complete</p>
          </div>

          <div className="space-y-2">
            {completedTasks.map((task, index) => (
              <div key={index} className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>{task}</span>
              </div>
            ))}

            {currentTask && (
              <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 animate-pulse">
                <div className="w-5 h-5 border-2 border-primary-600 dark:border-primary-400 border-t-transparent rounded-full animate-spin" />
                <span>{currentTask}</span>
              </div>
            )}
          </div>

          {progress >= 100 && onComplete && (
            <Button onClick={onComplete} className="w-full mt-4" size="lg" color="primary">
              View Enhanced Profile →
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

interface EnhancementDetail {
  type: 'skills' | 'achievements' | 'projects' | 'keywords' | 'variants'
  description: string
  count: number
  source?: string
}

interface EnhancedProfileProps {
  originalScore: number
  newScore: number
  enhancements: EnhancementDetail[]
  onAcceptAll?: () => void
  onReviewChanges?: () => void
  onExport?: () => void
  className?: string
}

export function EnhancedProfile({
  originalScore,
  newScore,
  enhancements,
  onAcceptAll,
  onReviewChanges,
  onExport,
  className,
}: EnhancedProfileProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <div className="mb-4">
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
              Ready to use
            </span>
          </div>
          <CardTitle className="text-2xl">✨ Your Enhanced Profile</CardTitle>
          <CardDescription className="text-lg flex items-center justify-center gap-2 mt-2">
            Original Score: {originalScore}
            <span className="text-xl">→</span>
            <span className="text-green-600 font-semibold">New Score: {newScore}</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white flex items-center gap-2">
              <span className="inline-block bg-primary-100 dark:bg-primary-900 p-1 rounded-md">🤖</span>
              What AI Did:
            </h3>

            <div className="space-y-3">
              {enhancements.map((enhancement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border"
                >
                  <div className="mt-1 text-primary-600">
                    {enhancement.type === 'skills' && <GitBranch className="w-5 h-5" />}
                    {enhancement.type === 'achievements' && <Award className="w-5 h-5" />}
                    {enhancement.type === 'projects' && <FileText className="w-5 h-5" />}
                    {enhancement.type === 'keywords' && <CheckCircle className="w-5 h-5" />}
                    {enhancement.type === 'variants' && <GitBranch className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{enhancement.description}</div>
                    {enhancement.source && <div className="text-sm text-gray-500">Source: {enhancement.source}</div>}
                  </div>
                  <div className="ml-auto">
                    <Badge>+{enhancement.count}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {onAcceptAll && (
              <Button onClick={onAcceptAll} className="sm:col-span-3" size="lg" color="primary">
                Accept All
              </Button>
            )}

            {onReviewChanges && (
              <Button onClick={onReviewChanges} variant="outline" size="lg">
                Review Changes
              </Button>
            )}

            {onExport && (
              <Button onClick={onExport} variant="outline" size="lg" className="sm:col-span-2">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function ResumeEnhancementDemo() {
  const [stage, setStage] = useState<'upload' | 'analyzing' | 'enhanced'>('upload')
  const [progress, setProgress] = useState(0)

  const handleUpload = (_file: File) => {
    setStage('analyzing')

    // Simulate progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(interval)
        setTimeout(() => setStage('enhanced'), 500)
      }
      setProgress(Math.min(Math.round(currentProgress), 100))
    }, 800)
  }

  const completedTasks = [
    ...(progress >= 20 ? ['Extracting content'] : []),
    ...(progress >= 40 ? ['Finding your LinkedIn'] : []),
    ...(progress >= 60 ? ['Scanning your GitHub'] : []),
    ...(progress >= 75 ? ['Analyzing portfolio site'] : []),
    ...(progress >= 90 ? ['Identifying missing skills'] : []),
  ]

  const currentTask =
    progress < 20
      ? 'Extracting content'
      : progress < 40
        ? 'Finding your LinkedIn'
        : progress < 60
          ? 'Scanning your GitHub'
          : progress < 75
            ? 'Analyzing portfolio site'
            : progress < 90
              ? 'Identifying missing skills'
              : progress < 100
                ? 'Calculating market position'
                : ''

  const enhancementDetails: EnhancementDetail[] = [
    {
      type: 'skills',
      description: 'Added missing skills from GitHub',
      count: 15,
      source: 'GitHub repositories',
    },
    {
      type: 'achievements',
      description: 'Quantified achievements',
      count: 8,
      source: 'LinkedIn & resume context',
    },
    {
      type: 'projects',
      description: 'Imported projects from portfolio',
      count: 3,
      source: 'Personal website',
    },
    {
      type: 'keywords',
      description: 'Updated with current market keywords',
      count: 25,
      source: 'Job market analysis',
    },
    {
      type: 'variants',
      description: 'Created resume variants',
      count: 5,
      source: 'Industry best practices',
    },
  ]

  return (
    <div className="w-full">
      {stage === 'upload' && <ResumeDropZone onUpload={handleUpload} />}

      {stage === 'analyzing' && (
        <ResumeAnalysisProgress
          progress={progress}
          currentTask={currentTask}
          completedTasks={completedTasks}
          onComplete={() => setStage('enhanced')}
        />
      )}

      {stage === 'enhanced' && (
        <EnhancedProfile
          originalScore={68}
          newScore={94}
          enhancements={enhancementDetails}
          onAcceptAll={() => console.log('Accepted all changes')}
          onReviewChanges={() => console.log('Review changes')}
          onExport={() => console.log('Export resume')}
        />
      )}
    </div>
  )
}
