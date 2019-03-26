import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

import NavigationItem from './NavigationItem/NavigationItem'

const Header = styled.header`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 200;
  background: transparent;
  justify-content: space-around;
  align-items: center;
`

const Item = styled.nav`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0 1rem;
    align-items: center;
  }
`



const Logo = styled.div`
  a {
    text-decoration: none;

  }
`


const navigationBar = props => {
  const menu = {
    left: [
      {
        name: "Products",
        url: "/products",
        icon: {
          status: false,
        }
      },
      {
        name: "Search",
        url: "/search",
        icon: {
          status: false,
        }
      },
      {
        name: "About",
        url: "/about",
        icon: {
          status: false,
        }
      },
    ],
    right: [
      {
        name: "EN",
        url: "/language",
        icon: {
          status: false,
        }
      },
      {
        name: "Account",
        url: "/auth",
        icon: {
          status: false,
        }
      },
      {
        name: "Cart",
        url: "/cart",
        icon: {
          status: true,
          name: 'shopping-basket'
        }
      },
    ]
  }
  return (
  <Header>
    <Item>
      <ul>
        {_.map(menu.left, (item, index) => (
          <NavigationItem key={index} link={item.url} exact >
            {item.name}
          </NavigationItem>
        ))}
      </ul>
    </Item>
    <Logo>
      <NavLink to="/" ><h1>CornShop</h1></NavLink>
    </Logo>
    <Item>
      <ul>
        {_.map(menu.right, (item, index) => (
          <NavigationItem key={index} link={item.url} exact >
            {item.icon.status ? (
              <FontAwesomeIcon icon={item.icon.name} />
            ): (
              item.name
            )}
          </NavigationItem>
        ))}
      </ul>
    </Item>
  </Header>

)}

export default  navigationBar