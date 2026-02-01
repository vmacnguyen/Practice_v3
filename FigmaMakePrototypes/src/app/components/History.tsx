import svgPaths from "@/imports/svg-rpb6ld1k7f";
import imgImageWithFallback from "figma:asset/2568c405ca93ab6f29e12267ef943e9a324f10d8.png";
import imgImageWithFallback1 from "figma:asset/6e4d7a34fd6d93b14b96b576edc875c09b388a16.png";
import imgImageWithFallback2 from "figma:asset/5165ce679619eea3880750f8f6b8f94b9963fe52.png";

interface HistoryProps {
  onSelectSession: () => void;
  userName: string;
  onProfileClick: () => void;
}

export function History({ onSelectSession, userName, onProfileClick }: HistoryProps) {
  const sessions = [
    {
      title: 'Serve Practice - Session 1',
      date: 'Nov 10, 2024 at 2:30 PM',
      duration: '2:45',
      image: imgImageWithFallback,
      badges: [],
    },
    {
      title: 'Spike Training - Power Work',
      date: 'Nov 9, 2024 at 4:15 PM',
      duration: '3:12',
      image: imgImageWithFallback1,
      badges: [],
    },
    {
      title: 'Blocking Drills',
      date: 'Nov 8, 2024 at 10:00 AM',
      duration: '1:58',
      image: imgImageWithFallback2,
      badges: [],
    },
    {
      title: 'Passing Fundamentals',
      date: 'Nov 7, 2024 at 3:45 PM',
      duration: '4:20',
      image: imgImageWithFallback,
      badges: ['Fundamentals', 'Technique'],
    },
    {
      title: 'Game Footage - Tournament',
      date: 'Nov 6, 2024 at 6:30 PM',
      duration: '15:42',
      image: imgImageWithFallback1,
      badges: ['Game', 'Tournament', 'Match Analysis'],
    },
    {
      title: 'Setting Practice',
      date: 'Nov 5, 2024 at 2:00 PM',
      duration: '3:30',
      image: imgImageWithFallback2,
      badges: ['Setting', 'Fundamentals', 'Technique'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-28">
      {/* Header */}
      <div className="bg-white pt-14 px-6 pb-6">
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-3xl font-bold text-[#0A0A0A]">History</h1>
          <button
            onClick={onProfileClick}
            className="bg-[#2B7FFF] rounded-full size-10 flex items-center justify-center text-white font-semibold"
          >
            {userName.charAt(0)}
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Video Feed */}
        <div className="space-y-4">
          {sessions.map((session, index) => (
            <button
              key={index}
              onClick={onSelectSession}
              className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden hover:shadow-md transition-shadow w-full"
            >
              {/* Video Thumbnail */}
              <div className="relative bg-[#f3f4f6]">
                <img 
                  src={session.image} 
                  alt={session.title}
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center">
                  <div className="bg-[rgba(255,255,255,0.9)] rounded-full size-12 flex items-center justify-center pl-1">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p1fa69000} fill="#101828" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Duration Label */}
                <div className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] px-2 py-1 rounded text-white text-xs">
                  {session.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4 text-left">
                <h3 className="font-normal text-[#0A0A0A] text-base leading-5 mb-1">
                  {session.title}
                </h3>
                <p className="font-normal text-[#6A7282] text-sm leading-4 mb-2">
                  {session.date}
                </p>
                
                {/* Badges */}
                {session.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {session.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="bg-[#ECEEF2] px-2 py-0.5 rounded-lg text-[#030213] text-xs font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}