//import React from "react"
import styled from "styled-components"

 
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Sidebar = styled.div`
    padding: 4em;
    background: white;
    width: 20%
`;
 
// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export {
    Title,
    Wrapper,
    Sidebar
}