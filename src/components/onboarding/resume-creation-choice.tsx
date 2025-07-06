import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Upload, Plus, Microphone } from '@phosphor-icons/react'

interface CreationOption {
  id: string
  title: string
  description: string
  duration: string
  icon: React.ReactNode
  recommended?: boolean
}

interface ResumeCreationChoiceProps {
  onOptionSelect?: (optionId: string) => void
  className?: string
}

export function ResumeCreationChoice({ onOptionSelect, className }: ResumeCreationChoiceProps) {
  const options: CreationOption[] = [
    {
      id: 'import',
      title: '📤 Import',
      description: 'Upload your existing resume',
      duration: '2 minutes',
      icon: <Upload className="w-8 h-8" />,
      recommended: true,
    },
    {
      id: 'fresh',
      title: '🆕 Start Fresh',
      description: 'Build from scratch',
      duration: '10 minutes',
      icon: <Plus className="w-8 h-8" />,
    },
    {
      id: 'voice',
      title: '🎙️ Voice Interview',
      description: 'Answer questions to build resume',
      duration: '15 minutes',
      icon: <Microphone className="w-8 h-8" />,
    },
  ]

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-4xl" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">How would you like to start?</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* First two options in top row */}
            <div className="md:col-span-3 grid md:grid-cols-2 gap-6">
              {options.slice(0, 2).map((option) => (
                <Card
                  key={option.id}
                  className={cn(
                    'cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1',
                    option.recommended && 'ring-2 ring-primary-500',
                  )}
                  variant="solid"
                  onClick={() => onOptionSelect?.(option.id)}
                >
                  <CardHeader className="text-center pb-3">
                    {option.recommended && (
                      <Badge className="w-fit mx-auto mb-2" color="primary">
                        Recommended
                      </Badge>
                    )}
                    <div className="mb-3 flex justify-center text-primary-600">{option.icon}</div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <Badge variant="outline" className="text-sm">
                      {option.duration}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Voice option in bottom row, centered */}
            <div className="md:col-span-3 flex justify-center">
              <div className="w-full max-w-md">
                <Card
                  className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
                  variant="solid"
                  onClick={() => onOptionSelect?.(options[2].id)}
                >
                  <CardHeader className="text-center pb-3">
                    <div className="mb-3 flex justify-center text-primary-600">{options[2].icon}</div>
                    <CardTitle className="text-lg">{options[2].title}</CardTitle>
                    <CardDescription>{options[2].description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <Badge variant="outline" className="text-sm">
                      {options[2].duration}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
