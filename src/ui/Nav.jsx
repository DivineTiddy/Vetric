import styled from "styled-components"
import Text from "./Text"

const Container = styled.div`
width: auto;
height: 39px;
display: flex;
align-items: center;
justify-content: space-around;
`

const Nav = () => {
  return (
   <Container>
    <Text type="Para8">Home</Text>
    <Text type="Para8">Pricing</Text>
    <Text type="Para8">Features</Text>
    <Text type="Para8">Contact</Text>
   </Container>
  )
}

export default Nav