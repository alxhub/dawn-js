declare module 'status-js-api';
declare class StatusJS {
  private channels: any;
  private contacts: any;
  private userMessagesSubscription: any;
  private mailservers: any;
  private shh: any;
  private chatRequestCb: any;
  private isHttpProvider: any;
  //   Public Methods
  public connect(url: string, privateKey?: string): void;
  public connectToProvider(provider: any, privateKey: any): void;
  public joinChat(channelName: string, cb?: any): void;
  public leaveChat(channelName: string): void;
  public addContact(contactCode: string, cb?: any): void;
  public removeContact(contactCode: string): void;
  public onMessage(par1: any, par2: any): void;
  public onUserMessage(cb: any): void;
  public onChannelMessage(channelName: string, cb: any): void;
  public onChatRequest(cb: any): void;
  public sendUserMessage(contactCode: string, msg: string, cb?: any): void;
  public sendGroupMessage(channelName: string, msg: string, cb?: any): void;
  public sendJsonMessage(destination: string, msg: string, cb?: any): void;
  public sendMessage(destination: string, msg: string, cb?: any): void;
// Public Getters
  public isSubscribedTo(channelName: string): true;
  public isConnected(): boolean;
  public getPublicKey(): string;
  public getUserName(): string;
}
