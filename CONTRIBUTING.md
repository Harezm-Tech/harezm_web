# Contributing to Harezm Web

## UI Component Requirements

1. **Use shadcn/ui Components**
   - Always use [shadcn/ui](https://ui.shadcn.com/) components for UI implementations whenever possible
   - Avoid using direct Radix UI components - instead use their shadcn/ui equivalents
   - This ensures consistent styling, maintainability, and better integration with our design system
   - To add new components:
     ```bash
     npx shadcn-ui add [component-name]
     ```

## Tech Stack Overview

### Core Technologies
- **Next.js 15**: Latest App Router with server actions and partial prerendering
  - Follow [Next.js best practices](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)
  - Use App Router for new features
  - Implement server components where possible
  - Follow file-system based routing conventions
  - Use partial prerendering for dynamic content

- **TypeScript**: For type-safe code
  - All new code must be written in TypeScript
  - Maintain strict type safety - avoid using `any` type
  - Create proper interfaces and types for data structures
  - Use type inference where it makes code cleaner
  - Follow [TypeScript best practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
  - Utilize TypeScript's utility types (Partial<T>, Pick<T>, Omit<T>)

- **Tailwind CSS**: For styling
  - Follow utility-first CSS approach
  - Utilize tailwind-merge for conditional class merging
  - Use tailwind-variants for component variants
  - Implement tailwindcss-animate for animations

- **State Management**:
  - Use Zustand for global state management
  - Keep state minimal and organized
  - Follow Zustand best practices for store creation and updates

- **Internationalization**:
  - Use next-intl for multi-language support
  - All text content should support multiple languages
  - Use translation keys consistently
  - Keep translations organized by feature

- **Theming**:
  - Use next-themes for dark/light mode
  - Ensure all components support theme switching
  - Follow accessibility guidelines for color contrasts

- **Animation**:
  - Use Framer Motion for animations
  - Keep animations subtle and purposeful
  - Ensure animations don't impact performance

### UI Components
- **shadcn/ui**: Pre-built accessible components
- **Radix UI**: Through shadcn/ui implementations
- **Framer Motion**: For animations
- **Lucide Icons**: For consistent iconography

## Development Setup

1. **Prerequisites**
   - Node.js 20.x or later (required for Next.js 15)
   - npm or yarn package manager
   - Git

2. **Installation**
   ```bash
   git clone [repository-url]
   cd harezm_web
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env.local`
   - Fill in required environment variables

4. **Development Server**
   ```bash
   npm run dev
   ```

## Code Style Guidelines

1. **TypeScript**
   - Use strict type checking
   - Avoid `any` types
   - Use interfaces for object shapes
   - Implement proper error handling

2. **Components**
   - Use functional components with hooks
   - Implement proper prop types
   - Follow the component folder structure:
     ```
     components/
     ├── ui/          # shadcn/ui components
     ├── shared/      # reusable components
     └── [feature]/   # feature-specific components
     ```

3. **State Management**
   - Use React hooks for local state
   - Implement Zustand for global state
   - Keep state logic separate from UI components

## Next.js 15 Features

1. **Partial Prerendering**
   - Use partial prerendering for dynamic content
   - Implement static-dynamic architecture
   - Use `loading.tsx` for streaming UI

2. **Server Actions**
   - Use server actions for form submissions
   - Implement proper error handling
   - Use revalidation when needed

3. **App Router**
   - Follow route group patterns
   - Use proper loading states
   - Implement error boundaries

## Deployment Guidelines

1. **Vercel Deployment**
   - Automatic deployments on push to main branch
   - Preview deployments for pull requests
   - Environment variables must be set in Vercel dashboard
   - Use Vercel Analytics for monitoring

2. **Pre-deployment Checklist**
   - All tests passing
   - No TypeScript errors
   - No ESLint warnings
   - Proper environment variables configured
   - Images optimized and using next/image
   - Internationalization strings updated
   - Partial prerendering implemented where needed

## Pull Request Process

1. **Branch Naming**
   - feature/[feature-name]
   - fix/[bug-name]
   - refactor/[scope]

2. **Commit Messages**
   - Follow conventional commits
   - Include ticket number if applicable
   - Be descriptive but concise

3. **PR Requirements**
   - Update documentation if needed
   - Add/update tests if needed
   - Resolve all conflicts
   - Pass all checks
   - Get at least one approval

## Best Practices

1. **Performance**
   - Use partial prerendering
   - Implement proper code splitting
   - Minimize bundle size
   - Use proper caching strategies
   - Optimize images with next/image

2. **Accessibility**
   - Follow WCAG guidelines
   - Use semantic HTML
   - Implement proper ARIA attributes
   - Test with screen readers

3. **Security**
   - No sensitive data in code
   - Implement proper input validation
   - Use environment variables for secrets
   - Follow security best practices
   - Use server actions for sensitive operations

## Getting Help

- Check existing documentation
- Ask in team chat
- Create an issue for bugs
- Request reviews from team members

## License

This project is licensed under [Your License] - see the LICENSE file for details.
