export enum CompanySize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum Industry {
  TECHNOLOGY = 'Tecnologia',
  ECOMMERCE = 'E-commerce',
  MARKETING = 'Marketing',
  SERVICES = 'Serviços',
  EDUCATION = 'Educação',
  FINANCE = 'Finanças',
  HEALTHCARE = 'Saúde',
  RETAIL = 'Varejo',
}

export enum SocialMediaPlatform {
  INSTAGRAM = 'Instagram',
  LINKEDIN = 'LinkedIn',
  FACEBOOK = 'Facebook',
  TWITTER = 'Twitter',
  TIKTOK = 'TikTok',
  YOUTUBE = 'YouTube',
}

export interface SocialMediaMetrics {
  handle: string
  followers: number
  engagement: number
  posts: number
  growthRate: number
  lastUpdated: string
}

export interface Company {
  id: string
  name: string
  logo: string
  industry: Industry
  size: CompanySize
  founded: number
  location: string
  website: string
  description: string
  revenue?: string
  employees?: string
  marketShare?: number
  competitors?: string[]
  socialMedia: {
    [key in SocialMediaPlatform]?: SocialMediaMetrics
  }
  tags?: string[]
  status: 'active' | 'inactive'
  lastAnalysis?: string
}

export interface Activity {
  id: string
  type: 'mention' | 'growth' | 'alert' | 'analysis'
  company: string
  description: string
  date: string
  sentiment?: 'positive' | 'negative' | 'neutral'
  platform?: SocialMediaPlatform
  impact?: 'high' | 'medium' | 'low'
  details?: string
}

export interface ChartData {
  date: string
  value: number
}

export interface MarketMetrics {
  totalCompetitors: number
  mentions: number
  activeAlerts: number
  analysisPerformed: number
  engagementTrends: ChartData[]
  followerGrowth: ChartData[]
  marketShareDistribution?: Array<{ company: string; share: number }>
  industryGrowth?: ChartData[]
}

export interface SegmentData {
  name: string
  value: number
  change?: number
  color?: string
}

export interface CompanyStats {
  followers: number
  engagement: number
  posts: number
  platform: SocialMediaPlatform
  lastUpdated: Date
}

export interface CompetitorAnalysis {
  competitorId: string
  stats: CompanyStats[]
  insights: string[]
  recommendations: string[]
  generatedAt: Date
  strengths: string[]
  weaknesses: string[]
  opportunities: string[]
  threats: string[]
}

export interface SocialMediaProfile {
  platform: SocialMediaPlatform
  username: string
  url: string
}

export interface Competitor {
  id: string
  name: string
  logo: string
  socialMedia: {
    instagram?: string
    youtube?: string
    facebook?: string
    linkedin?: string
    tiktok?: string
  }
} 