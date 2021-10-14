import React from 'react'
import {ScoreBoard, UserLine, Name, Score, AvatarSpace} from './Elements'
import { BackEnd_URL } from '../../api'
import axios from "axios";
import Avatar from 'react-avatar';

function getUsers(setUsers, users) {
  if(users[2].id) return
  axios
  .get(`${BackEnd_URL}/api/moedas/board`)
  .then((res) => {
    setUsers(res.data)
  }).catch((e)=>{return});
}

function Player({name, moedas, avatar}) {
  return (
    <UserLine>
      <AvatarSpace>
        <Avatar src={avatar} size="45" round='10px' />
      </AvatarSpace>
      <Name>
        {name}
      </Name>
      <Score>
        {moedas} 🪙
      </Score>
    </UserLine>
  );
}

function Board({users, setUsers}) {

    getUsers(setUsers, users)

  return (
      <ScoreBoard>
        {users.map((user)=>{ return (<Player name={user.name} moedas={user.moedas} avatar={user.avatar} key={user.key}/>)})}
      </ScoreBoard>
  )
}

export default Board
