import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fff;
    overflow-x: hidden;    
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .Menu {
        font-size: calc(10px + 2vmin);
        line-height: 300%;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: #5f6368;
        display: block;
    }

    a:hover {
        color: black;
    }
`

class Menu extends Component {
    render() {
        return (
            <Container>
                <div className='Menu'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/resume'>Resume</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </Container>
        )
    }
}

export default Menu