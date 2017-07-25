import React from 'react';
import { browserHistory } from 'react-router';
import Avatar from '../../../components/Avatar/Avatar';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLoggedIn() {
        let { profile } = this.props;
        return (
            <Avatar size={30} profile={profile.data} />
        );
    }

    renderLoggedOut() {
        return (
            <p>Logged out</p>
        );
    }

    render() {
        let { authentication } = this.props;

        return (
            <div className="d-flex justify-content-start">
                <div className="ml-auto p-3">
                    <div className="search-bar ml-auto">
                        <form className="form-inline">
                            <input className="form-control mr-sm-3" type="text" placeholder="Search" />
                        </form>
                    </div>
                    <div className="ml-auto p-3">
                        {authentication.isLoggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;