// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const PasswordContainer = styled.div`
  background-color: #475569;
  border-radius: 15px;
  border-width: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
`
export const Heading = styled.h1`
  color: #fff;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 600;
  padding: 10px;
  margin: 10px;
`
export const Description = styled.p`
  color: #f8fafc;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
  padding: 10px;
  margin: 10px;
`
export const PasswordInput = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  width: 40%;
  height: 36px;
  border: none;
  border-radius: 10px;
  border-bottom: 0.5px solid #cbd5e1;
  margin-bottom: 20px;
  outline: none;
  padding: 10px;
  margin: 10px;
`
export const AlertText = styled.p`
  color: #ef4444;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
  padding: 10px;
  margin: 10px;
`
