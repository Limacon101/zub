import setupPinata from "./setupPinata";

async function metadata() {
  const pinata = setupPinata();
  const m = {
    "name": "English Subtitles for Zora basil.mp4",
    "description": "Community-submitted English subtitles for a Korean basil.mp4 video on Zora.",
    "animation_url": "ipfs://bafybeicvfqb4kwcp6tt4uyf7jjnpwgx2q3hxarg3vkcrtpiei4w2kmn4cu",
    "image": "ipfs://bafybeicvfqb4kwcp6tt4uyf7jjnpwgx2q3hxarg3vkcrtpiei4w2kmn4cu",
    "content": {
      "uri": "ipfs://QmS57YeMRzhAtKjzUTVqWofu8S2W8bq6Y4DGAfoWDfCZ6U",
      "mime": "text/html"
    }
  };

  const result = await pinata.pinJSONToIPFS(m);
  console.log('New metadata CID:', result.IpfsHash)
}

metadata().catch(console.error)

