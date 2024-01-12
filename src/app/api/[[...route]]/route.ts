import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

const router = app.get('/sales', (c) => {
  return c.json({
    data: {
      olivia: '+$1,999.00',
      jackson: '+$39.00',
      isabella: '+$299.00',
      will: '+$99.00',
      sofia: '+$39.00',
    },
  })
})

export type AppType = typeof router

export const GET = handle(app)
