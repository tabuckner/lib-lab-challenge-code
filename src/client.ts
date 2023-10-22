import { QueryClient } from '@tanstack/react-query';

const API_BASE_URL = 'https://the-one-api.dev/v2';
// TODO: Store as env var.
const API_TOKEN = 'j5iPni778p5fTwF1Q6bM';

export const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url] }) => {
        const response = await fetch(`${API_BASE_URL}/${url}`, {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
        });
        return response.json();
      },
    },
  },
});

export const mockAppQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url] }) => {
        return Promise.resolve(true);
      },
    },
  },
});
