import { Button, Typography } from "@mui/material";
import { RelatedResourceSection } from "../../../../components/elements";
import { DetailsView } from "../../../../components/layout";
import { CharacterDetails } from "../../../characters/components";
import { MovieDetails } from "../../../movies/components";
import { useQuote } from "../../api/get-quote";
import { MOVIES_ROUTES } from "../../../movies";
import { useNavigate } from "react-router-dom";
import { CHARACTERS_ROUTES } from "../../../characters";

/* eslint-disable-next-line */
export interface QuoteDetailsProps {
  quoteID: string;
  onGoBack?: () => void;
  onGoToCharacter?: () => void;
  onGoToMovie?: () => void;
}

export function QuoteDetails({
  quoteID,
  onGoBack,
  onGoToCharacter,
  onGoToMovie,
}: QuoteDetailsProps) {
  // Dependencies
  const navigate = useNavigate();
  const { data: quote, isLoading } = useQuote(quoteID);

  // Handlers
  const handleClickMovie = () => {
    navigate(`/${MOVIES_ROUTES.ROOT}/${quote?.movie}`);
  };

  const handleClickCharacter = () => {
    navigate(`/${CHARACTERS_ROUTES.ROOT}/${quote?.character}`);
  };

  return (
    <DetailsView
      isLoading={isLoading}
      actions={
        <>
          <Button onClick={handleClickMovie}>Go To Movie</Button>
          <Button onClick={handleClickCharacter}>Go To Character</Button>
          <Button onClick={onGoBack}>Go Back To List</Button>
        </>
      }
    >
      <Typography variant="h2" gutterBottom>
        {quote?.dialog}
        {quote ? (
          <RelatedResourceSection label={'Movie'}>
            <MovieDetails movieID={quote?.movie} />
          </RelatedResourceSection>
        ) : null}
        {quote ? (
          <RelatedResourceSection label={'Character'}>
            <CharacterDetails characterID={quote?.character} />
          </RelatedResourceSection>
        ) : null}
      </Typography>
    </DetailsView>
  );
}

export default QuoteDetails;
