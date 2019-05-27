import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
    isAuthenticated: boolean;
    signIn: () => void;
    signOut: () => void;
}

const Body = (props: Props) => {
    const { isAuthenticated, signIn, signOut } = props;

    return (
        <React.Fragment>
            <h1>Authentication status: { isAuthenticated.toString() }</h1>
            <Button onClick={ signIn }>Sign In</Button>
            <Button onClick={ signOut }>Sign Out</Button>
        </React.Fragment>
    )
}

export default Body;
