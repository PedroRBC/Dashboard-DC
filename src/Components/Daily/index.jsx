import React, {useEffect, useState} from 'react';
import ms from 'ms-util'
import axios from "axios";
import { BackEnd_URL } from '../../api'
import {Container, Container2,Cima,Baixo,Esquerda,Direita, Button,Clock} from './Elements'
import { toast } from 'react-toastify';

function Daily({daily, states}) {
var [dateNow,setDate] = useState(Date.now());
var [Sec,setSec] = useState(['0', '0']);
var [Min,setMin] = useState(['0', '0']);
var [Hour,setHour] = useState(['0', '0']);
useEffect(() => {
  var timer = setInterval(()=> {
    let timeleft = ms.parse((daily.daily - Date.now()))
    let Aseconds = timeleft.seconds.toString()
    let seconds = Aseconds.split('')
    if (seconds.length === 1) seconds.unshift('0')
    let Aminute = timeleft.minutes.toString()
    let minute = Aminute.split('')
    if (minute.length === 1) minute.unshift('0')
    let Ahours = timeleft.hours.toString()
    let hours = Ahours.split('')
    if (hours.length === 1) hours.unshift('0')
    if(Sec[0] !== seconds[0]) setSec(seconds)
    if(Sec[1] !== seconds[1]) setSec(seconds)
    if(Min[1] !== minute[0]) setMin(minute)
    if(Min[1] !== minute[1]) setMin(minute)
    if(Hour[1] !== hours[0]) setHour(hours);
    if(Hour[1] !== hours[1]) setHour(hours);

    setDate(Date.now())
    
  }, 1000 )
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
      toast.success('Obrigado por coletar!')
      setDate(Date.now())
      axios
      .get(`${BackEnd_URL}/api/moedas`, { withCredentials: true })
      .then((res2) => {
        if (res2.data.msg === "authorized") {
          states.setDaily(res2.data.money)
        }
      }).catch((e)=>{return});
    } else return
  })

  }
  const Relogio = ()=>{
    return (<>{Hour[0]}{Hour[1]}:{Min[0]}{Min[1]}:{Sec[0]}{Sec[1]}</>)
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
              ) : (<Clock><Relogio /></Clock>)}
            </Esquerda>
            <Direita>
            {daily.moedas} 🪙
            </Direita>
          </Baixo>

        </Container2>
      </Container>
  )
}

export default Daily
