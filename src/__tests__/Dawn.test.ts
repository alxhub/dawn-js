import { Dawn } from '../index';

test('Dawn Connection To Status', async () => {
  const dawnJS = new Dawn();
  expect(await dawnJS.connect()).toEqual(true);
  expect(typeof dawnJS.statusPublicKey).toBe('string');
  expect(typeof dawnJS.statusUsername).toBe('string');
});
