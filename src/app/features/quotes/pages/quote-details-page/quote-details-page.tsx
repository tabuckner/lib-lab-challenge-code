import { useNavigate } from "react-router-dom";
import { QUOTES_ROUTES } from "../../routes";
import { Typography, Button } from "@mui/material";
import { DetailsView } from "../../../../components/layout";
import { useGetIDFromRoute } from "../../../../hooks";
import { useQuote } from "../../api/get-quote";
import { CHARACTERS_ROUTES, useCharacter } from "../../../characters";
import { MOVIES_ROUTES } from "../../../movies";
import { Row } from "./quote-details-view.styles";

/* eslint-disable-next-line */
export interface QuoteDetailsPageProps { }

export const QuoteDetailsPage = (props: QuoteDetailsPageProps) => {
  // Dependencies
  const navigate = useNavigate();
  const quoteID = useGetIDFromRoute(QUOTES_ROUTES.ROOT)
  const { data: quote, isLoading } = useQuote(quoteID);


  // Handlers
  const handleClickGoBack = () => {
    navigate(`/${QUOTES_ROUTES.ROOT}`);
  }

  const handleClickMovie = () => {
    navigate(`/${MOVIES_ROUTES.ROOT}/${quote?.movie}`);
  }

  const handleClickCharacter = () => {
    navigate(`/${CHARACTERS_ROUTES.ROOT}/${quote?.character}`);
  }

  return (
    <DetailsView isLoading={isLoading} actions={
      <>
        <Row><Button onClick={handleClickMovie}>Go To Movie</Button></Row>
        <Row><Button onClick={handleClickCharacter}>Go To Character</Button></Row>
        <Row><Button onClick={handleClickGoBack}>Go Back To List</Button></Row>
      </>
    }>
      <Typography variant='h2' gutterBottom>{quote?.dialog}</Typography>
    </DetailsView>
  );
};
