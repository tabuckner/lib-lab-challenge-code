import { StyledApp } from './app.styles';
import { AppRoutes } from './app.routes';
import { BooksRoutes } from './features/books';
import { HomeRoutes } from './features/home';
import { MoviesRoutes } from './features/movies';
import { QuotesRoutes } from './features/quotes';
import { CharactersRoutes } from './features/characters';


export function App() {
  return (
    <StyledApp>
      <AppRoutes />
      <HomeRoutes />
      <BooksRoutes />
      <MoviesRoutes />
      <QuotesRoutes />
      <CharactersRoutes />
    </StyledApp>
  );
}

export default App;
