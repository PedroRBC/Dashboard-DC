/* eslint-disable no-unused-vars */
import React from 'react'
import { Alinhar, Content, Button } from './Elements'
const urldc = "https://discord.com/api/oauth2/authorize?client_id=645705321469181982&redirect_uri=http%3A%2F%2Flocalhost%3A8002%2Fauthorize%2Fcallback&response_type=code&scope=identify%20guilds";

export default function login({state, SetState}) {
  function BtnLogar() {

    function Logar() {
      SetState({login: true})
      state.login = true
    }

    return (
      <Button onClick={Logar}>
      Logar.
     </Button>
    )

  }

  return (
      <Alinhar>
        <Content>
          <BtnLogar/>
        </Content>
      </Alinhar>
  )
}
