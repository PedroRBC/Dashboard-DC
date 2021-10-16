import React, {useEffect, useState} from 'react';
import ms from 'ms-util'
import axios from "axios";
import { BackEnd_URL } from '../../api'
import {Container, Container2,Cima,Baixo,Esquerda,Direita, Button} from './Elements'

function Daily({daily}) {
  console.log('? '+daily.daily)
var [dateNow,setDate] = useState(Date.now());
useEffect(() => {
  var timer = setInterval(()=>setDate(Date.now()), 1000 )
  return function cleanup() {
      clearInterval(timer)
  }
});

  const MakeDaily = ()=>{
    axios
  .post(`${BackEnd_URL}/api/moedas/daily`, { withCredentials: true }, { withCredentials: true })
  .then((res) => { 
    if(res.data.msg === 'unauthorized') return
    if(res.data.good === 'good') {
      setDate(Date.now())
    } else return
  })

  }

  const Relogio = ({daily, dateNow})=>{
    let timeleft = ms.parse((daily - dateNow))

    return ( <>
      {timeleft.hours+':'+timeleft.minutes+':'+timeleft.seconds}
    </>)
  }


  return (
      <Container>
        <Container2>
          <Cima>

          {(daily.daily - dateNow) <= 0 ? (<Esquerda>Pegue o seu daily</Esquerda>
              ) : (<>
                  Aguarde para pegar o daily
              </>)}

            <Direita Style="margin-top:12">
              Suas moedas:
            </Direita>

          </Cima>

          <Baixo>
           
            <Esquerda>
              {(daily.daily - dateNow) <= 0 ? (<Button onClick={MakeDaily} >Daily</Button>
              ) : (<>
                    <Relogio daily={daily.daily} dateNow={dateNow}/>

                  </>)}

            </Esquerda>

            <Direita>
            {daily.moedas}
            </Direita>

          </Baixo>

        </Container2>
      </Container>
  )
}

export default Daily
