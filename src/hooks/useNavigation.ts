import { useRouter } from 'next/navigation'
import { routes } from '@/config/routes'

export function useNavigation() {
  const router = useRouter()

  const navigate = {
    push: (path: string) => router.push(path),
    toDashboard: () => router.push(routes.dashboard),
    toCompetitors: () => router.push(routes.competitors.root),
    toCompetitorDetails: (id: string) => router.push(routes.competitors.details(id)),
    toAnalytics: () => router.push(routes.analytics.root),
    toSocialAnalytics: () => router.push(routes.analytics.social),
    toMarketAnalytics: () => router.push(routes.analytics.market),
    toSettings: () => router.push(routes.settings.root),
    toProfile: () => router.push(routes.settings.profile),
    toNotifications: () => router.push(routes.settings.notifications),
    back: () => router.back(),
  }

  return navigate
} 