import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    h1 {
        margin-block-end: 0;
    }

    .subtitle {
        text-align: center;
        font-style: italic;
        margin-block-end: 2em
    }
`

const Photo = styled.img`
    float: left;
    margin-left: 25px;
    margin-right: 25px;
`
// delete unneccessary margins when done!!!

class Bio extends Component {
    componentDidMount() {
        document.title = "Joe's Website"
    }
    render() {
        return (
            <Container>
                <heading>
                    <h1>Welcome to the website of Joe Curry-Stodder</h1>
                    <div className='subtitle'>Programmer, Developer, all-around swell guy</div>
                </heading> 
                <Photo src={require('./profile.jpg')} alt='Headshot of Joe Curry-Stodder' />
                <p>
                    Joe Curry-Stodder is a skilled associate Java Developer
                    whose strong work ethic, attention to detail, and ability
                    to adapt to new environments and tools has made him a
                    valuable addition to any Java-related project. He is a
                    graduate of the FastTrack’D Java Developer program with
                    a Bachelor’s Degree in Computer Science, and a background
                    in mathematics. Joe has displayed skills in developing,
                    deploying, troubleshooting and maintaining Java applications.
                    He has achieved a productive level of knowledge and skill
                    in numerous Java frameworks such as Spring Framework and
                    Spring MVC, Hibernate, JDBC, and Angular. Joe brings a
                    positive outlook and a knack from problem solving to any
                    team of which he is a member.
                </p>
            </Container>
        )
    }
}

export default Bio