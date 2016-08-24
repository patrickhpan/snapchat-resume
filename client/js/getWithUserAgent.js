import request from 'request'

const IPHONE_6PLUS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'

var createOptions = function(url, agent) {
  return {
    url: url,
    headers: {
      'User-Agent': agent
    }
  }
}

var getWithUserAgent = function(url, callback, agent = IPHONE_6PLUS) {
  request(createOptions(url, agent), callback)
}

export default getWithUserAgent;