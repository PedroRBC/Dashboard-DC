import styled from 'styled-components';

export const BtnLogin = styled.button`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin: 5px;
  margin-left: 14px;
  margin-right: 14px;
  text-align: center;
  align-self: center;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media (max-width: 800px) {
 
  width: 40%;

}


`;

export const AvatarSpace = styled.div`
display: inline-block;
margin-right: 10px;

& Avatar:hover {
 lighting-color: #333;
 
}
`
export const DropdownTEXT = styled.div`
display: inline-block ;
text-align: center;
border-radius: 6px;
color: #fff ;
background: rgba(255, 0, 0);
width: 100%;
max-width: 100px;
text-align: center;
text-decoration: none;
cursor: pointer;
outline: 0;
padding: 4px;

@media (max-width: 800px) {
  align-self: center;
  align-content: center;
}

`
export const Container = styled.div`
  display: inline-block;
  margin-right: 8px;
  margin-left:  20px;
  text-align: center;
`

export const DropMenuBtn = styled.div`
background-color: #333;
cursor: pointer;  
margin-left: 20px;

@media (max-width: 800px) {
  margin-left: 0;
  
}
`

export const DropMenu = styled.div`
background-color: #333;
border-radius: 12px;
inset: 5px 25px auto auto !important;

@media (max-width: 800px) {
  display: flex !important;
  float: right;
  align-self: center;
  align-content: center;
  inset: -10% 0 auto 56% !important;
  justify-content: center;
  justify-self: center;
  width: 20%;
}

`
