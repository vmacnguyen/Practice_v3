import { useState, useRef, useEffect } from 'react';
import img from "figma:asset/6e4d7a34fd6d93b14b96b576edc875c09b388a16.png";

interface HomeProps {
  userName: string;
  selectedSport: string;
  onNavigate: (screen: string) => void;
  onProfileClick: () => void;
  onSportChange?: (sport: string) => void;
}

const SPORT_EMOJIS: Record<string, string> = {
  tennis: '🎾',
  ballet: '🩰',
  golf: '🏌️',
  badminton: '🏸',
  snowboarding: '🏂',
  volleyball: '🏐',
  weightlifting: '🏋️',
};

export function Home({ userName, selectedSport, onNavigate, onProfileClick, onSportChange }: HomeProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const sportName = selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1);
  const sportEmoji = SPORT_EMOJIS[selectedSport] || '🏃';

  // Get all sports for dropdown
  const allSports = Object.entries(SPORT_EMOJIS).map(([key, emoji]) => ({
    key,
    name: key.charAt(0).toUpperCase() + key.slice(1),
    emoji,
  }));

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  const handleSportSelect = (sport: string) => {
    if (onSportChange) {
      onSportChange(sport);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-28">
      {/* Header */}
      <div className="bg-white pt-14 px-6 pb-8">
        <div className="flex items-start justify-between mb-3">
          <h1 className="text-3xl font-bold text-[#0A0A0A]">
            Welcome back!
          </h1>
          <button
            onClick={onProfileClick}
            className="bg-[#2B7FFF] rounded-full size-10 flex items-center justify-center text-white font-semibold"
          >
            {userName.charAt(0)}
          </button>
        </div>
        <div className="relative">
          <p className="text-[#4A5565] text-sm">
            {sportEmoji} {sportName}
          </p>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="absolute right-0 top-0 size-5 text-[#4A5565] font-semibold"
          >
            ▼
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 top-8 bg-white border border-gray-300 rounded shadow-md z-10"
            >
              {allSports.map((sport) => (
                <button
                  key={sport.key}
                  onClick={() => handleSportSelect(sport.key)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {sport.emoji} {sport.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="px-6">
        {/* CTA Button */}
        <button
          onClick={() => onNavigate('practice')}
          className="w-full bg-gradient-to-r from-[#155DFC] to-[#9810FA] text-white py-4 rounded-lg font-medium mb-8 -mt-4 shadow-md hover:opacity-90 transition-opacity"
        >
          Add a practice session
        </button>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-2xl font-bold text-[#155DFC] mb-1">24</div>
            <div className="text-xs text-[#4A5565]">Total Sessions</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-2xl font-bold text-[#9810FA] mb-1">12h</div>
            <div className="text-xs text-[#4A5565]">Total Time</div>
          </div>
        </div>

        {/* Latest Analysis */}
        <h2 className="text-lg font-semibold text-[#0A0A0A] mb-4">
          Latest Analysis
        </h2>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Date and Time */}
          <div className="px-5 pt-4 pb-2 text-[#6A7282] text-sm">
            January 31, 2026 5:25PM
          </div>

          {/* Video Thumbnail */}
          <div
            className="relative h-48 bg-cover bg-center flex items-center justify-center cursor-pointer"
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => onNavigate('analysis')}
          >
            <button className="bg-white/30 backdrop-blur-sm rounded-full size-16 flex items-center justify-center pl-1">
              <svg className="size-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 rounded text-white text-xs">
              2:34
            </div>
          </div>

          {/* Analysis Content */}
          <div className="p-5">
            {/* What went well */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-[#DCFCE7] rounded-full size-6 flex items-center justify-center">
                  <svg className="size-4 text-[#00A63E]" fill="none" viewBox="0 0 16 16">
                    <path
                      d="M13.3333 4L6 11.3333L2.66667 8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0A]">
                  What went well
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-[#364153] ml-1">
                <li>• Consistent follow-through on shots</li>
                <li>• Good footwork positioning</li>
                <li>• Improved ball control</li>
              </ul>
            </div>

            {/* Tips for next practice */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-[#FFEDD4] rounded-full size-6 flex items-center justify-center">
                  <svg className="size-4 text-[#F54900]" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 8l3 3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0A]">
                  Tips for next practice
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-[#364153] ml-1">
                <li>• Elbow alignment on release</li>
                <li>• Jump height consistency</li>
              </ul>
            </div>

            {/* View Full Analysis Button */}
            <button
              onClick={() => onNavigate('analysis')}
              className="w-full bg-[#155DFC] text-white py-3 rounded-lg font-medium text-sm hover:bg-[#0D4FD4] transition-colors"
            >
              View Full Analysis →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}