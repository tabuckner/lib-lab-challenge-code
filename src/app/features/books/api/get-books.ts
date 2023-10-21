import { useQuery } from "@tanstack/react-query";
import { Books } from "../types";

export const BOOKS_QUERY_KEY = 'book';

export const useBooks = () => {
  return useQuery<Books>({
    queryKey: [BOOKS_QUERY_KEY],
  });
};

// export const useBookMutation = () => {
//   // Access the client
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: postTodo,
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ['todos'] })
//     },
//   })
// }
