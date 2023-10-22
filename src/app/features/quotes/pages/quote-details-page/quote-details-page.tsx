import { useNavigate } from 'react-router-dom';
import { QUOTES_ROUTES } from '../../routes';
import { useGetIDFromRoute } from '../../../../hooks';
import { QuoteDetails } from '../../components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface QuoteDetailsPageProps { }

export const QuoteDetailsPage = (props: QuoteDetailsPageProps) => {
  // Dependencies
  const navigate = useNavigate();
  const quoteID = useGetIDFromRoute(QUOTES_ROUTES.ROOT);

  // Handlers
  const handleClickGoBack = () => {
    navigate(`/${QUOTES_ROUTES.ROOT}`);
  };

  return (
    <QuoteDetails quoteID={quoteID} onGoBack={handleClickGoBack} />
  );
};
