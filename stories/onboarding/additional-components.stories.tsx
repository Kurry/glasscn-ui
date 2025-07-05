import { LandingPage } from '@/components/onboarding/landing-page'
import { SignUpForm } from '@/components/onboarding/sign-up-form'
import { WelcomeSurvey } from '@/components/onboarding/welcome-survey'
import { ResumeCreationChoice } from '@/components/onboarding/resume-creation-choice'
import { TemplateSelection } from '@/components/onboarding/template-selection'
import { GuidedInput } from '@/components/onboarding/guided-input'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Onboarding/Additional Components',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const LandingPageStory = {
  name: 'Landing Page',
  render: () => (
    <LandingPage
      onStartBuilding={() => console.log('Start building')}
      onSignIn={() => console.log('Sign in')}
    />
  )
}

export const QuickSignUpStory = {
  name: 'Quick Sign Up',
  render: () => (
    <SignUpForm
      variant="quick"
      onGoogleSignUp={() => console.log('Google sign up')}
      onLinkedInSignUp={() => console.log('LinkedIn sign up')}
      onEmailSignUp={() => console.log('Email sign up')}
    />
  )
}

export const EmailSignUpStory = {
  name: 'Email Sign Up',
  render: () => (
    <SignUpForm
      variant="email"
      onCreateAccount={(email, password) => console.log('Create account:', { email, password })}
    />
  )
}

export const WelcomeSurveyStory = {
  name: 'Welcome Survey',
  render: () => (
    <WelcomeSurvey
      onComplete={(responses) => console.log('Survey completed:', responses)}
    />
  )
}

export const ResumeCreationChoiceStory = {
  name: 'Resume Creation Choice',
  render: () => (
    <ResumeCreationChoice
      onOptionSelect={(optionId) => console.log('Option selected:', optionId)}
    />
  )
}

export const TemplateSelectionStory = {
  name: 'Template Selection',
  render: () => (
    <TemplateSelection
      onTemplateSelect={(templateId) => console.log('Template selected:', templateId)}
    />
  )
}

export const GuidedInputStory = {
  name: 'Guided Input',
  render: () => (
    <GuidedInput
      step={1}
      totalSteps={5}
      onContinue={() => console.log('Continue to next step')}
    />
  )
}