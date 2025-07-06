import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowRight } from '@phosphor-icons/react'

interface LandingPageProps {
  onStartBuilding?: () => void
  onSignIn?: () => void
  className?: string
}

export function LandingPage({ onStartBuilding, onSignIn, className }: LandingPageProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-lg text-center" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="mb-4">
            <div className="text-6xl mb-2">💼</div>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 mb-4">
              • Free While on Unemployment
            </Badge>
          </div>
          <CardTitle className="text-2xl mb-2">Between Jobs? We've Got Your Back</CardTitle>
          <CardTitle className="text-xl text-primary-600 mb-4">Get Back to Work with AI</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            Automate your entire job search with AI. Build polished resumes, then let our agents auto-apply while you
            sleep
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <Button onClick={onStartBuilding} size="lg" color="primary" className="w-full text-lg py-6">
            Start Building <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <div className="text-center">
            <span className="text-gray-600 dark:text-gray-400">Already have an account? </span>
            <Button variant="link" onClick={onSignIn} className="p-0 h-auto text-primary-600 hover:text-primary-700">
              Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
