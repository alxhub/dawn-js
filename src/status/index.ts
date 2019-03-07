import {StatusJS as StatusJSAPI} from '../../external/status-js-api';

const testProvider = 'http://35.188.163.32:8545';

export const connectStatus = async (
  provider: string = testProvider,
  privateKey?: string,
) : Promise<string> => {
    const statusJS = new StatusJSAPI();
    console.log("REAL STATUSJS:", statusJS);
    await statusJS.connect(provider, privateKey);
    return await statusJS.getPublicKey();
};

export const newStatus = () : StatusJSAPI => {
    return new StatusJSAPI();
};

