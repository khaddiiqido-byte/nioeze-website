# NIOEZE Website

NIOEZE unfolds as a calm, confident presence that is as thoughtful as it is forward thinking. This Next.js website provides a human-centered design experience for showcasing NIOEZE's services in design, AI tools, education, branding, and digital solutions.

## Features

- ✅ Built with Next.js 14 (App Router)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Vercel Speed Insights integrated
- ✅ ESLint configured
- ✅ Optimized for performance

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Vercel Speed Insights

This project includes [Vercel Speed Insights](https://vercel.com/docs/speed-insights) to monitor and analyze the real-world performance of your website.

### How it works

The `SpeedInsights` component is integrated in `app/layout.tsx` and will automatically collect performance metrics when deployed to Vercel. To enable it:

1. Deploy your application to Vercel
2. Navigate to the Speed Insights section in your Vercel dashboard
3. Click the enable button

Data collection begins once users visit your deployed site.

## Project Structure

```
nioeze-website/
├── app/
│   ├── layout.tsx       # Root layout with SpeedInsights
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## About NIOEZE

NIOEZE positions itself as a place for creators, founders, and learners seeking thoughtful tools, education, and partnerships that respect identity and resist unnecessary complexity. Every interaction is designed to feel educational, respectful, and transparent.

### Contact

- Email: niooeze@gmail.com, nioeze@yahoomail.com
- Operating Hours: Monday to Friday 9:00 AM to 6:00 PM WAT
- Response Time: Within 24 hours

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com):

```bash
vercel deploy
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
