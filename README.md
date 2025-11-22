# Accelerator Landing Page

A simple, elegant landing page built with Next.js, featuring a black background and white text.

## Features

- Black background with white text
- Responsive design
- Built with Next.js 15 and React 19
- Styled with Tailwind CSS
- TypeScript support

## Getting Started

1. **Install dependencies** (already done):
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Adding TT Hoves Font

To use the TT Hoves font as specified:

1. Add your TT Hoves font files to `app/fonts/`:
   - `TTHoves-Regular.woff2`
   - `TTHoves-Medium.woff2`
   - `TTHoves-Bold.woff2`

2. Update `app/layout.tsx` to import and use the local font:

```typescript
import localFont from 'next/font/local';

const ttHoves = localFont({
  src: [
    {
      path: './fonts/TTHoves-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/TTHoves-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/TTHoves-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tt-hoves',
});

// Then update the body className to use the font
<body className={`${ttHoves.variable} antialiased font-sans`}>
```

3. Update `tailwind.config.ts` to include the font:

```typescript
theme: {
  extend: {
    fontFamily: {
      'tt-hoves': ['var(--font-tt-hoves)', 'sans-serif'],
    },
  },
},
```

4. Use the font in your components with `className="font-tt-hoves"`

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

Edit `app/page.tsx` to customize the landing page content, or modify `app/globals.css` for global styles.
