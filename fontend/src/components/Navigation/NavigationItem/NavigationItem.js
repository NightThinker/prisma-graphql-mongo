import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const List = styled.li`
    a {
    font-size: 1rem;
    display: flex;
    align-items: flex-end;
    padding: 15px 20px;
    color: #f2f2f4;
    text-decoration: none;
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
  <List>
    <NavLink to={props.link} exact={props.exact}>{props.children}</NavLink>
  </List>
)

export default navigationItem