import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`text-align: center;`

export const Header = styled.header`
    background-color: #222;
    height: 10rem;
    padding: 1.25rem;
    color: white;
`

export const Title = styled.h1`font-size: 1.5rem;`

export class App extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>Welcome to React</Title>
                </Header>
                <p>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </Container>
        )
    }
}
