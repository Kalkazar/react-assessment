import React, { Component } from 'react'

class About extends Component {
    componentDidMount() {
        document.title = "About Me"
    }
    render() {
        return (
            <div className='About'>
                <heading>
                    <h1>About Me</h1>
                </heading>
                <p>
                    Back when I was a kid, before I has any real understanding of the world, my
                    first idea of “what I wanted to be when I grow up” was an inventor. I didn’t
                    really know what that entailed, but I’ve always been interested in finding
                    solutions to problems. Trying to solve Zen Koans was a pursuit of mine, and I
                    still think the solution to the “chicken and egg” problem that I came up with
                    in third grade is pretty solid. (The egg came first, because of evolution:
                    the parents of the first true chicken egg had not fully evolved into chickens
                    themselves).
                </p>
                <p>
                    When I got to college, I originally intended to major in computer science, but
                    I ultimately earned my Bachelor’s in Applied Math, because I assumed the degree
                    would be a more widely applicable. However, after leaving the University of
                    Connecticut, I still didn’t know what I wanted to do with my life. So I went
                    back to my roots. I found the FastTrack program through Cook Systems, and
                    through them, have managed to become a versatile associate Java developer.
                </p>
                <p>
                    Outside of work, I’ve played leading roles in Shakespeare and Sondheim
                    productions, toured the Southern U.S. to sing tenor in a gospel choir, and sung
                    bass/baritone in a chamber symphony at Carnegie Hall. I’ve traveled outside the
                    country as well, having visited England, Peru, Ireland, Puerto Rico, China, and
                    most of Western Europe. I believe that the communication skills I’ve acquired
                    as a result of these experiences, along with my various technical skills, will
                    make me a valuable asset to whatever team I wind up working with.
                </p>
            </div>
        )
    }
}

export default About