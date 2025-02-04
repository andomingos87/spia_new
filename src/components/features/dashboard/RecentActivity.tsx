import { Activity } from '@/types/company'
import { Bell, TrendingUp, MessageSquare } from 'lucide-react'
import { theme } from '@/config/theme'

interface RecentActivityProps {
  activities: Activity[]
  loading?: boolean
}

const activityIcons = {
  mention: MessageSquare,
  growth: TrendingUp,
  alert: Bell,
}

const activityColors = {
  mention: theme.colors.activity.mention,
  growth: theme.colors.activity.growth,
  alert: theme.colors.activity.alert,
}

const sentimentColors = {
  positive: theme.colors.sentiment.positive,
  negative: theme.colors.sentiment.negative,
  neutral: theme.colors.sentiment.neutral,
}

export function RecentActivity({ activities, loading }: RecentActivityProps) {
  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (activities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400">
        <Bell className="w-12 h-12 mb-4 opacity-50" />
        <p className="text-sm">Nenhuma atividade recente</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => {
        const Icon = activityIcons[activity.type]
        const colorStyle = { backgroundColor: activityColors[activity.type] }
        const sentimentStyle = { backgroundColor: sentimentColors[activity.sentiment] }

        return (
          <div
            key={activity.id}
            className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md"
            style={{ borderRadius: theme.borderRadius.card }}
          >
            <div
              className="p-2 rounded-lg"
              style={colorStyle}
            >
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {activity.company}
                </p>
                <span className="flex-shrink-0 text-xs text-gray-500 dark:text-gray-400">
                  {new Date(activity.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 truncate">
                {activity.content}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  via {activity.platform}
                </span>
                <div
                  className="w-2 h-2 rounded-full"
                  style={sentimentStyle}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
} 