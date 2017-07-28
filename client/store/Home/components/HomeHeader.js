import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { getLoginUrl } from '../../../functions';
import Avatar from '../../../Components/Avatar/Avatar';

class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLoggedIn() {
        let { profile } = this.props;
        return (
            <div className="col-4 offset-4 px-4 py-3 d-flex justify-content-end">
                <div className="ml-3">
                    <Link className="btn btn-sm btn-success" to="/add"><FontAwesome name="plus" /> Add a place</Link>
                </div>
                <div className="ml-3">
                    <Avatar size={30} profile={profile.data} />
                </div>
            </div>
        );
    }

    renderLoggedOut() {
        const loginUrl = getLoginUrl(window.location.pathname);

        return (
            <div className="col-4 offset-4 px-4 py-3 d-flex justify-content-end">
                <div className="ml-3">
                    <a className="btn btn-sm btn-success" href={loginUrl}><FontAwesome name="plus" /> Add a place</a>
                </div>
            </div>
        );
    }

    render() {
        let { authentication } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 px-4 py-3">
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                    {authentication.isLoggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
                </div>
            </div>
        )
    }
}

export default HomeHeader;