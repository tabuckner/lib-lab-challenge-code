import { Navigate, Route } from 'react-router-dom';
import { StyledApp } from './app.styles';
import { BooksRoutes } from './features/books';
import { HomeRoutes } from './features/home';
import { AppRoutes } from './app.routes';


export function App() {
  return (
    <StyledApp>
      <AppRoutes />
      <HomeRoutes />
      <BooksRoutes />
    </StyledApp>
  );
}

export default App;
