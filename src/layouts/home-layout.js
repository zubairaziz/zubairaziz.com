import React from "react"
import "../styles/index.scss"
import styled from "styled-components"
import { colors, screens } from "../styles/styles"

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: textShadow 1.6s infinite;
  &::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: flicker 0.15s infinite;
  }
  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }
`

const Content = styled.div`
  flex-grow: 1;
  background-color: ${colors.dark.darker};
`

const HomeContainer = styled.main`
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
`

const HomeLayout = props => (
  <Layout>
    <Content>
      <HomeContainer>{props.children}</HomeContainer>
    </Content>
  </Layout>
)

export default HomeLayout
