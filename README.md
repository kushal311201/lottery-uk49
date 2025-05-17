# UK49s Results Website

A modern web application for viewing UK49s lottery results, built with Next.js 14, React, and TypeScript.

## Features

- View latest lottery results (Lunchtime and Teatime draws)
- Browse past results with filtering options
- Interactive statistics and analysis
- Mobile-responsive design
- SEO optimized
- Beautiful UI with animations

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Chart.js
- Axios

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kushal311201/lottery-uk49.git
   cd lottery-uk49
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   VERCEL_URL=localhost:3000
   VERCEL_ENV=development
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploying to Vercel

1. Create a new project on [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Configure the following environment variables in Vercel:
   - `NEXT_PUBLIC_API_URL`
   - `VERCEL_URL` (automatically set by Vercel)
   - `VERCEL_ENV` (automatically set by Vercel)
4. Deploy!

The application will be automatically built and deployed on every push to the main branch.

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Development

### File Structure

```
lottery-uk49/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   ├── services/         # API services
│   └── data/            # Mock data and constants
├── public/              # Static files
└── package.json         # Dependencies and scripts
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License. 