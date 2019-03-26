import React from 'react'
import styled from 'styled-components'


const Button = styled.button`

  ${props => props.block && `
    width: 100%;
  `} 
  letter-spacing: 0;
  text-align: center;
  line-height: 16px;
  border-radius: 3px;
  font-size: 1em;
  border: 0;
  font-family: inherit;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);
  transition: all .08s linear, min-width .15s cubic-bezier(0.4, 0.0, 0.2, 1);
  i {
    margin: 0 10px 0 0;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    /* box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302), 0 4px 8px 3px rgba(60, 64, 67, 0.149); */
  }
`;

const Primary = styled(Button)`
  background: #192024;
  color: #f2f2f4;
  width: 60%;
  padding: 1rem 2rem;

`

const button = props => {
  let button = null
  switch (props.btnType) {
    case 'primary':
      button = <Primary>{props.children}</Primary>
      break;
  
    default:
      button = <Button>{props.children}</Button>
      break;
  }

  return(
    <React.Fragment>
      {button}
    </React.Fragment>
  )
}

export default button