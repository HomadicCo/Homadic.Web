import React from 'react';
import FontAwesome from 'react-fontawesome';

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loading-screen">
                <h2><FontAwesome name="plane" size="2x" className="blue" spin /></h2>
            </div>
        )
    }
}

export default LoadingScreen;
