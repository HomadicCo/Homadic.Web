import React from 'react';
import { Link } from 'react-router';
import Avatar from '../../../Components/Avatar/Avatar';

class AddHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { profile } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 px-4 py-3">
                        <h5><Link className="logo logo-sm" to="/">{'{ Homadic }'}</Link></h5>
                    </div>
                    <div className="col-4 ml-auto px-4 py-3 d-flex justify-content-end">
                        <div className="ml-3">
                            <Avatar size={40} profile={profile.data} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddHeader;