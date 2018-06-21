import React from 'react';

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loading-screen">
                <h3><i className="blue fas fa-plane fa-spin" size="2x" /></h3>
            </div>
        )
    }
}

export default LoadingScreen;
