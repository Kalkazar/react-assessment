import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  div {
    line-height: 200%;
  }

  a {
    margin-left: 20px;
    text-align: left;
    color: silver;
    vertical-align: middle;
  }

  a:hover {
    color: white;
    margin-left: 20px;
    text-shadow: 0px 0px 5px white;
    vertical-align: middle;
  }

  i {
    font-size: calc(10px + 2vmin);
    vertical-align: middle;
  }
`

class Contact extends Component {
    componentDidMount() {
      document.title = "Contact Info"
    }
    render() {
      return (
        <Container> 
          <heading>
            <h1>Contact Information</h1>
          </heading>
          <div>
            <i class="fas fa-envelope"></i>
            <a href="mailto:joecurrystodder@gmail.com">
              joecurrystodder@gmail.com
            </a>
          </div>
          <div>
            <i class="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/joseph-curry-stodder/">
              https://www.linkedin.com/in/joseph-curry-stodder/
            </a>
          </div>
          <div>
            <i class="fab fa-github"></i>
            <a href="https://github.com/Kalkazar">
              https://github.com/Kalkazar
            </a>
          </div>
        </Container>
      )
    }
  }

export default Contact