import axios from 'axios'

let getChannel = function(name) {
  return axios.get('http://crossorigin.me/https://wind-bow.gomix.me/twitch-api/streams/' + name,'jsonp')
}
export default getChannel
