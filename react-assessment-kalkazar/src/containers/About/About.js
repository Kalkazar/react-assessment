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
                    Back when I was a kid, before I has any real understanding of the world,
                    my first idea of “what I wanted to be when I grow up” was an inventor. I
                    didn’t really know what that entailed, but I’ve always been interested in
                    finding solutions to problems. Trying to solve Zen Koans was always a
                    pursuit of mine, I still think my solution to the “chicken and egg” problem
                    that I came up with in third grade was pretty good.
                </p>
                <p>
                    When I got to college, I originally intended to major in computer science,
                    but I ultimately earned my Bachelor’s in Applied Math, because I assumed the
                    degree would be a more widely applicable. However, after leaving the
                    University of Connecticut, I still didn’t know what I wanted to do with my life.
                    So I went back to my roots. I found the FastTrack program through Cook Systems,
                    and through them, have managed to become a versatile associate Java developer.
                </p>
                <p>
                    Outside of work, I’ve indulged in a number of artistic pursuits. As a child, I
                    did a lot of cartooning: managed to win a few art contests and even submitted
                    something to the New Yorker. The New Yorker gig didn’t work out, obviously, but
                    I still got what I thought was an unusually encouraging rejection letter from
                    the guys. In college, I did a lot of performing arts stuff: playing leading roles
                    in Shakespeare and Sondheim productions, and traveling around the country to sing
                    with a variety of different types of choirs.
                </p>
            </div>
        )
    }
}

export default About