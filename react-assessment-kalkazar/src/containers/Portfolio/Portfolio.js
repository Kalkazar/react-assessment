import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    h1 {
        text-align: center;
    }

    h4 {
        margin-bottom: 0;
        text-decoration: underline;
    }

    ul {
        margin-top: 0;
        margin-bottom: 0;
    }

    p {
        margin-top: 0;
    }
`

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

class Portfolio extends Component {
    componentDidMount() {
        document.title = "Portfolio"
    }
    render() {
        return (
            <Container>
                <heading>
                    <h1>My Portfolio</h1>
                </heading>
                <Title>
                    <h3>COOK SYSTEMS – Nashville, TN</h3>
                    <h3 style={{fontSize: 1 + 'em', fontStyle: 'italic'}}>10/18 – Present</h3>
                </Title>
                <div className='Projects'>
                    <h4>“Smart-Share” Java Application</h4>
                    <ul>
                        <li>Created a command-line interface from which multiple clients could concurrently access files stored in a SQL database.</li>
                        <li>Coded sockets and server sockets that could send output streams and retrieve buffered input.</li>
                        <li>Facilitated file transfer between servers and clients by converting files into an easy-to-interpret XML format</li>
                    </ul>
                    <p><i>Environments:</i> Java, Eclipse, SQL, JAXB framework</p>
                    <h4>Social Media Backend Assignment</h4>
                    <ul>
                        <li>Implemented a RESTful API that mimicked the backend model for a social media platform akin to Twitter</li>
                        <li>Used Spring Boot and Hibernate to map user information to and from repositories in formats that could be more easily edited or saved by the server.</li>
                        <li>Built a framework that allowed users to create accounts from which posts could be written.</li>
                    </ul>
                    <p><i>Environments:</i> Java, Eclipse, Spring Boot, JPA, PostgreSQL, Hibernate</p>
                    <h4>“Dev-Duel” Webpage Development</h4>
                    <ul>
                        <li>Developed the back-end for a website that retrieved user information from one or more specified GitHub accounts</li>
                        <li>Identified relevant user information and displayed it on the webpage using jQuery.</li>
                        <li>Wrote a JavaScript functionality that could compare fetched data from two users, and declare one the “winner” based on certain criteria</li>
                        <li>Redesigned the website’s appearance by directly editing the cascading style sheets and HTML</li>
                    </ul>
                    <p><i>Environments:</i> HTML, CSS JavaScript, NodeJS, jQuery, Axios, Visual Stuido Code</p>
                    <h4>Personal Website Design Project</h4>
                    <ul>
                        <li>Designed the layout of this portfolio website</li>
                        <li>Produced multiple webpages from a single html file using React and JavaScript</li>
                        <li>Embedded links, images, and downloadable pdfs directly into the HTML</li>
                        <li>Added special functionalities using CSS, such as hover-states for links</li>
                    </ul>
                    <p><i>Environments:</i> React, JavaScript, HTML, CSS, Visual Stuido Code</p>
                </div>
            </Container>
        )
    }
}

export default Portfolio