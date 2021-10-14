import styled from 'styled-components';

export const Button = styled.button`
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
  text-align: center;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    a {
      color: #010606;
    }
  }
  & a {
    text-decoration: none;
    color: #fff;
}
`;

export const Container = styled.div`
  height: 100%;
  z-index: 50px;
  display: flexbox;
  justify-content: center;
  align-items: flex-end ;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 300px;
  background: rgba(255,255,255,.55);
  border-radius: 4px;
  padding: 20px;
  text-align: center;
`;

export const Alinhar = styled.div`
  height: 92vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AlinharBoard = styled.div`
  float:right;  
  padding-right: 50px;
  padding-top: 20px;
  text-align: center;
  justify-content: center;
  vertical-align: middle;


  @media (max-width: 800px) {
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 100px;
    float: none;
  }

  & h1 {
    
    border-top: 10px;
    font-size: 40px;
  }
`;
