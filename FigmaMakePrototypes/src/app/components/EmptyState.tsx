import svgPaths from "@/imports/svg-m0zjislyzc";

interface EmptyStateProps {
  userName: string;
  onChooseFromLibrary: () => void;
  onRecordNow: () => void;
}

export function EmptyState({ userName, onChooseFromLibrary, onRecordNow }: EmptyStateProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-14 pb-28">
      {/* Header */}
      <div className="bg-white pt-14 px-6 pb-6">
        <h1 className="text-[30px] font-bold text-[#0A0A0A] leading-[36px] tracking-[0.4px]">
          Welcome {userName}!
        </h1>
      </div>

      {/* Main Content */}
      <div className="px-6 pt-6 space-y-8">
        {/* Upload Card */}
        <div className="bg-white rounded-[14px] p-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] border-2 border-[#D1D5DC]">
          {/* Icon */}
          <div className="flex justify-center mb-8 mt-4">
            <div className="bg-[#DBEAFE] rounded-full size-20 flex items-center justify-center">
              <svg className="size-10" fill="none" viewBox="0 0 40 40">
                <path 
                  d={svgPaths.p3cf0d3d0} 
                  stroke="#155DFC" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="3.33333" 
                />
                <path 
                  d={svgPaths.p14561f00} 
                  stroke="#155DFC" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="3.33333" 
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-[20px] font-semibold text-[#0A0A0A] text-center mb-4 tracking-[-0.45px]">
            Add your first practice!
          </h2>

          {/* Description */}
          <p className="text-[16px] text-[#4A5565] text-center mb-12 tracking-[-0.31px] leading-6">
            Get instant AI-powered analysis of your practice session
          </p>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={onChooseFromLibrary}
              className="w-full bg-[#155DFC] text-white rounded-lg h-12 flex items-center justify-center gap-2 font-medium text-[14px] tracking-[-0.15px]"
            >
              <svg className="size-4" fill="none" viewBox="0 0 16 16">
                <path 
                  d={svgPaths.p23ad1400} 
                  stroke="white" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
                <path 
                  d={svgPaths.p26e09a00} 
                  stroke="white" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
                <path 
                  d="M8 2V10" 
                  stroke="white" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
              </svg>
              Choose from Library
            </button>

            <button
              onClick={onRecordNow}
              className="w-full bg-white text-[#0A0A0A] rounded-lg h-12 flex items-center justify-center gap-2 font-medium text-[14px] tracking-[-0.15px] border border-[rgba(0,0,0,0.1)]"
            >
              <svg className="size-4" fill="none" viewBox="0 0 16 16">
                <path 
                  d={svgPaths.p39f43800} 
                  stroke="#0A0A0A" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
                <path 
                  d={svgPaths.p370da580} 
                  stroke="#0A0A0A" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
              </svg>
              Record Now
            </button>
          </div>
        </div>

        {/* Tips Section */}
        <div>
          <h3 className="text-[14px] font-semibold text-[#364153] mb-3 tracking-[-0.15px]">
            Tips for best results:
          </h3>

          <div className="space-y-2">
            {/* Tip 1 */}
            <div className="flex items-start gap-3">
              <div className="bg-[#DBEAFE] rounded-full size-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[12px] font-bold text-[#155DFC]">1</span>
              </div>
              <p className="text-[14px] text-[#4A5565] tracking-[-0.15px] leading-5">
                Position camera to capture full body movement
              </p>
            </div>

            {/* Tip 2 */}
            <div className="flex items-start gap-3">
              <div className="bg-[#DBEAFE] rounded-full size-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[12px] font-bold text-[#155DFC]">2</span>
              </div>
              <p className="text-[14px] text-[#4A5565] tracking-[-0.15px] leading-5">
                Ensure good lighting for accurate analysis
              </p>
            </div>

            {/* Tip 3 */}
            <div className="flex items-start gap-3">
              <div className="bg-[#DBEAFE] rounded-full size-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[12px] font-bold text-[#155DFC]">3</span>
              </div>
              <p className="text-[14px] text-[#4A5565] tracking-[-0.15px] leading-5">
                Keep camera stable throughout recording
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
