import React from 'react'
import {BackEnd_URL} from '../../api';
import { Alinhar, AlinharBoard,AlinharRight, Content, Button } from './Elements'
import Board from '../../Components/Board'
import Daily from '../../Components/Daily'

  const Dashbord = ({acces, setAcces, avatar, userName, users, setUsers, daily, setDaily, states}) => {

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
    
    document.title = 'Pedruu Bot | Dashboard'
    return (<>

      {acces === 'unauthorized' ? ( <BtnLogar></BtnLogar> ) : (<>
        <AlinharRight>
        <Daily daily={daily} states={states} />
        <AlinharBoard>
          <h1>Top 10</h1>
          <h1>Mais ricos</h1>
          <Board users={users} setUsers={setUsers}/> 
        </AlinharBoard>
        </AlinharRight>
        
       </>)}
      
    </>)
    
}
export default Dashbord;
