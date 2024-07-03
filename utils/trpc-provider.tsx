'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getFetch, httpBatchLink } from '@trpc/client'
import { ReactNode, useState } from 'react'
import superjson from 'superjson'
import { trpc } from './trpc'

export const TrpcProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false }
        }
      })
  )

  const domain = 'https://trpc-dashboard.vercel.app'

  const url =
    process.env.NODE_ENV !== 'production'
      ? `https://${domain}/api/trpc`
      : 'http://localhost:3000/api/trpc'


      function getBaseUrl() {
        if (typeof window === 'undefined') {
          return ''
        }
        // reference for vercel.com

      
        // assume localhost
        return   process.env.NODE_ENV == 'production'
        ? `https://${domain}/api/trpc`
        : 'http://localhost:3000/api/trpc'
      }



  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url :getBaseUrl(),
          fetch: async (input, init?) => {
            const fetch = getFetch()
            return fetch(input, {
              ...init,
              credentials: 'include'
            })
          }
        })
      ],
      transformer: superjson
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
