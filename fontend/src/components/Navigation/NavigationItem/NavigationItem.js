import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const List = styled.li`
    a {
    font-size: 1.25rem;
    display: flex;
    align-items: flex-end;
    padding: 15px 20px;
    color: ${props => props.config.color || "palevioletred"};
    text-decoration: none;
    text-shadow:  ${props => props.config.shadow ?  '1px 1px 2px' + props.config.shadow : 'none' };
    &:hover {
      color: #000;
    }
  }
  .active {
    color: #000;
    &:hover {
      color: #000;
    }
  }
`

const navigationItem = props => (
  <List config={props.config}>
    <NavLink to={props.link} exact={props.exact}>{props.children}</NavLink>
  </List>
)

export default navigationItem