'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Link, ArrowRight, Download, Check, Star, FileText } from 'lucide-react'
import { useState } from 'react'

interface JobUrlInputProps {
  onSubmit?: (url: string) => void
  className?: string
}

export function JobUrlInput({ onSubmit, className }: JobUrlInputProps) {
  const [url, setUrl] = useState('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url.trim() && onSubmit) {
      onSubmit(url.trim())
    }
  }
  
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Paste Any Job URL</CardTitle>
          <CardDescription className="text-base">
            AI creates perfect-fit resumes
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <div className="absolute left-3 top-3 text-gray-400">
                  <Link className="w-5 h-5" />
                </div>
                <Input
                  type="url"
                  placeholder="https://company.com/jobs/123"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" disabled={!url.trim()}>
                Generate
              </Button>
            </div>
          </form>
          
          <div className="space-y-2 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enter any job posting URL and AI will:
            </p>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>• Analyze job requirements</li>
              <li>• Create tailored resume versions</li>
              <li>• Optimize for ATS systems</li>
              <li>• Match keywords & competencies</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface TailoredResumeVariant {
  id: string;
  company: string;
  position: string;
  focus: string;
  matchPercentage: number;
  isRecommended?: boolean;
}

interface TailoredResumesProps {
  variants: TailoredResumeVariant[];
  onSelectVariant?: (variantId: string) => void;
  onMergeBest?: () => void;
  className?: string;
}

export function TailoredResumes({ 
  variants, 
  onSelectVariant, 
  onMergeBest,
  className 
}: TailoredResumesProps) {
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-3xl" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Generated {variants.length} Tailored Resumes</CardTitle>
          <CardDescription className="text-base">
            Each optimized for different aspects of the job
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {variants.map((variant) => (
              <Card 
                key={variant.id}
                className={cn(
                  "cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all",
                  variant.isRecommended && "ring-2 ring-green-500"
                )}
                onClick={() => onSelectVariant?.(variant.id)}
                variant="solid"
              >
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="font-semibold mb-1">{variant.company}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{variant.position}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium">Focus:</p>
                      <p className="text-sm">{variant.focus}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium">Match:</p>
                      <div className="flex items-center justify-center gap-2">
                        <Progress 
                          value={variant.matchPercentage} 
                          className="h-1.5 w-16" 
                        />
                        <span 
                          className={cn(
                            "text-sm font-semibold",
                            variant.matchPercentage >= 90 ? "text-green-600" :
                            variant.matchPercentage >= 80 ? "text-primary-600" :
                            "text-yellow-600"
                          )}
                        >
                          {variant.matchPercentage}%
                        </span>
                      </div>
                    </div>
                    
                    {variant.isRecommended && (
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        Recommended
                      </Badge>
                    )}
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        onSelectVariant?.(variant.id)
                      }}
                    >
                      Use This Version
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {onMergeBest && (
            <div className="text-center pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Can't decide? Let AI combine the best elements from all versions
              </p>
              <Button 
                onClick={onMergeBest}
                variant="outline"
                className="mx-auto"
              >
                Merge Best Features
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export function JobAutoTailorDemo() {
  const [stage, setStage] = useState<'url' | 'tailored'>('url')
  const [url, setUrl] = useState<string | null>(null)
  
  const handleUrlSubmit = (jobUrl: string) => {
    setUrl(jobUrl)
    setStage('tailored')
  }
  
  const sampleVariants: TailoredResumeVariant[] = [
    {
      id: 'backend',
      company: 'Google',
      position: 'SWE',
      focus: 'Backend',
      matchPercentage: 94,
      isRecommended: true
    },
    {
      id: 'fullstack',
      company: 'Google',
      position: 'SWE',
      focus: 'Full-Stack',
      matchPercentage: 87
    },
    {
      id: 'ml',
      company: 'Google',
      position: 'SWE',
      focus: 'ML Eng',
      matchPercentage: 82
    }
  ]
  
  return (
    <div className="w-full">
      {stage === 'url' && (
        <JobUrlInput onSubmit={handleUrlSubmit} />
      )}
      
      {stage === 'tailored' && (
        <TailoredResumes 
          variants={sampleVariants}
          onSelectVariant={(id) => console.log(`Selected variant: ${id}`)}
          onMergeBest={() => console.log('Merging best features')}
        />
      )}
    </div>
  )
}