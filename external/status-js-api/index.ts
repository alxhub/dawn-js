
export interface StatusJS {
  //   Public Methods
  connect(url: string, privateKey?: string): void;
  connectToProvider(provider: any, privateKey: any): void;
  joinChat(channelName: string, cb?: any): void;
  leaveChat(channelName: string): void;
  addContact(contactCode: string, cb?: any): void;
  removeContact(contactCode: string): void;
  onMessage(par1: any, par2: any): void;
  onUserMessage(cb: any): void;
  onChannelMessage(channelName: string, cb: any): void;
  onChatRequest(cb: any): void;
  sendUserMessage(contactCode: string, msg: string, cb?: any): void;
  sendGroupMessage(channelName: string, msg: string, cb?: any): void;
  sendJsonMessage(destination: string, msg: string, cb?: any): void;
  sendMessage(destination: string, msg: string, cb?: any): void;
// Public Getters
  isSubscribedTo(channelName: string): true;
  isConnected(): boolean;
  getPublicKey(): string;
  getUserName(): string;
}

export interface StatusJSConstructor {
  new (): StatusJS;
}

export const StatusJS: StatusJSConstructor = require('status-js-api');
