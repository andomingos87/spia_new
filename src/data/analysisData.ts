export const engagementByPlatform = [
  {
    platform: 'Instagram',
    engagementRate: 4.8,
    followers: 125000,
    posts: 450,
    color: '#E1306C',
  },
  {
    platform: 'LinkedIn',
    engagementRate: 3.2,
    followers: 85000,
    posts: 280,
    color: '#0077B5',
  },
  {
    platform: 'YouTube',
    engagementRate: 6.5,
    followers: 75000,
    posts: 120,
    color: '#FF0000',
  },
  {
    platform: 'TikTok',
    engagementRate: 8.2,
    followers: 95000,
    posts: 380,
    color: '#000000',
  },
]

export const marketShareTrend = [
  { month: 'Jan', competitor1: 25, competitor2: 18, competitor3: 15, competitor4: 12 },
  { month: 'Fev', competitor1: 28, competitor2: 17, competitor3: 16, competitor4: 13 },
  { month: 'Mar', competitor1: 26, competitor2: 19, competitor3: 14, competitor4: 14 },
  { month: 'Abr', competitor1: 29, competitor2: 20, competitor3: 15, competitor4: 12 },
  { month: 'Mai', competitor1: 31, competitor2: 18, competitor3: 16, competitor4: 13 },
  { month: 'Jun', competitor1: 30, competitor2: 21, competitor3: 17, competitor4: 14 },
]

export const contentPerformance = [
  { type: 'Vídeos', engagement: 85, reach: 12000, conversions: 450 },
  { type: 'Posts', engagement: 65, reach: 8500, conversions: 320 },
  { type: 'Stories', engagement: 45, reach: 15000, conversions: 280 },
  { type: 'Reels', engagement: 92, reach: 25000, conversions: 680 },
  { type: 'Lives', engagement: 78, reach: 9500, conversions: 410 },
]

export const audienceGrowth = [
  { date: '2023-07', followers: 45000 },
  { date: '2023-08', followers: 52000 },
  { date: '2023-09', followers: 58000 },
  { date: '2023-10', followers: 67000 },
  { date: '2023-11', followers: 72000 },
  { date: '2023-12', followers: 85000 },
  { date: '2024-01', followers: 98000 },
  { date: '2024-02', followers: 125000 },
]

export const competitorComparison = {
  categories: ['Engajamento', 'Alcance', 'Conversões', 'Crescimento', 'Conteúdo'],
  series: [
    {
      name: 'Sua Empresa',
      data: [85, 90, 78, 92, 88],
      color: '#6366F1',
    },
    {
      name: 'TechVision',
      data: [75, 85, 82, 80, 85],
      color: '#22C55E',
    },
    {
      name: 'DataFlow',
      data: [65, 70, 75, 68, 72],
      color: '#F97316',
    },
  ],
}

export const postTimingAnalysis = {
  hours: Array.from({ length: 24 }, (_, i) => i),
  engagement: [
    28, 15, 8, 5, 3, 4, 12, 35, 65, 85, 92, 88,
    75, 82, 78, 72, 68, 75, 82, 71, 65, 55, 42, 35
  ],
}

export const sentimentAnalysis = [
  { sentiment: 'Positivo', value: 65, color: '#22C55E' },
  { sentiment: 'Neutro', value: 25, color: '#6B7280' },
  { sentiment: 'Negativo', value: 10, color: '#EF4444' },
]

export const hashtagPerformance = [
  { tag: '#marketing', posts: 450, reach: 25000, engagement: 4.8 },
  { tag: '#business', posts: 380, reach: 22000, engagement: 4.2 },
  { tag: '#innovation', posts: 320, reach: 18500, engagement: 3.9 },
  { tag: '#technology', posts: 280, reach: 16800, engagement: 3.5 },
  { tag: '#startup', posts: 250, reach: 15200, engagement: 3.2 },
] 