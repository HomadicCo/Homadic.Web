import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="https://www.facebook.com/v2.10/dialog/oauth?client_id=812498655591761&redirect_uri=http://localhost:7770/signin-facebook">Login</a>
            </div>
        )
    }
}

export default Note;
