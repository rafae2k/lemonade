import 'styles/global.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  const HJID = 3100354
  const HJSV = 6

  useEffect(() => {
    hotjar.initialize(HJID, HJSV)
  }, [])

  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </QueryClientProvider>
      </SessionProvider>
    </RecoilRoot>
  )
}

export default MyApp
