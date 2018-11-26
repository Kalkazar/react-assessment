import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    font-size: 12pt;
    //height: 50px;
    //bottom: 0%; // does this do anything?
    margin-top: 20px;
    margin-bottom: 10px;

    span {
        margin-left: 10px;
        margin-right: 10px;
    }

    a {
        text-decoration: none;
        color: silver;
    }
    
    a:hover {
        text-decoration: underline;
        text-shadow: 0px 0px 5px white;
    }
`
const Sticky = styled.div`
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
`
const Phantom = styled.div`
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
`
const epicCoders = "https://www.flaticon.com/authors/epiccoders"
const flatIcon = "https://www.flaticon.com/"
const creativeCommons = "http://creativecommons.org/licenses/by/3.0/"

class Footer extends Component {
    render() {
        return (
            <Container>
                <Phantom></Phantom>
                <Sticky>
                    <span>
                        favicon made by <a href={epicCoders} title="EpicCoders">
                            EpicCoders
                        </a>
                    </span>
                    <span>
                        from <a href={flatIcon} title="Flaticon">
                            www.flaticon.com
                        </a>
                    </span>
                    <span>
                        licensed by <a href={creativeCommons} title="Creative Commons BY 3.0">
                            CC 3.0 BY
                        </a>
                    </span>
                </Sticky>
            </Container>
        )
    }
}

export default Footer