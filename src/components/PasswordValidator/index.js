// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  Heading,
  Description,
  PasswordInput,
  AlertText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  const isStrong = password.length < 8
  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <PasswordInput
          type="password"
          placeHolder="Enter Your Password"
          value={password}
          onChange={onChangePassword}
        />
        {isStrong && (
          <AlertText>Your password must be at least 8 characters</AlertText>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
