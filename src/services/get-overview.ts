import { hc, InferResponseType } from 'hono/client'
import { AppType } from 'next-hono-backend/src'

export const getOverview = async () => {
  const client = hc<AppType>('http://localhost:8787/')
  const url = client.overview.$url()
  const res = await fetch(url, { cache: 'no-store' })

  const $get = client.overview.$get
  type ResType = InferResponseType<typeof $get>

  const json: ResType = await res.json()
  console.log('fetch data in server side', json)
  return json
}
