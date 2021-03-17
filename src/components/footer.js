import styled from 'styled-components';
import React from 'react';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
const Wrapper = styled.section`
    padding: 4em;
    background: black;
  `;

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Footer
        </Title>
      </Wrapper>
    )
  }
}

export default Footer;