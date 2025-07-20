import './App.css';
import { RelayEnvironmentProvider } from 'react-relay';
import { relayEnvironment } from './relay';
import { Suspense } from 'react';
import { UserPage } from './components/UserPage';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <ErrorBoundary fallback={<div>Error!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <UserPage />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
}

export default App;
