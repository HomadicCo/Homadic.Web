import React from 'react';

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loading-screen">
                <h2><i className="blue fas fa-plane fa-spin" size="2x" /></h2>
            </div>
        )
    }
}

export default LoadingScreen;
