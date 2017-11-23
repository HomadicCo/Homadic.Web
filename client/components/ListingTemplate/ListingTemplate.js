import React from 'react';
import FontAwesome from 'react-fontawesome';
import Avatar from '../../Components/Avatar/Avatar';
import Header from './components/Header';
import Internet from './components/Internet';
import Description from './components/Description';
import Rooms from './components/Rooms';
import LocationMap from './components/LocationMap';

class ListingTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { authentication, listing, profile } = this.props;

        return (
            <div>
                <div className="navbar fixed-top bg-white px-3 listing-header">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col">
                                <h5 className="blue"><FontAwesome name="thumbs-up" /> <FontAwesome name="thumbs-o-down" /> <span className="btn btn-sm btn-outline-primary mx-1"><FontAwesome name="pencil" /> Edit</span> {authentication.isLoggedIn ? <Avatar size={30} profile={profile.data} /> : undefined}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <Header listing={listing} />

                <div className="container listing-content">
                    <Rooms listing={listing} />
                    <Description description={listing.description} />
                    <Internet listing={listing} />
                    <LocationMap listing={listing} />
                </div>
            </div>
        )
    }
}

export default ListingTemplate;