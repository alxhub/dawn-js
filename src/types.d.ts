declare module 'status-js-api';
declare class StatusJS {
  static channels: any;
  static contacts: any;
  static userMessagesSubscription: any;
  static mailservers: any;
  static shh: any;
  static chatRequestCb: any;
  static isHttpProvider: any;
  public connect(url: string, privateKey?: string): void;
  public getPublicKey(): string;

}
