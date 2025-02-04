import { Activity } from '@/types/company'
import { theme } from '@/config/theme'
import { AlertCircle, TrendingUp, MessageCircle, BarChart2 } from 'lucide-react'

const activityIcons = {
  mention: MessageCircle,
  growth: TrendingUp,
  alert: AlertCircle,
  analysis: BarChart2,
}

const activityColors = {
  mention: theme.colors.activity.mention,
  growth: theme.colors.activity.growth,
  alert: theme.colors.activity.alert,
  analysis: theme.colors.activity.analysis,
}

const impactColors = {
  high: '#EF4444', // red
  medium: '#F59E0B', // amber
  low: '#10B981', // emerald
}

interface RecentActivityProps {
  activities: Activity[]
  loading?: boolean
}

export function RecentActivity({ activities, loading = false }: RecentActivityProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!activities?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-gray-500">
        <AlertCircle className="w-12 h-12 mb-4" />
        <p>Nenhuma atividade recente encontrada</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => {
        const Icon = activityIcons[activity.type]
        const color = activityColors[activity.type]
        const sentimentColor = activity.sentiment ? theme.colors.sentiment[activity.sentiment] : undefined
        const impactColor = activity.impact ? impactColors[activity.impact] : undefined

        return (
          <div
            key={activity.id}
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            style={{ borderRadius: theme.borderRadius.card }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon className="w-5 h-5" style={{ color }} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-gray-900 dark:text-white truncate">
                  {activity.company}
                </p>
                <div className="flex items-center gap-1.5">
                  {activity.sentiment && (
                    <span
                      className="inline-block w-2 h-2 rounded-full"
                      style={{ backgroundColor: sentimentColor }}
                    />
                  )}
                  {activity.impact && (
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: `${impactColor}20`,
                        color: impactColor,
                      }}
                    >
                      {activity.impact}
                    </span>
                  )}
                  {activity.platform && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.platform}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {activity.description}
              </p>
              {activity.details && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {activity.details}
                </p>
              )}
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                {new Date(activity.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
} 