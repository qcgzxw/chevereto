const rp = require('request-promise');

class Chevereto {
  constructor({ host, key }) {
    if (typeof host !== 'string') {
      throw TypeError('host must be a string');
    }
    if (typeof key !== 'string') {
      throw TypeError('key must be a string');
    }
    this.host = host;
    this.key = key;
  }

  async upload(imageURL) {
    if (typeof imageURL !== 'string') {
      throw TypeError('imageURL must be a string');
    }
    const options = {
      uri: `https://${this.host}/api/1/upload`,
      qs: {
        key: this.key,
        source: imageURL,
      },
      json: true,
    };
    try {
      const res = await rp(options);
      return {
        success: true,
        status: 200,
        image: res.image,
      };
    } catch (e) {
      throw TypeError('Error when upload image');
    }
  }
}

module.exports = Chevereto;
