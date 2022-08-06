import ReactDOM from 'react-dom/client';
import '@/config';
import App from '@/app/App';
import { AppProviders } from '@/providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
