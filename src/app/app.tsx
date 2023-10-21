import { AppShell } from './components/layout';
import { AppRoutes } from './app.routes';
import { HomeRoutes } from './features/home';
import { MoviesRoutes } from './features/movies';
import { QuotesRoutes } from './features/quotes';
import { CharactersRoutes } from './features/characters';


export function App() {
  return (
    <AppShell>
      <AppRoutes />
      <HomeRoutes />
      <MoviesRoutes />
      <QuotesRoutes />
      <CharactersRoutes />
    </AppShell>
  );
}

export default App;
