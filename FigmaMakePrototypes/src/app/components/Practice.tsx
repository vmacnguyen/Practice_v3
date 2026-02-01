import { useState } from 'react';

interface PracticeProps {
  onVideoAnalyzed: () => void;
}

export function Practice({ onVideoAnalyzed }: PracticeProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleChooseLibrary = () => {
    // Simulate file selection
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      onVideoAnalyzed();
    }, 2000);
  };

  const handleRecordNow = () => {
    // Simulate recording
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      onVideoAnalyzed();
    }, 2000);
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#2B7FFF] to-[#9810FA] rounded-full size-20 flex items-center justify-center mb-4 mx-auto animate-pulse">
            <svg className="size-10 text-white" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-[#0A0A0A] mb-2">
            Analyzing your video...
          </h2>
          <p className="text-[#4A5565]">This will just take a moment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-28">
      {/* Header */}
      <div className="bg-white pt-14 px-6 pb-6">
        <h1 className="text-3xl font-bold text-[#0A0A0A] mb-2">
          Add a practice
        </h1>
      </div>

      <div className="px-6 pt-6">
        {/* Main Upload Card */}
        <div className="bg-white rounded-2xl border-2 border-[#D1D5DC] shadow-sm p-8 mb-8">
          <div className="text-center">
            <div className="bg-[#DBEAFE] rounded-full size-20 flex items-center justify-center mx-auto mb-6">
              <svg className="size-10 text-[#155DFC]" fill="none" viewBox="0 0 40 40">
                <path
                  d="M35 25V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3.33"
                />
                <path
                  d="M28.3333 13.3333L20 5L11.6667 13.3333"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3.33"
                />
                <path
                  d="M20 5V25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3.33"
                />
              </svg>
            </div>
            <p className="text-[#4A5565] mb-8 max-w-xs mx-auto">
              Get instant AI-powered analysis of your practice session
            </p>

            <div className="space-y-3">
              <button
                onClick={handleChooseLibrary}
                className="w-full bg-[#155DFC] text-white py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#0D4FD4] transition-colors"
              >
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33"
                  />
                  <path
                    d="M11.3333 5.33333L8 2L4.66667 5.33333"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33"
                  />
                  <path
                    d="M8 2V10"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33"
                  />
                </svg>
                Choose from Library
              </button>

              <button
                onClick={handleRecordNow}
                className="w-full bg-white border border-black/10 text-[#0A0A0A] py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33"
                  />
                  <path
                    d="M8 5.33333V8L9.66667 9.66667"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33"
                  />
                </svg>
                Record Now
              </button>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div>
          <h3 className="text-sm font-semibold text-[#364153] mb-3">
            Tips for best results:
          </h3>
          <div className="space-y-2">
            {[
              'Position camera to capture full body movement',
              'Ensure good lighting for accurate analysis',
              'Keep camera stable throughout recording',
            ].map((tip, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-[#DBEAFE] rounded-full size-5 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#155DFC] text-xs font-bold">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm text-[#4A5565]">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
