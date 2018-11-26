import React from 'react'
import styled from 'styled-components'

import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'

const Container = styled.div`
    text-align: center;
    background-color: #1d2026;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(5px + 2vmin);
    color: white;
    margin-left: 160px;

    h1 {
        text-align: center;
    }

    div {
        text-align: left;
    }
`

const Body = styled.div`
    margin-left: 100px;
    margin-right: 100px;
`

const Layout = props => {
    return (
        <Container>
            <Menu />
            <Body>
                {props.children}
            </Body>
            <Footer />
        </Container>
    )
}

export default Layout