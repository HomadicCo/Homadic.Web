import React from 'react';
import { Link } from 'react-router';
import Avatar from '../../../Components/Avatar/Avatar';

class IndexHeader extends React.Component {
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
                    <div className="col-4 ml-auto px-4 py-3 d-flex justify-content-end">
                        <div className="ml-3">
                            <Link className="btn btn-sm mt-1 btn-success" to="/add/listing"><i className="fas fa-plus" /> Add a listing</Link>
                        </div>
                        {authentication.isLoggedIn ?
                            <div className="ml-3">
                                <Avatar size={40} profile={profile.data} />
                            </div> :
                            undefined
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default IndexHeader;