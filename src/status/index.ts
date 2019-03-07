import * as StatusJS from "status-js-api";

const testProvider = 'http://35.188.163.32:8545';

export const connectStatus = async (
  provider: string = testProvider,
  privateKey?: string,
) : Promise<string> => {
    const statusJS = new StatusJS();
    await statusJS.connect(provider, privateKey);
    return await statusJS.getPublicKey();
};
