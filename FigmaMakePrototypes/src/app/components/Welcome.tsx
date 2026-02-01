interface WelcomeProps {
  onCreateAccount: () => void;
  onLogin: () => void;
}

export function Welcome({ onCreateAccount, onLogin }: WelcomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B7FFF] to-[#9810FA] flex flex-col items-center justify-between p-6 text-white">
      {/* Logo/Brand Area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-6 text-8xl">
          🎾
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Practice
        </h1>
        <p className="text-xl text-white/90 max-w-sm">
          AI-powered coaching for every athlete
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-4 mb-8">
        <button
          onClick={onCreateAccount}
          className="w-full bg-white text-[#155DFC] py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
        >
          Create Account
        </button>
        
        <button
          onClick={onLogin}
          className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors"
        >
          Log In
        </button>
      </div>

      {/* Terms */}
      <p className="text-xs text-white/60 text-center mb-4">
        By continuing, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  );
}