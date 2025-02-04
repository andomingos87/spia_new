Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
Social Media Analytics Dashboard with Geographic Insights
</summary_title>

<image_analysis>

1. Navigation Elements:
- Top header with: Dashboard, Content, Finance, Reports
- Secondary controls: Search, Notifications, Settings, Profile
- Time period filters with: Today, This Week, This Year


2. Layout Components:
- Main container: 1200px max-width
- Card components: ~300-400px width
- Stat cards: 250px × 150px
- Map visualization: ~800px × 400px
- Charts maintain 16:9 aspect ratio


3. Content Sections:
- Key metrics cards (Followers, Likes)
- Click-through rate bar chart
- Audience growth line chart
- Geographic distribution map
- Top countries list
- Sentiment analysis gauge
- Customer overview section


4. Interactive Controls:
- Time period selectors
- Export report button
- Show All link for customers
- Chart interaction points
- Map hover states
- Menu toggles


5. Colors:
- Primary: #3366FF (blue)
- Secondary: #22C55E (green)
- Accent: #FFD700 (yellow)
- Background: #F8FAFC
- Text: #1E293B
- Charts: #E5E7EB (gray), #FF9933 (orange)


6. Grid/Layout Structure:
- 12-column grid system
- 24px grid gap
- Card padding: 24px
- Responsive breakpoints at 768px, 1024px, 1440px
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Navigation
│   │   └── DashboardLayout
│   ├── features/
│   │   ├── Analytics
│   │   ├── Geography
│   │   └── Charts
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Real-time analytics tracking
- Interactive data visualizations
- Geographic data mapping
- Export functionality
- Time period filtering
- Responsive layouts


3. State Management:
```typescript
interface AppState {
├── analytics: {
│   ├── followers: number
│   ├── likes: number
│   ├── ctr: number[]
│   ├── growth: TimeseriesData[]
├── }
├── geography: {
│   ├── locations: GeoData[]
│   ├── topCountries: CountryData[]
├── }
└── ui: {
├── timeFilter: TimeFilter
└── activeView: string
}
```


4. Routes:
```typescript
const routes = [
├── '/dashboard',
├── '/content/*',
├── '/finance/*',
└── '/reports/*'
]
```


5. Component Architecture:
- DashboardContainer (parent)
- StatisticCard (reusable)
- ChartComponent (wrapper)
- MapVisualization
- CountryList
- SentimentGauge


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'sm': '640px',
├── 'md': '768px',
├── 'lg': '1024px',
└── 'xl': '1440px'
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.