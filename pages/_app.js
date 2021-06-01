import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import 'tailwindcss/tailwind.css'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'



function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return(
  <QueryClientProvider client={queryClientRef.current}>
    <Hydrate state={pageProps.dehydratedState}>
  <Component {...pageProps} />
  </Hydrate>
  <ReactQueryDevtools />
  </QueryClientProvider>
  )
}

export default MyApp
