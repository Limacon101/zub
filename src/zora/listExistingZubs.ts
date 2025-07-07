import {setApiKey} from '@zoralabs/coins-sdk';


export interface SubtitleCoin {
  id: string;
  name: string;
  symbol: string;
  language: string;
  videoTitle: string;
  uri: string;
  address: string;
  chainId: number;
  metadata?: SubtitleMetadata;
}

export interface SubtitleMetadata {
  name: string;
  description: string;
  animation_url: string;
  image: string;
  content: {
    uri: string;
    mime: string;
  };
}

export async function listExistingZubs(): Promise<SubtitleCoin[]> {
  try {
    const zoraApiKey = import.meta.env.VITE_ZORA_API_KEY;
    if (zoraApiKey) {
      setApiKey(zoraApiKey);
    }

    return await fetchCoinsFromAPI();

  } catch (error) {
    console.error('Error fetching existing zubs:', error);
    throw error;
  }
}

async function fetchCoinsFromAPI(): Promise<SubtitleCoin[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  // Return mock SubtitleCoin data
  return [
    {
      id: '1',
      name: 'English Subtitles for Zora basil.mp4',
      symbol: 'ZORAENG',
      language: 'EN',
      videoTitle: 'Zora basil.mp4',
      uri: 'ipfs://QmS57YeMRzhAtKjzUTVqWofu8S2W8bq6Y4DGAfoWDfCZ6U',
      address: '0x1234567890abcdef1234567890abcdef12345678',
      chainId: 8453,
      metadata: {
        name: "English Subtitles for Zora basil.mp4",
        description: "Community-submitted English subtitles for a Korean basil.mp4 video on Zora.",
        animation_url: "https://zora.co/collections/base:0x.../items/1",
        image: "https://zora.co/collections/base:0x.../items/1",
        content: {
          uri: "ipfs://QmS57YeMRzhAtKjzUTVqWofu8S2W8bq6Y4DGAfoWDfCZ6U",
          mime: "text/html"
        }
      }
    },
    {
      id: '2',
      name: 'Korean Subtitles for Zora basil.mp4',
      symbol: 'ZORAFR',
      language: 'KR',
      videoTitle: 'Zora basil.mp4',
      uri: 'ipfs://QmMetadata2',
      address: '0x2345678901bcdef12345678901bcdef123456789',
      chainId: 8453,
      metadata: {
        name: "Korean Subtitles for Zora basil.mp4",
        description: "Community-submitted Korean subtitles for a Korean basil.mp4 video on Zora.",
        animation_url: "https://zora.co/collections/base:0x.../items/1",
        image: "https://zora.co/collections/base:0x.../items/1",
        content: {
          uri: "ipfs://QmKoreanSubtitles123",
          mime: "text/html"
        }
      }
    },
    {
      id: '3',
      name: 'Spanish Subtitles for Zora basil.mp4',
      symbol: 'ZORAES',
      language: 'ES',
      videoTitle: 'Zora basil.mp4',
      uri: 'ipfs://QmMetadata3',
      address: '0x3456789012cdef123456789012cdef1234567890',
      chainId: 8453,
      metadata: {
        name: "Spanish Subtitles for Zora basil.mp4",
        description: "Community-submitted Spanish subtitles for a Korean basil.mp4 video on Zora.",
        animation_url: "https://zora.co/collections/base:0x.../items/1",
        image: "https://zora.co/collections/base:0x.../items/1",
        content: {
          uri: "ipfs://QmSpanishSubtitles456",
          mime: "text/html"
        }
      }
    }
  ];
}
