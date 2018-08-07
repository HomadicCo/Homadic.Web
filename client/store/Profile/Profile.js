import React from 'react';
import { Link } from 'react-router';
import Avatar from '../../Components/Avatar/Avatar';
import ListingSnippet from '../../components/ListingSnippet/ListingSnippet';
import LoadingPlane from '../../components/LoadingScreen/LoadingPlane';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { handleGetUserListings } = this.props;

        handleGetUserListings();
    }

    renderContributions() {
        let { profile } = this.props;

        return (
            profile.userListings.length > 0 ?
                <div className="row">
                    {profile.userListings.map((listing, i) => (<div key={i} className="col-sm-6 col-lg-4 listing-snippets"><Link to={'/listing/' + listing.slug + '/history'}><ListingSnippet listing={listing} /></Link></div>))}
                </div> : <p>You have not made any contributions.</p>
        )
    }

    render() {
        let { profile } = this.props;

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
                <div className="row my-4">
                    <div className="col-12">
                        <div className="float-left">
                            <h2 className="fancy">{profile.data.name}</h2>
                            <p>{profile.data.email}</p>
                        </div>
                        <div>
                            <Avatar className="float-right" size={80} name={profile.data.name} id={profile.data.id} />
                        </div>
                    </div>
                </div >
                <h3 className="fancy blue">Contributions</h3>
                {profile.updatingUserListings ? <LoadingPlane /> : this.renderContributions()}
            </div >
        )
    }
}

export default Profile;