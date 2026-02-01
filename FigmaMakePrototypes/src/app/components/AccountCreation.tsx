import { useState } from 'react';

interface AccountCreationProps {
  selectedSport: string;
  onComplete: (name: string, email: string) => void;
  onBack: () => void;
}

const SPORT_EMOJIS: Record<string, string> = {
  soccer: '⚽',
  basketball: '🏀',
  tennis: '🎾',
  volleyball: '🏐',
  baseball: '⚾',
  football: '🏈',
  hockey: '🏒',
  tabletennis: '🏓',
  badminton: '🏸',
  boxing: '🥊',
  golf: '🏌️',
  pool: '🎱',
};

export function AccountCreation({ selectedSport, onComplete, onBack }: AccountCreationProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  const sportName = selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1);
  const sportEmoji = SPORT_EMOJIS[selectedSport] || '🏃';

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; password?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onComplete(name, email);
    }
  };

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
          Create Account
        </h1>
      </div>

      {/* Form */}
      <div className="flex-1 p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#364153] mb-2"
            >
              Nickname
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jordan Davis"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-[#D1D5DC]'
              } bg-white text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#364153] mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-[#E4E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#364153] mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a secure password"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.password ? 'border-red-500' : 'border-[#D1D5DC]'
              } bg-white text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-[#2B7FFF] to-[#9810FA] text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity mt-8"
          >
            Continue
          </button>
        </form>

        {/* Additional Info */}
        <p className="text-xs text-[#6A7282] text-center mt-6">
          You can change your sport selection anytime in settings
        </p>
      </div>
    </div>
  );
}