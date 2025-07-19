import './App.css';
import { RelayEnvironmentProvider } from 'react-relay';
import { relayEnvironment } from './relay';
import { Suspense } from 'react';
import { User } from './components/User';

function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense fallback={<div>Loading...</div>}>
        <User />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
