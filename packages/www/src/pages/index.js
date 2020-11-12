import React, {useEffect} from 'react';
import { Button, Container, Heading, Flex } from 'theme-ui';
import netlifyIdentity from 'netlify-identity-widget'

export default props => {

    useEffect(() => {
        netlifyIdentity.init({})
    });

    return (<Container>
        <Flex sx = {{ flexDirection : "column", padding : 3 }}>
            <Heading as='h1'> Hello World .....</Heading>
            <Button sx = {{ marginTop : 10, color: 'black'}} 
                onClick = { ()=> {netlifyIdentity.open()}}> Login </Button>
        </Flex>
    </Container>);
}