Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /dashboard
- /content
- /finance
- /reports
- /today
- /this-week
- /this-year

Page Implementations:
/dashboard:
Core Purpose: Central hub showing key metrics and activity overview
Key Components
- StatisticsGrid (real-time metrics)
- ActivityFeed (recent actions)
- QuickActions menu
- NotificationCenter
Layout Structure
- Grid-based layout with 4 main sections
- Collapsible sidebar for mobile
- Responsive card grid system

/content:
Core Purpose: Content management and publishing platform
Key Components
- ContentList with filters
- ContentEditor
- MediaLibrary
- SchedulingCalendar
Layout Structure
- Split view (list

/finance:
Core Purpose: Financial management and transaction tracking
Key Components
- TransactionList
- BalanceOverview
- ExpenseTracker
- BudgetPlanner
Layout Structure
- Three-column layout on desktop
- Stacked cards on mobile
- Sticky header with key metrics

/reports:
Core Purpose: Analytics and reporting dashboard
Key Components
- ReportGenerator
- DataVisualizations
- ExportTools
- FilterPanel
Layout Structure
- Configurable grid layout
- Full-width charts
- Collapsible filter sidebar

/today:
Core Purpose: Daily tasks and schedule management
Key Components
- TodoList
- Calendar
- PriorityMatrix
- TimelineView
Layout Structure
- Two-column split view
- Single column on mobile
- Floating quick-add button

/this-week:
Core Purpose: Weekly planning and progress tracking
Key Components
- WeeklyCalendar
- MilestoneTracker
- TeamSchedule
- ProgressMetrics
Layout Structure
- Calendar grid with details panel
- Responsive timeline view
- Collapsible team sidebar

/this-year:
Core Purpose: Annual planning and goal tracking
Key Components
- YearlyGoals
- QuarterlyPlanner
- MilestoneTimeline
- ProgressDashboard
Layout Structure
- Timeline-based layout
- Quarterly section cards
- Responsive goal tracking boards

Layouts:
MainLayout:
- Applicable routes: All routes
- Core components
  - Navigation sidebar
  - Header with search
  - User profile menu
  - Breadcrumb navigation
- Responsive behavior
  - Collapsible sidebar on mobile
  - Sticky header
  - Adaptive content area

DashboardLayout
- Applicable routes: /dashboard, /reports
- Core components
  - Quick actions bar
  - Notification center
  - Widget grid system
- Responsive behavior
  - Reflow widgets to single column
  - Collapsible sections
  - Touch-friendly controls

ContentLayout
- Applicable routes: /content, /today, /this-week, /this-year
- Core components
  - List/Detail split view
  - Action toolbar
  - Filter panel
- Responsive behavior
  - Stack view on mobile
  - Swipe gestures
  - Floating action buttons
</page-structure-prompt>