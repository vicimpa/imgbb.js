const { ImgbbAPI } = require('./imgbb')
const api = new ImgbbAPI('0fe0314b5acdf6c63b5ab73055e82169')

api.upload('https://sun1-27.userapi.com/c824201/v824201969/17341f/IfCwbiGRL7c.jpg')
  .then(console.log)
  .catch(console.error)