import { connectStatus } from './status';

connectStatus().then((publicKey: string) => {
  console.log('Logged in with public key:', publicKey);
});
