// // This file configures the initialization of Sentry on the server.
// // The config you add here will be used whenever the server handles a request.
// // https://docs.sentry.io/platforms/javascript/guides/nextjs/

// import { init } from '@sentry/nextjs'

// const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN
// const ENV = process.env.VERCEL_ENV || process.env.NODE_ENV

// init({
//   dsn: SENTRY_DSN,
//   environment: ENV === 'production' ? 'production' : 'development',
//   // Adjust this value in production, or use tracesSampler for greater control
//   tracesSampleRate: 0,
//   // ...
//   // Note: if you want to override the automatic release value, do not set a
//   // `release` value here - use the environment variable `SENTRY_RELEASE`, so
//   // that it will also get attached to your source maps
// })
// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://5d6471d426d44287b2747bba813963b3@o4504813592051712.ingest.sentry.io/4504813593100288',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
