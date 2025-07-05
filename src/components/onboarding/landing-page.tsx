'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HeadingTitle } from '@/components/ui-extras/heading-title'
import { Briefcase, ArrowRight, Users, Zap } from 'lucide-react'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg">
              <Briefcase className="w-12 h-12 text-primary-600" />
            </div>
          </div>
          
          <HeadingTitle as="h1" size="5xl" variant="gradient" color="primary" className="mb-4">
            Between Jobs? We've Got Your Back
          </HeadingTitle>
          
          <HeadingTitle as="h2" size="3xl" className="text-gray-700 dark:text-gray-300 mb-6">
            Get Back to Work with AI
          </HeadingTitle>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Automate your entire job search and get back to work faster than ever before
          </p>
        </div>

        {/* Main CTA Card */}
        <Card className="max-w-md mx-auto" variant="glass" blur="lg">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-4">
              <Button size="lg" className="w-full" color="primary">
                <span className="flex items-center gap-2">
                  Start Building <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?
                </p>
                <Button variant="link" color="primary" className="mt-1">
                  Sign In
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Proof */}
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>10k+ job seekers</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              <span>3x faster interviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}