export interface AnalyticsData {
  followers: number
  likes: number
  engagement: number
  reach: number
}

export interface GeoData {
  country: string
  users: number
  percentage: number
}

export interface CustomerData {
  id: number
  name: string
  location: string
  status: 'active' | 'inactive'
  avatar: string
}

export type TimeFilter = 'today' | 'week' | 'year'

export type TaskPriority = 'high' | 'medium' | 'low'

export type TaskStatus = 'completed' | 'in-progress' | 'upcoming'

export type TeamMemberStatus = 'busy' | 'available' | 'meeting'

export interface Task {
  id: number
  title: string
  time?: string
  priority: TaskPriority
  completed: boolean
}

export interface TeamMember {
  id: number
  name: string
  avatar: string
  tasks: Array<{
    day: number
    status: TeamMemberStatus
  }>
}

export interface QuarterGoal {
  id: number
  title: string
  progress: number
}

export interface Quarter {
  id: number
  name: string
  status: TaskStatus
  goals: QuarterGoal[]
} 