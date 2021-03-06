import React from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'


class Logout extends React.Component {
    componentDidMount() {
        //sessionStorage.clear();
        setInterval( () =>
            redirect({
                pathname: '/'
            }), 2000
        );
    }

    render() {
        return (
            <p>You have been logged out, you will be redirected shortly to login...</p>
        );
    }
}

Logout.contextTypes = {
    router: React.PropTypes.func
};

export default Logout;