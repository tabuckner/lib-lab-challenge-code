import { QueryClient } from "@tanstack/react-query";

const API_BASE_URL = 'https://the-one-api.dev/v2';

export const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url] }) => {
        const response = await fetch(`${API_BASE_URL}/${url}`)
        return response.json();
      },
    },
  },
})