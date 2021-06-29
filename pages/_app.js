import React, {useEffect} from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import 'tailwindcss/tailwind.css'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios';

import { useStore } from '../hooks/useStore';


function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  const ready = useStore(state => state.ready);
  const boot = useStore(state => state.boot);

  useEffect(() => {
    if (process.browser) {
      boot();
    }
  }, []);

  return(
  <QueryClientProvider client={queryClientRef.current}>
    <Hydrate state={pageProps.dehydratedState}>
      {
        process.browser && !ready && <div>'Yükleniyor...'</div>
      }
      <Component {...pageProps} />
  </Hydrate>
  <ReactQueryDevtools />
  </QueryClientProvider>
  )
}

export default MyApp
