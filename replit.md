# EQUITEQ Investment Bank Website

## Overview

This is a Next.js-based corporate website for EQUITEQ, a global investment bank specializing in the Technology Services & Consulting Sector. The application is built with Next.js 15, React 19, TypeScript, and Bootstrap 5, configured for standalone deployment. The site features a clean, minimalist design focused on presenting corporate information, testimonials, and banking services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: Next.js 15 with App Router**
- **Problem**: Need for a modern, performant web application with good SEO capabilities
- **Solution**: Next.js App Router with React Server Components
- **Rationale**: Provides server-side rendering, static generation, and excellent performance out of the box
- **Pros**: Built-in routing, optimization, TypeScript support, production-ready
- **Cons**: Learning curve for App Router patterns

**UI Framework: Material UI (MUI) v7**
- **Problem**: Need for responsive, professional UI components with modern design
- **Solution**: Material UI v7 with custom theme configuration
- **Rationale**: Industry-leading React component library with comprehensive features and excellent TypeScript support
- **Pros**: 
  - Modern component design
  - Excellent accessibility out of the box
  - Rich ecosystem with icons package
  - Built-in theming system with sx prop
  - Full TypeScript support
  - Grid v2 layout system with responsive size prop
- **Cons**: Larger bundle size than minimal CSS frameworks
- **Date Migrated**: October 2025 (from Bootstrap 5)

**Styling Strategy: MUI sx Prop + Minimal Custom CSS**
- **Problem**: Balance between MUI components and custom branding
- **Solution**: MUI sx prop for component-level styling + minimal global CSS for utilities
- **Implementation**: 
  - Theme configuration with custom colors (black primary: #000000, secondary green: #003d1a)
  - MUI sx prop for inline responsive styling
  - Minimal global CSS only for Swiper carousel customization
  - Grid v7 with `size` prop for responsive layouts
- **Pros**: Type-safe styling, scoped styles, no CSS conflicts, responsive by default
- **Cons**: Inline styles can be verbose for complex components

### Component Architecture

**Navigation Pattern: MUI AppBar Navigation**
- **Problem**: Interactive navigation with search functionality
- **Solution**: Client-side Navbar component using MUI AppBar and Next.js Link
- **Rationale**: Interactive elements require client-side JavaScript
- **Features**: 
  - MUI AppBar with custom white background
  - Horizontal navigation links with Button components
  - Search IconButton for future search functionality
  - Next.js optimized Link components for routing
  - Fully responsive design

**Page Structure: Server Components by Default**
- **Problem**: Maximize performance and SEO
- **Solution**: Use React Server Components for static content
- **Rationale**: Reduces client-side JavaScript bundle size
- **Pros**: Faster initial load, better SEO, reduced bandwidth

**Testimonial Carousel: Swiper Integration**
- **Problem**: Need interactive carousel for client testimonials with pagination
- **Solution**: Swiper carousel library with custom styling
- **Rationale**: Modern, performant carousel with excellent Next.js/React support
- **Features**: Auto-play, loop, custom pagination dots, TypeScript support
- **Implementation**: Client component with Swiper modules (Pagination, Autoplay)
- **Pros**: No jQuery dependency, modular architecture, mobile-first, SSR compatible
- **Cons**: Adds ~50KB to bundle (minified)

### TypeScript Configuration

**Strict Mode Enabled**
- **Problem**: Catch type errors early in development
- **Solution**: Strict TypeScript settings with comprehensive type checking
- **Configuration**: ES2017 target, strict mode, path aliases (`@/*`)
- **Pros**: Type safety, better developer experience
- **Cons**: More verbose code in some cases

**Path Aliases**
- **Problem**: Avoid relative import hell (`../../../components`)
- **Solution**: `@/*` alias pointing to root directory
- **Rationale**: Cleaner, more maintainable imports

### Build Configuration

**Standalone Output Mode**
- **Problem**: Need self-contained deployment package
- **Solution**: `output: 'standalone'` in next.config.ts
- **Rationale**: Creates a minimal production build with all dependencies
- **Use Case**: Docker containers, serverless deployments
- **Pros**: Smaller deployment size, includes only necessary files
- **Cons**: Requires understanding of standalone deployment patterns

### Design System

**Color Scheme**
- Primary: Black (#000000) - Professional, authoritative
- Text: Dark Gray (#333333) - Readable, not harsh
- Background: Light Gray (#f5f5f5) - Subtle contrast
- White: (#ffffff) - Clean sections

**Typography Strategy**
- System font stack for performance
- Lightweight font weights (300) for modern aesthetic
- Clear hierarchy with size differentiation

## External Dependencies

### Core Framework
- **Next.js 15.5.6**: React framework with server-side rendering, routing, and optimization
- **React 19.0.0**: UI library for component-based architecture
- **React DOM 19.0.0**: React rendering for web

### UI Framework
- **@mui/material v7.3.4**: Material UI component library with Grid v2
- **@mui/icons-material v7.3.4**: Material Design icon components
- **@mui/material-nextjs**: Material UI integration for Next.js App Router with cache provider
- **@emotion/react**: CSS-in-JS library (required peer dependency for MUI)
- **@emotion/styled**: Styled components API (required peer dependency for MUI)
- **Swiper 12.0.0**: Modern carousel/slider library for testimonials with pagination and autoplay

### API & Data Fetching
- **graphql-request**: Lightweight GraphQL client for API calls
- **graphql**: GraphQL core library for query definitions

### Development Tools
- **TypeScript 5.6.0**: Static type checking and enhanced developer experience
- **ESLint 9.0.0**: Code quality and consistency enforcement
- **eslint-config-next**: Next.js-specific ESLint rules

### Type Definitions
- **@types/node**: Node.js type definitions
- **@types/react**: React type definitions
- **@types/react-dom**: React DOM type definitions

### External API Integrations

**GraphQL API Integration (Countries API)**
- **Problem**: Need to fetch real-time location/country data for search functionality
- **Solution**: Integrated Countries GraphQL API (https://countries.trevorblades.com/)
- **Implementation**: 
  - Using `graphql-request` library for lightweight GraphQL client
  - Created reusable GraphQL client utility (`lib/graphql-client.ts`)
  - Search functionality queries countries by name, code, or capital
  - Client-side filtering for flexible search experience
- **Rationale**: Public API with no authentication required, comprehensive country data
- **Pros**: Free, reliable, no API key management, rich dataset
- **Cons**: Client-side filtering needed (API doesn't support name-based queries)

### Notes on Missing Integrations
- **No Database**: Currently static content only; may require Postgres/Drizzle for dynamic content
- **No Authentication**: Public-facing site with no user login currently
- **No API Routes**: No backend API endpoints defined yet
- **No Analytics**: No tracking or analytics services configured

## Recent Changes

### Material UI Migration (October 2025)
**Replaced Bootstrap 5 with Material UI v7**
- Removed all Bootstrap dependencies (bootstrap, @types/bootstrap, BootstrapClient.tsx)
- Installed Material UI packages (@mui/material, @mui/icons-material, @emotion packages)
- Created custom theme configuration (app/theme.ts) with brand colors
- Updated all components to use Material UI:
  - Navbar: Now uses AppBar, Toolbar, Button, IconButton
  - Page sections: Uses Box, Container, Typography, Grid (v7 with size prop)
  - LocationSearch: Uses TextField with InputAdornment
  - NewsCards: Uses Card, CardContent, Grid
  - Footer: Uses Grid, Button, IconButton with social icons
  - TestimonialCarousel: Uses MUI Typography with Swiper
- Simplified global CSS to only include Swiper pagination styles
- Updated layout.tsx with ThemeProvider and AppRouterCacheProvider
- All components now use Material UI's sx prop for styling
- Grid v7 uses `size={{ xs: 12, md: 6 }}` syntax instead of separate props

### GraphQL API Integration (October 2025)
**Implemented Location Search with Countries GraphQL API**
- Installed `graphql-request` and `graphql` packages for API communication
- Created GraphQL client utility (`lib/graphql-client.ts`) with:
  - GraphQL client configuration
  - Country search query definitions
  - TypeScript interfaces for type safety
  - Search function with client-side filtering
- Updated LocationSearch component with:
  - Real-time country search by name, code, or capital
  - Loading states with CircularProgress indicator
  - Error handling with Alert component
  - Search results displayed in responsive Card Grid layout
  - Country details: flag emoji, name, capital, continent, currency
- API endpoint: https://countries.trevorblades.com/ (public, no auth required)