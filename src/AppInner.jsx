import { usePrivy } from '@privy-io/react-auth';
import { useEffect } from 'react';

function AppInner() {
  const { ready, authenticated, login } = usePrivy();

  useEffect(() => {
    if (ready && authenticated) {
      window.location.href = "https://www.reflect.de/wp-content/uploads/2017/01/live_0117_Kollegah_5.jpg";
    }
  }, [ready, authenticated]);

  if (!ready) return null;

  return (
    <div>
      {!authenticated && <button onClick={login}>Login starten</button>}
    </div>
  );
}

export default AppInner;
