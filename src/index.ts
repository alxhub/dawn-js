import { connectStatus, newStatus } from './status';
import {StatusJS} from '../external/status-js-api';

const testProvider = 'http://35.188.163.32:8545';

export class Dawn {
  public statusJS?: StatusJS;
  public statusPublicKey?: string;
  public statusUsername?: string;

  public async connect(
    statusProvider: string = testProvider,
    privateKey?: string,
  ): Promise<boolean> {
    try {
      // Instantiate Status
      this.statusJS = newStatus();
      console.log('Status initialized');

      // Connect to Status Provider
      await this.statusJS.connect(statusProvider, privateKey);

      // Get Public Key
      this.statusPublicKey = await this.statusJS.getPublicKey();
      this.statusUsername = await this.statusJS.getUserName();

      console.log(
        `Connected to Status as ${this.statusUsername}. \nPublic Key: ${
          this.statusPublicKey
        }`,
      );
      return true;
    } catch (err) {
      // Something failed
      console.log(err.message);
      return false;
    }
  }
}
