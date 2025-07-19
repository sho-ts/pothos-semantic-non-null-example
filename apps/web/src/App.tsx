import './App.css';
import { RelayEnvironmentProvider } from 'react-relay';
import { relayEnvironment } from './relay';
import { Suspense } from 'react';
import { UserPage } from './components/UserPage';


function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense fallback={<div>Loading...</div>}>
        <UserPage />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
