import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding: 5% 10%;
  background: #19202a;
  flex-direction: column;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(85, 26, 139);
  margin-top: -11.8%;
`

const FooterContant = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #f2f2f4;
`

const FooterContantItem = styled.ul`
  list-style: none;
  padding: 0;
`

const FooterContantItemList = styled.li`

`

const footer = props => {
  return (
    <Container>
      <Logo><h1>Corn Shop</h1></Logo>
      <FooterContant>
        <FooterContantItem>
          <FooterContantItemList>test</FooterContantItemList>
          <FooterContantItemList>test</FooterContantItemList>
        </FooterContantItem>
        <FooterContantItem>
        <FooterContantItemList>test</FooterContantItemList>
          <FooterContantItemList>test</FooterContantItemList>
        </FooterContantItem>
        <FooterContantItem>
          <FooterContantItemList>test</FooterContantItemList>
          <FooterContantItemList>test</FooterContantItemList>
        </FooterContantItem>
      </FooterContant>
    </Container>
  )
}

export default footer