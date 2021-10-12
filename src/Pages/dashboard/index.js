import React from 'react'
import {BackEnd_URL} from '../../api';
import { Alinhar, Content, Button } from './Elements'

  const Dashbord = ({acces, setAcces, avatar, userName}) => {

    const Logar = () => window.location.href = `${BackEnd_URL}/api/auth/discord/`

    function BtnLogar() {
      return (
        <Alinhar>
        <Content>
        <Button onClick={Logar}>
        Logar.
       </Button>
       </Content>
      </Alinhar>
      )
    }

    return (<>

      {acces === 'unauthorized' ? (<BtnLogar/>) : (<Alinhar>{acces}</Alinhar>)}
      
    </>)
    
}
export default Dashbord;
