const { default: axios } = require('axios')
const { stringify } = require('querystring')

exports.ImgbbAPI = class ImgbbAPI {
  #url = 'https://api.imgbb.com/1/upload'
  #api = ''

  /** @param {string} apiKey */
  constructor(apiKey) {
    this.#api = apiKey
  }

  async upload(image, name = '', expiration = 0) {
    const query = { key: this.#api }

    if (name) query.name = name
    if (expiration) query.expiration = expiration

    const url = `${this.#url}?${stringify(query)}`
    const result = await axios.post(url, stringify({ image }))

    return result.data.data
  }
}