import {createCoin, DeployCurrency, setApiKey} from '@zoralabs/coins-sdk';
import {Address, createPublicClient, createWalletClient, http, PrivateKeyAccount} from 'viem';
import {privateKeyToAccount} from 'viem/accounts';
import {baseSepolia} from 'viem/chains';
import {ValidMetadataURI} from "@zoralabs/coins-sdk/src/uploader/types";

interface CreateCoinParams {
  name: string;
  symbol: string;
  uri: ValidMetadataURI;
  payoutRecipient?: Address;
  platformReferrer?: Address;
  chainId?: number;
  currency?: DeployCurrency;
}

export default async function mintExistingZub(params: CreateCoinParams) {
  const zoraApiKey = import.meta.env.VITE_ZORA_API_KEY;
  setApiKey(zoraApiKey);

  // Get the private key string and create an account from it
  const privateKey = `0x${import.meta.env.VITE_PRIVATE_KEY}` as `0x${string}`;
  const account = privateKeyToAccount(privateKey);

  // Create a public client for read-only operations
  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http('https://sepolia.base.org'),
  });

  // Create a wallet client for signing transactions
  const walletClient = createWalletClient({
    chain: baseSepolia,
    transport: http('https://sepolia.base.org'),
    account,
  });

  return await createCoin(
    {
      name: params.name,
      symbol: params.symbol,
      uri: params.uri,
      payoutRecipient: params.payoutRecipient || account.address,
      platformReferrer: params.platformReferrer || account.address,
      chainId: params.chainId || baseSepolia.id,
      currency: params.currency || DeployCurrency.ETH,
    },
    walletClient,
    publicClient,
  );
}
