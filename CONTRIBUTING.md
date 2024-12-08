# Contributing to Harezm Web

## Tech Stack Overview

### Core Technologies
- **Next.js**: App Router based project structure
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling

### UI Components
- **shadcn/ui**: Pre-built accessible components
  - Built on top of Radix UI primitives
  - Fully customizable with Tailwind CSS
  - Components are located in `components/ui`
  - Configuration in `components.json`

### Internationalization (i18n)
- **next-intl**: For multi-language support
  - Locale files are in `messages` directory
  - Default configuration in `i18n.ts`
  - Usage example:
  ```tsx
  import { useTranslations } from 'next-intl';
  
  export default function Component() {
    const t = useTranslations('Common');
    return <h1>{t('title')}</h1>;
  }
  ```

## Development Guidelines

### UI Components
1. **Use shadcn/ui Components**
   - Always use [shadcn/ui](https://ui.shadcn.com/) components for UI implementations whenever possible
   - Avoid using direct Radix UI components - instead use their shadcn/ui equivalents
   - This ensures consistent styling, maintainability, and better integration with our design system
   - shadcn/ui is built on top of Radix UI primitives, providing accessible and customizable components
   - All components are pre-styled with Tailwind CSS while maintaining full customization options

2. **Component Accessibility**
   - All components should maintain ARIA compliance
   - Use proper aria-labels with i18n support:
     ```tsx
     <Button aria-label={t('button.ariaLabel')}>
       {t('button.text')}
     </Button>
     ```
   - Leverage shadcn/ui's built-in accessibility features

3. All UI components should be accessible (a11y compliant)
4. Always include proper aria-labels with i18n support:
   ```tsx
   <Button aria-label={t('button.ariaLabel')}>
     {t('button.text')}
   </Button>
   ```

### Internationalization
1. Implement next-intl for internationalization
2. All text content should support multiple languages
3. Use translation keys consistently
4. Integration with UI Components:
   ```tsx
   import { useTranslations } from 'next-intl';
   import { Button } from "@/components/ui/button";
   
   export default function Component() {
     const t = useTranslations('Common');
     return (
       <Button 
         aria-label={t('submitButton.ariaLabel')}
       >
         {t('submitButton.text')}
       </Button>
     );
   }
   ```
5. Keep translations organized by feature/component
6. Always provide translations for all supported languages (en, tr)
7. Use semantic translation keys (e.g., 'submitButton.label' instead of 'button1')

### File Structure
- `/app`: Next.js app router pages and layouts
- `/components`: Reusable UI components
- `/components/ui`: shadcn/ui components
- `/messages`: i18n translation files
- `/lib`: Utility functions and shared logic
- `/styles`: Global styles and Tailwind configurations

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```
