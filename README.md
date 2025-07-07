# Zub

Vue3/TS Project for adding subtitles and translations to Zora-based content. The premise of this was, if Zora content can help make a more equitable system for creators and collectors, can we make it easy to do the same for supporting content? In this case, can we do the same for hard work put into creating high-quality subtitles and translations?

## Current project state

* The current piece of content being subtitled/translated is hardcoded (in this case `basil.mp4` visible on Zora via [this link](https://zora.co/coin/base:0x417477ed8e1e03e3dfa3d3b3dec4d69905e791d5?referrer=0x3661d2d0d66a776097da3a5b36eb69c835089ba0))
* Zubs (subtitles and translations) can be uploaded using this project via the `npm` commands `uploadZub` and `uploadMetaData`. These scripts require a valid [pinata](https://app.pinata.cloud/ipfs/files#) account configured via the `.env` file. A future goal would be to have this automatically done via the 'Upload and Mint' section
* Once a Zub has been created, you can create your Zora coin via the "Mint" button, bringing your content into the Zora ecosystem!

## Project Setup

Get the relevant variables from your Zora developer account and Pinata account and add them to the `.env`
```sh
cp .env.sample .env
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
