import React from 'react';
import { Link } from 'react-router';
import Avatar from '../../Components/Avatar/Avatar';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { authentication, profile } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 px-4 py-3">
                        <h5><Link className="logo" to="/">{'{ Homadic }'}</Link></h5>
                    </div>
                    <div className="col-4 ml-auto px-4 py-3 d-flex justify-content-end">
                        <Link to="/logout">Logout</Link>
                    </div>
                </div>
                <div>
                    {authentication.isLoggedIn ?
                        <div className="ml-3">
                            <Avatar size={120} profile={profile.data} />
                        </div> :
                        undefined
                    }
                    <h2 className="fancy">{profile.data.name}</h2>
                    <p>{profile.data.email}</p>
                </div>
            </div>
        )
    }
}

export default Profile;