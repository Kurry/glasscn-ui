import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { FileText, Sparkles, Code } from 'lucide-react'

interface Template {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  preview: string
}

interface TemplateSelectionProps {
  onTemplateSelect?: (templateId: string) => void
  className?: string
}

export function TemplateSelection({ onTemplateSelect, className }: TemplateSelectionProps) {
  const templates: Template[] = [
    {
      id: 'clean-pro',
      name: 'Clean Pro',
      description: 'Professional and minimalist',
      icon: <FileText className="w-8 h-8" />,
      preview: 'Clean, organized layout perfect for any industry',
    },
    {
      id: 'modern-design',
      name: 'Modern Design',
      description: 'Contemporary with visual appeal',
      icon: <Sparkles className="w-8 h-8" />,
      preview: 'Eye-catching design with modern typography',
    },
    {
      id: 'tech-focus',
      name: 'Tech Focus',
      description: 'Optimized for technical roles',
      icon: <Code className="w-8 h-8" />,
      preview: 'Perfect for developers and engineers',
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
          <CardTitle className="text-2xl">Choose a template to start</CardTitle>
          <CardDescription>All templates are ATS-friendly</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
                variant="solid"
                onClick={() => onTemplateSelect?.(template.id)}
              >
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center text-primary-600">{template.icon}</div>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Template Preview Mock */}
                  <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{template.icon}</div>
                      <p className="text-xs text-gray-500">{template.preview}</p>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Use This Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
              ✅ All templates are ATS-friendly and recruiter-approved
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
