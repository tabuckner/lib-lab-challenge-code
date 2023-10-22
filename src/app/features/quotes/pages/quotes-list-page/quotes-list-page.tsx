import { ListItem } from '../../../../components/elements';
import { ListView } from '../../../../components/layout';
import { useQuotes } from '../../api';

/* eslint-disable-next-line */
export interface QuotesListPageProps {}

export const QuotesListPage = (props: QuotesListPageProps) =>  {
  // Dependencies
  const { isLoading, data: quotes } = useQuotes();

  return (
    <ListView
      isLoading={isLoading}>
      {quotes?.docs.map(quote => <ListItem key={quote._id} entity={quote} label={quote.dialog} />)}
    </ListView>
  );
};
