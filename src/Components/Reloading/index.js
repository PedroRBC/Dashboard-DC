import axios from "axios";
import { BackEnd_URL } from '../../api'

function Reloading(setUsers, setAcces, setUsername, setAvatar, setLoading, setDaily) {
  
  axios
  .get(`${BackEnd_URL}/api/auth/`, { withCredentials: true })
  .then((res) => {
    setAcces(res.data.msg);
    if (res.data.msg === "authorized") {
      setUsername(res.data.user.discordTag);
      res.data.user.avatar === 'null' ? (setAvatar('http://pedrorbc.ddns.net:8090/assets/default/default_user.jpg')) : (
        setAvatar(
          `https://cdn.discordapp.com/avatars/${res.data.user.discordId}/${res.data.user.avatar}.png?size=512`
        )
      )
    }
      setLoading(false);
  }).catch((e)=>{return});

  axios
  .get(`${BackEnd_URL}/api/moedas`, { withCredentials: true })
  .then((res) => {
    if (res.data.msg === "authorized") {
      setDaily(res.data.money)
    }
  }).catch((e)=>{return});

  setInterval(()=>{
    axios
    .get(`${BackEnd_URL}/api/moedas/board`)
    .then((res) => {
      if(!res.data[0].name) return
      if(!res.data[4].name) return
      if(!res.data[6].name) return
      setUsers(res.data)
    }).catch((e)=>{return});

    axios
    .get(`${BackEnd_URL}/api/moedas`, { withCredentials: true })
    .then((res) => {
      if (res.data.msg === "authorized") {
        setDaily(res.data.money)
      }
    }).catch((e)=>{return});

  }, 30000)

  setInterval(()=>{
    axios
      .get(`${BackEnd_URL}/api/auth/`, { withCredentials: true })
      .then((res) => {
        setAcces(res.data.msg);
        if (res.data.msg === "authorized") {
          setUsername(res.data.user.discordTag);
          res.data.user.avatar === 'null' ? (setAvatar('http://pedrorbc.ddns.net:8090/assets/default/default_user.jpg')) : (
            setAvatar(
              `https://cdn.discordapp.com/avatars/${res.data.user.discordId}/${res.data.user.avatar}.png?size=512`
            )
          )
        }
        
    setLoading(false);
      }).catch((e)=>{return});
    }, 15000)

  }
  
  export default Reloading
