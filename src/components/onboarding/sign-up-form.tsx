'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { ArrowRight } from '@phosphor-icons/react'
import { useState } from 'react'

interface QuickSignUpProps {
  onGoogleSignUp?: () => void
  onLinkedInSignUp?: () => void
  onEmailSignUp?: () => void
  className?: string
}

export function QuickSignUp({ onGoogleSignUp, onLinkedInSignUp, onEmailSignUp, className }: QuickSignUpProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-lg" variant="glass" blur="lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Get Started Free</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Button onClick={onGoogleSignUp} variant="outline" size="lg" className="w-full flex items-center gap-3">
            <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
              <span className="text-sm font-bold text-red-500">G</span>
            </div>
            Continue with Google
          </Button>

          <Button onClick={onLinkedInSignUp} variant="outline" size="lg" className="w-full flex items-center gap-3">
            <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-white">in</span>
            </div>
            Continue with LinkedIn
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-gray-950 px-2 text-gray-500">or</span>
            </div>
          </div>

          <Button onClick={onEmailSignUp} variant="outline" size="lg" className="w-full">
            Sign up with email <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

interface EmailSignUpProps {
  onCreateAccount?: (email: string, password: string) => void
  className?: string
}

export function EmailSignUp({ onCreateAccount, className }: EmailSignUpProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreateAccount?.(email, password)
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
          <CardTitle className="text-2xl">Create Your Account</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <Button type="submit" size="lg" color="primary" className="w-full">
              Create Account <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Free while unemployed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// Combined export for easy use
interface SignUpFormProps {
  variant?: 'quick' | 'email'
  onGoogleSignUp?: () => void
  onLinkedInSignUp?: () => void
  onEmailSignUp?: () => void
  onCreateAccount?: (email: string, password: string) => void
  className?: string
}

export function SignUpForm({
  variant = 'quick',
  onGoogleSignUp,
  onLinkedInSignUp,
  onEmailSignUp,
  onCreateAccount,
  className,
}: SignUpFormProps) {
  if (variant === 'email') {
    return <EmailSignUp onCreateAccount={onCreateAccount} className={className} />
  }

  return (
    <QuickSignUp
      onGoogleSignUp={onGoogleSignUp}
      onLinkedInSignUp={onLinkedInSignUp}
      onEmailSignUp={onEmailSignUp}
      className={className}
    />
  )
}
