import axios from "axios";

export const BackEnd_URL = 'http://pedrorbc.ddns.net:8011';
export const FrontEnd_URL = 'http://192.168.15.27:8000' 

export function getAuth() {
    return axios.get(`${BackEnd_URL}/api/auth/`, { withCredentials: true })
}

export function getGuilds() {
    return axios.get(`${BackEnd_URL}/api/discord/guilds`, {withCredentials: true })
}
