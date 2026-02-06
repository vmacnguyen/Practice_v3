export const formatDate = (timestamp: number | string | Date): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const formatDateShort = (timestamp: number | string | Date): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0 && date.getDate() === now.getDate()) {
    return 'Today';
  }
  if (daysDiff === 1 || (daysDiff === 0 && date.getDate() !== now.getDate())) {
    return 'Yesterday';
  }
  if (daysDiff < 7) {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
};

export const generateSessionTitle = (
  sport: string,
  timestamp: number | string | Date,
  sessionNumber: number
): string => {
  const date = new Date(timestamp);
  // Get YYYY-MM-DD
  const dateStr = date.toISOString().split('T')[0];

  // Capitalize sport name (simple version)
  const sportName = sport.charAt(0).toUpperCase() + sport.slice(1);

  return `${sportName} - ${dateStr} - Session ${sessionNumber}`;
};
