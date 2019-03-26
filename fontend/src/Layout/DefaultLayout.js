import React, { Component } from 'react'
import styled from 'styled-components'

import NavigationBar from '../components/Navigation/NavigationBar'

const Main = styled.main`
  display: flex;
`

class DefaultLayout extends Component {
  render (){
    return (
      <React.Fragment>
        <NavigationBar />
        <Main>
          {this.props.children}
        </Main>
      </React.Fragment>
    )
  }
}

export default DefaultLayout