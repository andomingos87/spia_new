interface CardProps {
  title: string
  value: string
  onClick?: () => void
  className?: string
}

export function Card({ title, value, onClick, className = '' }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-4 bg-white dark:bg-gray-800 rounded-lg shadow ${className}`}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{value}</p>
    </div>
  )
} 