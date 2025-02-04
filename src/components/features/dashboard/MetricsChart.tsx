import { ChartData } from '@/types/company'
import { BarChart, LineChart } from '@tremor/react'
import { theme } from '@/config/theme'

interface MetricsChartProps {
  type: 'bar' | 'line'
  data: ChartData
  loading?: boolean
  valueFormatter?: (value: number) => string
  colors?: string[]
  showLegend?: boolean
}

export function MetricsChart({
  type,
  data,
  loading,
  valueFormatter = (value) => value.toString(),
  colors = [theme.colors.gradients.blue[0]],
  showLegend = true,
}: MetricsChartProps) {
  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
        <div className="h-[300px] bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    )
  }

  const chartData = data.labels.map((label, index) => ({
    date: label,
    ...data.datasets.reduce(
      (acc, dataset) => ({
        ...acc,
        [dataset.name]: dataset.data[index],
      }),
      {}
    ),
  }))

  const categories = data.datasets.map((d) => d.name)

  const commonProps = {
    data: chartData,
    index: 'date',
    categories,
    colors,
    valueFormatter,
    showLegend,
    showGridLines: true,
    showXAxis: true,
    showYAxis: true,
    yAxisWidth: 56,
    className: 'h-full mt-6',
    noDataText: 'Nenhum dado disponível',
  }

  if (type === 'bar') {
    return (
      <div className="rounded-xl overflow-hidden" style={{ borderRadius: theme.borderRadius.card }}>
        <BarChart
          {...commonProps}
          showAnimation
          animationDuration={800}
          showLegend={false}
          minValue={0}
          maxValue={100}
        />
      </div>
    )
  }

  return (
    <div className="rounded-xl overflow-hidden" style={{ borderRadius: theme.borderRadius.card }}>
      <LineChart
        {...commonProps}
        curveType="natural"
        showAnimation
        animationDuration={1500}
        enableLegendSlider
        minValue={0}
        connectNulls
      />
    </div>
  )
} 