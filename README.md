# Zub

A Vue3/TS Project for adding subtitles and translations to Zora-based content. The premise of this project is, if Zora content can help make a more equitable system for creators and collectors, can we do the same same for supporting content? In this case, can we do the same for the hard work put into creating high-quality subtitles and translations?

## Project Vision

Zora's support of video content could provide a cool opportunity to create a second content creation space for 'supportive' content. Traditionally, quality subtitles and translations have required a mixture of time and effort to get right. Reputation in this space can take a long time to build, and despite the time investment, end up not being properly rewarded. Zub looks to model an idea where this effort is both recognised and rewarded, with quality subtitles and translations being able to be supported and bought as first-class coins. In the future this could support even more mediums, including large text-based content, longer videos (with embedded subtitles) as well as classic subtitle files. The project could potentially benefit from first-party adoption by the Zora team (e.g. allowing subtitles to be automatically added to video files) if the concept was well recieved.  

## Current project state

* The current piece of content being subtitled/translated is hardcoded (in this case `basil.mp4` visible on Zora via [this link](https://zora.co/coin/base:0x417477ed8e1e03e3dfa3d3b3dec4d69905e791d5?referrer=0x3661d2d0d66a776097da3a5b36eb69c835089ba0))
* Zubs (subtitles and translations) can be uploaded using this project via the `npm` commands `uploadZub` and `uploadMetaData`. These scripts require a valid [pinata](https://app.pinata.cloud/ipfs/files#) account configured via the `.env` file. A future goal would be to have this automatically done via the 'Upload and Mint' section
* Once a Zub has been created, you can create your Zora coin via the "Mint" button, bringing your content into the Zora ecosystem! Coins are created on the Zora coins *V4 protocol* (and have been tested on the Base Sepolia network)

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
