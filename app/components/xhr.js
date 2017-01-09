import axios from 'axios'

let getChannel = function(name) {
  return axios.get('https://wind-bow.gomix.me/twitch-api/streams/' + name)
}
export default getChannel
