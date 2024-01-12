import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AppType } from '@/app/api/[[...route]]/route'
import { hc, InferResponseType } from 'hono/client'

export async function RecentSales() {
  const client = hc<AppType>('http://localhost:3000/')
  const url = client.api.sales.$url()
  const res = await fetch(url, { cache: 'no-store' })

  const $get = client.api.sales.$get
  type ResType = InferResponseType<typeof $get>

  const json: ResType = await res.json()
  console.log('fetch data in server side', json)
  const { data } = json

  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Olivia Martin</p>
          <p className='text-sm text-muted-foreground'>
            olivia.martin@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>{data.olivia}</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Jackson Lee</p>
          <p className='text-sm text-muted-foreground'>jackson.lee@email.com</p>
        </div>
        <div className='ml-auto font-medium'>{data.jackson}</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Isabella Nguyen</p>
          <p className='text-sm text-muted-foreground'>
            isabella.nguyen@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>{data.isabella}</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>William Kim</p>
          <p className='text-sm text-muted-foreground'>will@email.com</p>
        </div>
        <div className='ml-auto font-medium'>{data.will}</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Sofia Davis</p>
          <p className='text-sm text-muted-foreground'>sofia.davis@email.com</p>
        </div>
        <div className='ml-auto font-medium'>{data.sofia}</div>
      </div>
    </div>
  )
}
