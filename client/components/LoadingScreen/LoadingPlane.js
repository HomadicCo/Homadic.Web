import React from 'react';

class LoadingPlane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3 className="text-center"><i className="blue fas fa-plane fa-spin" size="2x" /></h3>
        )
    }
}

export default LoadingPlane;
