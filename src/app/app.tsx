import { AppShell } from './components/layout';
import { AppRoutes } from './app.routes';

export function App() {
  return (
    <AppShell>
      <AppRoutes />
    </AppShell>
  );
}

export default App;
