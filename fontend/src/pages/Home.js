import React, { Component } from 'react'
import styled from 'styled-components'

const Image = styled.div`
  height: 100vh;
  width: 100%;
  background-image:  url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  padding:2rem;
`

class Home extends Component {

  render() {
    return (
      <Image imgUrl={process.env.PUBLIC_URL + "/adult-attractive-beautiful-922530.jpg"}>
        <h1>test test test test testtest test </h1>
      </Image>
    )
  }
}

export default Home