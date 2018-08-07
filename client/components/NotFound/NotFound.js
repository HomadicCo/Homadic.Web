import React from 'react';
import { Link } from 'react-router';
import Cities from '../Cities/Cities';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-center">
                <h5 className="d-none d-md-block my-3"><Link className="logo logo-sm" to="/">{'{ Homadic }'}</Link></h5>
                <p className="lead">Oops, not found! Try some of these cities.</p>
                <div className="container">
                    <Cities />
                </div>
            </div>
        )
    }
}

export default NotFound;