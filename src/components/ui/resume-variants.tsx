'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Download, Briefcase, Users, Globe, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface ResumeVariant {
  id: string
  name: string
  description: string
  emphasis: string
  icon: React.ReactNode
}

interface IntelligentResumeVariantsProps {
  variants: ResumeVariant[]
  onPreviewVariant?: (variantId: string) => void
  onDownloadAll?: () => void
  className?: string
}

export function IntelligentResumeVariants({
  variants,
  onPreviewVariant,
  onDownloadAll,
  className,
}: IntelligentResumeVariantsProps) {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null)

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">AI Created 4 Strategic Variants</CardTitle>
          <CardDescription className="text-base">Each optimized for different markets</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {variants.map((variant) => (
            <Card
              key={variant.id}
              className={cn('overflow-hidden transition-all', expandedVariant === variant.id ? 'shadow-md' : '')}
              variant="solid"
            >
              <div
                className="p-4 cursor-pointer"
                onClick={() => setExpandedVariant(expandedVariant === variant.id ? null : variant.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-primary-600 flex-shrink-0">{variant.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{variant.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{variant.description}</p>
                    </div>
                  </div>
                  <ChevronUp
                    className={cn(
                      'w-5 h-5 text-gray-400 transition-transform',
                      expandedVariant !== variant.id && 'rotate-180',
                    )}
                  />
                </div>
              </div>

              {expandedVariant === variant.id && (
                <div className="px-4 pb-4 pt-2">
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg mb-3">
                    <p className="text-sm">
                      <span className="font-medium">Emphasis: </span>
                      {variant.emphasis}
                    </p>
                  </div>

                  <Button size="sm" onClick={() => onPreviewVariant?.(variant.id)}>
                    Preview & Edit
                  </Button>
                </div>
              )}
            </Card>
          ))}

          <div className="text-center pt-4">
            {onDownloadAll && (
              <Button variant="outline" onClick={onDownloadAll} className="gap-2">
                <Download className="w-4 h-4" />
                Download All Variants
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function ResumeVariantsDemo() {
  const variants: ResumeVariant[] = [
    {
      id: 'big-tech',
      name: '"Big Tech" Version',
      description: 'Emphasizes scale & algorithms',
      emphasis:
        'Optimized for FAANG and large tech companies. Emphasizes your experience with large-scale systems, algorithmic efficiency, and enterprise architecture.',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: 'startup',
      name: '"Startup" Version',
      description: 'Highlights adaptability & ownership',
      emphasis:
        'Perfect for startups and growth-stage companies. Focuses on your versatility, ownership mentality, and ability to work across the stack with limited resources.',
      icon: <ChevronUp className="w-5 h-5" />,
    },
    {
      id: 'remote',
      name: '"Remote-First" Version',
      description: 'Shows async communication skills',
      emphasis:
        'Tailored for fully-remote positions. Highlights your experience with asynchronous communication, self-management, and independent work styles.',
      icon: <Globe className="w-5 h-5" />,
    },
    {
      id: 'leadership',
      name: '"Leadership" Version',
      description: 'Focuses on mentorship & impact',
      emphasis:
        'Designed for team lead and managerial roles. Emphasizes your experience mentoring others, making strategic decisions, and driving team success.',
      icon: <Users className="w-5 h-5" />,
    },
  ]

  return (
    <IntelligentResumeVariants
      variants={variants}
      onPreviewVariant={(id) => console.log(`Preview variant: ${id}`)}
      onDownloadAll={() => console.log('Download all variants')}
    />
  )
}
