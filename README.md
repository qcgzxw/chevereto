# chevereto
A lightweight Node.js module to easily upload images through chevereto API

## Usage

```bash
yarn add chevereto
npm install -save chevereto
```

```javascript
const Chevereto = require('chevereto')

const chevereto = new Chevereto({
  host: process.env.HOST,
  key: process.env.KEY,
});

/**
 * @param {*} IMAGE_URL It is a URL for an image. (up to 32 MB) (required)
 */
chevereto.upload(process.env.IMAGE_URL).then(console.log); 
```
