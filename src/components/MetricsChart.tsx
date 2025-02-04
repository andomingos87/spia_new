import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { ChartData, SegmentData } from '@/types/company'

interface MetricsChartProps {
  type: 'bar' | 'line'
  data: ChartData[] | SegmentData[]
  index: string
  categories: string[]
  loading?: boolean
}

const chartColors = {
  bar: [
    '#8B5CF6', // purple
    '#3B82F6', // blue
    '#10B981', // emerald
    '#F59E0B', // amber
    '#EC4899', // pink
  ],
  line: [
    '#EC4899', // pink
    '#3B82F6', // blue
    '#10B981', // emerald
  ],
}

export function MetricsChart({
  type,
  data,
  index,
  loading = false,
}: MetricsChartProps) {
  if (loading) {
    return (
      <div className="animate-pulse h-full w-full">
        <div className="h-full bg-gray-200 dark:bg-gray-700 rounded-lg" />
      </div>
    )
  }

  const formatValue = (value: number) => `${value}%`

  const commonProps = {
    data,
    margin: { top: 10, right: 30, left: 0, bottom: 0 },
  }

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        {type === 'bar' ? (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis
              dataKey={index}
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatValue}
            />
            <Tooltip
              formatter={formatValue}
              contentStyle={{
                backgroundColor: 'rgba(17, 24, 39, 0.8)',
                border: 'none',
                borderRadius: '4px',
                color: '#fff',
              }}
            />
            <Bar
              dataKey="value"
              fill={chartColors.bar[0]}
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        ) : (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis
              dataKey={index}
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatValue}
            />
            <Tooltip
              formatter={formatValue}
              contentStyle={{
                backgroundColor: 'rgba(17, 24, 39, 0.8)',
                border: 'none',
                borderRadius: '4px',
                color: '#fff',
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={chartColors.line[0]}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  )
} 