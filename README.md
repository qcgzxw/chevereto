# chevereto
A lightweight Node.js module to easily upload images through chevereto API

## Usage

```bash
yarn add chevereto
# Or
npm install -save chevereto
```

```javascript
const Chevereto = require('chevereto')

/*
 * With chevereto.example.com is the domain where you install chevereto
 */

const chevereto = new Chevereto({
  host: chevereto.example.com, 
  key: 'KEY' // Get it from https://chevereto.example.com/dashboard/settings/api
});

/**
 * @param {*} imageURL is a URL for an image. (up to 32 MB) (required)
 */
const imageURL = 'https://example.com/image.png';
chevereto.upload(imageURL).then((res) => console.log(res)); 
```
