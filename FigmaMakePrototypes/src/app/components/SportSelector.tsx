interface SportSelectorProps {
  onSelectSport: (sport: string) => void;
  onBack: () => void;
}

export function SportSelector({ onSelectSport, onBack }: SportSelectorProps) {
  const sports = [
    { emoji: '🎾', name: 'Tennis', value: 'tennis' },
    { emoji: '🩰', name: 'Ballet', value: 'ballet' },
    { emoji: '🏌️', name: 'Golf', value: 'golf' },
    { emoji: '🏸', name: 'Badminton', value: 'badminton' },
    { emoji: '🏂', name: 'Snowboarding', value: 'snowboarding' },
    { emoji: '🏐', name: 'Volleyball', value: 'volleyball' },
    { emoji: '🏋️', name: 'Weightlifting', value: 'weightlifting' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      {/* Header */}
      <div className="bg-white pt-14 px-6 pb-6">
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
          Back
        </button>

        <h1 className="text-3xl font-bold text-[#0A0A0A] mb-2">
          Choose Your Sport
        </h1>
        <p className="text-[#4A5565]">
          Select the sport you want to practice
        </p>
      </div>

      {/* Sports Grid */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4">
          {sports.map((sport) => (
            <button
              key={sport.value}
              onClick={() => onSelectSport(sport.value)}
              className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm border-2 border-transparent hover:border-[#155DFC] transition-all active:scale-95"
            >
              <span className="text-5xl">{sport.emoji}</span>
              <span className="text-sm font-medium text-[#0A0A0A]">
                {sport.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}