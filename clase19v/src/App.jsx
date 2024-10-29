import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import { AlertButton, PrimaryButton, StyledButton, SuccessButton } from './components/Button/Button_constants'
import Card from './components/Card/Card'
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`

const bounce = keyframes`
  0%, 100%{
    transform: translateY(0)
  }
  50%{
    transform: translateY(-20px)
  }
`

const scaleUp = keyframes`
  from{
    transform: scale(1);
  }
  to{
    transform: scale(1.5);
  }
`

const getAnimation = (state) => {
  switch(state){
    case 'visible':
      return fadeIn;
      case 'hidden':
        return fadeOut;
        case 'bouncing':
      return bounce;
      case 'scaling':
      return scaleUp;
      default:
        return none;
  }
}

const AnimatedBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightblue;
  animation: ${props => getAnimation(props.state)} 1s ease-in-out infinite;
`

// const Input = styled.input.attrs(props => ({
// type: props.type || 'text',
// placeholder: props.placeholder || 'enter text'
// }))`
// padding: 10px;
// border-radius: 5px;
// `


function App() {
  const [state, setState] = useState('visible')

  return (
    <>
    <AnimatedBox state={state}>
        {state === 'hidden' ? 'Hidden': 'Animating'}
      </AnimatedBox>
    <button onClick={() => setState('visible')}>Fade In</button>
    <button onClick={() => setState('hidden')}>Fade Out</button>
    <button onClick={() => setState('bouncing')}>Bounce</button>
    <button onClick={() => setState('scaling')}>Scale</button>
    {/* // <Input/>
    // <Input type='number' placeholder='number type'/>
    // <Input/>
    // <Card/> */}
    {/* <StyledButton >Button</StyledButton>
    <AlertButton disabled >AlertButton</AlertButton>
    <AlertButton >AlertButton</AlertButton>
    <SuccessButton >AlertButton</SuccessButton>
    <PrimaryButton >AlertButton</PrimaryButton> */}
    {/* <StyledButton variant="primary">Button</StyledButton>
    <StyledButton variant="secondary">Button</StyledButton> */}
    {/* <Button/>
    <button className='btn'>button app</button> */}
    </>
  )
}

export default App
