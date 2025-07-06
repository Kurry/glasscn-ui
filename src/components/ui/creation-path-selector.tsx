import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Upload, Plus, Microphone, Clock, Lightning, Star } from '@phosphor-icons/react'

interface CreationPath {
  id: string
  title: string
  description: string
  duration: string
  features: string[]
  icon: React.ReactNode
  recommended?: boolean
  difficulty: 'easy' | 'medium' | 'advanced'
}

interface CreationPathSelectorProps {
  onPathSelect?: (pathId: string) => void
  className?: string
}

export function CreationPathSelector({ onPathSelect, className }: CreationPathSelectorProps) {
  const paths: CreationPath[] = [
    {
      id: 'upload',
      title: 'Upload Resume',
      description: "Have one already? We'll analyze and enhance it",
      duration: '2 minutes',
      features: ['Instant analysis', 'AI improvements', 'ATS optimization'],
      icon: <Upload className="w-8 h-8" />,
      recommended: true,
      difficulty: 'easy',
    },
    {
      id: 'build',
      title: 'Build from Scratch',
      description: 'AI guides you step-by-step',
      duration: '10 minutes',
      features: ['Guided process', 'AI suggestions', 'Professional templates'],
      icon: <Plus className="w-8 h-8" />,
      difficulty: 'medium',
    },
    {
      id: 'voice',
      title: 'Voice Interview',
      description: 'Talk through your experience',
      duration: '15 minutes',
      features: ['Natural conversation', 'Smart extraction', 'Personalized content'],
      icon: <Microphone className="w-8 h-8" />,
      difficulty: 'advanced',
    },
  ]

  const getDifficultyColor = (difficulty: CreationPath['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'advanced':
        return 'bg-purple-100 text-purple-700 border-purple-200'
    }
  }

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How would you like to start?</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Choose the method that works best for you</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {paths.map((path) => (
            <Card
              key={path.id}
              className={cn(
                'cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group',
                path.recommended && 'ring-2 ring-primary-500 shadow-lg',
              )}
              variant="glass"
              blur="lg"
              onClick={() => onPathSelect?.(path.id)}
            >
              <CardHeader className="text-center pb-4">
                {path.recommended && (
                  <div className="flex justify-center mb-3">
                    <Badge className="bg-primary-600 text-white flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Recommended
                    </Badge>
                  </div>
                )}

                <div className="mb-4 flex justify-center text-primary-600 group-hover:scale-110 transition-transform">
                  {path.icon}
                </div>

                <CardTitle className="text-xl mb-2">{path.title}</CardTitle>
                <CardDescription className="text-base">{path.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Duration */}
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{path.duration}</span>
                </div>

                {/* Difficulty */}
                <div className="flex justify-center">
                  <Badge className={getDifficultyColor(path.difficulty)}>{path.difficulty}</Badge>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {path.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Lightning className="w-3 h-3 text-primary-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full mt-6"
                  size="lg"
                  color={path.recommended ? 'primary' : 'default'}
                  variant={path.recommended ? 'default' : 'outline'}
                >
                  {path.recommended ? 'Start Now' : 'Choose This Path'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Help Text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Not sure? Start with the recommended path - you can always switch later
          </p>
        </div>
      </div>
    </div>
  )
}
