import { PrivyProvider } from '@privy-io/react-auth';
import AppInner from './AppInner';

function App() {
  return (
    <PrivyProvider
      appId="cmasryizq00dal20lnk7iw8tg"
      config={{
        loginMethods: ['wallet', 'google', 'twitter', 'telegram'],
        embeddedWallets: { createOnLogin: true },
        walletConnectors: ['phantom', 'solflare'],
        appearance: { theme: 'light' },
        authCallback: {
          autoLogin: false
        }
      }}
    >
      <AppInner />
    </PrivyProvider>
  );
}

export default App;
