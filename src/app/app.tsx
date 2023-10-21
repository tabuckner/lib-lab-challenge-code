import { StyledApp } from './app.styles';
import { BooksRoutes } from './features/books';
import { HomeRoutes } from './features/home';


export function App() {
  return (
    <StyledApp>
      <HomeRoutes />
      <BooksRoutes />
    </StyledApp>
  );
}

export default App;
