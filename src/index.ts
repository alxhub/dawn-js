import { connectStatus, newStatus } from './status';

// connectStatus().then((publicKey: string) => {
//   console.log('Logged in with public key:', publicKey);
// });

const testProvider = 'http://35.188.163.32:8545';

interface IStatusConnect {
    provider?: string,
    privateKey?: string,
}

export class Dawn {
  public statusJS?: StatusJS;
  public statusPublicKey? : string;
  public async connect(): Promise<boolean> {
    try {
      this.statusJS = newStatus();
      await this.statusJS.connect(testProvider);
      this.statusPublicKey = await this.statusJS.getPublicKey();
      console.log('Status:', this.statusJS);
      console.log('Connected to Status. Public Key:', this.statusPublicKey);
      return true;
    } catch (err) {
      throw err;
      return false;
    }
  }
}
