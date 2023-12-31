import * as sentry from '@sentry/astro'

sentry.init({
  dsn: 'https://740dd5065bf6f581619af5cb14f71e94@o4505485115719680.ingest.sentry.io/4506272625065984',
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [],
})

sentry.addIntegration(
  new sentry.Replay({
    maskAllText: false,
    blockAllMedia: false,
  }),
)
