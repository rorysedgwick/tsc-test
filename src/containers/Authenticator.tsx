import React from 'react';

type Props = {
    signIn: () => void;
    signOut: () => void;
}

type State = {
    isAuthenticated: boolean;
}

const Authenticator = (WrappedComponent: any) => {
    return class ComponentWithAuth extends React.Component<{}, State> {
        constructor(props: any) {
            super(props);
            this.state = {
                isAuthenticated: false
            }
        }
        
        signOut = () => {
            this.setState({
                isAuthenticated: false
            });
        }
        
        signIn = () => {
            this.setState({
                isAuthenticated: true
            });
        }
        
        render() {
            const { isAuthenticated } : State = this.state;
            const { signIn, signOut } : Props = this;
            
            return (
                <WrappedComponent
                    isAuthenticated={isAuthenticated}
                    signIn={signIn}
                    signOut={signOut}
                />
            )
        }
    }
}

export default Authenticator;
