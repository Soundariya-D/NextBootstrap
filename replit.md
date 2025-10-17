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

**UI Framework: Bootstrap 5**
- **Problem**: Need for responsive, professional UI components quickly
- **Solution**: Bootstrap 5 with custom CSS variables for theming
- **Rationale**: Well-established component library with extensive documentation
- **Pros**: Fast development, mobile-responsive, widely supported
- **Cons**: Generic appearance without heavy customization

**Styling Strategy: Hybrid CSS**
- **Problem**: Balance between Bootstrap components and custom branding
- **Solution**: Bootstrap for layout/components + Custom CSS for brand identity
- **Implementation**: 
  - Global CSS variables for brand colors (black primary, light gray backgrounds)
  - Custom classes for hero sections, testimonials, and content areas
  - Bootstrap utilities for spacing and responsive grid
- **Pros**: Flexibility with consistency
- **Cons**: Potential for style conflicts

**Client-Side Bootstrap Initialization**
- **Problem**: Bootstrap JavaScript needs browser environment
- **Solution**: Separate client component (`BootstrapClient.tsx`) that loads Bootstrap JS
- **Rationale**: Separates client-side code from server components
- **Pros**: Clean separation of concerns, no hydration issues
- **Cons**: Additional component needed

### Component Architecture

**Navigation Pattern: Client Component Navbar**
- **Problem**: Interactive navigation with dropdown and toggle functionality
- **Solution**: Client-side Navbar component using Next.js Link for routing
- **Rationale**: Interactive elements require client-side JavaScript
- **Features**: Responsive collapse menu, Bootstrap integration, Next.js optimized links

**Page Structure: Server Components by Default**
- **Problem**: Maximize performance and SEO
- **Solution**: Use React Server Components for static content
- **Rationale**: Reduces client-side JavaScript bundle size
- **Pros**: Faster initial load, better SEO, reduced bandwidth

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
- **Next.js 15.1.3**: React framework with server-side rendering, routing, and optimization
- **React 19.0.0**: UI library for component-based architecture
- **React DOM 19.0.0**: React rendering for web

### UI Framework
- **Bootstrap 5.3.3**: CSS framework for responsive design and pre-built components
- **@types/bootstrap**: TypeScript definitions for Bootstrap

### Development Tools
- **TypeScript 5.6.0**: Static type checking and enhanced developer experience
- **ESLint 9.0.0**: Code quality and consistency enforcement
- **eslint-config-next**: Next.js-specific ESLint rules

### Type Definitions
- **@types/node**: Node.js type definitions
- **@types/react**: React type definitions
- **@types/react-dom**: React DOM type definitions

### Notes on Missing Integrations
- **No Database**: Currently static content only; may require Postgres/Drizzle for dynamic content
- **No Authentication**: Public-facing site with no user login currently
- **No API Routes**: No backend API endpoints defined yet
- **No External APIs**: Self-contained application with no third-party service integrations
- **No Analytics**: No tracking or analytics services configured