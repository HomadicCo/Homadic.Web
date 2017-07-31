import React from 'react';
import { Link } from 'react-router';
import Avatar from '../../../Components/Avatar/Avatar';

class AddHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { authentication, profile } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 px-4 py-3">
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                    <div className="col-4 offset-4 px-4 py-3 d-flex justify-content-end">
                        <div className="col-4 offset-4 px-4 py-3 d-flex justify-content-end">
                            <div className="ml-3">
                                <Avatar size={30} profile={profile.data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddHeader;