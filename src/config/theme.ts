export const theme = {
  colors: {
    gradients: {
      purple: ['#8B5CF6', '#6D28D9'],
      blue: ['#3B82F6', '#1D4ED8'],
      green: ['#22C55E', '#15803D'],
      orange: ['#F97316', '#C2410C'],
    },
    charts: {
      segments: [
        '#8B5CF6', // purple
        '#3B82F6', // blue
        '#22C55E', // green
        '#F97316', // orange
        '#EC4899', // pink
      ],
      engagement: [
        '#6366F1', // indigo
        '#14B8A6', // teal
        '#F59E0B', // amber
      ],
      growth: [
        '#EC4899', // pink
        '#3B82F6', // blue
        '#22C55E', // green
      ],
    },
    activity: {
      mention: '#3B82F6',
      growth: '#22C55E',
      alert: '#F97316',
      analysis: '#6366F1',
    },
    sentiment: {
      positive: '#22C55E',
      negative: '#EF4444',
      neutral: '#9CA3AF',
    },
  },
  shadows: {
    card: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    cardHover: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  transitions: {
    default: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },
  borderRadius: {
    card: '0.75rem',
    button: '0.5rem',
    badge: '9999px',
  },
} 