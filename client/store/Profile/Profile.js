import React from 'react';
import { Link } from 'react-router';
import Avatar from '../../Components/Avatar/Avatar';
import ListingSnippet from '../../components/ListingSnippet/ListingSnippet';
import LoadingPlane from '../../components/LoadingScreen/LoadingPlane';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: {
                listings: true
            }
        }
    }

    UNSAFE_componentWillMount() {
        let { handleGetUserListings, profile } = this.props;

        if (profile.userListings != undefined) {
            this.setState({ loading: { listings: false } });
        }
        else {
            handleGetUserListings().then(() =>
                this.setState({ loading: { listings: false } })
            );
        }
    }

    renderContributions() {
        let { profile } = this.props;

        return (
            <div className="row">
                {profile.userListings.map((listing, i) => (<div key={i} className="col-md-4 listing-snippets"><Link to={'/listing/' + listing.slug}><ListingSnippet listing={listing} /></Link></div>))}
            </div>
        )
    }

    render() {
        let { profile } = this.props;
        let { loading } = this.state;

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
                <div>
                    <h3 className="fancy blue">Contributions</h3>
                    {loading.listings ? <LoadingPlane /> : this.renderContributions()}
                </div>
            </div >
        )
    }
}

export default Profile;