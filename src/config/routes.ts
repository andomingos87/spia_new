export const routes = {
  root: '/',
  auth: {
    signin: '/auth/signin',
    signup: '/auth/signup',
    verify: '/auth/verify',
    resetPassword: '/auth/reset-password',
    forgot: '/auth/forgot'
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
  profile: '/profile',
  company: '/minha-empresa',
  support: {
    bug: '/support/bug',
    feedback: '/support/feedback',
  },
} as const

export type AppRoutes = typeof routes 