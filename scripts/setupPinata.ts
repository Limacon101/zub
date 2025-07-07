import pinataSDK from "@pinata/sdk";

export default function () {
  // These come from a Pinata dashboard (https://app.pinata.cloud/)
  const PINATA_API_KEY = process.env.VITE_PINATA_API_KEY!;
  const PINATA_SECRET  = process.env.VITE_PINATA_SECRET!;

  return new pinataSDK(PINATA_API_KEY, PINATA_SECRET);
}
