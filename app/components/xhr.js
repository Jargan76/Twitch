import axios from 'axios'

let getChannel = function(name) {
<<<<<<< HEAD
  return axios.get('https://wind-bow.gomix.me/twitch-api/streams/' + name,'jsonp')
=======
  return axios.get('http://crossorigin.me/https://wind-bow.gomix.me/twitch-api/streams/' + name)
>>>>>>> refs/remotes/origin/master
}
export default getChannel
