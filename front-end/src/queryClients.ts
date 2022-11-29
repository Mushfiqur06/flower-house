import {QueryClient} from 'react-query';

function createQueryClient(){
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 60 * 1000,
        retry: false,
        refetchOnWindowFocus: false
      }
    }
  })
}

export default createQueryClient;