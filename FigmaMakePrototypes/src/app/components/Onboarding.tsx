import { useState } from 'react';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0);

  const screens = [
    {
      emoji: '🎥',
      title: 'Record Your Practice',
      description: 'Capture your training sessions with your phone camera',
    },
    {
      emoji: '🤖',
      title: 'AI-Powered Analysis',
      description: 'Get instant feedback on your form and technique',
    },
  ];

  // Safety check: ensure step is within bounds
  const safeStep = step >= screens.length ? 0 : step;
  const currentScreen = screens[safeStep];
  const isLastStep = safeStep === screens.length - 1;
  const isFirstStep = safeStep === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B7FFF] to-[#9810FA] flex flex-col items-center justify-between p-6 text-white">
      {/* Top bar with back and skip buttons */}
      <div className="w-full flex items-center justify-between mt-8">
        {!isFirstStep ? (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 text-white font-medium"
          >
            <svg className="size-5" fill="none" viewBox="0 0 20 20">
              <path
                d="M12.5 5L7.5 10L12.5 15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.67"
              />
            </svg>
            Back
          </button>
        ) : (
          <div />
        )}
        
        {!isLastStep && (
          <button
            onClick={onComplete}
            className="text-white/80 font-medium"
          >
            Skip
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="text-[120px] mb-8 animate-bounce">
          {currentScreen.emoji}
        </div>
        <h1 className="text-3xl font-bold mb-4">
          {currentScreen.title}
        </h1>
        <p className="text-xl text-white/90 max-w-sm">
          {currentScreen.description}
        </p>
      </div>

      {/* Pagination dots */}
      <div className="flex gap-2 mb-8">
        {screens.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === step
                ? 'w-8 bg-white'
                : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Next/Get Started button */}
      <button
        onClick={() => {
          if (isLastStep) {
            onComplete();
          } else {
            setStep(step + 1);
          }
        }}
        className="w-full bg-white text-[#155DFC] py-4 rounded-lg font-semibold text-lg mb-8 hover:bg-white/90 transition-colors"
      >
        {isLastStep ? 'Get Started' : 'Next'}
      </button>
    </div>
  );
}