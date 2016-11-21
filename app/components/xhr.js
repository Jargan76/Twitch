import axios from 'axios'

let getChannel = function(name) {
  return axios.get('https://wind-bow.hyperdev.space/twitch-api/streams/' + name)
}
export default getChannel