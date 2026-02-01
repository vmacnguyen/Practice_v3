interface VideoAnalysisProps {
  onBack: () => void;
  selectedSport: string;
}

export function VideoAnalysis({ onBack, selectedSport }: VideoAnalysisProps) {
  const sportName = selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1);

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-28">
      {/* Header */}
      <div className="bg-white border-b border-[#F3F4F6] pt-14 px-6 pb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#155DFC] font-medium mb-6"
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
          History
        </button>

        <h1 className="text-2xl font-bold text-[#0A0A0A] mb-2">
          Session 1
        </h1>
        <div className="text-[#4A5565]">
          <p>January 29, 2026 4:30PM</p>
          <p className="text-sm mt-1">🏐 {sportName}</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Video Player */}
        <div className="relative h-56 bg-gradient-to-br from-[#2B7FFF] to-[#9810FA] rounded-2xl overflow-hidden shadow-lg">
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/30 backdrop-blur-sm rounded-full size-20 flex items-center justify-center pl-2">
              <svg className="size-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
          <div className="absolute top-4 left-4 bg-black/60 px-3 py-1.5 rounded text-white text-sm font-medium">
            Full Recording
          </div>
          <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-white text-sm">
            2:34
          </div>
        </div>

        {/* Analysis Sections */}
        <div className="space-y-6">
          {/* What went well */}
          <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#DCFCE7] rounded-full size-8 flex items-center justify-center">
                <svg className="size-5 text-[#00A63E]" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M16.6667 5L7.5 14.1667L3.33333 10"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.67"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0A0A0A]">
                What went well
              </h3>
            </div>
            <ul className="space-y-2.5 ml-1">
              {[
                'Consistent follow-through on shots',
                'Good footwork positioning',
                'Improved ball control',
                'Better arc on long-range shots',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-[#364153]">
                  <span className="size-1.5 rounded-full bg-[#00A63E] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas to improve */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#FFEDD4] rounded-full size-8 flex items-center justify-center">
                <svg className="size-5 text-[#F54900]" fill="none" viewBox="0 0 20 20">
                  <circle
                    cx="10"
                    cy="10"
                    r="7.5"
                    stroke="currentColor"
                    strokeWidth="1.67"
                  />
                  <path
                    d="M10 10L13.75 13.75"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.67"
                  />
                  <path
                    d="M10 6.25V10H13.75"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.67"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0A0A0A]">
                Areas to improve
              </h3>
            </div>
            <ul className="space-y-2.5 ml-1">
              {[
                'Elbow alignment on release',
                'Jump height consistency',
                'Shot selection under pressure',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-[#364153]">
                  <span className="size-1.5 rounded-full bg-[#F54900] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}