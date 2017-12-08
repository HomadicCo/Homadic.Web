import React from 'react';

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loading-screen">
                <h2><i className="blue far fa-plane" size="2x" spin /></h2>
            </div>
        )
    }
}

export default LoadingScreen;
