import styled from 'styled-components';

export const ScoreBoard = styled.div`
  background: #fff;
  width: 400px;
  margin-top: 20px;
  box-shadow: 0 4px 0px #333;
  border-radius: 15px; 
  padding-right: 5px;
  padding-left: 5px;
  

  @media (max-width: 800px) {
   
    width: auto;
    
  }
`


export const UserLine = styled.div`
  display: flex;
  font-size: 14px;
  border-bottom: solid 2px #444;
  letter-spacing: 1px;
  
`
export const Name = styled.div`
    flex-grow: 1;
    padding: 20px 10px 12px 20px;
    
    text-align: center;
    margin-bottom: 5px;
`
export const Score = styled.div`
    width: 120px;
    text-align: right;
    margin: auto;
    margin-right: 16px;
    font-size: 16px;
`
export const AvatarSpace = styled.div`
display: inline-block;
margin: auto;
margin-left: 7px;

`
