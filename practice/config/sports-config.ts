export interface SportConfig {
  id: string;
  name: string;
  icon: string; // Icon name for UI
  emoji: string;
  actions: string[];
}

export const SPORTS_CONFIG: Record<string, SportConfig> = {
  tennis: {
    id: 'tennis',
    name: 'Tennis',
    icon: 'tennis',
    emoji: '🎾',
    actions: ['Serve', 'Forehand', 'Backhand', 'Volley', 'Overhead'],
  },
  volleyball: {
    id: 'volleyball',
    name: 'Volleyball',
    icon: 'volleyball',
    emoji: '🏐',
    actions: ['Serve', 'Set', 'Spike/Hit', 'Pass/Bump', 'Block'],
  },
  pickleball: {
    id: 'pickleball',
    name: 'Pickleball',
    icon: 'racquet',
    emoji: '🏓',
    actions: ['Serve', 'Dink', 'Drive', 'Volley', 'Third Shot Drop'],
  },
  badminton: {
    id: 'badminton',
    name: 'Badminton',
    icon: 'badminton',
    emoji: '🏸',
    actions: ['Serve', 'Clear', 'Smash', 'Drop Shot', 'Net Play'],
  },
  golf: {
    id: 'golf',
    name: 'Golf',
    icon: 'golf',
    emoji: '🏌️',
    actions: ['Drive', 'Iron Shot', 'Chip', 'Putt', 'Bunker Shot'],
  },
  weightlifting: {
    id: 'weightlifting',
    name: 'Weightlifting',
    icon: 'dumbbell',
    emoji: '🏋️',
    actions: ['Squat', 'Deadlift', 'Bench Press', 'Overhead Press', 'Clean & Jerk'],
  },
  ballet: {
    id: 'ballet',
    name: 'Ballet',
    icon: 'ballet',
    emoji: '🩰',
    actions: ['Pirouette', 'Grand Jeté', 'Arabesque', 'Plié', 'Fouetté'],
  },
  snowboarding: {
    id: 'snowboarding',
    name: 'Snowboarding',
    icon: 'snowboard',
    emoji: '🏂',
    actions: ['Carving Turns', 'Ollies', '180s/360s', 'Rails/Boxes', 'Jumps', 'Butters'],
  },
};

export const SPORTS_LIST = Object.values(SPORTS_CONFIG);

export function getSportById(sportId: string): SportConfig | undefined {
  return SPORTS_CONFIG[sportId];
}

export function getActionsForSport(sportId: string): string[] {
  return SPORTS_CONFIG[sportId]?.actions || [];
}