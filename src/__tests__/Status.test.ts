import { connectStatus } from '../status';

test('Status Connect', async () => {
  const publicKey = await connectStatus();
  expect(typeof publicKey).toBe('string');
});