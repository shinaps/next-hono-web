'use server'

import { hc, InferResponseType } from 'hono/client'
import { AppType } from 'next-hono-backend/src'

export const getChartData = async () => {
  const client = hc<AppType>('http://localhost:8787/')
  const url = client.chartdata.$url()
  const res = await fetch(url, { cache: 'no-store' })

  const $get = client.chartdata.$get
  type ResType = InferResponseType<typeof $get>

  const json: ResType = await res.json()
  console.log('fetch data in server side', json)
  return json
}
