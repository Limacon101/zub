import fs from 'fs'
import path from 'path'
import setupPinata from "./setupPinata";

const filename = '[en-GB]_basil.mp4.srt';

async function main() {
  const pinata = setupPinata();
  const filePath = path.join(__dirname, filename)
  const fileStream = fs.createReadStream(filePath)

  const result = await pinata.pinFileToIPFS(fileStream, {
    pinataMetadata: {
      name: filename
    }
  })
  console.log('Subtitles pinned:', result.IpfsHash)
}

main().catch(console.error)
