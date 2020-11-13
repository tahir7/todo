import React, {useEffect, useState} from 'react';
import { Button, Container, Heading, Flex } from 'theme-ui';
import netlifyIdentity from 'netlify-identity-widget'
import { NavLink } from 'theme-ui';
import {Link} from 'gatsby'

export default props => {
    const [user, setUser] = useState();

    useEffect(() => {
        netlifyIdentity.init({})
    });

    netlifyIdentity.on('login', user => {
        netlifyIdentity.close();
        setUser(user);
    });
    netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        setUser();
    })

    return (<Container>

                <Flex as='nav'>
                <NavLink as={Link} to='/' p={2}>
                    Home
                </NavLink>
                <NavLink as={Link} to={'/app'} p={2}>
                    Dashboard
                </NavLink>
                <NavLink as={Link} href={'/about'} p={2}>
                    About
                </NavLink>
                    {user && (<NavLink p={2}>
                        {user.user_metadata.full_name}
                </NavLink>)}

                </Flex>



        <Flex sx = {{ flexDirection : "column", padding : 3 }}>
            <Heading as='h1'> Hello World </Heading>
            <Button sx = {{ marginTop : 10, color: 'black'}} 
                onClick = { ()=> {netlifyIdentity.open()}}> Login </Button>
        </Flex>
    </Container>);
}