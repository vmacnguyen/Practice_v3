import svgPaths from "@/imports/svg-7nxponxypr";

interface NavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] safe-area-bottom">
      <div className="flex items-end justify-between px-4 pb-6 pt-1 max-w-[430px] mx-auto">
        {/* Home */}
        <button
          onClick={() => onNavigate('home')}
          className="flex flex-col items-center gap-1 flex-1"
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24">
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke={currentScreen === 'home' ? '#155DFC' : '#6A7282'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M9 22V12H15V22"
              stroke={currentScreen === 'home' ? '#155DFC' : '#6A7282'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span className={`text-xs font-medium ${currentScreen === 'home' ? 'text-[#155DFC]' : 'text-[#6A7282]'}`}>
            Home
          </span>
        </button>

        {/* Practice */}
        <button
          onClick={() => onNavigate('practice')}
          className="flex flex-col items-center gap-1.5 flex-1 -mt-4"
        >
          <div className="bg-gradient-to-br from-[#155DFC] to-[#9810FA] rounded-full shadow-lg size-14 flex items-center justify-center">
            <svg className="size-6" fill="none" viewBox="0 0 24 24">
              <path
                d="M23 7L16 12L23 17V7Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                fill="white"
              />
              <path
                d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <span className={`text-xs font-medium ${currentScreen === 'practice' ? 'text-[#155DFC]' : 'text-[#6A7282]'}`}>Practice</span>
        </button>

        {/* History */}
        <button
          onClick={() => onNavigate('history')}
          className="flex flex-col items-center gap-1 flex-1"
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24">
            <path
              d={svgPaths.p15a59300}
              stroke={currentScreen === 'history' ? '#155DFC' : '#6A7282'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M1 1V6H6"
              stroke={currentScreen === 'history' ? '#155DFC' : '#6A7282'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M1 1V6L5 8"
              stroke={currentScreen === 'history' ? '#155DFC' : '#6A7282'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span className={`text-xs font-medium ${currentScreen === 'history' ? 'text-[#155DFC]' : 'text-[#6A7282]'}`}>
            History
          </span>
        </button>
      </div>
    </div>
  );
}