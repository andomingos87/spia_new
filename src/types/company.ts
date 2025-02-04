export type SocialMediaPlatform = 'youtube' | 'instagram' | 'facebook' | 'tiktok' | 'linkedin'

export interface SocialMediaProfile {
  platform: SocialMediaPlatform
  username: string
  url: string
}

export interface Company {
  id: string
  name: string
  logo: string
  segment: string
  socialMedia: SocialMediaProfile[]
  createdAt: Date
  updatedAt: Date
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
} 