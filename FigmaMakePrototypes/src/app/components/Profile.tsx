interface ProfileProps {
  userName: string;
  userEmail: string;
  onBack: () => void;
  onChangeSport: () => void;
}

export function Profile({ userName, userEmail, onBack, onChangeSport }: ProfileProps) {
  const userInitials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-28">
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
          History
        </button>

        <h1 className="text-3xl font-bold text-[#0A0A0A] mb-2">Profile</h1>
        <p className="text-[#4A5565]">Manage your account and preferences</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="size-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(152, 16, 250) 100%)',
              }}
            >
              {userInitials}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A0A0A] mb-1">
                {userName}
              </h2>
              <p className="text-[#4A5565]">{userEmail}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E7EB]">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#155DFC] mb-1">24</div>
              <div className="text-xs text-[#4A5565]">Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#00A63E] mb-1">18</div>
              <div className="text-xs text-[#4A5565]">Day Streak</div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div>
          <h2 className="text-lg font-semibold text-[#0A0A0A] mb-3">Settings</h2>

          <div className="space-y-3">
            {/* Notifications */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-[#DBEAFE] rounded-full size-12 flex items-center justify-center flex-shrink-0">
                  <svg className="size-6 text-[#155DFC]" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#0A0A0A] mb-1">
                    Notifications
                  </h3>
                  <p className="text-sm text-[#4A5565]">
                    Push notifications enabled
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <div className="peer size-11 rounded-full bg-[#155DFC] after:absolute after:left-[2px] after:top-[2px] after:size-7 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"></div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <button
              onClick={onChangeSport}
              className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:bg-gray-50 transition-colors"
            >
              <div className="bg-[#F3E8FF] rounded-full size-12 flex items-center justify-center flex-shrink-0">
                <svg className="size-6 text-[#9810FA]" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-[#0A0A0A] mb-1">
                  Preferences
                </h3>
                <p className="text-sm text-[#4A5565]">
                  Customize your experience
                </p>
              </div>
              <svg className="size-5 text-[#D1D5DC] flex-shrink-0" fill="none" viewBox="0 0 20 20">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.67"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}