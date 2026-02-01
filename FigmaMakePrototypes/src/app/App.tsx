import { useState } from 'react';
import { Welcome } from '@/app/components/Welcome';
import { Onboarding } from '@/app/components/Onboarding';
import { SportSelector } from '@/app/components/SportSelector';
import { AccountCreation } from '@/app/components/AccountCreation';
import { Navigation } from '@/app/components/Navigation';
import { Home } from '@/app/components/Home';
import { Practice } from '@/app/components/Practice';
import { VideoAnalysis } from '@/app/components/VideoAnalysis';
import { History } from '@/app/components/History';
import { Profile } from '@/app/components/Profile';
import { EmptyState } from '@/app/components/EmptyState';

type Screen = 'welcome' | 'sport-select' | 'account-create' | 'onboarding' | 'home' | 'practice' | 'analysis' | 'history' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedSport, setSelectedSport] = useState('volleyball');
  const [userName, setUserName] = useState('Jordan Davis');
  const [userEmail, setUserEmail] = useState('jordan.davis@email.com');
  const [isNewUser, setIsNewUser] = useState(true);
  const [hasCompletedFirstPractice, setHasCompletedFirstPractice] = useState(false);

  const handleCreateAccount = () => {
    setIsNewUser(true);
    setCurrentScreen('sport-select');
  };

  const handleLogin = () => {
    // For demo purposes, skip to home with existing user
    setIsNewUser(false);
    setCurrentScreen('home');
  };

  const handleSportSelected = (sport: string) => {
    setSelectedSport(sport);
    if (isNewUser) {
      setCurrentScreen('account-create');
    } else {
      setCurrentScreen('home');
    }
  };

  const handleAccountCreated = (name: string, email: string) => {
    setUserName(name);
    setUserEmail(email);
    setCurrentScreen('onboarding');
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('home');
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleVideoAnalyzed = () => {
    setHasCompletedFirstPractice(true);
    setCurrentScreen('analysis');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  const handleChangeSport = () => {
    setCurrentScreen('sport-select');
  };

  // Render appropriate screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <Welcome
            onCreateAccount={handleCreateAccount}
            onLogin={handleLogin}
          />
        );

      case 'sport-select':
        return <SportSelector onSelectSport={handleSportSelected} onBack={() => setCurrentScreen('welcome')} />;

      case 'account-create':
        return (
          <AccountCreation
            selectedSport={selectedSport}
            onComplete={handleAccountCreated}
            onBack={() => setCurrentScreen('sport-select')}
          />
        );

      case 'onboarding':
        return <Onboarding onComplete={handleOnboardingComplete} />;

      case 'home':
        // Show empty state for new users who haven't completed their first practice
        if (isNewUser && !hasCompletedFirstPractice) {
          return (
            <EmptyState
              userName={userName.split(' ')[0]}
              onChooseFromLibrary={() => setCurrentScreen('practice')}
              onRecordNow={() => setCurrentScreen('practice')}
            />
          );
        }
        return (
          <Home
            userName={userName}
            selectedSport={selectedSport}
            onNavigate={handleNavigate}
            onProfileClick={() => setCurrentScreen('profile')}
            onSportChange={(sport) => setSelectedSport(sport)}
          />
        );

      case 'practice':
        return <Practice onVideoAnalyzed={handleVideoAnalyzed} />;

      case 'analysis':
        return (
          <VideoAnalysis
            onBack={handleBackToHome}
            selectedSport={selectedSport}
          />
        );

      case 'history':
        return <History onSelectSession={() => setCurrentScreen('analysis')} userName={userName} onProfileClick={() => setCurrentScreen('profile')} />;

      case 'profile':
        return (
          <Profile
            userName={userName}
            userEmail={userEmail}
            onBack={handleBackToHome}
            onChangeSport={handleChangeSport}
          />
        );

      default:
        return null;
    }
  };

  const showNavigation =
    currentScreen !== 'welcome' &&
    currentScreen !== 'sport-select' &&
    currentScreen !== 'account-create' &&
    currentScreen !== 'onboarding' &&
    currentScreen !== 'profile';

  return (
    <div className="min-h-screen bg-white">
      {/* Status Bar */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-white z-50 flex items-center justify-between px-6">
        <div className="font-semibold text-[#0A0A0A]">6:37 ⚡</div>
        <div className="flex items-center gap-1">
          <div className="size-4 bg-black/40 rounded-sm" />
          <div className="size-4 bg-black/40 rounded-sm" />
          <div className="size-4 bg-black/20 rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <main className="relative">
        {renderScreen()}
      </main>

      {/* Navigation */}
      {showNavigation && (
        <Navigation
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}