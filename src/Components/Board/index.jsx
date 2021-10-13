import React, {useState} from 'react'
import {ScoreBoard, UserLine, Name, Score, AvatarSpace} from './Elements'
import { BackEnd_URL } from '../../api'
import axios from "axios";
import Avatar from 'react-avatar';

function getUsers(setUsers, users) {
  if(users.length > 2) return
  axios
  .get(`${BackEnd_URL}/api/moedas/board`)
  .then((res) => {
    setUsers(res.data)
  })
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

function Board() {
  var [users, setUsers] = useState([]);

    getUsers(setUsers, users)

  return (
      <ScoreBoard>
        {users.map((user)=>{ return (<Player name={user.name} moedas={user.moedas} avatar={user.avatar}/>)})}
      </ScoreBoard>
  )
}

export default Board
