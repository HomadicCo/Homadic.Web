import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import SearchBar from './Components/SearchBar';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchBar {...this.props} />
                <a href="https://www.facebook.com/v2.10/dialog/oauth?client_id=812498655591761&scope=email&redirect_uri=http://localhost:9990/signin-facebook">Login</a>
            </div>
        )
    }
}

export default Map;
