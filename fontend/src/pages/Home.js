import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../components/Button/Button'

const Content = styled.div`
  display: flex;
  width: 100%;
`

const Image = styled.div`
  height: 100vh;
  width: 50%;
  background-image:  url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`

const ContentText = styled.div`
  display: flex;
  height: 80vh;
  width: 50%;
  padding-top: 10vh;
  align-items: center;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  align-content: center;
  color: #192924;
`

class Home extends Component {

  render() {
    return (
      <Content>
        <Image imgUrl={process.env.PUBLIC_URL + "/beautiful-beauty-blooming-922472.jpg"}>
        </Image>
        <ContentText>
          <Text>
            <h1>เครื่องสำอางสำหรับริมฝีปาก</h1>
            <p>
              ลิปสติก, ลิปสติกเนื้อแมท, ลิปสติกเนื้อกลอส, ลิปจิ้มจุ่ม, ลิปบาล์ม
              สัมผัสริมฝีปากสวยได้อย่างง่ายดายด้วยลิปสติกที่ดีที่สุด
              ที่เหมาะสำหรับทุกรูปลักษณ์ของริมฝีปากเพื่อแต่งเติมสีสันที่สวยงดงามในแบบของคุณ
            </p>
            <Button btnType='primary'>สินค้า</Button>
          </Text>
        </ContentText>

      </Content>
    )
  }
}

export default Home