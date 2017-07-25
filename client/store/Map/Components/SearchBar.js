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
            <a href="https://www.facebook.com/v2.10/dialog/oauth?client_id=812498655591761&scope=email&redirect_uri=http://localhost:9990/signin-facebook">Login</a>
        );
    }

    render() {
        let { authentication } = this.props;

        return (
            <div className="search-container d-flex justify-content-start">
                <div className="ml-auto p-3">
                    <div className="search">
                        <form className="form-inline">
                            <input className="form-control mr-sm-3" type="text" placeholder="Search" />
                        </form>
                    </div>
                </div>
                <div className="ml-auto p-3">
                    {authentication.isLoggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
                </div>
            </div>
        )
    }
}

export default SearchBar;