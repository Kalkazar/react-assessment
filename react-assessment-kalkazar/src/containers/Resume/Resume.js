import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;

    a {
        display: flex;
        text-decoration: none;
        color: silver;
        text-align: center;
    }

    a:hover {
        color: white;
        text-shadow: 0px 0px 5px white;
    }
`

class Resume extends Component {
    componentDidMount() {
        document.title = "Resume"
    }
    render() {
        return (
            <Container>
                <heading>
                    <h1>Resume</h1>
                </heading>
                <embed src={require('./resume.pdf')} width="800px" height="1000px" />
            </Container>
        )
    }
}

export default Resume