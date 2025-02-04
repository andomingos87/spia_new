export const routes = {
  root: '/',
  auth: {
    signin: '/auth/signin',
    signup: '/auth/signup',
    verify: '/auth/verify',
    resetPassword: '/auth/reset-password',
  },
  dashboard: '/',
  competitors: {
    root: '/competitors',
    new: '/competitors/new',
    details: (id: string) => `/competitors/${id}`,
  },
  analytics: {
    root: '/analytics',
    social: '/analytics/social',
    market: '/analytics/market',
  },
  settings: {
    root: '/settings',
    profile: '/settings/profile',
    notifications: '/settings/notifications',
  },
} as const

export type AppRoutes = typeof routes 