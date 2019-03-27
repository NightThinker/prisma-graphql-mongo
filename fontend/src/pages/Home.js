import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../components/Button/Button'

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const ContentImage = styled.div`
  height: 100vh;
  width: 50%;
  background-image:  url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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

const CotentProduct = styled.div`
  display: flex;
  margin-left: 10%;
  background-color: #192924;
  width: 90%;
  height: 80vh;
  justify-content: space-between;
`

const ProductText = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  align-items: center;
  justify-content: center;
  background-color: #94949c;
`
const ProductImage = styled.div`
  display: flex;
  width: 50%;
  background: transparent;
  margin-top: -10%;
  height: 100%;
  margin-right: 10%;
  justify-content: flex-end;
  position: relative;
`
const Image = styled.div`
  display: flex;
  width: 80%;
  background-color: #94949c;
  height: 100%;
`

const ButtonIcon = styled.button`
  position: absolute;
  left: ${(props)=>props.left ? '10%' : 'calc(10% + 48px)' };
  /* left: ; */
  top: 50%;
  width: 48px;
  height: 48px;
  border: none;
`

class Home extends Component {

  render() {
    return (
      <Container>
        <Content>
          <ContentImage imgUrl={process.env.PUBLIC_URL + "/beautiful-beauty-blooming-922472.jpg"}>
          </ContentImage>
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
        <Content>
          <CotentProduct>
            <ProductText>

            <h1>test</h1>
            </ProductText>
            <ProductImage>
              <ButtonIcon left><FontAwesomeIcon icon='arrow-left' /></ButtonIcon>
              <ButtonIcon><FontAwesomeIcon icon='arrow-right' /></ButtonIcon>
              <Image>

              </Image>

            </ProductImage>
          </CotentProduct>
          
        </Content>
        
      </Container>
    )
  }
}

export default Home