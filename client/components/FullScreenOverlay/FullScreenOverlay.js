import React from 'react';
import { browserHistory, Link } from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fullscreen-overlay">
                <p><Link to={this.props.returnTo}>Back</Link></p>
                {this.props.children}
            </div>
        )
    }
}

export default Home;