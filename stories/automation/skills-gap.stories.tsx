import {
  AutoLearningSystem,
  SkillsGapDemo
} from '@/components/ui/skills-gap-automation'
import { BookOpen, FileText, Link } from 'lucide-react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Skills Gap',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Auto_Learning_System = {
  name: 'Auto Learning System',
  render: () => (
    <AutoLearningSystem
      skillGap="Kubernetes"
      existingSkill="Docker"
      gapPercentage={73}
      resources={[
        {
          id: '1',
          title: 'K8s course (3 hrs)',
          description: 'Covers basics',
          duration: '3 hours',
          type: 'course',
          icon: <BookOpen className="w-5 h-5" />
        },
        {
          id: '2',
          title: 'Docker → K8s transition guide',
          description: 'Perfect for your background',
          duration: '45 min',
          type: 'guide',
          icon: <FileText className="w-5 h-5" />
        },
        {
          id: '3',
          title: 'Practice lab access',
          description: 'Hands-on exercises',
          duration: 'Self-paced',
          type: 'lab',
          icon: <Link className="w-5 h-5" />
        }
      ]}
      aiActions={[
        {
          id: '1',
          description: 'Adding "K8s (learning)" to resume',
          completed: false
        },
        {
          id: '2',
          description: 'Emphasizing container experience',
          completed: true
        },
        {
          id: '3',
          description: 'Targeting Docker-to-K8s transition roles (found 12)',
          completed: true
        }
      ]}
      onStartLearning={() => console.log('Starting learning')}
      onSkip={() => console.log('Skipping for now')}
    />
  )
}

export const Skills_Gap_Demo = {
  name: 'Skills Gap Demo',
  render: () => <SkillsGapDemo />
}