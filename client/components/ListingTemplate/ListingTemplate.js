import React from 'react';
import FontAwesome from 'react-fontawesome';
import Avatar from '../../Components/Avatar/Avatar';
import RatingBadge from '../../components/RatingBadge/RatingBadge';
import IconsBar from '../../components/IconsBar/IconsBar';
import Amenities from './components/Amenities';
import Internet from './components/Internet';
import Contact from './components/Contact';
import Rooms from './components/Rooms';
import LocationMap from './components/LocationMap';

class ListingTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    getBaseRate() {
        var rooms = this.props.listing.rooms.sort(function (a, b) {
            return a.base_rate > b.base_rate;
        });

        return rooms[0].base_rate;
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

                <div className="container text-center listing">
                    <div className="row justify-content-md-center">
                        <div className="col-md-8 mb-2">
                            <h1 className="fancy"><strong>{listing.name}</strong> <RatingBadge rating={listing.rating} /></h1>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="lead"><small>Rooms from</small> {this.getBaseRate()} {listing.currency}</p>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-8 col-s-12">
                            <Amenities listing={listing} />
                        </div>
                    </div>
                </div>

                <div className="container listing-content">
                    <Rooms listing={listing} />
                    <Internet listing={listing} />
                    <p>{listing.notes}</p>
                    <LocationMap listing={listing} />
                </div>
            </div>
        )
    }
}

export default ListingTemplate;