// Export all components
export * from './EnhanceButton';
export * from './EnhanceModal';
export * from './AgentCarousel';
export * from './TaskList';

// Main component export
import { useState } from 'react';
import { EnhanceButton, type EnhanceButtonProps } from './EnhanceButton';
import { EnhanceModal } from './EnhanceModal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface OneClickEnhanceProps extends Omit<EnhanceButtonProps, 'onClick'> {
  resumeId: string;
  onEnhanceComplete?: (enhancedResumeId: string) => void;
  buttonText?: React.ReactNode;
  showCredits?: boolean;
}

export function OneClickEnhance({ 
  resumeId, 
  onEnhanceComplete,
  buttonText,
  showCredits = true,
  variant,
  size,
  fullWidth,
  className,
  disabled,
  ...props
}: OneClickEnhanceProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleEnhanceComplete = (enhancedResumeId: string) => {
    onEnhanceComplete?.(enhancedResumeId);
    closeModal();
  };
  
  return (
    <>
      <EnhanceButton
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={className}
        onClick={openModal}
        credits={showCredits ? 1 : undefined}
        disabled={disabled}
        {...props}
      >
        {buttonText}
      </EnhanceButton>
      
      <EnhanceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        resumeId={resumeId}
        onComplete={handleEnhanceComplete}
      />
    </>
  );
}

// Demo component for showcasing functionality
export function OneClickEnhanceDemo() {
  const [enhancedResumeId, setEnhancedResumeId] = useState<string | null>(null);
  
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">AI Resume Enhancement</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Our AI agents analyze and enhance your resume to improve its quality, readability,
          and match with job requirements - all with just one click.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Version</CardTitle>
            <CardDescription>Simple one-click enhancement</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <OneClickEnhance 
              resumeId="sample-resume-123"
              onEnhanceComplete={setEnhancedResumeId}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Extended Version</CardTitle>
            <CardDescription>With custom styling and text</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <OneClickEnhance 
              resumeId="sample-resume-123"
              variant="outline"
              size="lg"
              fullWidth
              buttonText={<span>Optimize Resume with AI</span>}
              }
              onEnhanceComplete={setEnhancedResumeId}
            />
          </CardContent>
        </Card>
      </div>
      
      {enhancedResumeId && (
        <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <CardContent className="p-6 text-center">
            <p className="text-green-800 dark:text-green-300 font-medium">
              Resume enhanced successfully! New resume ID: {enhancedResumeId}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}