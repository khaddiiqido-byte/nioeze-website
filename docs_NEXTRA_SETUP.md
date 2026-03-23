# Nextra Setup Guide for NIOEZE Documentation

## Overview

This guide provides comprehensive instructions for setting up and managing Nextra for embedded documentation within the Next.js application at `/docs` route.

## Table of Contents

1. [Installation](#installation)
2. [Directory Structure](#directory-structure)
3. [Configuration](#configuration)
4. [Creating Documentation](#creating-documentation)
5. [Using Components](#using-components)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

## Installation

### Prerequisites

- Node.js 16.x or higher
- Next.js 15.1.5+
- React 19.0.0+

### Install Nextra Dependencies

```bash
npm install nextra nextra-theme-docs next-mdx-remote gray-matter
```

### Verify Installation

```bash
npm list nextra
npm list nextra-theme-docs
```

## Directory Structure

```
nioeze-website/
├── app/
│   ├── layout.tsx                    (root layout)
│   ├── page.tsx                      (home page)
│   ├── globals.css                   (global styles)
│   └── docs/
│       ├── layout.tsx                (docs layout with sidebar)
│       ├── page.tsx                  (docs home)
│       ├── docs.css                  (docs styling)
│       ├── services/
│       │   └── page.tsx              (services documentation)
│       ├── academy/
│       │   └── page.tsx              (academy documentation)
│       ├── faq/
│       │   └── page.tsx              (FAQ page)
│       └── components/
│           ├── CodeBlock.tsx
│           ├── DocCard.tsx
│           └── Accordion.tsx
├── next.config.ts                    (updated with MDX support)
├── package.json                      (updated with nextra deps)
├── tsconfig.json
└── README.md
```

## Configuration

### 1. Update `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
```

### 2. Update `package.json`

Add these dependencies:

```json
{
  "dependencies": {
    "nextra": "^2.13.0",
    "nextra-theme-docs": "^2.13.0",
    "next-mdx-remote": "^5.0.0",
    "gray-matter": "^4.0.3"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "docs:dev": "next dev",
    "docs:build": "next build"
  }
}
```

### 3. TypeScript Configuration

Your existing `tsconfig.json` is compatible. No changes needed.

## Creating Documentation

### Basic Page Structure

All documentation pages follow this structure:

```typescript
'use client';

export default function PageName() {
  return (
    <div>
      <h1>Page Title</h1>
      <p>Introduction and overview</p>
      
      <h2>Section 1</h2>
      <p>Content here...</p>
      
      <h2>Section 2</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}
```

### Adding a New Documentation Page

1. Create a new directory under `app/docs/`:
   ```bash
   mkdir app/docs/your-section
   ```

2. Create `page.tsx`:
   ```bash
   touch app/docs/your-section/page.tsx
   ```

3. Add content to the page

4. Update the sidebar in `app/docs/layout.tsx`:
   ```typescript
   const sidebar: DocsSidebarItem[] = [
     // ... existing items
     { title: 'Your Section', href: '/docs/your-section' },
   ];
   ```

## Using Components

### 1. DocCard Component

For highlighting important information:

```typescript
<div className="doc-card">
  <div className="doc-card-title">🎯 Important Section</div>
  <div className="doc-card-description">
    This is a highlighted card for important information.
  </div>
</div>
```

### 2. Code Blocks

Syntax-highlighted code:

```typescript
export default function CodeExample() {
  return (
    <pre>
      <code>{`
// Your code here
const example = "code block";
      `}</code>
    </pre>
  );
}
```

### 3. Lists and Tables

Standard HTML lists work perfectly:

```typescript
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

## Styling

### Using CSS Classes

The documentation uses predefined CSS classes for consistent styling:

- `.doc-card` - Highlighted information card
- `.doc-card-title` - Card title
- `.doc-card-description` - Card description
- `.docs-main h1`, `h2`, `h3` - Heading styles
- `.docs-main a` - Link styles

### Custom Styling

Add inline styles for custom formatting:

```typescript
<div style={{ 
  backgroundColor: '#f0f9ff', 
  padding: '1rem', 
  borderRadius: '0.5rem' 
}}>
  Custom styled content
</div>
```

## Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

The project is ready for Vercel deployment:

```bash
vercel
```

### Environment Variables

No additional environment variables needed for basic setup.

### GitHub Pages Deployment

If deploying to GitHub Pages:

1. Build the project:
   ```bash
   npm run build
   ```

2. The output will be ready in `.next/`

3. Configure GitHub Pages to deploy from the appropriate branch

## Troubleshooting

### Issue: Pages not showing up

**Solution:** 
- Ensure the file is named `page.tsx`
- Check that the component is exported as default
- Verify the path matches your URL structure

### Issue: Styles not applied

**Solution:**
- Check that `docs.css` is imported in `layout.tsx`
- Verify CSS class names match
- Clear Next.js cache: `rm -rf .next`

### Issue: Sidebar navigation not updating

**Solution:**
- Update the `sidebar` array in `app/docs/layout.tsx`
- Restart the development server
- Check console for TypeScript errors

### Issue: MDX not compiling

**Solution:**
- Ensure `pageExtensions` includes `"mdx"` in `next.config.ts`
- Check that MDX files have correct syntax
- Verify dependencies are installed

### Issue: Build fails

**Solution:**
- Run `npm install` to ensure all dependencies are installed
- Check `tsconfig.json` for configuration errors
- Look for TypeScript type errors in the terminal

## Development Workflow

### Starting Development

```bash
npm run dev
```

Visit `http://localhost:3000/docs` in your browser.

### Making Changes

1. Edit documentation files in `app/docs/`
2. Changes hot-reload automatically
3. Check console for any errors

### Testing

```bash
npm run build
npm run start
```

Then test at `http://localhost:3000/docs`

## Best Practices

### Writing Documentation

- ✅ Use clear, concise language
- ✅ Include examples where possible
- ✅ Use consistent formatting
- ✅ Add links to related pages
- ✅ Include table of contents for long pages
- ❌ Avoid jargon without explanation
- ❌ Don't use too many nested headings

### Performance

- Use `'use client'` directive for interactive components
- Lazy load large images
- Keep pages focused and concise

### SEO

The documentation automatically benefits from Next.js SEO:
- Proper HTML semantics
- Heading hierarchy
- Meta tags from `layout.tsx`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Nextra Documentation](https://nextra.site/)
- [React Documentation](https://react.dev/)
- [MDX Documentation](https://mdxjs.com/)

## Getting Help

For issues or questions:
- Email: nioeze@yahoomail.com
- GitHub Issues: [khaddiiqido-byte/nioeze-website](https://github.com/khaddiiqido-byte/nioeze-website)

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | March 2026 | Initial Nextra setup |

---

**Last Updated:** March 23, 2026
**Maintained by:** NIOEZE Team