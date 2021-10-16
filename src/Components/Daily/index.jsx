import React, {useEffect, useState} from 'react'
import {Container, Container2,Cima,Baixo,Esquerda,Direita, Button} from './Elements'
import { useCountdown } from 'react-time-sync';

function Daily({daily}) {
var [dateNow,setDate] = useState(Date.now());
useEffect(() => {
  var timer = setInterval(()=>setDate(Date.now()), 10000 )
  return function cleanup() {
      clearInterval(timer)
  }
});

  if ((daily.daily - dateNow) <= 0) {
    console.log('Passou!')
  }

  const Relogio = ()=>{
    let TIME = (daily.daily - dateNow)
    const timeleft = useCountdown({TIME})
    return timeleft
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
              {(daily.daily - dateNow) <= 0 ? (<Button>Daily</Button>
              ) : (<>
                    <Relogio/>

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
