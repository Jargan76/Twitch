import axios from 'axios'

let getChannel = function(name) {
  return axios.get('https://wind-bow.gomix.me/twitch-api/streams/' + name,'jsonp')
}
export default getChannel
