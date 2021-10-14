import React from 'react'
import {BackEnd_URL} from '../../api';
import { Alinhar, AlinharBoard, Content, Button } from './Elements'
import Board from '../../Components/Board'

  const Dashbord = ({acces, setAcces, avatar, userName, users, setUsers}) => {

    function BtnLogar() {
      const URL = () => window.location.href = `${BackEnd_URL}/api/auth/discord/`
      return (
        <Alinhar>
        <Content>
        <Button onClick={URL}>
        Logar.
       </Button>
       </Content>
      </Alinhar>
      )
    }

    return (<>

      {acces === 'unauthorized' ? ( <BtnLogar></BtnLogar> ) : (<>
        <AlinharBoard>
          <h1>Top 10</h1>
          <h1>Mais ricos</h1>
          <Board users={users} setUsers={setUsers} /> 
        </AlinharBoard>
      
       </>)}
      
    </>)
    
}
export default Dashbord;
