import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  margin-left:  25px;
  margin-right: 25px;
  @media (max-width: 800px) {
    margin: 0;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 20px;
    float: none;
    width: auto;
    left: auto;
    bottom: auto;
  }
`

export const Container2 = styled.div`
  background: #fff;
  box-shadow: 0 4px 0px #333;
  border-radius: 15px;
  padding: 7px;
  padding-right: 8px;
  padding-left: 8px;
  text-align: center;
  letter-spacing: 1px;

  @media (max-width: 800px) {
    padding-right: 30px;
    padding-left: 30px;
    width: auto;
  }
`
export const Cima = styled.div`
display: flex;
margin-left: 1%;
margin-right: 1%;
border-bottom: solid 2px #444;
text-align: center;
width: 98%;
padding-bottom: 2px;
height: 100%;
`

export const Baixo = styled.div`
display: flex;
margin: 5px 5px auto 5px;
text-align: center;
width: 100%;
padding-top: 2px;


`

export const Esquerda = styled.div`
width: 50%;
float: left;
`

export const Direita = styled.div`

width: 50%;
float: right;
height: 50%;
margin-top: inherit;
margin-bottom: inherit;
`
export const Button = styled.button`
  border-radius: 4px;
  background: #256ce1;
  padding: 7px 15px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #926ed4;
    color: #010606;
  }
`;
